import { baseURL } from "@/lib/config";
import { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Mandy Ibéné",
            jobTitle: "Développeuse Web Full-Stack",
            url: `${baseURL}/`,
            sameAs: [
              "https://github.com/mandyibene",
              "https://www.linkedin.com/in/mandy-ibene/"
            ]
          }),
        }}
      />
      {children}
    </>
  );
}