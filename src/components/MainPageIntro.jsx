import { useLanguage } from "../hooks/useLanguage";

import Slider from "./slider/Slider";

import { resources } from "../constants";

const MainPageIntro = () => {
  const language = useLanguage();
  const content = resources[language].mainPageIntro;

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

export default MainPageIntro;
