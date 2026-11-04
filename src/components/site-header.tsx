"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Web Design", href: "/web-design" },
  { label: "SaaS / E-Commerce", href: "/saas-ecommerce" },
  { label: "Our Work", href: "/work" },
  { label: "About", href: "/about" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-container">
        <Link href="/" className="brand" onClick={() => setMenuOpen(false)}>
          <Image
            src="/images/keitiem-digital-labs-logo.webp"
            alt="KEITIEM DIGITAL LABS"
            width={72}
            height={72}
            priority
            className="brand-logo"
          />
        </Link>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mobile-contact"
            onClick={() => setMenuOpen(false)}
          >
            Start a project <ArrowUpRight size={16} />
          </Link>
        </nav>

        <Link href="/contact" className="nav-cta">
          Let&apos;s talk <ArrowUpRight size={16} />
        </Link>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
    </header>
  );
}
