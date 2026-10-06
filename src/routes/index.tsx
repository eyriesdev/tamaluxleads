import { createFileRoute } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/abuja-residence.jpg';
import logo from '@/assets/tamalux-logo.png.asset.json';
import whatsappGraphic from '@/assets/whatsapp-chat.png.asset.json';
import landImage from '@/assets/goal-land.jpg';
import homeImage from '@/assets/goal-home.jpg';
import investImage from '@/assets/goal-invest.jpg';
import sellImage from '@/assets/goal-sell.jpg';

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

function Cta() {
  return <Button variant="whatsapp" asChild className="whatsapp-graphic-cta"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Chat with a Tamalux Consultant on WhatsApp"><img src={whatsappGraphic.url} alt="WhatsApp — Chat with us now" width={807} height={247} /></a></Button>;
}

const goals = [
  { title: 'I want to buy land', copy: 'Find an opportunity that fits your location preference, budget and long-term objective.', image: landImage, alt: 'Concept illustration of surveyed land' },
  { title: 'I want to build a home', copy: 'Explore residential opportunities suitable for creating a home in Abuja.', image: homeImage, alt: 'Concept illustration of a contemporary family home' },
  { title: 'I want to invest', copy: 'Discuss land banking and property opportunities based on your investment objectives and risk considerations.', image: investImage, alt: 'Concept illustration of property investment planning' },
  { title: 'I want to sell property', copy: 'Get professional guidance on positioning and marketing your property to potential buyers.', image: sellImage, alt: 'Concept illustration of a homeowner meeting a property consultant' },
];

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
      </div>
      <span className="image-caption">Concept image</span>
    </section>

    <section className="section"><div className="sales-copy">
      <h2>The real question isn’t “How cheap is the land?” It’s “What am I actually buying?”</h2>
      <p>Every day, people see attractive property offers and exciting prices. But a beautiful location doesn’t automatically mean a good investment.</p>
      <p>Because the wrong property decision can leave you with more than a bad investment. It can leave you with <strong>years of uncertainty, delays and financial stress.</strong></p>
      <p>That’s why informed buyers don’t simply chase cheap land. <strong>They investigate before they commit.</strong></p>
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
      <Cta />
    </div></section>

    <section className="section"><div className="sales-copy">
      <h2>That’s where Tamalux comes in.</h2>
      <p>Tamalux Homes & Properties helps individuals, families and investors identify, evaluate and pursue suitable property opportunities across Abuja — whether you want to buy land, build a home, invest or sell.</p>
      <p>We walk you through title and documentation, location and market insight, estate development, land banking opportunities and the terms of each transaction, so you decide with clarity, not guesswork.</p>
      <p><strong>Don’t just look at the promise. Ask to see the work.</strong> Discuss the actual estate location, available documentation and development status with a consultant before you make any commitment.</p>
    </div></section>

    <section className="section client-goals" aria-labelledby="client-goals-title"><div className="section-inner">
      <div className="client-goals-heading"><h2 id="client-goals-title">Which property goal are you working toward?</h2></div>
      <div className="client-goals-grid">{goals.map((goal) => <article className="client-goal" key={goal.title}>
        <img src={goal.image} alt={goal.alt} width={1024} height={768} loading="lazy" />
        <div className="client-goal-copy"><h3>{goal.title}</h3><p>{goal.copy}</p></div>
      </article>)}</div>
      <p className="concept-note">Concept imagery — not project listings or client photographs.</p>
      <div className="goals-cta"><Cta /></div>
    </div></section>

    <section className="section evidence-band"><div className="sales-copy">
      <h2>Your property goals. A clearer way forward.</h2>
      <p>You don’t need to know everything about Abuja real estate before speaking to us.</p>
      <p><strong>Tell us what you’re looking for.</strong> Your budget. Your preferred location. Your reason for buying. Your timeline.</p>
      <p>We’ll help you understand the available options and the questions you should be asking before making a decision.</p>
      <Cta />
    </div></section>

    <div className="mobile-contact"><Cta /></div>
  </main>;
}
