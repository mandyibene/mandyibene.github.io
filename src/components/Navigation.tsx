"use client";

import Link from "next/link";
import BurgerCrossButton from "./BurgerCrossButton";
import { useEffect, useState } from "react";
import { textColors, bgColors, hoverTextColors, hoverBgColors } from "@/constants/Colors";

function Navigation() {

  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [isMenuClosed, setIsMenuClosed] = useState(true);
  const [clickedOnce, setClickedOnce] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth >= 1024) { // breakpoint lg
        setIsLargeScreen(true)
        setIsMenuClosed(true);
        setClickedOnce(false);
      } else setIsLargeScreen(false);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = (): void => {
    setIsMenuClosed(!isMenuClosed);
    !clickedOnce && setClickedOnce(!clickedOnce);
  }

  const links: { [key: string]: string } = {
    link1: "Lien 1",
    link2: "Lien 2",
    link3: "Lien 3"
  }
  
  let color1 = "zinc800";
  let color2 = "stone50";
  let color3 = "zinc500";
  let navClassName = ``;
  let ulClassName = `absolute top-0 -right-[100vw] flex justify-self-end items-center gap-2 bg-stone-300/25 backdrop-blur-xs p-4 rounded-xs ${!isLargeScreen && !isMenuClosed && '-translate-x-[100vw]'} ${isLargeScreen ? 'lg:top-8 lg:right-1/2 lg:translate-x-1/2' : 'w-screen h-screen flex-col py-50 transition-transform duration-500'}`;
  let liClassName = `p-2 ${textColors[color3]} opacity-100 rounded-xs transition-colors duration-200 ${hoverTextColors[color2]} ${hoverBgColors[color1]}`;
  let linkClassName = `block uppercase font-semibold text-lg`;

  let burgerPosition = `absolute top-1/2 right-10 transform -translate-y-1/2`;

  return (
    <nav className={navClassName}>
      <ul className={ulClassName}>
        {Object.keys(links).map((key, i) => (
          <li className={liClassName} key={i}>
            <Link className={linkClassName} href={key}>{links[key]}</Link>
          </li>
        ))}
      </ul>
      <BurgerCrossButton responsive={"lg:hidden"} position={burgerPosition} color={bgColors[color1]} isIconBurger={isMenuClosed} clickedOnce={clickedOnce} onClick={toggleMenu} />
    </nav>
  );
}

export default Navigation;
