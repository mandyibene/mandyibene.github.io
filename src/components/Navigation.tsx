"use client";

import BurgerCrossButton from "./BurgerCrossButton";
import { useContext, useState } from "react";
import { colors } from "@/constants";
import { ThemeContext, ThemeContextType } from "@/app/context/themeContext";
import { GithubLogo, LinkedinLogo } from "./icons";

function Navigation() {

  const [isMenuClosed, setIsMenuClosed] = useState(true);
  const [clickedOnce, setClickedOnce] = useState(false);

  const { darkMode, toggleDarkMode } = useContext(ThemeContext) as ThemeContextType;

  const toggleMenu = (): void => {
    setIsMenuClosed(!isMenuClosed);
    if (!clickedOnce) {
      setClickedOnce(!clickedOnce);
    }
  }
  
  // list item classes
  const liClassName = `opacity-100 rounded-xs ${colors.contrast.hoverBg} ${colors.base.darkHoverBg}`;
  
  // anchor classes
  const anchorClassName = `group block p-2 uppercase font-semibold text-xl lg:text-lg ${colors.muted.text} ${colors.base.darkText} ${colors.base.hoverText} ${colors.strong.darkHoverText}`;

  // logo classes
  const logoClassName = `${colors.contrast.fill} ${colors.base.groupHoverFill} ${colors.base.darkFill} ${colors.strong.darkGroupHoverFill}`;
  const logoSize = 20;
  
  // list classes
  const ulWrapperClassName = `absolute top-0 -right-[100vw] flex flex-col justify-center items-center bg-stone-200/50 dark:bg-zinc-200/50 w-screen h-screen lg:size-auto p-4 rounded-xs ${!isMenuClosed && '-translate-x-[100vw]'} lg:top-8 lg:right-1/2 lg:translate-x-1/2 transition-transform duration-500`
  const ulClassName = `flex flex-col lg:flex-row justify-center items-center w-[80%] h-[50%] sm:w-[60%] sm:h-[60%] lg:size-auto p-4 lg:p-0 gap-4 lg:gap-0 ${colors.base.bg} ${colors.strong.darkBg} rounded-xs`;

  // burger icon classes
  const burgerPosition = `absolute top-1/2 right-10 transform -translate-y-1/2`;
  const burgerColors = `${colors.contrast.bg} ${colors.base.darkBg}`;

  return (
    <nav className="flex">
      
      {/* links */}
      <div className={ulWrapperClassName}>
        <ul className={ulClassName}>
          <li className={liClassName}>
            <a href="https://linkedin.com/in/mandy-ibene" target="_blank" className={`flex flex-row gap-2 items-center ${anchorClassName}`}>
              <LinkedinLogo className={logoClassName} width={logoSize} height={logoSize}  />
              <span>LinkedIn</span>
            </a>
          </li>
          <li className={liClassName}>
            <a href="https://github.com/mandyibene" target="_blank" className={`flex flex-row gap-2 items-center ${anchorClassName}`}>
              <GithubLogo className={logoClassName} width={logoSize} height={logoSize} />
              <span>GitHub</span>
            </a>
          </li>
        </ul>
      </div>

      {/* dark mode toggler */}
      <div className="relative w-16 h-8 mb-1 me-20 lg:me-0 self-center">
        <input defaultChecked={darkMode} id="switch-component" type="checkbox" onChange={toggleDarkMode} className="peer appearance-none w-16 h-8 bg-zinc-900 rounded-full checked:bg-stone-50 cursor-pointer transition-colors duration-300" />
        <label htmlFor="switch-component" className={`absolute top-0 left-0 w-8 h-8 rounded-full border-2 ${colors.strong.border} shadow-sm transition-transform duration-300 ${colors.base.bg} ${colors.strong.peerCheckedBg} ${colors.base.peerCheckedBorder} peer-checked:translate-x-8 cursor-pointer`}></label>
      </div>

      {/* burger button */}
      <BurgerCrossButton responsive={"lg:hidden"} position={burgerPosition} color={burgerColors} isIconBurger={isMenuClosed} clickedOnce={clickedOnce} onClick={toggleMenu} />

    </nav>
  );
}

export default Navigation;
