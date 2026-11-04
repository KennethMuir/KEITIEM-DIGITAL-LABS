import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Globe2,
  Layers3,
  MonitorSmartphone,
  Sparkles,
  Zap,
} from "lucide-react";
import SiteHeader from "@/components/site-header";

const services = [
  {
    number: "01",
    icon: MonitorSmartphone,
    title: "Web Design",
    description:
      "Digital experiences that make your brand impossible to overlook. Beautifully designed, thoughtfully engineered and built to convert.",
    items: [
      "Business & corporate websites",
      "Landing pages & portfolios",
      "UI/UX design & redesigns",
      "Responsive design & SEO",
    ],
    href: "/web-design",
    label: "Explore web design",
    className: "service-blue",
  },
  {
    number: "02",
    icon: Layers3,
    title: "SaaS / E-Commerce",
    description:
      "Powerful digital products and commerce experiences that simplify operations, connect customers and unlock new opportunities.",
    items: [
      "Custom SaaS applications",
      "E-commerce & online stores",
      "Business management systems",
      "Automation & integrations",
    ],
    href: "/saas-ecommerce",
    label: "Explore solutions",
    className: "service-violet",
  },
];

const principles = [
  {
    icon: Sparkles,
    title: "Thoughtful design",
    description: "Every detail has a purpose. Every interaction feels intentional.",
  },
  {
    icon: Code2,
    title: "Built with precision",
    description: "Modern technology, clean architecture and reliable engineering.",
  },
  {
    icon: Zap,
    title: "Made for growth",
    description: "Fast, scalable digital solutions designed around your goals.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="hero section-shell">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              INDEPENDENT DIGITAL STUDIO
            </div>

            <h1>
              We build what
              <br />
              <span className="gradient-text">moves business</span>
              <br />
              forward<span className="blue-period">.</span>
            </h1>

            <p className="hero-description">
              From unforgettable websites to powerful digital platforms,
              we turn ambitious ideas into meaningful digital experiences.
            </p>

            <div className="hero-actions">
              <Link href="/contact" className="button-primary">
                Start a project <ArrowUpRight size={18} />
              </Link>
              <Link href="/work" className="button-secondary">
                Explore our work <ArrowRight size={17} />
              </Link>
            </div>

            <div className="hero-note">
              <span className="note-line" />
              <span>DESIGNED WITH PURPOSE. BUILT FOR IMPACT.</span>
            </div>
          </div>

          <div className="hero-art" aria-label="Abstract digital technology artwork">
            <div className="art-grid" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="art-glow" />
            <div className="art-core">
              <div className="core-inner">
                <span>K</span>
                <div className="core-caption">DIGITAL<br />POSSIBILITIES</div>
              </div>
            </div>
            <div className="floating-card card-top">
              <span className="floating-icon"><Globe2 size={17} /></span>
              <span><strong>Global thinking</strong><small>Built without borders</small></span>
            </div>
            <div className="floating-card card-bottom">
              <span className="floating-icon violet-icon"><Zap size={17} /></span>
              <span><strong>Ideas into impact</strong><small>Design meets technology</small></span>
            </div>
            <div className="art-index">KDL / 001</div>
          </div>

          <Link href="#services" className="scroll-indicator">
            <span>SCROLL TO EXPLORE</span><ArrowDown size={15} />
          </Link>
        </section>

        <section className="trust-strip">
          <div className="section-shell trust-inner">
            <p>YOUR NEXT DIGITAL PARTNER</p>
            <div className="trust-divider" />
            <span>KENYA <span className="trust-dot">/</span> WORLDWIDE</span>
            <span className="trust-tag"><Globe2 size={15} /> DIGITAL BY NATURE</span>
          </div>
        </section>

        <section className="services-section section-shell" id="services">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span className="section-number">01</span> WHAT WE DO</div>
              <h2>Two ways to make<br />your next move <span className="gradient-text">count.</span></h2>
            </div>
            <p>
              Different challenges. One commitment: creating digital
              solutions that make a real difference to your business.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className={`service-card ${service.className}`} key={service.number}>
                  <div className="service-top">
                    <span className="service-number">{service.number} / DIVISION</span>
                    <span className="service-icon"><Icon size={23} /></span>
                  </div>
                  <h3>{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <div className="service-divider" />
                  <ul className="service-list">
                    {service.items.map((item) => (
                      <li key={item}><Check size={15} /> {item}</li>
                    ))}
                  </ul>
                  <Link href={service.href} className="service-link">
                    {service.label} <ArrowUpRight size={18} />
                  </Link>
                  <div className="service-decoration" />
                </article>
              );
            })}
          </div>
        </section>

        <section className="statement-section">
          <div className="section-shell statement-inner">
            <div className="eyebrow"><span className="section-number">02</span> OUR PERSPECTIVE</div>
            <h2>
              Good design gets attention.
              <br />
              <span className="statement-muted">Great technology creates</span>
              <br />
              <span className="gradient-text">opportunity.</span>
            </h2>
            <p>
              We bring creative thinking and technical expertise together
              to help businesses compete, connect and grow in a digital world.
            </p>
          </div>
        </section>

        <section className="approach-section section-shell">
          <div className="section-heading approach-heading">
            <div>
              <div className="eyebrow"><span className="section-number">03</span> THE KEITIEM DIFFERENCE</div>
              <h2>More than a digital<br />service. <span className="gradient-text">A partner.</span></h2>
            </div>
            <p>
              We care about the outcome as much as the craft.
              Your business goals shape everything we create.
            </p>
          </div>

          <div className="principle-grid">
            {principles.map((item, index) => {
              const Icon = item.icon;
              return (
                <article className="principle-card" key={item.title}>
                  <div className="principle-icon"><Icon size={22} /></div>
                  <span className="principle-number">0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="cta-section section-shell">
          <div className="cta-panel">
            <div className="cta-decoration" />
            <div className="eyebrow"><span className="status-dot" /> HAVE A PROJECT IN MIND?</div>
            <h2>Let&apos;s create something<br /><span className="gradient-text">worth remembering.</span></h2>
            <p>
              Tell us where you want to go. We&apos;ll help you figure out
              how to get there.
            </p>
            <Link href="/contact" className="button-primary">
              Let&apos;s build together <ArrowUpRight size={18} />
            </Link>
            <span className="cta-footnote">KENYA &nbsp; · &nbsp; WORKING WORLDWIDE</span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell">
          <div className="footer-main">
            <Link href="/" className="brand footer-brand">
              <span className="brand-symbol">K<span>.</span></span>
              <span className="brand-name">KEITIEM<small>DIGITAL LABS</small></span>
            </Link>
            <p>Digital experiences.<br />Smarter business.</p>
            <div className="footer-links">
              <Link href="/web-design">Web Design</Link>
              <Link href="/saas-ecommerce">SaaS / E-Commerce</Link>
              <Link href="/work">Our Work</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <Link href="/contact" className="footer-contact">
              Start a conversation <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="footer-bottom">
            <span>© {2026} KEITIEM DIGITAL LABS. ALL RIGHTS RESERVED.</span>
            <span>MADE FOR WHAT&apos;S NEXT <span className="blue-period">✳</span></span>
          </div>
        </div>
      </footer>
    </>
  );
}
