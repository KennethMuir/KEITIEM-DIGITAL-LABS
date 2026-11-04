import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Monitor, ShoppingBag, Workflow } from "lucide-react";
import InnerPage from "@/components/inner-page";

const projectTypes = [
  { icon: Monitor, number: "01", title: "Business websites", text: "Brand-led websites, service pages and conversion-focused digital experiences.", tag: "WEB DESIGN" },
  { icon: ShoppingBag, number: "02", title: "E-commerce experiences", text: "Online storefronts and customer journeys designed around products and people.", tag: "E-COMMERCE" },
  { icon: Workflow, number: "03", title: "Business applications", text: "Custom platforms, management tools and connected workflows.", tag: "SAAS & SYSTEMS" },
];

const portfolioProjects = [
  {
    number: "02",
    title: "Nexus Documentation",
    text: "A corporate documentation and training platform focused on building structured, professional documentation systems.",
    tag: "CORPORATE DOCUMENTATION & TRAINING",
    image: "/images/nexus-documentation-preview.webp",
    href: "https://corporate-documentation-and-trainin.vercel.app/",
  },
  {
    number: "03",
    title: "Kennethuku & Skin on Cream",
    text: "A fashion e-commerce experience showcasing apparel, collections and an online shopping journey.",
    tag: "FASHION & E-COMMERCE",
    image: "/images/kennethuku-skin-on-cream-preview.webp",
    href: "https://kennethuku-and-skin-on-cream.vercel.app/",
  },
  {
    number: "04",
    title: "Heraldic Furniture & Lifestyle",
    text: "A premium furniture and lifestyle experience presenting furniture collections and bespoke design.",
    tag: "FURNITURE & LIFESTYLE",
    image: "/images/heraldic-furniture-lifestyle-preview.webp",
    href: "https://heraldic-furniture-lifestyle.vercel.app/",
  },
  {
    number: "05",
    title: "Nairobi Westlands Spa",
    text: "A premium spa and wellness website presenting restorative treatments, packages and a refined booking experience.",
    tag: "SPA & WELLNESS",
    image: "/images/nairobi-westlands-spa-preview.webp",
    href: "https://nairobi-westlandsspa.vercel.app/",
  },
];

export default function WorkPage() {
  return (
    <InnerPage
      eyebrow="SELECTED WORK & CAPABILITIES"
      title={<>Good work starts with <span className="gradient-text">the right questions.</span></>}
      description="We bring design and technology together to solve practical business challenges. Explore a featured project and the kinds of solutions we create."
    >
      <section className="inner-section section-shell">
        <div className="featured-project">
          <div className="featured-project-visual">
            <Image
              src="/images/velloria-westland-spa-preview.webp"
              alt="Velloria Westland Spa official homepage"
              fill
              priority
              sizes="(max-width: 700px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "top" }}
            />
          </div>

          <div className="featured-project-content">
            <span className="eyebrow">WEB DESIGN</span>
            <h2>Velloria Westland Spa</h2>
            <p>
              A featured website project for a spa and wellness brand.
              Explore the live website.
            </p>
            <a
              href="https://velloriawestlandspa.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Visit Live Website <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        <div className="eyebrow">MORE SELECTED PROJECTS</div>
        <div className="work-grid portfolio-project-grid">
          {portfolioProjects.map(({ number, title, text, tag, image, href }) => (
            <article className="work-card" key={number}>
              <div className="work-visual portfolio-project-visual">
                <Image
                  src={image}
                  alt={`${title} website preview`}
                  fill
                  sizes="(max-width: 700px) 100vw, 33vw"
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
                <span>{number}</span>
              </div>
              <div className="work-meta">{tag}</div>
              <h2>{title}</h2>
              <p>{text}</p>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
                style={{ margin: "8px 23px 0" }}
              >
                Visit Live Website <ArrowUpRight size={17} />
              </a>
            </article>
          ))}
        </div>
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
