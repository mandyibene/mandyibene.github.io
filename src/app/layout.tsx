import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Body from "@/components/Body";
import { ThemeContextProvider } from "./context/themeContext";
import { SectionsRefsProvider } from "./context/sectionsRefsContext";
import { baseURL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Développeuse Web | Mandy Ibéné",
  description: "Dans ce portfolio je vous présente mon travail et mes compétences en tant que développeuse web full-stack.",
  metadataBase: new URL(baseURL),
  verification : {
    google: "FYEmuqM2W6FBcfCjJscng-dmPD6Zohnoh_JXPjRo7iY"
  },
  openGraph: {
    title: "Développeuse Web | Mandy Ibéné",
    description: "Dans ce portfolio je vous présente mon travail et mes compétences en tant que développeuse web full-stack.",
    type: "website",
    locale: "fr_FR",
    url: "/",
    images: [`${baseURL}/assets/images/site-screenshot-og-image.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Développeuse Web | Mandy Ibéné",
    description: "Dans ce portfolio je vous présente mon travail et mes compétences en tant que développeuse web full-stack.",
    images: [`${baseURL}/assets/images/site-screenshot-og-image.png`],
  },
};

const jetBrainsMono = JetBrains_Mono({
    weight: ['400', '500', '600', '700', '800'],
    subsets: ["latin"],
  });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="fr" className={`${jetBrainsMono.className}`}>
      <ThemeContextProvider>
        <SectionsRefsProvider>
          <Body>
            {children}
          </Body>
        </SectionsRefsProvider>
      </ThemeContextProvider>
    </html>
  );
}
