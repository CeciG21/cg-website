import type { Metadata } from "next";
import "./globals.css";
import "./multipage.css";
import "./profile.css";

export const metadata: Metadata = {
  title: "Ceci Garcia | Software Engineering & Technical Delivery",
  description:
    "Ceci Garcia's professional profile: software engineering, technical leadership, enterprise digital platforms and selected AI portfolio work.",
  metadataBase: new URL("https://cecigarcia.uk"),
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
  openGraph: {
    title: "Ceci Garcia | Professional Profile",
    description: "Software engineering, technical delivery and selected AI portfolio work.",
    url: "https://cecigarcia.uk",
    siteName: "Ceci Garcia",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
