"use client";

import { useContext, useRef } from "react";
import { useIsVisible } from "./hooks/parallax";
import Section from "@/components/Section";
import { BootstrapLogo, CssLogo, GithubLogo, GitLogo, HtmlLogo, JavascriptLogo, LinkedinLogo, MysqlLogo, NextjsLogo, NodejsLogo, PhpLogo, PostgresqlLogo, PythonLogo, ReactLogo, SqlLogo, SymfonyLogo, TailwindLogo, TypescriptLogo } from "@/components/icons";
import { ThemeContext, ThemeContextType } from "./context/themeContext";

export default function Home() {

  const { darkMode } = useContext(ThemeContext) as ThemeContextType;
  
  const ref1 = useRef<HTMLHeadingElement>(null);
  const isVisible1 = useIsVisible(ref1);

  const h1Text = "Mandy\u00A0Ibéné";
  const h1ClassName = `static mt-12 text-center text-3xl xs:text-5xl md:text-7xl xl:text-8xl font-semibold`;
  const h1SpanClassname = `inline-block transition transform ease-in duration-300 ${isVisible1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`;

  return (
    <main className="relative top-O w-full flex flex-col items-center">

      {/* quick intro */}
      <Section>
        <h1 ref={ref1} className={h1ClassName}>
          {h1Text.split('').map((charac, i) => {
            return <span key={`h1-${i}`} className={`${h1SpanClassname}`} style={{ transitionDelay: `${(i + 1) * 10}ms` }}>{charac}</span>
          })}
        </h1>
        <span className="mt-4 xs:mt-6 md:mt-8 text-center xs:text-2xl md:text-4xl">Développeuse web</span>
        <div className="flex flex-row gap-16 mt-16">
          <a href="https://linkedin.com/in/mandy-ibene" target="_blank" className="flex flex-row gap-4 items-center">
            <LinkedinLogo width={40} height={40}  />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/mandyibene" target="_blank" className="flex flex-row gap-4 items-center">
            <GithubLogo fill={`${darkMode ? "#FAFBFC" : '#1B1F24'}`} width={40} height={40} />
            <span>GitHub</span>
          </a>
        </div>
      </Section>

      {/* skills */}
      <Section contrast>
        {/* <ul className="w-full">
          <li>HTML</li>
          <li>CSS, Sass, Tailwind, Bootstrap</li>
          <li>JavaScript, TypeScript, React, Node</li>
          <li>PHP, Symfony 5</li>
          <li>SQL, MySQL</li>
          <li>npm</li>
          <li>Git, Github</li>
          <li>Wordpress</li>
          <li>C++, Python, Java</li>
          <li>VS Code</li>
        </ul> */}
        <div className="w-full flex flex-row justify-around gap-16 mb-16">
          <HtmlLogo fill="white" />
          <CssLogo fill="white" />
          <TailwindLogo />
          <BootstrapLogo />
        </div>
        <div className="w-full flex flex-row justify-around gap-16 mb-16">
          <JavascriptLogo />
          <TypescriptLogo />
          <ReactLogo />
          <NextjsLogo />
        </div>
        <div className="w-full flex flex-row justify-around gap-16 mb-16">
          <NodejsLogo />
          <PhpLogo />
          <SymfonyLogo />
          <SqlLogo />
        </div>
        <div className="w-full flex flex-row justify-around gap-16">
          <PostgresqlLogo />
          <MysqlLogo />
          <GitLogo />
          <GithubLogo fill="#FAFBFC" />
          <PythonLogo />
        </div>
      </Section>
      
      {/* projects */}
      <Section >
        <div className="flex flex-col w-full">
          <a href="https://geretonecole.fr/" target="_blank">Gère Ton École</a>
          <div className="mt-8">
            Gère Ton École est une application web dédiée aux différents acteurs de la vie scolaire. Elle a pour vocation d’apporter une solution de suivi et de gestion simple
            gratuite, et adaptée pour tous les types d'établissements, allant de l’école
            primaire à l’université.
          </div>
        </div>
      </Section>
      
    </main>
  );
}
