"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { siteNavigation } from "./site-navigation";

function activeRoute(pathname: string, href: string) {
  const route = href.replace(/\/$/, "");
  return pathname === route || (route === "/projects" && pathname.startsWith("/projects/"));
}

export function ArrowUpRight() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M5 15 15 5M7 5h8v8" />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname().replace(/\/$/, "") || "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  const links = (onNavigate?: () => void) => siteNavigation.map(({ label, href }) => (
    <Link
      href={href}
      key={href}
      aria-current={activeRoute(pathname, href) ? "page" : undefined}
      onClick={onNavigate}
    >
      {label}
    </Link>
  ));

  function handleMenuKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "Escape") {
      setMenuOpen(false);
      menuButton.current?.focus();
    }
  }

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Ceci Garcia — home" onClick={() => setMenuOpen(false)}>
          <span>CG</span><b>Ceci Garcia</b>
        </Link>
        <nav className="site-desktop-nav" aria-label="Main navigation">
          {links()}
        </nav>
        <button
          ref={menuButton}
          type="button"
          className="site-menu-toggle"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls={menuOpen ? "site-mobile-navigation" : undefined}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? <path d="M5 5l14 14M19 5 5 19" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
        {menuOpen && (
          <nav
            id="site-mobile-navigation"
            className="site-mobile-nav"
            aria-label="Mobile navigation"
            onKeyDown={handleMenuKeyDown}
          >
            {links(() => setMenuOpen(false))}
          </nav>
        )}
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div><span className="footer-mark">CG</span><span>Ceci Garcia · Oxford, UK</span></div>
      <p>Software engineering · Technical delivery · Applied AI</p>
      <a href="mailto:ceci.garcia.ox@gmail.com">Email</a>
    </footer>
  );
}
