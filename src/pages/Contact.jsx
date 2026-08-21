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
      setSuccess("Enquiry submitted successfully.");
      setName("");
      setOrganization("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (err) {
      setError(err?.message || "Failed to submit Enquiry.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about what you need."
        description="Whether you're an educational institution, corporate organisation, or looking for a development initiative, tell us what you're trying to achieve."
        secondaryCta={{ label: "Explore services", to: "/services" }}
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Get in Touch"
            title="We're here to help you take the next step."
            description="Whether you're an educational institution, corporate organisation, or looking for a development initiative, tell us what you need."
          />
          <div className="mt-12 rounded-[36px] bg-[var(--color-primary)] px-8 py-10 text-white sm:px-10 lg:px-12">
            <div className="grid gap-8 sm:grid-cols-3 sm:divide-x sm:divide-white/15 sm:gap-0">
              {/* Phone */}
              <div className="sm:pr-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <Phone size={20} />
                </div>

                <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-white/70">
                  Call us
                </p>

                <div className="mt-3 space-y-1">
                  {contactDetails.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="block text-base font-semibold text-white transition hover:text-white/80"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div className="sm:px-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <Mail size={20} />
                </div>

                <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-white/70">
                  Email us
                </p>

                <a
                  href={`mailto:${contactDetails.email}`}
                  className="mt-3 block break-words text-base font-semibold text-white transition hover:text-white/80"
                >
                  {contactDetails.email}
                </a>
              </div>

              {/* Address */}
              <div className="sm:pl-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <MapPin size={20} />
                </div>

                <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-white/70">
                  Visit us
                </p>

                <address className="mt-3 not-italic text-base font-semibold leading-7 text-white">
                  {contactDetails.address.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[var(--color-background)] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Form */}
            <FadeIn>
              <SectionHeader
                eyebrow="Send an Enquiry"
                title="Tell us your goal"
                description="Share a few details about your requirements and we'll get back to you."
              />
              <div className="mt-8 rounded-[32px] bg-white p-6 shadow-sm sm:p-8">
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-4 md:grid-cols-2">
                    <input
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      className="rounded-2xl border border-[var(--color-border)] px-4 py-3"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={loading}
                    />
                    <input
                      name="organization"
                      type="text"
                      autoComplete="organization"
                      className="rounded-2xl border border-[var(--color-border)] px-4 py-3"
                      placeholder="Organization"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      disabled={loading}
                    />
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="rounded-2xl border border-[var(--color-border)] px-4 py-3"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={loading}
                    />
                    <input
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      className="rounded-2xl border border-[var(--color-border)] px-4 py-3"
                      placeholder="Phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      disabled={loading}
                    />
                  </div>
                    <textarea
                      name="message"
                      required
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
                    {loading ? "Sending..." : "Send Enquiry"}
                  </button>
                </form>
              </div>
            </FadeIn>
            {/* MAP */}
            <FadeIn delay={0.08}>
              <SectionHeader
                eyebrow="Our Location"
                title="Come find us"
                description="We're based in South Dumdum, Kolkata."
              />

              <div className="mt-8 h-[420px] overflow-hidden rounded-[32px] bg-slate-200">
                <iframe
                  title="Empowering Minds Location"
                  src="YOUR_ACTUAL_GOOGLE_MAPS_EMBED_URL"
                  width="100%"
                  height="100%"
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
      <section className="bg-[var(--color-primary)] py-20 text-white sm:py-24 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/60">
              FAQs
            </p>

            <h2 className="mt-4 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Common questions
            </h2>
          </FadeIn>

          <div className="mt-12 border-t border-white/15">
            {faqs.map((faq, index) => (
              <FadeIn
                key={faq.question}
                delay={index * 0.05}
                className="grid gap-4 border-b border-white/15 py-7 sm:grid-cols-[80px_1fr] sm:gap-8 sm:py-9"
              >
                <span className="text-sm font-bold tracking-[0.2em] text-white/40">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <p className="text-lg font-bold leading-7 text-white sm:text-xl">
                    {faq.question}
                  </p>

                  <p className="mt-3 max-w-3xl text-sm leading-7 text-white/65 sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Prefer a quick conversation first?"
        description="Reach out and we can discuss your audience, format, timelines, and desired outcomes."
        variant="brand"
      />
    </main>
  );
}
