"use client";

import { ThemeContext, ThemeContextType } from "@/app/context/themeContext";
import { useContext } from "react";

interface SectionProps extends React.PropsWithChildren {
  contrast?: boolean;
  title?: string;
  className?: string;
}

export default function Section({ contrast, title, className, children }: SectionProps) {

  const { darkMode } = useContext(ThemeContext) as ThemeContextType;

  const innerWidth = "w-full max-w-[96rem]";

  return (
    <section className={`
      w-full
      flex flex-col items-center
      p-8 md:p-16 lg:p-24
      ${contrast && "bg-zinc-800"} 
      ${!darkMode && !contrast ? "text-zinc-800" : "text-stone-50"}
      `}
    >
      {title && <div className={innerWidth}><h2 className="self-start mb-12 md:mb-18 text-2xl md:text-4xl font-extrabold">{`> ${title}`}</h2></div> }
      <div className={[
        'flex flex-col',
        innerWidth,
        className
      ].filter(Boolean).join(' ')}>
        {children}
      </div>
    </section>
  )
}