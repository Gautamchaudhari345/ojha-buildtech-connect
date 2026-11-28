import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Mail, Menu, Phone } from "lucide-react";

import { site } from "@/config/site";
import { Logo } from "@/components/site/Logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/media", label: "Media" },
  { to: "/industries", label: "Industries" },
  { to: "/contact", label: "Contact" },
];

function isActive(pathname: string, to: string): boolean {
  if (to === "/") return pathname === "/";
  return pathname === to || pathname.startsWith(`${to}/`);
}

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top contact strip — only shows verified details once configured. */}
      <div className="border-b border-gold/25 bg-navy-deep text-primary-foreground">
        <div className="container-site flex min-h-9 flex-wrap items-center justify-between gap-x-4 gap-y-1 py-2 text-[11px] sm:text-xs lg:flex-nowrap lg:py-0">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 sm:gap-6">
            <a
              href={`tel:${site.phoneHref}`}
              className="flex items-center gap-2 transition-colors hover:text-gold"
            >
              <Phone className="h-3.5 w-3.5 text-gold" aria-hidden />
              {site.phoneDisplay}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 transition-colors hover:text-gold"
            >
              <Mail className="h-3.5 w-3.5 text-gold" aria-hidden />
              {site.email}
            </a>
          </div>
          {site.businessHours && <span>{site.businessHours}</span>}
        </div>
      </div>

      {/* Main navigation */}
      <div className="border-b border-border bg-background/90 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
        <div className="container-site flex h-[4.25rem] items-center justify-between gap-4">
          <Link to="/" aria-label={`${site.name} home`} className="shrink-0">
            <Logo className="h-14 text-[3.5rem]" />
          </Link>

          <nav aria-label="Main navigation" className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "bg-gold-soft text-navy"
                      : "text-foreground/80 hover:bg-secondary hover:text-navy"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild variant="gold" className="hidden sm:inline-flex">
              <Link to="/request-a-quote">Request a Quote</Link>
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu">
                  <Menu className="h-5 w-5" aria-hidden />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <SheetHeader>
                  <SheetTitle className="text-left">
                    <Logo className="h-14 text-[3.5rem]" />
                  </SheetTitle>
                </SheetHeader>
                <nav aria-label="Mobile navigation" className="mt-2 flex flex-col gap-1 px-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setOpen(false)}
                      className={`rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                        isActive(pathname, link.to)
                          ? "bg-gold-soft text-navy"
                          : "text-foreground hover:bg-secondary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button asChild variant="gold" className="mt-4">
                    <Link to="/request-a-quote" onClick={() => setOpen(false)}>
                      Request a Quote
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
