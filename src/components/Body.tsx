"use client";

import { useContext } from "react";
import Header from "./Header";
import { ThemeContext, ThemeContextType } from "@/app/context/themeContext";
import { colors } from "@/constants";

export default function Body({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { darkMode } = useContext(ThemeContext) as ThemeContextType;

  return (
    
    <body className={`${darkMode && 'dark'} pt-[140px] transition-colors duration-200 ${colors.contrast.text} ${colors.base.darkText} ${colors.base.bg} ${colors.strong.darkBg}`}>
      <Header />
      {children}
    </body>
  )
}