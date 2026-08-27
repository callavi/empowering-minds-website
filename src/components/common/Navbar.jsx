import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../../data/siteContent";
import CTAButton from "../ui/CTAButton";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--color-border)] bg-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex min-h-20 items-center justify-between gap-3 py-3 sm:gap-6">
          <Link
            to="/"
            className="max-w-[calc(100%-3.5rem)] text-lg font-black leading-tight tracking-tight text-[var(--color-text-primary)] sm:text-xl lg:max-w-none lg:text-2xl"
          >
            Empowering Minds
          </Link>

          <div className="hidden items-center gap-6 xl:gap-8 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-sm font-medium text-[var(--color-secondary)] xl:text-base"
                    : "text-sm font-medium text-[var(--color-text-primary)] hover:text-[var(--color-secondary)] xl:text-base"
                }
              >
                {link.label}
              </NavLink>
            ))}
            <CTAButton to="/contact" className="px-5 py-3">
              Book a Demo
            </CTAButton>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            className="shrink-0 rounded-full p-2 text-[var(--color-text-primary)] lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {mobileOpen ? (
          <div className="border-t border-[var(--color-border)] pb-6 pt-5 lg:hidden">
            <div className="space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-2xl px-1 py-1 text-base font-semibold text-[var(--color-text-primary)]"
                >
                  {link.label}
                </NavLink>
              ))}
              <CTAButton to="/contact" className="w-full">
                Book a Demo
              </CTAButton>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
