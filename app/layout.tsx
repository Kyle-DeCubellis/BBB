import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import CredentialBar from "@/components/layout/CredentialBar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Balanced Brain & Body | Eating Disorder Therapy — Ridgewood, NJ",
  description:
    "Kristen Forman, LCSW offers eating disorder therapy and mindful eating coaching in Ridgewood, NJ and via telehealth across NJ, CT, FL & SC. CBT-E, DBT, HAES® aligned.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        <CredentialBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
