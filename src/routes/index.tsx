import { createFileRoute } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/abuja-residence.jpg';
import logo from '@/assets/tamalux-logo.png.asset.json';

const WHATSAPP_URL = `https://wa.me/2348157035260?text=${encodeURIComponent('Hello Tamalux Consultant, I saw your YouTube Ads, I am interested in genuine Abuja Property. My name is ......')}`;

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Genuine Abuja Property | Tamalux Homes & Properties' },
    { name: 'description', content: 'Before you buy property in Abuja, know what you are buying. Chat with a Tamalux consultant on WhatsApp.' },
    { property: 'og:title', content: 'Before You Buy Property in Abuja, Know What You’re Buying' },
    { property: 'og:description', content: 'Speak with a Tamalux property consultant on WhatsApp. No pressure. No obligation.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Index,
});

function Cta({ label = 'Chat with a Tamalux consultant on WhatsApp' }: { label?: string }) {
  return <Button variant="whatsapp" asChild className="large-cta"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">{label}</a></Button>;
}

function Index() {
  return <main id="top" className="sales-page">
    <header className="site-header sales-header"><span className="brand"><span className="logo-box"><img src={logo.url} alt="Tamalux Homes & Properties logo" width={58} height={58} /></span><span className="brand-name">TAMALUX<span className="brand-sub">HOMES & PROPERTIES LTD</span></span></span></header>

    <section className="hero" aria-labelledby="hero-title">
      <img className="hero-photo" src={heroImage} alt="Illustrative contemporary home in an Abuja-inspired setting" width={1920} height={1088} fetchPriority="high" /><div className="hero-shade" />
      <div className="hero-inner">
        <p className="eyebrow">Abuja, Nigeria</p>
        <h1 id="hero-title">Before you buy property in Abuja, <em>know what you’re buying.</em></h1>
        <p className="hero-lead">A good-looking estate isn’t enough.</p>
        <p className="hero-copy">Before you commit your hard-earned money, understand the documentation, the location, the development potential and the opportunity itself.</p>
        <div className="hero-actions"><Cta /></div>
        <p className="reassurance">No pressure. No obligation. Just a conversation.</p>
      </div>
      <span className="image-caption">Illustrative residence. Not a Tamalux project photograph.</span>
    </section>

    <section className="section"><div className="sales-copy">
      <h2>The real question isn’t “How cheap is the land?” It’s “What am I actually buying?”</h2>
      <p>Every year, people send money for land and homes in Abuja based on a flyer, a beautiful 3D render or a price that looked too good to miss. Many only discover the problems later: documentation that doesn’t hold up, a location that isn’t what they pictured, or development that never arrives.</p>
      <p>An attractive offer doesn’t automatically mean a good investment. The right questions today can save you from uncertainty, delays and financial stress tomorrow.</p>
    </div></section>

    <section className="section services-section"><div className="sales-copy">
      <h2>Before you send money, ask what matters.</h2>
      <ol className="sales-list">
        <li>Who owns the property?</li>
        <li>What documentation supports the transaction?</li>
        <li>Where exactly is the property located?</li>
        <li>What development is taking place around the area?</li>
        <li>What am I actually paying for?</li>
        <li>What are the terms of the transaction?</li>
      </ol>
      <p>You don’t need to know everything about Abuja real estate. You do need to know what you’re paying for.</p>
      <Cta label="Ask these questions on WhatsApp" />
    </div></section>

    <section className="section"><div className="sales-copy">
      <h2>That’s where Tamalux comes in.</h2>
      <p>Tamalux Homes & Properties helps individuals, families and investors identify, evaluate and pursue suitable property opportunities across Abuja — whether you want to buy land, build a home, invest or sell.</p>
      <p>We walk you through title and documentation, location and market insight, estate development, land banking opportunities and the terms of each transaction, so you decide with clarity, not guesswork.</p>
      <p><strong>Don’t just look at the promise. Ask to see the work.</strong> Discuss the actual estate location, available documentation and development status with a consultant before you make any commitment.</p>
    </div></section>

    <section className="section evidence-band"><div className="sales-copy">
      <h2>Your property goals. A clearer way forward.</h2>
      <p>Send us a message on WhatsApp. Tell us your budget, preferred location and timeline, and a Tamalux consultant will help you understand your options and the questions to ask before making a decision.</p>
      <Cta />
      <p className="reassurance">No pressure. No obligation. Just a conversation.</p>
    </div></section>

    <footer className="footer"><div className="section-inner"><div className="footer-bottom"><p>Property values, development potential and investment outcomes can vary. Tamalux Homes & Properties provides guidance to help clients make informed decisions; no investment return is guaranteed.</p><span>© {new Date().getFullYear()} Tamalux Homes & Properties LTD · Abuja, FCT</span></div></div></footer>

    <div className="mobile-contact"><Cta label="Chat on WhatsApp" /></div>
  </main>;
}
