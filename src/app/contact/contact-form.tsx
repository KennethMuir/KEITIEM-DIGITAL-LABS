"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "We could not send your enquiry. Please try again.");
      }

      setStatus("success");
      setMessage("Thank you. Your enquiry has been received.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>Your name<input name="name" required maxLength={100} autoComplete="name" placeholder="Your name" /></label>
        <label>Email address<input name="email" type="email" required maxLength={254} autoComplete="email" placeholder="you@example.com" /></label>
      </div>
      <label>What do you need?
        <select name="service" required defaultValue="">
          <option value="" disabled>Select a service</option>
          <option>Web Design</option>
          <option>SaaS / E-Commerce</option>
          <option>Business automation or integrations</option>
          <option>Something else</option>
        </select>
      </label>
      <label>Tell us about your project
        <textarea name="message" required minLength={10} maxLength={5000} rows={6} placeholder="A little about your goals, requirements and timeline..." />
      </label>
      <button className="button-primary form-submit" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send enquiry"} <ArrowUpRight size={17} />
      </button>
      {message && (
        <p className={`form-feedback ${status}`} role="status">
          {status === "success" && <CheckCircle2 size={17} />} {message}
        </p>
      )}
    </form>
  );
}
