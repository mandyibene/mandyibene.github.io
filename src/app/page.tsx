"use client";

import { useRef } from "react";
import { useIsVisible } from "./hooks/parallax";

export default function Home() {
  
  const ref1 = useRef<HTMLHeadingElement>(null);
  const isVisible1 = useIsVisible(ref1);

  let h1Text = "Mon\u00A0portfolio";
  let h1ClassName = `static mt-12 text-center text-9xl font-extrabold `;
  let h1SpanClassname = `inline-block transition transform ease-in duration-300 ${isVisible1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`;

  return (
    <main className="relative top-O flex flex-col">
      <h1 ref={ref1} className={h1ClassName}>
        {h1Text.split('').map((charac, i) => {
          return <span key={`h1-${i}`} className={`${h1SpanClassname}`} style={{ transitionDelay: `${(i + 1) * 10}ms` }}>{charac}</span>
        })}
      </h1>
    </main>
  );
}
