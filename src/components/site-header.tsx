"use client";

import { useState } from "react";
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
          <span className="brand-symbol">K<span>.</span></span>
          <span className="brand-name">
            KEITIEM
            <small>DIGITAL LABS</small>
          </span>
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
