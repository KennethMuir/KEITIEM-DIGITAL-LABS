import InnerPage from "@/components/inner-page";
import ContactForm from "./contact-form";

export default function ContactPage() {
  return (
    <InnerPage
      eyebrow="LET'S TALK"
      title={<>Tell us what you want to <span className="gradient-text">make possible.</span></>}
      description="Have a website, digital product or business challenge in mind? Share a few details and let's explore the right way forward."
    >
      <section className="inner-section section-shell contact-layout">
        <div className="contact-intro">
          <span className="eyebrow">START A PROJECT</span>
          <h2>Every great project starts with a conversation.</h2>
          <p>Give us an overview of what you need. We&apos;ll review your enquiry and follow up using the email address you provide.</p>
          <div className="contact-assurance">
            <span className="status-dot" /> Your contact details are handled privately.
          </div>
          <a
            className="contact-whatsapp"
            href="https://wa.me/254702734775?text=Hello%20KEITIEM%20DIGITAL%20LABS%2C%20I%20would%20like%20to%20make%20an%20enquiry."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with KEITIEM DIGITAL LABS on WhatsApp"
          >
            <span className="contact-whatsapp-icon">↗</span>
            <span>
              <strong>Chat with us on WhatsApp</strong>
              <small>+254 702 734 775</small>
            </span>
          </a>
        </div>
        <ContactForm />
      </section>
    </InnerPage>
  );
}
