"use client";

import Link from "next/link";
import Navigation from "./Navigation";


export default function Header() {

  return (
    <header className="fixed top-0 z-10 px-8 w-full h-[140px] flex justify-between">
      
      <div className={`text-4xl flex`}><Link href="/" className="self-center">Mandy I.</Link></div>
      
      <Navigation />
      
    </header>
  )
}