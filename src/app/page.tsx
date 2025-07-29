"use client";

import { useRef } from "react";
import { useIsVisible } from "./hooks/parallax";
import Section from "@/components/Section";

export default function Home() {
  
  const ref1 = useRef<HTMLHeadingElement>(null);
  const isVisible1 = useIsVisible(ref1);

  const h1Text = "Mandy\u00A0Ibéné";
  const h1ClassName = `static mt-12 text-center text-3xl xs:text-5xl md:text-7xl xl:text-8xl font-semibold`;
  const h1SpanClassname = `inline-block transition transform ease-in duration-300 ${isVisible1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`;

  return (
    <main className="relative top-O w-full flex flex-col items-center">
      <Section>
        <h1 ref={ref1} className={h1ClassName}>
          {h1Text.split('').map((charac, i) => {
            return <span key={`h1-${i}`} className={`${h1SpanClassname}`} style={{ transitionDelay: `${(i + 1) * 10}ms` }}>{charac}</span>
          })}
        </h1>
      </Section>
      <Section contrast>
        hola
      </Section>
      <Section contrast>
        hola
      </Section>
      <Section contrast>
        hola
      </Section>
      <Section contrast>
        hola
      </Section>
      <Section contrast>
        hola
      </Section>
    </main>
  );
}
