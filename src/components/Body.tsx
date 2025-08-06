"use client";

import { useContext } from "react";
import Header from "./Header";
import { ThemeContext, ThemeContextType } from "@/app/context/themeContext";

export default function Body({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { darkMode } = useContext(ThemeContext) as ThemeContextType;

  return (
    
    <body className={`${darkMode && 'dark'} pt-[140px] transition-colors duration-200 text-zinc-800 dark:text-stone-50 bg-stone-50 dark:bg-zinc-900 `}>
      <Header />
      {children}
    </body>
  )
}