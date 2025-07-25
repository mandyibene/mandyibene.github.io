"use client";

import { useRef } from "react";
import { useIsVisible } from "./hooks/parallax";

export default function Home() {
  
  const ref1 = useRef<HTMLHeadingElement>(null);
  const isVisible1 = useIsVisible(ref1);

  const h1Text = "Mandy\u00A0Ibéné";
  const h1ClassName = `static mt-12 text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold`;
  const h1SpanClassname = `inline-block transition transform ease-in duration-300 ${isVisible1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`;

  return (
    <main className="relative top-O flex flex-col">
      <h1 ref={ref1} className={h1ClassName}>
        {h1Text.split('').map((charac, i) => {
          return <span key={`h1-${i}`} className={`${h1SpanClassname}`} style={{ transitionDelay: `${(i + 1) * 10}ms` }}>{charac}</span>
        })}
      </h1>
      <div className="h-[150vh] text-5xl font-black">
      </div>
    </main>
  );
}
