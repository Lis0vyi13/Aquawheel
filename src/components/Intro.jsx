import Slider from "./slider/Slider";

import { resources } from "../constants";

import { useLanguage } from "../hooks/useLanguage";

const Intro = () => {
  const language = useLanguage();
  const content = resources[language].intro;

  return (
    <section className="intro">
      <div className="container">
        <div className="relative overflow-hidden min-w-full h-[450px] xs:h-[649px]">
          <Slider content={content} />
        </div>
      </div>
    </section>
  );
};

export default Intro;
