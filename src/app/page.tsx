"use client";

import { useEffect, useRef, useState } from "react";
import Section from "@/components/Section";
import { BootstrapLogo, CssLogo, GithubLogo, GitLogo, HtmlLogo, JavascriptLogo, MysqlLogo, NextjsLogo, NodejsLogo, PhpLogo, PostgresqlLogo, PythonLogo, ReactLogo, SqlLogo, SymfonyLogo, TailwindLogo, TypescriptLogo } from "@/components/icons";
import SkillCategory from "@/components/SkillCategory";
import Image from "next/image";
import { basePath } from "@/lib/config";
import { colors } from "@/constants";

export default function Home() {

  useEffect(() => {
    let index = 0;
    for (const letter of job) {
        index++;
        setTimeout(() => {
          setJobSpan((prevState) => prevState + letter);
        }, index*200);
    }
  }, [])

  const [jobSpan, setJobSpan] = useState("> ");
  const job = "Développeuse Web"
  
  const ref1 = useRef<HTMLHeadingElement>(null);

  const h1ClassName = `static mt-12 text-center text-3xl xs:text-5xl md:text-7xl xl:text-8xl font-semibold`;  

  return (
    <main className="relative top-O w-full flex flex-col items-center">
      {/* quick intro */}
      <Section className="items-center">
        <h1 ref={ref1} className={h1ClassName}>Mandy Ibéné</h1>

        <div className="flex flex-row h-[1.5rem] xs:h-[1.75rem] md:h-[2.25rem] mt-4 xs:mt-6 md:mt-8">
          <h3 className="xs:text-2xl md:text-4xl">{jobSpan}</h3>
          <div className="w-[2px] md:w-[3px] flex-1 ms-1 animate-caret"></div>
        </div>
      </Section>

      {/* skills */}
      <Section contrast>
        <SkillCategory name="HTML & CSS" description="Responsive Web Design">
          <HtmlLogo title="HTML" fill="white" />
          <CssLogo title="CSS" fill="white" />
          <TailwindLogo title="Tailwind" />
          <BootstrapLogo title="Bootstrap" />
        </SkillCategory>
        <SkillCategory name="JavaScript" description="Fullstack Development & Interactive Pages">
          <JavascriptLogo title="JavaScript" />
          <TypescriptLogo title="TypeScript" />
          <ReactLogo title="React" />
          <NextjsLogo title="Next.js" />
          <NodejsLogo title="Node.js" />
        </SkillCategory>
        <SkillCategory name="PHP" description="Fullstack Development">
          <PhpLogo title="PHP" />
          <SymfonyLogo title="Symfony" />
        </SkillCategory>
        <SkillCategory name="SQL" description="Databases Management">
          <SqlLogo title="SQL" />
          <MysqlLogo title="MySQL" className={`${colors.base.fill}`} />
          <PostgresqlLogo title="PostgreSQL" />
        </SkillCategory>
        <SkillCategory name="Git" description="Gestion de versions">
          <GitLogo title="Git" />
          <GithubLogo title="Github" className={`${colors.base.fill}`} />
        </SkillCategory>
        <SkillCategory name="Other Skills" description="" marginBottom="0">
          <PythonLogo title="Python" />
        </SkillCategory>
      </Section>
      
      {/* projects */}
      <Section className="flex-col 2xl:flex-row">
        <div className="flex-2 flex flex-col">
          <h3 className="xs:text-4xl 3xl:text-5xl mb-12 self-center">Gère Ton École</h3>
          <Image src={`${basePath}/gte-logo.png`} alt="Logo Gère Ton École" width="0" height="0" className="w-[150px] 2xl:w-[150px] h-auto self-center mb-16" />
        </div>
        <div className="flex-3 h-full 2xl:ps-24">
          <a href="https://geretonecole.fr/" target="_blank" className="underline font-bold">geretonecole.fr</a>
          <div className="mt-8">
            {`Gère Ton École est une application web dédiée aux différents acteurs de la vie scolaire. Elle a pour vocation d’apporter une solution de suivi et de gestion simple, gratuite et adaptée pour tous les types d'établissements, allant de l’école primaire à l’université.`}
          </div>
        </div>
      </Section>
      
    </main>
  );
}
