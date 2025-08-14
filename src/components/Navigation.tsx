"use client";

import BurgerCrossButton from "./BurgerCrossButton";
import { useContext, useState } from "react";
import { textColors, hoverTextColors, hoverBgColors } from "@/constants/Colors";
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
  
  const color1 = "zinc800";
  const color2 = "stone50";
  const color3 = "zinc500";
  
  const navClassName = `flex`;
  
  const liClassName = `opacity-100 rounded-xs ${hoverBgColors[color1]}   dark:hover:bg-stone-50`;
  
  const linkClassName = `group block p-2 uppercase font-semibold text-xl lg:text-lg ${textColors[color3]} dark:text-stone-50 ${hoverTextColors[color2]} dark:hover:text-zinc-900`;

  const logoClassName = `fill-zinc-800 group-hover:fill-stone-50 dark:fill-stone-50 dark:group-hover:fill-zinc-800`;
  const logoSize = 20;
  
  const ulWrapperClassName = `absolute top-0 -right-[100vw] flex flex-col justify-center items-center bg-stone-300/50 backdrop-blur-sm w-screen h-screen lg:size-auto p-4 rounded-xs ${!isMenuClosed && '-translate-x-[100vw]'} lg:top-8 lg:right-1/2 lg:translate-x-1/2 transition-transform duration-500  `
  const ulClassName = `flex flex-col lg:flex-row justify-center items-center size-[40%] lg:size-auto gap-4 lg:gap-0 bg-stone-50 dark:bg-zinc-900 rounded-xs`;

  const burgerPosition = `absolute top-1/2 right-10 transform -translate-y-1/2`;
  const burgerColors = `bg-zinc-800 dark:bg-stone-50`;

  return (
    <nav className={navClassName}>
      
      <div className={ulWrapperClassName}>
        <ul className={ulClassName}>
          <li className={liClassName}>
            <a href="https://linkedin.com/in/mandy-ibene" target="_blank" className={`flex flex-row gap-2 items-center ${linkClassName}`}>
              <LinkedinLogo className={logoClassName} width={logoSize} height={logoSize}  />
              <span>LinkedIn</span>
            </a>
          </li>
          <li className={liClassName}>
            <a href="https://github.com/mandyibene" target="_blank" className={`flex flex-row gap-2 items-center ${linkClassName}`}>
              <GithubLogo className={logoClassName} width={logoSize} height={logoSize} />
              <span>GitHub</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="relative w-16 h-8 mb-1 me-20 lg:me-0 self-center">
        <input defaultChecked={darkMode} id="switch-component" type="checkbox" onChange={toggleDarkMode} className="peer appearance-none w-16 h-8 bg-zinc-900 rounded-full checked:bg-stone-50 cursor-pointer transition-colors duration-300" />
        <label htmlFor="switch-component" className="absolute top-0 left-0 w-8 h-8 bg-stone-50 rounded-full border-2 border-zinc-900 shadow-sm transition-transform duration-300 peer-checked:bg-zinc-900 peer-checked:border-stone-50 peer-checked:translate-x-8 cursor-pointer"></label>
      </div>

      <BurgerCrossButton responsive={"lg:hidden"} position={burgerPosition} color={burgerColors} isIconBurger={isMenuClosed} clickedOnce={clickedOnce} onClick={toggleMenu} />

    </nav>
  );
}

export default Navigation;
