import Form from "../Form";

import { useLanguage } from "../../hooks/useLanguage";

import { resources } from "../../constants";
import { DesktopFooterSVG, MobileFooterSVG } from "./FooterSVGs";

const Footer = () => {
  const language = useLanguage();
  const content = resources[language].footer;

  return (
    <section className="footer relative mb-[128px] min-h-[692px] xxs:min-h-[602px] sm:min-h-[642px] md:min-h-[900px] lg:min-h-[685px] overflow-hidden">
      <div className="container">
        <DesktopFooterSVG />
        <MobileFooterSVG />

        <div className="footer__content gap-4 w-full mt-[16px] h-full absolute left-0 top-0">
          <div className="container">
            <div className="flex  flex-col-reverse lg:flex-row lg:justify-between">
              <div className="contacts text-white mt-[83px] xs:mt-[65px] md:mt-[80px] lg:mt-[222px] max-w-[415px]">
                <a
                  className="w-[202px] h-[43px] sm:w-[274px] sm:h-[58px]"
                  href="#"
                >
                  <img src={content.logo} alt="logo" />
                </a>
                <div className="contacts-text mt-[24px] md:mt-[39px] w-fit flex flex-col font-semibold text-[25px] xs:text-[29px] sm:text-[33px]">
                  <a
                    className="duration-300 hover:text-whiteHover"
                    href="tel:+38 067 630 63 68"
                  >
                    {content.tel}
                  </a>
                  <a
                    className="duration-300 inline-block hover:text-whiteHover"
                    href="mailto:sales@start.eu.com"
                  >
                    {content.email}
                  </a>
                </div>
                <div className="address mt-[34px] md:mt-[46px] font-[400] text-[16px]">
                  <address className="not-italic">{content.address}</address>
                  <div className="identification-info flex flex-wrap gap-2">
                    {content.identification.map((info, i) => (
                      <p key={i}>{info}</p>
                    ))}
                  </div>
                </div>
              </div>
              <Form />
            </div>
          </div>
        </div>

        <div className="footer__notes opacity-50 whitespace-nowrap text-white text-[8px] sm:text-[13px] md:text-[16px] absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-10">
          {content.notes.map((note, i) => (
            <p key={i}>{note}</p>
          ))}
          <p>
            All Rights Reserved&nbsp;
            <a
              className="underline duration-300 hover:text-whiteHover"
              href="#"
            >
              privacy policy
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
