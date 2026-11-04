import { ArrowUpRight, ShoppingCart, Boxes, Workflow, ShieldCheck } from "lucide-react";
import Link from "next/link";
import InnerPage from "@/components/inner-page";

const solutions = [
  { icon: Boxes, title: "Custom SaaS platforms", text: "Purpose-built web applications that organise work, simplify operations and support new business models." },
  { icon: ShoppingCart, title: "E-commerce solutions", text: "Online shopping experiences designed to make product discovery, checkout and management easier." },
  { icon: Workflow, title: "Business systems & automation", text: "Connected workflows, dashboards and integrations that reduce repetitive work." },
  { icon: ShieldCheck, title: "Scalable application foundations", text: "Secure, maintainable architecture designed with future growth and operational needs in mind." },
];

export default function SaasEcommercePage() {
  return (
    <InnerPage
      eyebrow="02 / SAAS & E-COMMERCE"
      title={<>Smarter systems for <span className="gradient-text">ambitious businesses.</span></>}
      description="We create digital products and connected business systems that help organisations serve customers, manage operations and grow."
    >
      <section className="inner-section section-shell">
        <div className="inner-section-heading">
          <span className="eyebrow">DIGITAL SOLUTIONS</span>
          <h2>Technology that solves<br /><span className="gradient-text">real problems.</span></h2>
        </div>
        <div className="offering-grid">
          {solutions.map(({ icon: Icon, title, text }, index) => (
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
            <span className="eyebrow">BUILT AROUND YOUR BUSINESS</span>
            <h2>Not technology for its own sake. <span className="gradient-text">Solutions with purpose.</span></h2>
          </div>
          <p className="large-copy">Every project starts with understanding the challenge. We shape the right features, user experience and technical approach around the people who will use the solution.</p>
        </div>
      </section>
      <section className="inner-section section-shell compact-section">
        <span className="eyebrow">HAVE A PRODUCT IDEA?</span>
        <h2>Let&apos;s turn your idea into a working solution.</h2>
        <Link href="/contact" className="text-link">Discuss your project <ArrowUpRight size={17} /></Link>
      </section>
    </InnerPage>
  );
}
