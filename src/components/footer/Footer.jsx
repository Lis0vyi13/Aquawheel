import FooterContent from "./FooterContent";
import { DesktopFooterSVG, MobileFooterSVG } from "./FooterSVGs";

import { useLanguage } from "../../hooks/useLanguage";

import { resources } from "../../constants";

const Footer = () => {
  const language = useLanguage();
  const content = resources[language].footer;

  return (
    <footer className="footer">
      <div className="mt-10 relative min-h-[652px] xxs:min-h-[602px] xs:min-h-[562px] sm:min-h-[642px] md:min-h-[900px] lg:min-h-[685px] overflow-hidden">
        <div className="container">
          <DesktopFooterSVG />
          <MobileFooterSVG />

          <FooterContent />

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
      </div>
    </footer>
  );
};

export default Footer;
