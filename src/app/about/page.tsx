import { Lightbulb, Target, TrendingUp } from "lucide-react";
import InnerPage from "@/components/inner-page";

const values = [
  { icon: Lightbulb, title: "Think clearly", text: "We start by understanding the problem, the people and the outcome that matters." },
  { icon: Target, title: "Build intentionally", text: "Every design choice and feature should have a reason to be there." },
  { icon: TrendingUp, title: "Focus on progress", text: "We aim to create useful digital experiences that can evolve with your business." },
];

export default function AboutPage() {
  return (
    <InnerPage
      eyebrow="ABOUT KEITIEM DIGITAL LABS"
      title={<>Creative thinking. Practical technology. <span className="gradient-text">Meaningful progress.</span></>}
      description="KEITIEM DIGITAL LABS is a digital solutions brand focused on helping businesses build a stronger online presence and smarter ways of working."
    >
      <section className="inner-band">
        <div className="section-shell split-content">
          <div>
            <span className="eyebrow">WHO WE ARE</span>
            <h2>Digital experiences.<br /><span className="gradient-text">Smarter business.</span></h2>
          </div>
          <p className="large-copy">We bring together web design and business-focused technology. From a clear, compelling website to a custom digital platform, our work is guided by usability, quality and the goals behind each project.</p>
        </div>
      </section>
      <section className="inner-section section-shell">
        <div className="inner-section-heading">
          <span className="eyebrow">WHAT GUIDES US</span>
          <h2>Three principles.<br /><span className="gradient-text">One clear purpose.</span></h2>
        </div>
        <div className="offering-grid">
          {values.map(({ icon: Icon, title, text }, index) => (
            <article className="offering-card" key={title}>
              <span className="offering-number">0{index + 1}</span>
              <Icon size={25} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </InnerPage>
  );
}
