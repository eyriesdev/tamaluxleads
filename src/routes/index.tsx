import { createFileRoute } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/property-residence.jpg.asset.json';
import logo from '@/assets/tamalux-logo.png.asset.json';
import landImage from '@/assets/property-land.jpg.asset.json';
import homeImage from '@/assets/property-home.jpg.asset.json';
import investImage from '@/assets/property-invest.jpg.asset.json';
import sellImage from '@/assets/property-sell.jpg.asset.json';

const whatsappUrl = (message: string) => `https://wa.me/2348157035260?text=${encodeURIComponent(message)}`;
const WHATSAPP_URL = whatsappUrl('Hello Tamalux Consultant, I saw your YouTube Ads, I am interested in genuine Abuja Property. My name is ......');

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Genuine Abuja Property | Tamalux Homes & Properties' },
    { name: 'description', content: 'Before you buy property in Abuja, know what you are buying. Chat with a Tamalux consultant on WhatsApp.' },
    { property: 'og:title', content: 'Before You Buy Property in Abuja, Know What You’re Buying' },
    { property: 'og:description', content: 'Land, homes, investment and property sales in Abuja. Discuss your next property move with Tamalux on WhatsApp.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Index,
});

function Cta() {
  return <Button variant="whatsapp" asChild className="whatsapp-contact-cta"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Chat with a Tamalux Consultant on WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.5 0 .2 5.3.2 11.8c0 2.1.6 4.2 1.6 6L0 24l6.4-1.7c1.7.9 3.7 1.4 5.7 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.5-8.4ZM12.1 21.7c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.8 1 1-3.7-.3-.4a9.8 9.8 0 0 1-1.5-5.2C2.1 6.4 6.6 2 12.1 2s9.9 4.4 9.9 9.9-4.4 9.8-9.9 9.8Zm5.4-7.3c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6.3-.5c.1-.2 0-.4 0-.6l-.9-2.1c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.3 3.1c.2.2 2.2 3.4 5.4 4.7.8.3 1.4.5 1.8.6.8.2 1.5.2 2.1.1.6-.1 1.8-.8 2-1.5.3-.7.3-1.3.2-1.5-.1-.1-.3-.2-.6-.4Z" /></svg><span>Contact us on WhatsApp</span></a></Button>;
}

const goals = [
  { title: 'I want to buy land', copy: 'Find an opportunity that fits your location preference, budget and long-term objective.', image: landImage, interest: 'buying genuine land in Abuja' },
  { title: 'I want to build a home', copy: 'Explore residential opportunities suitable for creating a home in Abuja.', image: homeImage, interest: 'building a home in Abuja' },
  { title: 'I want to invest', copy: 'Discuss land banking and property opportunities based on your investment objectives and risk considerations.', image: investImage, interest: 'investing in genuine Abuja property' },
  { title: 'I want to sell property', copy: 'Get professional guidance on positioning and marketing your property to potential buyers.', image: sellImage, interest: 'selling my property in Abuja' },
];

const compliances = [
  { name: 'Right of Occupancy', short: 'R of O', copy: 'The allocation document establishing occupancy rights before a full title is processed.' },
  { name: 'Certificate of Occupancy', short: 'C of O', copy: 'The primary leasehold title, typically for 99 years, issued through the FCDA / AGIS process.' },
  { name: 'Registered Survey Plan', short: 'Survey', copy: 'Official coordinates and the Surveyor-General’s red stamp identify the land you are buying.' },
  { name: 'Deed of Assignment / Sublease', short: 'Transfer', copy: 'The legal document recording the transfer of ownership or leasehold interest to you.' },
  { name: 'Ministerial Consent', short: 'Consent', copy: 'FCT Minister approval where required for a resale, property transfer or land-use change.' },
  { name: 'FCTA Approvals', short: 'Planning', copy: 'Applicable planning and development approvals for the property and its intended use.' },
];

