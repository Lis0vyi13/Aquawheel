import { Link } from "react-router-dom";

import { useLanguage } from "../hooks/useLanguage";

import { resources } from "../constants";

const Contacts = ({ sidebarForm }) => {
  const language = useLanguage();
  const content = resources[language].footer;

  return (
    <div
      className={` ${
        sidebarForm ? "hidden lg:block" : "block"
      } contacts text-white mt-[53px] xs:mt-[65px] md:mt-[80px] lg:mt-[222px] max-w-[415px]`}
    >
      <Link
        className="inline-block w-[202px] h-[43px] sm:w-[274px] sm:h-[58px]"
        to="#"
      >
        <img src={content.logo} alt="logo" />
      </Link>
      <div className="contacts-text mt-[24px] md:mt-[39px] w-fit flex flex-col font-semibold text-[25px] xs:text-[29px] sm:text-[33px]">
        <a
          className="duration-300 hover:text-whiteHover"
          href={`tel:${content.tel}`}
        >
          {content.tel}
        </a>
        <a
          className="duration-300 inline-block hover:text-whiteHover"
          href={`mailto:${content.email}`}
        >
          {content.email}
        </a>
      </div>
      <div className="address mt-[34px] md:mt-[46px] font-[300] text-[16px]">
        <address className="not-italic">{content.address}</address>
        <div className="identification-info flex flex-wrap gap-2">
          {content.identification.map((info, i) => (
            <p key={i}>{info}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
