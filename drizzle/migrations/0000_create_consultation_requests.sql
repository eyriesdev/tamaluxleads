CREATE TABLE public.consultation_requests (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 created_at timestamptz NOT NULL DEFAULT now(),
 full_name text NOT NULL CHECK (char_length(full_name) BETWEEN 2 AND 100),
 phone text NOT NULL CHECK (char_length(phone) BETWEEN 7 AND 25),
 goal text NOT NULL CHECK (goal IN ('Buy land', 'Build a home', 'Invest', 'Sell property', 'Property guidance')),
 budget text NOT NULL DEFAULT 'Not sure yet',
 preferred_location text NOT NULL DEFAULT '',
 timeline text NOT NULL DEFAULT 'Exploring my options',
 contact_method text NOT NULL DEFAULT 'Phone' CHECK (contact_method IN ('Phone', 'WhatsApp')),
 consent boolean NOT NULL CHECK (consent = true)
);
GRANT INSERT ON public.consultation_requests TO anon, authenticated;
GRANT ALL ON public.consultation_requests TO service_role;
ALTER TABLE public.consultation_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Visitors can submit consultation requests" ON public.consultation_requests FOR INSERT TO anon, authenticated WITH CHECK (consent = true AND char_length(preferred_location) <= 150);
CREATE INDEX consultation_requests_created_at_idx ON public.consultation_requests (created_at DESC);