/** Shared route definitions for the site header and homepage. */
export const siteNavigation = [
  {
    label: "About",
    href: "/about/",
    detail: "Professional profile",
    description: "My professional story, what I care about and how I approach technical leadership.",
  },
  {
    label: "Selected Work",
    href: "/projects/",
    detail: "Project case studies",
    description: "Technical projects spanning delivery intelligence, quality engineering, security and practical applied AI.",
  },
  {
    label: "How I Deliver",
    href: "/how-i-deliver/",
    detail: "Delivery approach",
    description: "How I turn technical change into clear, sustainable and reliable delivery.",
  },
  {
    label: "Credentials",
    href: "/credentials/",
    detail: "Education & certifications",
    description: "A concise view of formal study, certifications and ongoing professional development.",
  },
  {
    label: "Contact",
    href: "/contact/",
    detail: "Get in touch",
    description: "Get in touch to discuss software engineering, technical delivery or professional collaboration.",
  },
] as const;
