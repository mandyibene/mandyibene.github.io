"use client";

import { colors } from "@/constants";
import { Children, cloneElement, isValidElement } from "react";

interface SkillCategoryProps extends React.PropsWithChildren {
  name: string;
  description: string;
  className?: string;
}

export default function SkillCategory({ name, description, className= "mb-20", children }: SkillCategoryProps) {

  // adding size of logos here so I don't have to add it myself on each of them
  const styledChildren = Children.map(children, child  => {
    if (isValidElement<{ className: any }>(child)) {
      return cloneElement(child, {className: `${child.props.className} size-[40px] sm:size-[50px] xl:size-[60px]`})
    }
  })

  return (
    <div className={`
      flex flex-col xl:flex-row justify-between gap-6 xl:gap-12
      w-full 
      ${className}
      `}
    >
      {/* names and description */}
      <div className="flex flex-col">
        <h3 className={`mb-4 text-xl md:text-2xl lg:text-3xl ${colors.base.text}`}>{name}</h3>
        <span className={`text-lg md:text-xl lg:text-2xl ${colors.subtle.text}`}>{description}</span>
      </div>

      {/* logos */}
      <div className="flex flex-row xl:justify-end gap-6 xl:gap-12">
        {styledChildren}
      </div>
    </div>
  )
}