function Index() {
  return <main id="top" className="sales-page">
    <header className="site-header sales-header"><span className="brand"><span className="logo-box"><img src={logo.url} alt="Tamalux Homes & Properties logo" width={58} height={58} /></span><span className="brand-name">TAMALUX<span className="brand-sub">HOMES & PROPERTIES LTD</span></span></span></header>

    <section className="hero" aria-labelledby="hero-title">
        <img className="hero-photo" src={heroImage.url} alt="" width={1920} height={1280} fetchPriority="high" /><div className="hero-shade" />
      <div className="hero-inner">
        <h1 id="hero-title">Before you buy property in Abuja, <em>know what you’re buying.</em></h1>
        <p className="hero-lead">A good-looking estate isn’t enough.</p>
        <p className="hero-copy">Before you commit your <strong>hard-earned money</strong>, understand the documentation, the location, the development potential and the opportunity itself.</p>
        <div className="hero-actions"><Cta /></div>
      </div>
    </section>

    <section className="section opening-copy"><div className="sales-copy">
      <h2>The real question isn’t “How cheap is the land?” It’s <span className="copy-emphasis">“What am I actually buying?”</span></h2>
      <p>Every day, people see attractive property offers and exciting prices. But a beautiful location doesn’t automatically mean a good investment.</p>
      <p>Because the wrong property decision can leave you with more than a bad investment. It can leave you with <strong className="copy-emphasis">years of uncertainty, delays and financial stress.</strong></p>
      <p>That’s why informed buyers don’t simply chase cheap land. <strong className="copy-emphasis">They investigate before they commit.</strong></p>
    </div></section>

    <section className="section services-section"><div className="sales-copy">
      <h2><span className="copy-emphasis">Before you send money,</span> ask what matters.</h2>
      <ol className="sales-list">
        <li>Who owns the property?</li>
        <li>What documentation supports the transaction?</li>
        <li>Where exactly is the property located?</li>
        <li>What development is taking place around the area?</li>
        <li>What am I actually paying for?</li>
        <li>What are the terms of the transaction?</li>
      </ol>
      <p>You don’t need to know everything about Abuja real estate. You do need to <strong className="copy-emphasis">know what you’re paying for.</strong></p>
      <Cta />
    </div></section>

    <section className="section tamalux-approach"><div className="sales-copy">
      <h2>That’s where Tamalux comes in.</h2>
      <p>Tamalux Homes & Properties helps individuals, families and investors identify, evaluate and pursue suitable property opportunities across Abuja — whether you want to buy land, build a home, invest or sell.</p>
      <p>We walk you through title and documentation, location and market insight, estate development, land banking opportunities and the terms of each transaction, so you decide with <strong className="copy-emphasis">clarity, not guesswork.</strong></p>
      <p><strong className="copy-emphasis">Don’t just look at the promise. Ask to see the work.</strong> Discuss the actual estate location, available documentation and development status with a consultant before you make any commitment.</p>
    </div></section>

    <section className="section compliance-section" aria-labelledby="compliance-title"><div className="section-inner">
      <div className="compliance-heading"><h2 id="compliance-title">Your property should come with <span className="copy-emphasis">more than a promise.</span></h2><p>All our properties meet applicable <strong>land title, ownership documentation and FCTA approval requirements.</strong> Here’s what matters for your purchase.</p></div>
      <div className="compliance-grid">{compliances.map((item) => <article className="compliance-item" key={item.name}><span className="compliance-short">{item.short}</span><h3>{item.name}</h3><p>{item.copy}</p></article>)}</div>
      <div className="compliance-close"><p><strong className="copy-emphasis">Know the title. See the documents.</strong><br />Ask your consultant which documents and approvals apply to your chosen property and transaction.</p><Cta /></div>
    </div></section>

    <section className="section client-goals" aria-labelledby="client-goals-title"><div className="section-inner">
      <div className="client-goals-heading"><h2 id="client-goals-title">Which property goal are you working toward?</h2></div>
      <div className="client-goals-grid">{goals.map((goal) => <Button variant="whatsapp" asChild className="client-goal" key={goal.title}><a href={whatsappUrl(`Hello Tamalux Consultant, I saw your YouTube Ads, and I am interested in ${goal.interest}. My name is ......`)} target="_blank" rel="noopener noreferrer" aria-label={`${goal.title} — chat on WhatsApp`}>
        <img src={goal.image.url} alt="" width={1000} height={750} loading="lazy" />
        <div className="client-goal-copy"><h3>{goal.title}</h3><p>{goal.copy}</p><span className="goal-contact">Let’s talk on WhatsApp <span aria-hidden="true">↗</span></span></div>
      </a></Button>)}</div>
      <div className="goals-cta"><Cta /></div>
    </div></section>

    <section className="section evidence-band photo-close"><img className="closing-photo" src={investImage.url} alt="" width={1400} height={933} loading="lazy" /><div className="closing-shade" /><div className="sales-copy">
      <h2>Let’s talk about your next property move.</h2>
      <p>You don’t need to know everything about Abuja real estate before speaking to us.</p>
      <p><strong>Tell us what you’re looking for.</strong> Your budget. Your preferred location. Your reason for buying. Your timeline.</p>
      <p>We’ll help you understand the available options and the questions you should be asking before making a decision.</p>
      <Cta />
    </div></section>

    <div className="mobile-contact"><Cta /></div>
  </main>;
}
