/** Shared route definitions for the site header and homepage. */
export const siteNavigation = [
  {
    label: "Profile",
    href: "/about/",
    detail: "About me",
    description: "How I approach software engineering leadership, technical decision-making and continuous improvement.",
  },
  {
    label: "Experience",
    href: "/experience/",
    detail: "Career & impact",
    description: "My career journey, leadership scope and selected engineering and delivery achievements.",
  },
  {
    label: "How I Deliver",
    href: "/how-i-deliver/",
    detail: "Delivery approach",
    description: "How Scrum, Kanban and CI/CD work together to bring focus, flow and reliable software releases.",
  },
  {
    label: "Selected Work",
    href: "/projects/",
    detail: "Project case studies",
    description: "Technical projects spanning delivery intelligence, quality engineering, security and practical applied AI.",
  },
  {
    label: "Credentials",
    href: "/credentials/",
    detail: "Education & certifications",
    description: "Doctoral study, professional certifications and continuous development across engineering, architecture and leadership.",
  },
  {
    label: "Contact",
    href: "/contact/",
    detail: "Get in touch",
    description: "Get in touch to discuss software engineering, technical delivery or professional collaboration.",
  },
] as const;
