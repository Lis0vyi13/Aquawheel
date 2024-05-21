import { useLanguage } from "../../hooks/useLanguage";

import { resources } from "../../constants";

import styles from "./marquee.module.css";

const Marquee = () => {
  const language = useLanguage();
  const content = resources[language].marquee;

  return (
    <section className="marquee">
      <div className="mx-auto max-w-[1460px] overflow-hidden">
        <div className="flex items-center gap-16 whitespace-nowrap">
          <div className={`${styles.marquee} logosSlide flex gap-16`}>
            {Array.from({ length: 6 }).map((_, repeatIndex) =>
              content.logos.map((logo, index) => (
                <img
                  key={`${repeatIndex}-${index}`}
                  src={logo.img}
                  alt={logo.name}
                />
              )),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
