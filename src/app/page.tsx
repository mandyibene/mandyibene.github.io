"use client";

import { useEffect, useRef, useState } from "react";
import Section from "@/components/Section";
import { BootstrapLogo, CssLogo, GithubLogo, GitLogo, HtmlLogo, JavascriptLogo, MysqlLogo, NextjsLogo, NodejsLogo, PhpLogo, PostgresqlLogo, PythonLogo, ReactLogo, SqlLogo, SymfonyLogo, TailwindLogo, TypescriptLogo } from "@/components/icons";
import SkillCategory from "@/components/SkillCategory";
import Image from "next/image";
import { basePath } from "@/lib/config";
import { colors } from "@/constants";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";

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

  return (
    <main className="relative top-O w-full flex flex-col items-center">
      {/* quick intro */}
      <Section className="items-center mb-12">
        <h1 ref={ref1} className={`static mt-12 text-center text-4xl md:text-6xl xl:text-7xl font-semibold`}>Mandy Ibéné</h1>

        <div className="flex flex-row h-[1.75rem] md:h-[2.25rem] mt-6 md:mt-12">
          <h2 className="text-2xl md:text-4xl">{jobSpan}</h2>
          <div className="w-[2px] md:w-[3px] flex-1 ms-1 animate-caret"></div>
        </div>
      </Section>

      {/* skills */}
      <Section contrast title="Compétences">
        <SkillCategory name="HTML & CSS" description="Web Design Responsive">
          <HtmlLogo title="HTML" fill="white" />
          <CssLogo title="CSS" fill="white" />
          <TailwindLogo title="Tailwind" />
          <BootstrapLogo title="Bootstrap" />
        </SkillCategory>
        <SkillCategory name="JavaScript" description="Développement Fullstack & Pages Intéractives">
          <JavascriptLogo title="JavaScript" />
          <TypescriptLogo title="TypeScript" />
          <ReactLogo title="React" />
          <NextjsLogo title="Next.js" />
          <NodejsLogo title="Node.js" />
        </SkillCategory>
        <SkillCategory name="PHP" description="Développement Fullstack">
          <PhpLogo title="PHP" />
          <SymfonyLogo title="Symfony" />
        </SkillCategory>
        <SkillCategory name="SQL" description="Gestion de bases de données">
          <SqlLogo title="SQL" />
          <MysqlLogo title="MySQL" className={`${colors.base.fill}`} />
          <PostgresqlLogo title="PostgreSQL" />
        </SkillCategory>
        <SkillCategory name="Git" description="Gestion de versions">
          <GitLogo title="Git" />
          <GithubLogo title="Github" className={`${colors.base.fill}`} />
        </SkillCategory>
        <SkillCategory name="Autres compétences" description="" className="mb-0">
          <PythonLogo title="Python" />
        </SkillCategory>
      </Section>
      
      {/* projects */}
      <Section title="Projets" className="flex-col xl:flex-row">
        <div className="flex-2 flex">
          <Image src={`${basePath}/gte-home-screenshot.png`} alt="Logo Gère Ton École" width="0" height="0" className="self-center w-full xl:max-w-[500px] h-auto mb-6 xl:mb-0 rounded-sm" />
        </div>
        
        <div className="flex-3 h-full xl:ps-12">
          {/* project title */}
          <h3 className="self-center mb-4 text-xl md:text-2xl lg:text-3xl font-bold">Gère Ton École</h3>
          
          {/* project link */}
          <a href="https://geretonecole.fr/" target="_blank" rel="noopener noreferrer" aria-label="Lien externe vers geretonecole.fr" className="flex font-semibold underline hover:no-underline text-lg md:text-xl">geretonecole.fr <ArrowTopRightOnSquareIcon className="size-4 ms-2" /></a>
          
          {/* project description */}
          <div className="mt-8 md:text-lg lg:text-xl">
            {`Gère Ton École est une application web dédiée aux différents acteurs de la vie scolaire. Elle a pour vocation d’apporter une solution de suivi et de gestion simple, gratuite et adaptée pour tous les types d'établissements, allant de l’école primaire à l’université.`}
          </div>
        </div>
      </Section>
      
    </main>
  );
}
