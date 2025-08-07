"use client";

import { Children, cloneElement, isValidElement } from "react";

interface SkillCategoryProps extends React.PropsWithChildren {
  name: string;
  description: string;
  marginBottom?: string;
}

export default function SkillCategory({ name, description, marginBottom= "mb-20", children }: SkillCategoryProps) {

  // adding size of logos here so I don't have to add it myself on each of them
  const styledChildren = Children.map(children, child  => {
    if (isValidElement<{ className: any }>(child)) {
      return cloneElement(child, {className: `${child.props.className} size-[50px] sm:size-[60px] md:size-[80px] 3xl:size-[70px]`})
    }
  })

  return (
    <div className={`flex flex-col 3xl:flex-row justify-between gap-16 w-full ${marginBottom}`}>
      <div className="flex flex-col 3xl:w-1/2">
        <span className="text-2xl sm:text-4xl text-stone-50 mb-4">{`> ${name}`}</span>
        <span className="text-lg sm:text-2xl text-stone-400">{description}</span>
      </div>
      <div className="flex flex-row justify-center sm:justify-start 3xl:justify-end gap-3 sm:gap-12 3xl:w-1/2">
        {styledChildren}
      </div>
    </div>
  )
}