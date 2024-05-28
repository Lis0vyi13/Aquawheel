import { motion } from "framer-motion";

import { useLanguage } from "../../hooks/useLanguage";

import { resources } from "../../constants";

import styles from "./marquee.module.css";

const Marquee = () => {
  const language = useLanguage();
  const content = resources[language].marquee;

  return (
    <motion.section
      className="marquee"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="mx-auto max-w-[1460px] overflow-hidden">
        <div className="flex items-center gap-16 whitespace-nowrap">
          <motion.div
            className={`${styles.marquee} logosSlide flex gap-16`}
            initial={{ x: "100%" }}
            whileInView={{ x: 0 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            viewport={{ once: true, amount: 0.1 }}
          >
            {Array.from({ length: 6 }).map((_, repeatIndex) =>
              content.logos.map((logo, index) => (
                <img
                  key={`${repeatIndex}-${index}`}
                  src={logo.img}
                  alt={logo.name}
                />
              )),
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Marquee;
