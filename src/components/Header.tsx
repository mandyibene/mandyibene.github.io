"use client";

import Navigation from "./Navigation";

interface HeaderProps {
  /** dark mode  */
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({darkMode, toggleDarkMode}: HeaderProps) {
  return (
    <header className="fixed top-0 z-10 px-8 w-full h-[140px] flex justify-between">
      
      <div className={`text-4xl flex`}><a href="/" className="self-center">Mandy Ibéné</a></div>
      
      <Navigation />
      
      {/* <div className="relative w-16 h-8 self-center">
        <input defaultChecked={darkMode} id="switch-component" type="checkbox" onChange={toggleDarkMode} className="peer appearance-none w-16 h-8 bg-zinc-800 rounded-full checked:bg-stone-50 cursor-pointer transition-colors duration-300" />
        <label htmlFor="switch-component" className="absolute top-0 left-0 w-8 h-8 bg-stone-50 rounded-full border-2 border-zinc-800 shadow-sm transition-transform duration-300 peer-checked:bg-zinc-800 peer-checked:border-stone-50 peer-checked:translate-x-8 cursor-pointer">
        </label>
      </div> */}
    </header>
  )
}