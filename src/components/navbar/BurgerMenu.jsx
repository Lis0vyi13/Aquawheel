import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

import { motion } from "framer-motion";

import { useBurger } from "../../hooks/useBurger";
import { useActions } from "../../hooks/useActions";

import Burger from "./Burger";
import DropdownLangMenu from "./DropdownLangMenu";
import FooterContent from "../footer/FooterContent";

const BurgerMenu = () => {
  const isBurgerOpen = useBurger();
  const { toggleBurger } = useActions();
  const burgerMenuPortal = useRef();

  useEffect(() => {
    document.body.style.overflowY = isBurgerOpen ? "hidden" : "auto";

    const handleResize = () => {
      if (window.innerWidth < 590 || !isBurgerOpen) return;

      if (
        burgerMenuPortal.current &&
        !burgerMenuPortal.current.classList.contains("pointer-events-none")
      )
        toggleBurger();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isBurgerOpen, toggleBurger]);

  return createPortal(
    <motion.div
      ref={burgerMenuPortal}
      className={`xsSm:hidden fixed z-50 left-0 top-0 duration-300 bg-[linear-gradient(248deg,_#88d2f6_0%,_#43acdf_100%)] w-full h-full ${
        isBurgerOpen ? "" : "opacity-0 pointer-events-none"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isBurgerOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="burger-menu container relative z-[50]">
        <div className="flex items-center mt-[2.6rem]">
          <div className="absolute left-[20px]">
            <DropdownLangMenu color="white" />
          </div>
          <div className={`absolute right-[20px] z-[1000] xsSm:hidden`}>
            <Burger />
          </div>
        </div>
        <FooterContent />
      </div>
    </motion.div>,
    document.getElementById("root"),
  );
};

export default BurgerMenu;
