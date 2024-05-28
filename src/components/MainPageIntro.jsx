import { motion } from "framer-motion";

import { useLanguage } from "../hooks/useLanguage";

import Slider from "./slider/Slider";

import { resources } from "../constants";

const MainPageIntro = () => {
  const language = useLanguage();
  const content = resources[language].mainPageIntro;

  return (
    <motion.section
      className="intro"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container">
        <div className="relative overflow-hidden min-w-full h-[450px] xs:h-[649px]">
          <Slider content={content} />
        </div>
      </div>
    </motion.section>
  );
};

export default MainPageIntro;
