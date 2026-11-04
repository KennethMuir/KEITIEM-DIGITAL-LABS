import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import SiteHeader from "@/components/site-header";

type InnerPageProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  children: ReactNode;
};

export default function InnerPage({
  eyebrow,
  title,
  description,
  children,
}: InnerPageProps) {
  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        <section className="inner-hero section-shell">
          <div className="eyebrow">
            <span className="status-dot" /> {eyebrow}
          </div>
          <h1>{title}</h1>
          <p>{description}</p>
        </section>
        {children}
        <section className="inner-cta section-shell">
          <div>
            <span className="eyebrow">HAVE SOMETHING IN MIND?</span>
            <h2>Let&apos;s make it <span className="gradient-text">happen.</span></h2>
            <p>Tell us about your goals. We&apos;ll help you find the right digital solution.</p>
          </div>
          <Link href="/contact" className="button-primary">
            Start a project <ArrowUpRight size={17} />
          </Link>
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
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <Link href="/contact" className="footer-contact">
              Start a conversation <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="footer-bottom">
            <span>© 2026 KEITIEM DIGITAL LABS. ALL RIGHTS RESERVED.</span>
            <span>MADE FOR WHAT&apos;S NEXT <span className="blue-period">✳</span></span>
          </div>
        </div>
      </footer>
    </>
  );
}

