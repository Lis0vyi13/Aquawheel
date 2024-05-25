import { Link } from "react-router-dom";

import Button from "../ui/button/Button";

import { useLanguage } from "../hooks/useLanguage";

import { resources } from "../constants";

const PageNotFound = () => {
  const language = useLanguage();
  const content = resources[language].pageNotFound;

  return (
    <>
      <div className="not-found mt-[80px] mb-[80px] sm:mb-[103px] text-main sm:mt-[140px] w-full flex flex-col justify-center items-center">
        <p className="relative z-[1] text-[22px] font-[300] sm:text-[37px]">
          {content.title}
        </p>
        <h1 className="font-[800] text-[267px]">404</h1>
        <Link to={"/"} className="w-[412px] h-[55px]">
          <Button isBlue>{content.btn}</Button>
        </Link>
      </div>
    </>
  );
};

export default PageNotFound;
