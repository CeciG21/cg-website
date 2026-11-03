import type { Metadata } from "next";
import "./globals.css";
import "./multipage.css";

export const metadata: Metadata = {
  title: "Ceci Garcia | Software Engineering & Technical Delivery",
  description:
    "Ceci Garcia is a software engineering and technical delivery leader building secure, useful digital products and modern enterprise platforms.",
  metadataBase: new URL("https://cecigarcia.uk"),
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  openGraph: {
    title: "Ceci Garcia | Software Engineering & Technical Delivery",
    description:
      "Engineering leadership, technical delivery, platform modernisation and selected product work.",
    url: "https://cecigarcia.uk",
    siteName: "Ceci Garcia",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
