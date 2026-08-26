import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../../data/siteContent";
import CTAButton from "../ui/CTAButton";

function NavigationLink({ link, mobile = false, onClick }) {
  if (link.external) {
    return (
      <a
        href={link.href}
        onClick={onClick}
        className={
          mobile
            ? `
              block
              rounded-[var(--radius-md)]
              px-4 py-3
              text-base font-medium
              text-[var(--color-text-secondary)]
              transition-colors
              duration-[var(--transition-fast)]
              hover:bg-[var(--color-surface-warm)]
              hover:text-[var(--color-secondary)]
            `
            : `
              relative
              py-2
              text-sm font-medium
              text-[var(--color-text-secondary)]
              transition-colors
              duration-[var(--transition-fast)]
              hover:text-[var(--color-secondary)]
              xl:text-[15px]
            `
        }
      >
        {link.label}
      </a>
    );
  }

  return (
    <NavLink
      to={link.to}
      onClick={onClick}
      className={({ isActive }) =>
        mobile
          ? `
            block
            rounded-[var(--radius-md)]
            px-4 py-3
            text-base font-medium
            transition-colors
            duration-[var(--transition-fast)]

            ${
              isActive
                ? `
                  bg-[var(--color-soft-accent)]/50
                  text-[var(--color-secondary)]
                `
                : `
                  text-[var(--color-text-secondary)]
                  hover:bg-[var(--color-surface-warm)]
                  hover:text-[var(--color-secondary)]
                `
            }
          `
          : `
            relative
            py-2
            text-sm font-medium
            transition-colors
            duration-[var(--transition-fast)]
            xl:text-[15px]

            ${
              isActive
                ? "text-[var(--color-secondary)]"
                : "text-[var(--color-text-secondary)] hover:text-[var(--color-secondary)]"
            }

            after:absolute
            after:bottom-0
            after:left-1/2
            after:h-0.5
            after:w-0
            after:-translate-x-1/2
            after:rounded-full
            after:bg-[var(--color-primary)]
            after:transition-all
            after:duration-[var(--transition-fast)]

            ${
              isActive
                ? "after:w-5"
                : "hover:after:w-3"
            }
          `
      }
    >
      {link.label}
    </NavLink>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="
        fixed inset-x-0 top-0 z-50
        border-b border-[var(--color-border-soft)]
        bg-[var(--color-background)]/90
        backdrop-blur-md
      "
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          className="
            flex min-h-[76px]
            items-center justify-between
            gap-6
          "
        >
          {/* --------------------------------
              Brand
          -------------------------------- */}

          <Link
            to="/"
            className="
              shrink-0
              text-lg font-bold
              tracking-[-0.025em]
              text-[var(--color-secondary)]
              transition-colors
              duration-[var(--transition-fast)]
              hover:text-[var(--color-primary)]
              sm:text-xl
            "
          >
            Empowering Minds
          </Link>

          {/* --------------------------------
              Desktop navigation
          -------------------------------- */}

          <div
            className="
              hidden
              items-center
              gap-7
              lg:flex
            "
          >
            {navLinks.map((link) => (
              <NavigationLink
                key={link.label}
                link={link}
              />
            ))}

            <CTAButton
              to="/contact"
              className="ml-1 px-5 py-2.5"
            >
              Talk to us
            </CTAButton>
          </div>

          {/* --------------------------------
              Mobile menu button
          -------------------------------- */}

          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-full
              border border-[var(--color-border)]
              bg-[var(--color-surface)]
              text-[var(--color-secondary)]
              transition
              duration-[var(--transition-fast)]
              hover:border-[var(--color-primary)]/40
              hover:text-[var(--color-primary)]
              lg:hidden
            "
            aria-label={
              mobileOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X size={20} strokeWidth={1.8} />
            ) : (
              <Menu size={20} strokeWidth={1.8} />
            )}
          </button>
        </nav>

        {/* --------------------------------
            Mobile navigation
        -------------------------------- */}

        {mobileOpen && (
          <div
            className="
              border-t
              border-[var(--color-border-soft)]
              pb-6 pt-5
              lg:hidden
            "
          >
            <div className="space-y-1">
              {navLinks.map((link) => (
                <NavigationLink
                  key={link.label}
                  link={link}
                  mobile
                  onClick={() => setMobileOpen(false)}
                />
              ))}

              <div className="pt-4">
                <CTAButton
                  to="/contact"
                  className="w-full"
                >
                  Talk to us
                </CTAButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}