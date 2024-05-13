import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import Burger from "./Burger";
import DropdownLangMenu from "./DropdownLangMenu";

import TransparentButton from "../../ui/TransparentButton";

import { resources } from "../../constants";

import { useLanguage } from "../../hooks/useLanguage";

import logo from "/icons/logo.svg";

const Navbar = () => {
  const language = useLanguage();
  const content = resources[language].navbar;
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = isBurgerOpen ? "hidden" : "auto";
  }, [isBurgerOpen]);

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
                <TransparentButton href={content?.btn.href}>
                  {content?.btn.title}
                </TransparentButton>
              </div>
              <DropdownLangMenu />
            </div>

            <div className={`relative z-[1000] xsSm:hidden`}>
              <Burger
                isOpen={isBurgerOpen}
                onClick={() => setIsBurgerOpen((state) => !state)}
              />
            </div>
          </div>
        </nav>
      </div>
      {createPortal(
        <section
          className={`xsSm:hidden fixed z-50 left-0 top-0 duration-300 bg-[linear-gradient(248deg,_#88d2f6_0%,_#43acdf_100%)] ${
            isBurgerOpen
              ? "w-full h-full"
              : "w-0 h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="burger-menu container relative z-[50]">
            <div className="flex justify-between items-center mt-[1.6rem]">
              <DropdownLangMenu color="white" />
              <div className={`relative z-[1000] xsSm:hidden`}>
                <Burger
                  isOpen={isBurgerOpen}
                  onClick={() => setIsBurgerOpen((state) => !state)}
                />
              </div>
            </div>
          </div>
        </section>,
        document.getElementById("root"),
      )}
    </header>
  );
};

export default Navbar;
