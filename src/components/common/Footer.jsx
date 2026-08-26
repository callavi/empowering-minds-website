import { NavLink, Link } from "react-router-dom";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { contactDetails, navLinks } from "../../data/siteContent";

function NavigationLink({ link, onClick }) {
  const linkClasses = `
    group flex items-center gap-1
    text-sm font-medium
    text-[var(--color-text-secondary)]
    transition-colors
    duration-[var(--transition-fast)]
    hover:text-[var(--color-secondary)]
  `;

  if (link.external) {
    return (
      <a
        href={link.href}
        onClick={onClick}
        className={linkClasses}
      >
        <span>{link.label}</span>

        <ArrowUpRight
          size={13}
          aria-hidden="true"
          className="
            opacity-0
            transition-all
            duration-[var(--transition-fast)]
            group-hover:-translate-y-0.5
            group-hover:translate-x-0.5
            group-hover:opacity-100
          "
        />
      </a>
    );
  }

  return (
    <NavLink
      to={link.to}
      onClick={onClick}
      className={({ isActive }) => `
        ${linkClasses}

        ${
          isActive
            ? "text-[var(--color-secondary)]"
            : "text-[var(--color-text-secondary)]"
        }
      `}
    >
      <span>{link.label}</span>
    </NavLink>
  );
}

export default function Footer() {
  return (
    <footer
      className="
        border-t
        border-[var(--color-border)]
        bg-[var(--color-surface-warm)]
      "
    >
      <div
        className="
          mx-auto max-w-7xl
          px-4 py-16
          sm:px-6 sm:py-20
          lg:px-8 lg:py-24
        "
      >
        {/* --------------------------------
            Main footer
        -------------------------------- */}

        <div
          className="
            grid gap-12
            md:grid-cols-2
            lg:grid-cols-[1.4fr_0.7fr_1fr]
            lg:gap-16
          "
        >
          {/* --------------------------------
              Brand
          -------------------------------- */}

          <div>
            <Link
              to="/"
              className="
                inline-block
                text-2xl font-bold
                tracking-[-0.025em]
                text-[var(--color-secondary)]
                transition-colors
                duration-[var(--transition-fast)]
                hover:text-[var(--color-primary)]
                sm:text-3xl
              "
            >
              Empowering Minds
            </Link>

            <div
              aria-hidden="true"
              className="
                mt-4
                h-[var(--decorative-line-height)]
                w-[var(--decorative-line-width)]
                rounded-full
                bg-[var(--color-primary)]
              "
            />

            <p
              className="
                mt-5
                max-w-md
                text-sm leading-7
                text-[var(--color-text-secondary)]
                sm:text-base sm:leading-8
              "
            >
              Learning experiences built to strengthen leadership,
              develop people, and create measurable transformation
              across institutions and teams.
            </p>

            {/* Social */}
            <div className="mt-7 flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-full
                  border
                  border-[var(--color-border)]
                  bg-[var(--color-surface)]
                  text-[var(--color-secondary)]
                  transition-all
                  duration-[var(--transition-fast)]
                  hover:-translate-y-0.5
                  hover:border-[var(--color-primary)]/30
                  hover:bg-[var(--color-soft-accent)]
                  hover:text-[var(--color-primary)]
                "
              >
                <FaFacebookF size={15} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-full
                  border
                  border-[var(--color-border)]
                  bg-[var(--color-surface)]
                  text-[var(--color-secondary)]
                  transition-all
                  duration-[var(--transition-fast)]
                  hover:-translate-y-0.5
                  hover:border-[var(--color-primary)]/30
                  hover:bg-[var(--color-soft-accent)]
                  hover:text-[var(--color-primary)]
                "
              >
                <FaInstagram size={15} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-full
                  border
                  border-[var(--color-border)]
                  bg-[var(--color-surface)]
                  text-[var(--color-secondary)]
                  transition-all
                  duration-[var(--transition-fast)]
                  hover:-translate-y-0.5
                  hover:border-[var(--color-primary)]/30
                  hover:bg-[var(--color-soft-accent)]
                  hover:text-[var(--color-primary)]
                "
              >
                <FaLinkedinIn size={15} />
              </a>
            </div>
          </div>

          {/* --------------------------------
              Navigation
          -------------------------------- */}

          <div>
            <p
              className="
                mb-5
                text-xs font-semibold uppercase
                tracking-[0.24em]
                text-[var(--color-primary)]
              "
            >
              Navigate
            </p>

            <nav className="space-y-3">
            {navLinks.map((link) => (
              <NavigationLink
                key={link.label}
                link={link}
              />
            ))}
            </nav>
          </div>

          {/* --------------------------------
              Contact
          -------------------------------- */}

          <div>
            <p
              className="
                mb-5
                text-xs font-semibold uppercase
                tracking-[0.24em]
                text-[var(--color-primary)]
              "
            >
              Contact
            </p>

            <div
              className="
                space-y-4
                text-sm leading-6
                text-[var(--color-text-secondary)]
              "
            >
              <a
                href={`mailto:${contactDetails.email}`}
                className="
                  flex items-start gap-3
                  transition-colors
                  duration-[var(--transition-fast)]
                  hover:text-[var(--color-secondary)]
                "
              >
                <Mail
                  size={17}
                  className="
                    mt-0.5 shrink-0
                    text-[var(--color-primary)]
                  "
                />

                <span className="break-words">
                  {contactDetails.email}
                </span>
              </a>

              <div className="flex items-start gap-3">
                <Phone
                  size={17}
                  className="
                    mt-0.5 shrink-0
                    text-[var(--color-primary)]
                  "
                />

                <div className="space-y-1">
                  {contactDetails.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="
                        block break-words
                        transition-colors
                        duration-[var(--transition-fast)]
                        hover:text-[var(--color-secondary)]
                      "
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  size={17}
                  className="
                    mt-0.5 shrink-0
                    text-[var(--color-primary)]
                  "
                />

                <div className="break-words leading-7">
                  {contactDetails.address.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --------------------------------
            Bottom bar
        -------------------------------- */}

        <div
          className="
            mt-14
            flex flex-col gap-3
            border-t
            border-[var(--color-border)]
            pt-6
            text-xs
            text-[var(--color-text-secondary)]
            sm:mt-16
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>
            © {new Date().getFullYear()} Empowering Minds.
            All rights reserved.
          </p>

          <p className="text-[var(--color-text-secondary)]/70">
            People. Capability. Transformation.
          </p>
        </div>
      </div>
    </footer>
  );
}