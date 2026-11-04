import Link from "next/link";
import { ArrowUpRight, Check, MonitorSmartphone, Search, PanelsTopLeft, Gauge } from "lucide-react";
import InnerPage from "@/components/inner-page";

const services = [
  { icon: PanelsTopLeft, title: "Business websites", text: "Professional websites that communicate your value and turn visitors into enquiries." },
  { icon: MonitorSmartphone, title: "Responsive web design", text: "Consistent, intuitive experiences across mobile, tablet and desktop." },
  { icon: Search, title: "Landing pages & SEO", text: "Focused landing pages and search-friendly foundations that help customers find you." },
  { icon: Gauge, title: "Website improvement", text: "Thoughtful redesigns, performance improvements and better user journeys." },
];

export default function WebDesignPage() {
  return (
    <InnerPage
      eyebrow="01 / WEB DESIGN"
      title={<>Your website should work as hard as <span className="gradient-text">you do.</span></>}
      description="We design and build modern websites that make strong first impressions, communicate clearly and help businesses grow."
    >
      <section className="inner-section section-shell">
        <div className="inner-section-heading">
          <span className="eyebrow">WHAT WE CREATE</span>
          <h2>Designed with purpose.<br /><span className="gradient-text">Built for results.</span></h2>
        </div>
        <div className="offering-grid">
          {services.map(({ icon: Icon, title, text }, index) => (
            <article className="offering-card" key={title}>
              <span className="offering-number">0{index + 1}</span>
              <Icon size={25} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="inner-band">
        <div className="section-shell split-content">
          <div>
            <span className="eyebrow">OUR APPROACH</span>
            <h2>From first idea to <span className="gradient-text">launch day.</span></h2>
          </div>
          <ul className="check-list">
            {["Understand your business and audience", "Plan the structure and user experience", "Design and develop responsively", "Test, refine and prepare for launch"].map(item => (
              <li key={item}><Check size={17} /> {item}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="inner-section section-shell compact-section">
        <span className="eyebrow">LET&apos;S BUILD YOUR ONLINE PRESENCE</span>
        <h2>Ready for a website that moves you forward?</h2>
        <Link href="/contact" className="text-link">Discuss your website <ArrowUpRight size={17} /></Link>
      </section>
    </InnerPage>
  );
}
