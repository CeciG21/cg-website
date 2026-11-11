"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { label: "Profile", href: "/about/" },
  { label: "Experience", href: "/experience/" },
  { label: "Selected Work", href: "/projects/" },
  { label: "Credentials", href: "/credentials/" },
  { label: "Contact", href: "/contact/" },
];

export function ArrowUpRight() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M5 15 15 5M7 5h8v8" />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname().replace(/\/$/, "") || "/";

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Ceci Garcia — home">
          <span>CG</span><b>Ceci Garcia</b>
        </Link>
        <nav aria-label="Main navigation">
          {navigation.map(({ label, href }) => {
            const route = href.replace(/\/$/, "");
            const active = pathname === route || (route === "/projects" && pathname.startsWith("/projects/"));
            return <Link href={href} key={href} aria-current={active ? "page" : undefined}>{label}</Link>;
          })}
        </nav>
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
