import { motion } from "framer-motion";

import { useLanguage } from "../../hooks/useLanguage";
import { useSwipeScroll } from "../../hooks/useSwipeScroll";

import { resources } from "../../constants";

import styles from "./swiper.module.css";

const Swiper = () => {
  const language = useLanguage();
  const swiperRef = useSwipeScroll();

  const content = resources[language].swiper;

  return (
    <motion.section
      className="swiper"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="mx-auto max-w-[1460px] flex justify-center overflow-hidden">
        <div
          ref={swiperRef}
          className={`swiper-content select-none h-[257px] sm:h-[356px] flex justify-start gap-6 cursor-grab whitespace-nowrap overflow-auto snap-mandatory ${styles.noScrollbar}`}
        >
          {content.images.map((elem, i) => (
            <motion.img
              draggable={false}
              key={elem.alt + i}
              src={elem.img}
              alt={elem.alt}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true, amount: 0.1 }}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Swiper;
