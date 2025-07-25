"use client";

import Link from "next/link";
import Navigation from "./Navigation";
import { useContext } from "react";

// interface HeaderProps {
//   /** dark mode  */
//   darkMode: boolean;
//   toggleDarkMode: () => void;
// }

// export default function Header({darkMode, toggleDarkMode}: HeaderProps) {
export default function Header() {
  // let { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <header className="fixed top-0 z-10 px-8 w-full h-[140px] flex justify-between">
      
      <div className={`text-4xl flex`}><Link href="/" className="self-center">Mandy I.</Link></div>
      
      <Navigation />
      
    </header>
  )
}