import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { contactDetails, faqs } from "../data/siteContent";
import CTASection from "../components/ui/CTASection";
import FadeIn from "../components/ui/FadeIn";
import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";
import { submitContactForm } from "../services/contactAPI";

export default function Contact() {
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      await submitContactForm({ name, organization, email, phone, message });
      setSuccess("Inquiry submitted successfully.");
      setName("");
      setOrganization("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (err) {
      setError(err?.message || "Failed to submit inquiry.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <PageHero
        title="Let's discuss your next learning or transformation initiative"
        description="Reach out for workshops, leadership programs, student development engagements, or institutional growth support."
        secondaryCta={{ label: "Explore services", to: "/services" }}
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <SectionHeader title="Tell us about your goals" />
            <FadeIn className="mt-8 rounded-4xl border border-[var(--color-border)] bg-white p-5 shadow-sm sm:p-8">
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    className="rounded-2xl border border-[var(--color-border)] px-4 py-3"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={loading}
                  />
                  <input
                    className="rounded-2xl border border-[var(--color-border)] px-4 py-3"
                    placeholder="Organization"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    disabled={loading}
                  />
                  <input
                    className="rounded-2xl border border-[var(--color-border)] px-4 py-3"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                  />
                  <input
                    className="rounded-2xl border border-[var(--color-border)] px-4 py-3"
                    placeholder="Phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    disabled={loading}
                  />
                </div>
                <textarea
                  className="mt-4 min-h-80 w-full rounded-2xl border border-[var(--color-border)] px-4 py-3"
                  placeholder="How can we help?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={loading}
                />

                {success ? (
                  <p className="mt-4 text-sm font-semibold text-green-600">
                    {success}
                  </p>
                ) : null}

                {error ? (
                  <p className="mt-4 text-sm font-semibold text-red-600">
                    {error}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-5 w-full rounded-full bg-[var(--color-secondary)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-60 sm:w-auto"
                >
                  {loading ? "Sending..." : "Send Inquiry"}
                </button>
              </form>
            </FadeIn>
          </div>

          <div className="space-y-6">
            <FadeIn className="rounded-[28px] border border-[var(--color-border)] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-secondary)]">
                Contact Details
              </p>
              <div className="mt-6 space-y-4 text-sm text-slate-600">
                <p className="flex items-start gap-3 break-words">
                  <Phone size={18} className="mt-0.5 shrink-0 text-[var(--color-secondary)]" />
                  {contactDetails.phone}
                </p>
                <p className="flex items-start gap-3 break-words">
                  <Mail size={18} className="mt-0.5 shrink-0 text-[var(--color-secondary)]" />
                  {contactDetails.email}
                </p>
                <p className="flex items-start gap-3 break-words">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-[var(--color-secondary)]" />
                  {contactDetails.address}
                </p>
              </div>
            </FadeIn>

            <FadeIn
              delay={0.08}
              className="rounded-[28px] border border-[var(--color-border)] bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-secondary)]">
                Our Location
              </p>

              <div className="mt-5 overflow-hidden rounded-3xl">
                <iframe
                  title="Empowering Minds Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.2242173303214!2d88.39632030576469!3d22.59452716264225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277672d0e7edb%3A0x5cd9b07e9cf3c5fb!2sJamuna%20Aparment!5e0!3m2!1sen!2sin!4v1781260866590!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="FAQ'S" title="Common questions" />
          <div className="mt-10 grid gap-4">
            {faqs.map((faq, index) => (
              <FadeIn
                key={faq.question}
                delay={index * 0.05}
                className="rounded-3xl border border-[var(--color-border)] bg-white p-6 shadow-sm"
              >
                <p className="text-lg font-bold text-[var(--color-primary)]">{faq.question}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Prefer a quick conversation first?"
        description="Reach out and we can discuss your audience, format, timelines, and desired outcomes."
      />
    </main>
  );
}
