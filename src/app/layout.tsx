import type { Metadata } from "next";
import { jetBrainsMono } from "@/constants/Fonts";
import "./globals.css";
import Body from "@/components/Body";
import { ThemeContextProvider } from "./context/themeContext";

export const metadata: Metadata = {
  title: "Développeuse Web | Mandy Ibéné",
  description: "Dans ce portfolio je vous présente mon travail et mes compétences en tant que développeuse web full-stack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="fr" className={`${jetBrainsMono.className}`}>
      <ThemeContextProvider>
        <Body>
          {children}
        </Body>
      </ThemeContextProvider>
    </html>
  );
}
