"use client";

import Link from "next/link";
import Navigation from "./Navigation";


export default function Header() {

  return (
    <header className="fixed top-0 z-10 px-8 w-full h-[140px] flex justify-between bg-stone-50 dark:bg-zinc-900 transition-colors duration-200">
      
      <div className={`text-4xl flex`}>
        <Link href="/" className="md:hidden self-center">MI.</Link>
        <Link href="/" className="hidden md:inline self-center">Mandy I.</Link>
        </div>
      
      <Navigation />
      
    </header>
  )
}