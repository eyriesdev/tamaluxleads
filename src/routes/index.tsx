import { createFileRoute } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { IonIcon } from "@/components/ion-icon";
import type { IonIconName } from "@/lib/ionicons";
import heroImage from '@/assets/property-residence.jpg.asset.json';
import logo from '@/assets/tamalux-logo.png.asset.json';
import landImage from '@/assets/property-land.jpg.asset.json';
import homeImage from '@/assets/property-home.jpg.asset.json';
import investImage from '@/assets/property-invest.jpg.asset.json';
import sellImage from '@/assets/property-sell.jpg.asset.json';

const whatsappUrl = (message: string) => `https://wa.me/2348157035260?text=${encodeURIComponent(message)}`;
const WHATSAPP_URL = whatsappUrl('Hello Tamalux Consultant, I saw your YouTube Ads, I am interested in genuine Abuja Property. My name is ......');

export const Route = createFileRoute('/')({
  staticData: { sitemap: true },
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
  return <Button variant="whatsapp" asChild className="whatsapp-contact-cta"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Chat with a Tamalux Consultant on WhatsApp"><IonIcon name="whatsapp" /><span>Contact us on WhatsApp</span></a></Button>;
}

const goals = [
  { title: 'I want to buy land', copy: 'Find an opportunity that fits your location preference, budget and long-term objective.', image: landImage, interest: 'buying genuine land in Abuja' },
  { title: 'I want to build a home', copy: 'Explore residential opportunities suitable for creating a home in Abuja.', image: homeImage, interest: 'building a home in Abuja' },
  { title: 'I want to invest', copy: 'Discuss land banking and property opportunities based on your investment objectives and risk considerations.', image: investImage, interest: 'investing in genuine Abuja property' },
  { title: 'I want to sell property', copy: 'Get professional guidance on positioning and marketing your property to potential buyers.', image: sellImage, interest: 'selling my property in Abuja' },
];

const compliances: { name: string; short: string; icon: IonIconName; copy: string }[] = [
  { name: 'Right of Occupancy', short: 'R of O', icon: "documentLock", copy: 'The allocation document establishing occupancy rights before a full title is processed.' },
  { name: 'Certificate of Occupancy', short: 'C of O', icon: "ribbon", copy: 'The primary leasehold title, typically for 99 years, issued through the FCDA / AGIS process.' },
  { name: 'Registered Survey Plan', short: 'Survey', icon: "map", copy: 'Official coordinates and the Surveyor-General’s red stamp identify the land you are buying.' },
  { name: 'Deed of Assignment / Sublease', short: 'Transfer', icon: "transfer", copy: 'The legal document recording the transfer of ownership or leasehold interest to you.' },
  { name: 'Ministerial Consent', short: 'Consent', icon: "approval", copy: 'FCT Minister approval where required for a resale, property transfer or land-use change.' },
  { name: 'FCTA Approvals', short: 'Planning', icon: "planning", copy: 'Applicable planning and development approvals for the property and its intended use.' },
];

const questions: { question: string; stake: string; icon: IonIconName }[] = [
  { question: 'Who owns the property?', stake: 'A name on a form is not proof of ownership.', icon: "owner" },
  { question: 'What documentation supports the transaction?', stake: 'Documents are the difference between a home and a dispute.', icon: "paperwork" },
  { question: 'Where exactly is the property located?', stake: 'A description is not a location. Know the ground you are buying.', icon: "pin" },
  { question: 'What development is taking place around the area?', stake: 'What rises around a property shapes what it can become.', icon: "development" },
  { question: 'What am I actually paying for?', stake: 'Every naira should be accounted for — the land, the title and what comes with both.', icon: "payment" },
  { question: 'What are the terms of the transaction?', stake: 'Clear terms today prevent costly surprises tomorrow.', icon: "terms" },
];

const nextSteps = [
  { title: 'Start with your goal', copy: 'Tell us whether you want to buy, build, invest or sell. Share your preferred Abuja location, budget and timeline.' },
  { title: 'Discuss the right questions', copy: 'Talk through suitable options, the property’s location, available documentation and transaction terms with a Tamalux consultant.' },
  { title: 'Verify before you decide', copy: 'Ask for the exact site location, an inspection arrangement and the relevant documents. Review the terms before making a commitment.' },
];

const buyerQuestions = [
  { question: 'What properties are available, and what do they cost?', answer: 'Availability and pricing depend on the location and property. Share your goal and budget on WhatsApp, then ask for current options, plot sizes, the full price and any additional charges for the property you are considering.' },
  { question: 'Can I inspect a property before committing?', answer: 'Ask your consultant about inspection arrangements for your chosen property. Confirm the exact site location and current development status before making any payment.' },
  { question: 'Does every property need all six documents?', answer: 'The documents and approvals required depend on the property’s title, intended use and type of transaction. Ask which apply to your chosen property, request the relevant records and seek independent legal advice before signing.' },
  { question: 'Are payment plans available?', answer: 'Ask whether a payment plan is available for the specific property. If one is offered, request the deposit, instalment schedule, total payable, additional charges and cancellation terms in writing before agreeing.' },
  { question: 'What should I send in my first message?', answer: 'Your name, property goal, preferred location, approximate budget and timeline are enough to begin the discussion. Keep sensitive identity and financial documents out of your opening message.' },
];

function Index() {
  return <main id="top" className="sales-page">
    <header className="site-header sales-header"><span className="brand"><span className="logo-box"><img src={logo.url} alt="Tamalux Homes & Properties logo" width={58} height={58} /></span><span className="brand-name">TAMALUX<span className="brand-sub">HOMES & PROPERTIES LTD</span></span></span></header>

    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-frame">
        <img className="hero-photo" src={heroImage.url} alt="" width={1920} height={1280} fetchPriority="high" />
        <div className="hero-shade" />
        <div className="hero-inner">
          <span className="hero-pill"><span className="hero-pulse" aria-hidden="true" />Tamalux Homes & Properties LTD</span>
          <h1 id="hero-title">Before you buy property in Abuja, <em>know what you’re buying.</em></h1>
          <p className="hero-copy">Before you commit your <strong>hard-earned money</strong>, understand the documentation, the location, the development potential and the opportunity itself.</p>
          <div className="hero-actions"><Cta /></div>
          <span className="hero-rule" aria-hidden="true" />
          <p className="hero-footnote">Abuja, Nigeria</p>
        </div>
      </div>
    </section>

    <section className="section opening-copy"><div className="sales-copy">
      <h2>The real question isn’t “How cheap is the land?” It’s <span className="copy-emphasis">“What am I actually buying?”</span></h2>
      <p>Every day, people see attractive property offers and exciting prices. But a beautiful location doesn’t automatically mean a good investment.</p>
      <p>Because the wrong property decision can leave you with more than a bad investment. It can leave you with <strong className="copy-emphasis">years of uncertainty, delays and financial stress.</strong></p>
      <p>That’s why informed buyers don’t simply chase cheap land. <strong className="copy-emphasis">They investigate before they commit.</strong></p>
    </div></section>

    <section id="services" className="section services-section"><div className="sales-copy">
      <h2><span className="copy-emphasis">Before you send money,</span> ask what matters.</h2>
      <ol className="sales-list">{questions.map((item) => <li key={item.question}><span className="question-icon"><IonIcon name={item.icon} /></span><span className="question-copy"><strong className="question-text">{item.question}</strong><em className="question-stake">{item.stake}</em></span></li>)}</ol>
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
      <div className="compliance-grid">{compliances.map((item) => <article className="compliance-item" key={item.name}><div className="compliance-visual"><IonIcon name={item.icon} className="compliance-icon" /><span className="compliance-short">{item.short}</span></div><h3>{item.name}</h3><p>{item.copy}</p></article>)}</div>
      <div className="compliance-close"><p><strong className="copy-emphasis">Know the title. See the documents.</strong><br />Ask your consultant which documents and approvals apply to your chosen property and transaction.</p><Cta /></div>
    </div></section>

    <section className="section client-goals" aria-labelledby="client-goals-title"><div className="section-inner">
      <div className="client-goals-heading"><h2 id="client-goals-title">Which property goal are you working toward?</h2></div>
      <div className="client-goals-grid">{goals.map((goal) => <Button variant="whatsapp" asChild className="client-goal" key={goal.title}><a href={whatsappUrl(`Hello Tamalux Consultant, I saw your YouTube Ads, and I am interested in ${goal.interest}. My name is ......`)} target="_blank" rel="noopener noreferrer" aria-label={`${goal.title} — chat on WhatsApp`}>
        <img src={goal.image.url} alt="" width={1000} height={750} loading="lazy" />
        <div className="client-goal-copy"><h3>{goal.title}</h3><p>{goal.copy}</p><span className="goal-contact">Let’s talk on WhatsApp <IonIcon name="forward" className="goal-arrow" /></span></div>
      </a></Button>)}</div>
      <div className="goals-cta"><Cta /></div>
    </div></section>

    <section className="section next-steps-section" aria-labelledby="next-steps-title"><div className="section-inner">
      <div className="next-steps-heading"><h2 id="next-steps-title">A clear next step. <span className="copy-emphasis">Not a leap of faith.</span></h2><p>Your first conversation starts with what you want to achieve.</p></div>
      <ol className="next-steps-list">{nextSteps.map((step, index) => <li key={step.title}><span className="step-number" aria-hidden="true">0{index + 1}</span><h3>{step.title}</h3><p>{step.copy}</p></li>)}</ol>
    </div></section>

    <section className="section buyer-questions-section" aria-labelledby="buyer-questions-title"><div className="sales-copy">
      <h2 id="buyer-questions-title">Before you take the next step, <span className="copy-emphasis">get clarity.</span></h2>
      <div className="buyer-questions">{buyerQuestions.map((item) => <details key={item.question}><summary>{item.question}<span className="faq-marker" aria-hidden="true" /></summary><p>{item.answer}</p></details>)}</div>
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
