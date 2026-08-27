import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { contactDetails, navLinks } from "../../data/siteContent";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <h3 className="text-2xl font-black tracking-tight text-[var(--color-primary)] sm:text-3xl">
              Empowering Minds
            </h3>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
              Learning experiences built to strengthen leadership, develop people,
              and create measurable transformation across institutions and teams.
            </p>

            {/* Social Media */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-primary)] transition-all duration-300 hover:bg-[var(--color-secondary)] hover:text-white"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-primary)] transition-all duration-300 hover:bg-[var(--color-secondary)] hover:text-white"
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-primary)] transition-all duration-300 hover:bg-[var(--color-secondary)] hover:text-white"
              >
                <FaLinkedinIn size={16} />
              </a>

              
            </div>
          </div>

          <div className="md:justify-self-start">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
              Navigate
            </p>
            <div className="space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="block text-sm font-medium text-[var(--color-primary)] transition hover:text-[var(--color-secondary)]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
              Contact
            </p>
            <div className="space-y-4 text-sm text-slate-600">
              <p className="flex items-start gap-3 break-words">
                <Mail size={16} className="text-[var(--color-secondary)]" />
                {contactDetails.email}
              </p>
              <p className="flex items-start gap-3 break-words">
                <Phone size={16} className="text-[var(--color-secondary)]" />
                {contactDetails.phone}
              </p>
              <p className="flex items-start gap-3 break-words">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[var(--color-secondary)]" />
                {contactDetails.address}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[var(--color-border)] pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Empowering Minds. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
