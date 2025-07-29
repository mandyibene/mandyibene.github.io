"use client";

import { ThemeContext, ThemeContextType } from "@/app/context/themeContext";
import { useContext } from "react";

interface SectionProps extends React.PropsWithChildren {
  contrast?: boolean;
}

export default function Section({ contrast, children }: SectionProps) {

  const { darkMode } = useContext(ThemeContext) as ThemeContextType;

  return (
    <section className={`w-full lg:w-5/6 2xl:w-3/4 3xl:w-2/3 lg:mb-8 p-8 xs:p-16 xl:p-32 lg:rounded-sm ${contrast && "bg-zinc-800 dark:bg-zinc-500"} ${!darkMode && !contrast ? "text-zinc-800" : "text-stone-50"}`}>
      {children}
    </section>
  )
}