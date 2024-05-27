import { useLanguage } from "../../hooks/useLanguage";
import { useSwipeScroll } from "../../hooks/useSwipeScroll";

import { resources } from "../../constants";

import styles from "./swiper.module.css";

const Swiper = () => {
  const language = useLanguage();
  const content = resources[language].swiper;
  const swiperRef = useSwipeScroll();

  return (
    <section className="swiper">
      <div className="mx-auto max-w-[1460px] flex justify-center overflow-hidden">
        <div
          ref={swiperRef}
          className={`swiper-content select-none h-[257px] sm:h-[356px] flex justify-start gap-6 cursor-grab whitespace-nowrap overflow-auto snap-mandatory ${styles.noScrollbar}`}
        >
          {content.images.map((elem, i) => (
            <img
              draggable={false}
              key={elem.alt + i}
              src={elem.img}
              alt={elem.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Swiper;
