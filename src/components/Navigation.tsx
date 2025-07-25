"use client";

import Link from "next/link";
import BurgerCrossButton from "./BurgerCrossButton";
import { useContext, useEffect, useState } from "react";
import { textColors, bgColors, hoverTextColors, hoverBgColors } from "@/constants/Colors";
import { ThemeContext, ThemeContextType } from "@/app/context/themeContext";

function Navigation() {

  const [isMenuClosed, setIsMenuClosed] = useState(true);
  const [clickedOnce, setClickedOnce] = useState(false);

  const { darkMode, toggleDarkMode } = useContext(ThemeContext) as ThemeContextType;

  const toggleMenu = (): void => {
    setIsMenuClosed(!isMenuClosed);
    !clickedOnce && setClickedOnce(!clickedOnce);
  }

  const links: { [key: string]: string } = {
    link1: "Lien 1",
    link2: "Lien 2",
    link3: "Lien 3"
  }
  
  const color1 = "zinc800";
  const color2 = "stone50";
  const color3 = "zinc500";
  
  const navClassName = `flex`;
  
  const liClassName = `opacity-100 rounded-xs ${hoverBgColors[color1]}   dark:hover:bg-stone-50`;
  
  const linkClassName = `block p-2 uppercase font-semibold text-2xl lg:text-lg ${textColors[color3]} dark:text-stone-50 ${hoverTextColors[color2]} dark:hover:text-zinc-800`;
  
  const ulWrapperClassName = `absolute top-0 -right-[100vw] flex flex-col justify-center items-center bg-stone-300/50 backdrop-blur-sm w-screen h-screen lg:size-auto p-4 rounded-xs ${!isMenuClosed && '-translate-x-[100vw]'} lg:top-8 lg:right-1/2 lg:translate-x-1/2 transition-transform duration-500  `
  const ulClassName = `flex flex-col lg:flex-row justify-center items-center size-[40%] lg:size-auto gap-4 lg:gap-0 bg-stone-50 dark:bg-zinc-800 rounded-xs`;

  const burgerPosition = `absolute top-1/2 right-10 transform -translate-y-1/2`;
  const burgerColors = `bg-zinc-800 dark:bg-stone-50`;

  return (
    <nav className={navClassName}>
      
      <div className={ulWrapperClassName}>
        <ul className={ulClassName}>
          {Object.keys(links).map((key, i) => (
            <li className={liClassName} key={i}>
              <Link className={linkClassName} href={key}>{links[key]}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative w-16 h-8 mb-1 me-20 lg:me-0 self-center">
        <input defaultChecked={darkMode} id="switch-component" type="checkbox" onChange={toggleDarkMode} className="peer appearance-none w-16 h-8 bg-zinc-800 rounded-full checked:bg-stone-50 cursor-pointer transition-colors duration-300" />
        <label htmlFor="switch-component" className="absolute top-0 left-0 w-8 h-8 bg-stone-50 rounded-full border-2 border-zinc-800 shadow-sm transition-transform duration-300 peer-checked:bg-zinc-800 peer-checked:border-stone-50 peer-checked:translate-x-8 cursor-pointer"></label>
      </div>

      <BurgerCrossButton responsive={"lg:hidden"} position={burgerPosition} color={burgerColors} isIconBurger={isMenuClosed} clickedOnce={clickedOnce} onClick={toggleMenu} />

    </nav>
  );
}

export default Navigation;
