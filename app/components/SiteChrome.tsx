import Link from "next/link";

export function ArrowUpRight() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M5 15 15 5M7 5h8v8" />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Ceci Garcia — home">
        <span>CG</span><b>Ceci Garcia</b>
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/about/">Profile</Link>
        <Link href="/#experience">Experience</Link>
        <Link href="/projects/">AI portfolio</Link>
        <Link href="/#contact">Contact</Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div><span className="footer-mark">CG</span><span>Ceci Garcia · Oxford, UK</span></div>
      <p>Software engineering · Technical delivery · Selected AI work</p>
      <a href="mailto:ceci.garcia.ox@gmail.com">Email</a>
    </footer>
  );
}
