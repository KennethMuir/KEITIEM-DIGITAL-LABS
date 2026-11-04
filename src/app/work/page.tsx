import Link from "next/link";
import { ArrowUpRight, Monitor, ShoppingBag, Workflow } from "lucide-react";
import InnerPage from "@/components/inner-page";

const projectTypes = [
  { icon: Monitor, number: "01", title: "Business websites", text: "Brand-led websites, service pages and conversion-focused digital experiences.", tag: "WEB DESIGN" },
  { icon: ShoppingBag, number: "02", title: "E-commerce experiences", text: "Online storefronts and customer journeys designed around products and people.", tag: "E-COMMERCE" },
  { icon: Workflow, number: "03", title: "Business applications", text: "Custom platforms, management tools and connected workflows.", tag: "SAAS & SYSTEMS" },
];

export default function WorkPage() {
  return (
    <InnerPage
      eyebrow="SELECTED CAPABILITIES"
      title={<>Good work starts with <span className="gradient-text">the right questions.</span></>}
      description="We bring design and technology together to solve practical business challenges. Here are the kinds of projects we create."
    >
      <section className="inner-section section-shell">
        <div className="work-grid">
          {projectTypes.map(({ icon: Icon, number, title, text, tag }) => (
            <article className="work-card" key={number}>
              <div className="work-visual"><Icon size={54} strokeWidth={1.1} /><span>{number}</span></div>
              <div className="work-meta">{tag}</div>
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="portfolio-note">
          <span className="eyebrow">YOUR PROJECT COULD BE NEXT</span>
          <h2>Let&apos;s create something worth showcasing.</h2>
          <Link href="/contact" className="text-link">Start a conversation <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </InnerPage>
  );
}
