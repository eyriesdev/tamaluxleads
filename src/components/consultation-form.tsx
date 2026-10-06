import { useState, type FormEvent } from 'react';
import { ArrowUpRight, CheckCircle2, Loader2, ShieldCheck } from 'lucide-react';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';

export const propertyGoals = ['Buy land', 'Build a home', 'Invest', 'Sell property', 'Property guidance'] as const;
const leadSchema = z.object({
  full_name: z.string().trim().min(2, 'Please enter your full name.').max(100),
  phone: z.string().trim().regex(/^\+?[\d\s()-]{7,25}$/, 'Please enter a valid phone number, including your country code.'),
  goal: z.enum(propertyGoals),
  budget: z.string().max(100),
  preferred_location: z.string().trim().max(150),
  timeline: z.string().max(100),
  contact_method: z.enum(['Phone', 'WhatsApp']),
  consent: z.literal(true, { errorMap: () => ({ message: 'Please agree to be contacted about your enquiry.' }) }),
});

export function ConsultationForm({ selectedGoal = 'Property guidance', contactMethod = 'Phone' }: { selectedGoal?: string; contactMethod?: 'Phone' | 'WhatsApp' }) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState<{ name: string; goal: string; reference: string }>();
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    if (fields.get('website')) return;
    const parsed = leadSchema.safeParse({ ...Object.fromEntries(fields), consent: fields.get('consent') === 'on' });
    if (!parsed.success) { setError(parsed.error.issues[0]?.message ?? 'Please check your details.'); return; }
    setPending(true); setError('');
    try {
      const id = crypto.randomUUID();
      const { error: insertError } = await supabase.from('consultation_requests').insert({ id, ...parsed.data });
      if (insertError) throw insertError;
      setSubmitted({ name: parsed.data.full_name, goal: parsed.data.goal, reference: id.slice(0, 8).toUpperCase() });
    } catch { setError('Your request could not be sent. Please try again.'); }
    finally { setPending(false); }
  }
  if (submitted) return <div className="lead-form form-success" role="status"><CheckCircle2 /><h3>Thank you, {submitted.name.split(' ')[0]}.</h3><p>Your consultation request has been received.<br />Your interest: <strong>{submitted.goal}</strong><br />Reference: {submitted.reference}</p><Button variant="outline" onClick={() => setSubmitted(undefined)}>Make another enquiry</Button></div>;
  return <form className="lead-form" onSubmit={handleSubmit}>
    <h3>Tell us what you’re looking for.</h3>
    <p className="form-subtitle">Your next property move starts with a conversation.</p>
    <div className="hidden" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <div className="form-grid">
      <label className="form-field">Full name *<input name="full_name" placeholder="Your full name" autoComplete="name" required minLength={2} maxLength={100} /></label>
      <label className="form-field">Phone number *<input name="phone" type="tel" placeholder="e.g. +234 801 234 5678" autoComplete="tel" required maxLength={25} /></label>
      <label className="form-field">My property goal<select name="goal" defaultValue={selectedGoal}>{propertyGoals.map(goal => <option key={goal}>{goal}</option>)}</select></label>
      <label className="form-field">Budget range<select name="budget" defaultValue="Not sure yet">{['Not sure yet', 'Under ₦10 million', '₦10–25 million', '₦25–50 million', '₦50–100 million', '₦100 million and above'].map(b => <option key={b}>{b}</option>)}</select></label>
      <label className="form-field">Preferred location<input name="preferred_location" placeholder="Area in Abuja (optional)" maxLength={150} /></label>
      <label className="form-field">When are you looking to move?<select name="timeline" defaultValue="Exploring my options">{['Exploring my options', 'Within 1 month', 'Within 3 months', 'Within 6 months', 'Later this year'].map(t => <option key={t}>{t}</option>)}</select></label>
      <label className="form-field">Contact me by<select name="contact_method" defaultValue={contactMethod}><option>Phone</option><option>WhatsApp</option></select></label>
    </div>
    <label className="form-consent"><input type="checkbox" name="consent" required /><span>I agree to Tamalux contacting me about this property enquiry. My details will be used to respond to my request.</span></label>
    {error && <p className="form-error" role="alert">{error}</p>}
    <Button className="form-submit" variant="consultation" disabled={pending}>{pending ? <><Loader2 className="animate-spin" /> Sending your request…</> : <>Request my consultation <ArrowUpRight /></>}</Button>
    <div className="reassurance justify-center text-muted-foreground"><ShieldCheck size={13} /> No pressure. No obligation.</div>
  </form>;
}