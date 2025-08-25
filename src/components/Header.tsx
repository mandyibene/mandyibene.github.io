"use client";

import Link from "next/link";
import Navigation from "./Navigation";
import { colors } from "@/constants";
import { useAnyElementOverlap } from "@/app/hooks/animations";
import { useSectionsRefs } from "@/app/hooks/context";
import { useRef } from "react";


export default function Header() {
  // Overlap logic
  const linkRef = useRef<HTMLAnchorElement>(null);
  const { sectionsRefs, refsReady } = useSectionsRefs();
  // Detect if there is an overlap with any dark section
  const isOverlapping = useAnyElementOverlap(linkRef, sectionsRefs, refsReady);

  const linkClassName = `self-center  ${isOverlapping ? colors.base.text : colors.strong.text} ${colors.base.darkText} transition duration-500`

  return (
    <header className={`fixed top-0 z-10 px-8 w-full h-[140px] flex justify-between transition-colors duration-200`}>
      
      <div className={`text-4xl flex`}>
        <Link ref={linkRef} href="/" className={`${linkClassName} md:hidden`}>MI.</Link>
        <Link ref={linkRef} href="/" className={`${linkClassName} hidden md:inline`}>Mandy I.</Link>
      </div>
      
      <Navigation />
      
    </header>
  )
}