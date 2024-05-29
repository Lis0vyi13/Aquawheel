import { Link } from "react-router-dom";

import { useLanguage } from "../../hooks/useLanguage";
import { useActions } from "../../hooks/useActions";

import Burger from "./Burger";
import DropdownLangMenu from "./DropdownLangMenu";
import TransparentButton from "../../ui/TransparentButton";
import BurgerMenu from "./BurgerMenu";

import { resources } from "../../constants";

import logo from "/icons/logo.svg";

const Navbar = () => {
  const language = useLanguage();
  const { toggleForm } = useActions();

  const content = resources[language].navbar;

  return (
    <header className={`header bg-white py-7 z-10 sticky top-0`}>
      <div className="container navbar-container">
        <nav className="flex items-center justify-between">
          <div className="relative z-10 logo">
            <Link to="/">
              <img src={logo} alt="company logo" />
            </Link>
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
      <BurgerMenu />
    </header>
  );
};

export default Navbar;
