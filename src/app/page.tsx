"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { useIsVisible } from "./hooks/parallax";
import Section from "@/components/Section";
import { BootstrapLogo, CssLogo, GithubLogo, GitLogo, HtmlLogo, JavascriptLogo, LinkedinLogo, MysqlLogo, NextjsLogo, NodejsLogo, PhpLogo, PostgresqlLogo, PythonLogo, ReactLogo, SqlLogo, SymfonyLogo, TailwindLogo, TypescriptLogo } from "@/components/icons";
import { ThemeContext, ThemeContextType } from "./context/themeContext";
import SkillCategory from "@/components/SkillCategory";

export default function Home() {

  useEffect(() => {
    let index = 0;
    for (let letter of job) {
        index++;
        setTimeout(() => {
          setJobSpan((prevState) => prevState + letter);
        }, index*200);
    }
  }, [])

  const { darkMode } = useContext(ThemeContext) as ThemeContextType;

  const [jobSpan, setJobSpan] = useState("> ");
  const job = "Développeuse Web"
  
  const ref1 = useRef<HTMLHeadingElement>(null);
  const isVisible1 = useIsVisible(ref1);

  const h1ClassName = `static mt-12 text-center text-3xl xs:text-5xl md:text-7xl xl:text-8xl font-semibold`;
  

  return (
    <main className="relative top-O w-full flex flex-col items-center">
      {/* quick intro */}
      <Section>
        <h1 ref={ref1} className={h1ClassName}>Mandy Ibéné</h1>

        <div className="flex flex-row h-[1.5rem] xs:h-[1.75rem] md:h-[2.25rem] mt-4 xs:mt-6 md:mt-8">
          <h2 className="xs:text-2xl md:text-4xl">{jobSpan}</h2>
          <div className="w-[2px] md:w-[3px] flex-1 ms-1 animate-caret"></div>
        </div>

        {/* <div className="flex flex-row gap-16 mt-20">
          <a href="https://linkedin.com/in/mandy-ibene" target="_blank" className="flex flex-row gap-4 items-center">
            <LinkedinLogo width={40} height={40}  />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/mandyibene" target="_blank" className="flex flex-row gap-4 items-center">
            <GithubLogo fill={`${darkMode ? "#FAFBFC" : '#1B1F24'}`} width={40} height={40} />
            <span>GitHub</span>
          </a>
        </div> */}
      </Section>

      {/* skills */}
      <Section contrast>
        <SkillCategory name="HTML & CSS" description="Responsive Web Design">
          <HtmlLogo fill="white" />
          <CssLogo fill="white" />
          <TailwindLogo />
          <BootstrapLogo />
        </SkillCategory>
        <SkillCategory name="JavaScript" description="Fullstack Development & Interactive Pages">
          <JavascriptLogo />
          <TypescriptLogo />
          <ReactLogo />
          <NextjsLogo />
          <NodejsLogo />
        </SkillCategory>
        <SkillCategory name="PHP" description="Fullstack Development">
          <PhpLogo />
          <SymfonyLogo />
        </SkillCategory>
        <SkillCategory name="SQL" description="Databases Management">
          <SqlLogo />
          <MysqlLogo className="fill-stone-50" />
          <PostgresqlLogo />
        </SkillCategory>
        <SkillCategory name="Git" description="Gestion de versions">
          <GitLogo />
          <GithubLogo className="fill-stone-50" />
        </SkillCategory>
        <SkillCategory name="Other Skills" description="" marginBottom="0">
          <PythonLogo />
        </SkillCategory>
      </Section>
      
      {/* projects */}
      <Section >
        <div className="flex flex-col w-full">
          <a href="https://geretonecole.fr/" target="_blank">Gère Ton École</a>
          <div className="mt-8">
            Gère Ton École est une application web dédiée aux différents acteurs de la vie scolaire. Elle a pour vocation d’apporter une solution de suivi et de gestion simple, gratuite et adaptée pour tous les types d'établissements, allant de l’école primaire à l’université.
          </div>
        </div>
      </Section>
      
    </main>
  );
}
