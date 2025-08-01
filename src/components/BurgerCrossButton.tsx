"use client";

interface BurgerIconProps {
  /** css */
  color: string;
  position: string;
  responsive: string
  /** for conditional rendering */
  isIconBurger: boolean;
  clickedOnce: boolean;
  /** triggered when button is clicked on  */
  onClick: () => void;
}

/**
 * Button switching appearance between burger and cross when clicking on it
 */
function BurgerCrossButton({ responsive, position, color, isIconBurger, clickedOnce, onClick }: BurgerIconProps) {

  const strokeSize = 'h-[3px]';
  const strokeClassName = `${color} ${strokeSize} rounded-full w-full transition duration-500`;

  return (
    <button onClick={() => onClick()} className={`${responsive} ${position} group w-10 h-10 flex flex-col gap-3 cursor-pointer`}>
      <div className={`${strokeClassName} ${!isIconBurger ? 'scale-0' : 'scale-100'}`}></div>
      <div className={strokeSize}>
        <div className={`${strokeClassName} ${!isIconBurger && 'animate-burger-to-cross-1'} ${isIconBurger && clickedOnce &&'animate-cross-to-burger-1'}`}></div>
        <div className={`${strokeClassName} ${!isIconBurger && 'animate-burger-to-cross-2'} ${isIconBurger && clickedOnce &&'animate-cross-to-burger-2'} relative -top-[3px]`}></div>
      </div>
      <div className={`${strokeClassName} ${!isIconBurger ? 'scale-0' : 'scale-100'}`}></div>   
    </button>
  )
}

export default BurgerCrossButton