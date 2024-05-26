import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import { useLanguage } from "../../hooks/useLanguage";
import { useBurger } from "../../hooks/useBurger";
import { useActions } from "../../hooks/useActions";

import Burger from "./Burger";
import DropdownLangMenu from "./DropdownLangMenu";
import FooterContent from "../footer/FooterContent";

import TransparentButton from "../../ui/TransparentButton";

import { resources } from "../../constants";

import logo from "/icons/logo.svg";

const Navbar = () => {
  const language = useLanguage();
  const content = resources[language].navbar;
  const isBurgerOpen = useBurger();
  const burgerMenuPortal = useRef();
  const { toggleForm, toggleBurger } = useActions();

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

  return (
    <header className={`header bg-white py-7 z-10 sticky top-0`}>
      <div className="container navbar-container">
        <nav className="flex items-center justify-between">
          <div className="relative z-10 logo">
            <a href="#">
              <img src={logo} alt="company logo" />
            </a>
          </div>
          <div>
            <div className="hidden xsSm:flex gap-7 md:gap-12 items-center">
              <div className="min-w-[171px] min-h-[36px]">
                <TransparentButton
                  onClick={() => toggleForm()}
                  href={content?.btn.href}
                >
                  {content?.btn.title}
                </TransparentButton>
              </div>
              <DropdownLangMenu />
            </div>

            <div className={`relative z-[1000] xsSm:hidden`}>
              <Burger />
            </div>
          </div>
        </nav>
      </div>
      {createPortal(
        <div
          ref={burgerMenuPortal}
          className={`xsSm:hidden fixed z-50 left-0 top-0 duration-300 bg-[linear-gradient(248deg,_#88d2f6_0%,_#43acdf_100%)] w-full h-full ${
            isBurgerOpen ? "" : "opacity-0 pointer-events-none"
          }`}
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
        </div>,
        document.getElementById("root"),
      )}
    </header>
  );
};

export default Navbar;
