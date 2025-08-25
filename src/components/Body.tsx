"use client";

import Header from "./Header";
import { colors } from "@/constants";
import { useThemeContext } from "@/app/hooks/context";

export default function Body({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { darkMode } = useThemeContext();

  return (
    
    <body className={`${darkMode && 'dark'} pt-[140px] transition-colors duration-200 ${colors.contrast.text} ${colors.base.darkText} ${colors.base.bg} ${colors.strong.darkBg}`}>
      <Header />
      {children}
    </body>
  )
}