import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

import { site } from "@/config/site";
import { coreServices } from "@/data/services";
import { Logo } from "@/components/site/Logo";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/projects", label: "Projects" },
  { to: "/industries", label: "Industries" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export function Footer() {
  const socials = [
    { href: site.social.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: site.social.facebook, label: "Facebook", Icon: Facebook },
    { href: site.social.instagram, label: "Instagram", Icon: Instagram },
  ].filter((s): s is { href: string; label: string; Icon: typeof Linkedin } => Boolean(s.href));

  return (
    <footer className="bg-navy-deep text-primary-foreground">
      <div className="container-site grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="white" className="h-14" />
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80">
            {site.tagline}
          </p>
          <p className="mt-4 text-sm text-primary-foreground/70">
            Waterproofing, civil construction and infrastructure solutions delivered with
            inspection-led planning and quality-checked execution.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-gold">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-primary-foreground/80 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-gold">Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {coreServices.map((service) => (
              <li key={service.slug}>
                <Link
                  to={service.path}
                  className="text-primary-foreground/80 transition-colors hover:text-gold"
                >
                  {service.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/request-a-quote"
                className="text-primary-foreground/80 transition-colors hover:text-gold"
              >
                Request a Quote
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-gold">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li>
              <a
                href={`tel:${site.phoneHref}`}
                className="flex items-center gap-2.5 transition-colors hover:text-gold"
              >
                <Phone className="h-4 w-4 shrink-0 text-gold" aria-hidden />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2.5 transition-colors hover:text-gold"
              >
                <Mail className="h-4 w-4 shrink-0 text-gold" aria-hidden />
                {site.email}
              </a>
            </li>
            {site.address && (
              <li>
                <span className="block leading-relaxed">{site.address}</span>
              </li>
            )}
            {site.businessHours && (
              <li>
                <span>{site.businessHours}</span>
              </li>
            )}
          </ul>

          {socials.length > 0 && (
            <div className="mt-5 flex gap-3">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${site.name} on ${label}`}
                  className="rounded-full border border-white/20 p-2 transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-5 text-xs text-primary-foreground/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="transition-colors hover:text-gold">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-gold">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
