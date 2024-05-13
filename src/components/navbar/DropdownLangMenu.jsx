import { useState } from "react";

import { LANGUAGES } from "../../constants";

import { useLanguage } from "../../hooks/useLanguage";
import { useActions } from "../../hooks/useActions";

const DropdownLangMenu = () => {
  const language = useLanguage();
  const { changeLanguage } = useActions();
  const [selectedLanguage, setSelectedLanguage] = useState(language);
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    changeLanguage(lang);
    setIsDropdownOpened(false);
  };

  return (
    <div className="relative z-10 font-[800] w-fit text-[26px] cursor-pointer text-white xsSm:text-main">
      <div
        className="flex items-center gap-1 select-none"
        onClick={() => setIsDropdownOpened(!isDropdownOpened)}
      >
        <div className="relative z-10 selected-language px-1 cursor-pointer">
          {selectedLanguage}
        </div>
        <div>
          <svg
            width="14"
            height="9"
            viewBox="0 0 14 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="stroke-white sm:stroke-[#43ACDF]"
              d="M0.999023 1.5L6.99902 7.5L12.999 1.5"
              strokeWidth="2"
            />
          </svg>
        </div>
        {isDropdownOpened && (
          <ul className="absolute top-[42px] left-0 sm:left-1/2 sm:-translate-x-1/2 select">
            {LANGUAGES.map(
              (lang) =>
                lang !== selectedLanguage && (
                  <li
                    className="relative duration-300 rounded-[13px] py-2 outline px-4 outline-[1px] active:text-main active:bg-white sm:active: sm:bg-white hover:text-whiteHover sm:hover:text-mainHover w-full p-1 cursor-pointer"
                    onClick={() => handleLanguageChange(lang)}
                    key={lang}
                  >
                    {lang}
                  </li>
                ),
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropdownLangMenu;
