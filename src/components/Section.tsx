"use client";

import { ThemeContext, ThemeContextType } from "@/app/context/themeContext";
import { forwardRef, RefObject, useContext } from "react";

interface SectionProps extends React.PropsWithChildren {
  contrast?: boolean;
  title?: string;
  className?: string;
  ref?: RefObject<HTMLElement | null>;
  animate?: string;
}

export const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  { contrast, title, className, animate, children },
  ref
) {

  const { darkMode } = useContext(ThemeContext) as ThemeContextType;

  const innerWidth = "w-full max-w-[96rem]";

  return (
    <section ref={ref} className={`
      w-full
      flex flex-col items-center
      p-8 md:p-16 lg:p-24
      ${contrast && "bg-zinc-800"} 
      ${!darkMode && !contrast ? "text-zinc-800" : "text-stone-50"}
      ${animate ? `opacity-0 ${animate}` : ''}
      `}
    >
      {title && <div className={innerWidth}><h2 className="self-start mb-12 md:mb-18 text-2xl md:text-4xl font-semibold">{`> ${title}`}</h2></div> }
      <div className={[
        'flex flex-col',
        innerWidth,
        className
      ].filter(Boolean).join(' ')}>
        {children}
      </div>
    </section>
  );
});