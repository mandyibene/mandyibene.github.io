"use client";

import { useState } from "react";
import Header from "./Header";

export default function Body({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <body className={`${darkMode && 'dark'} pt-[140px] transition duration-500 text-zinc-800 dark:text-stone-50 bg-stone-50 dark:bg-zinc-800 `}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      {children}
    </body>
  )
}