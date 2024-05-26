import { useEffect, useRef, useState } from "react";

import { useLanguage } from "../../hooks/useLanguage";

import { resources } from "../../constants";

import styles from "./swiper.module.css";

const Swiper = () => {
  const language = useLanguage();
  const content = resources[language].swiper;
  const swiperRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  useEffect(() => {
    const swiperElement = swiperRef.current;

    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.pageX - swiperElement.offsetLeft);
      swiperElement.style.cursor = "grabbing";
    };

    const handleMouseLeave = () => {
      setIsDragging(false);
      swiperElement.style.cursor = "grab";
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      swiperElement.style.cursor = "grab";
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - swiperElement.offsetLeft;
      const walk = x - startX;
      swiperElement.scrollLeft -= walk;
      setStartX(x);
    };

    const handleTouchStart = (e) => {
      setIsDragging(true);
      setStartX(e.touches[0].pageX - swiperElement.offsetLeft);
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
    };

    const handleTouchMove = (e) => {
      if (!isDragging) return;
      const x = e.touches[0].pageX - swiperElement.offsetLeft;
      const walk = x - startX;
      swiperElement.scrollLeft -= walk;
      setStartX(x);
    };

    swiperElement.addEventListener("mousedown", handleMouseDown);
    swiperElement.addEventListener("mouseleave", handleMouseLeave);
    swiperElement.addEventListener("mouseup", handleMouseUp);
    swiperElement.addEventListener("mousemove", handleMouseMove);

    swiperElement.addEventListener("touchstart", handleTouchStart);
    swiperElement.addEventListener("touchend", handleTouchEnd);
    swiperElement.addEventListener("touchmove", handleTouchMove);

    return () => {
      swiperElement.removeEventListener("mousedown", handleMouseDown);
      swiperElement.removeEventListener("mouseleave", handleMouseLeave);
      swiperElement.removeEventListener("mouseup", handleMouseUp);
      swiperElement.removeEventListener("mousemove", handleMouseMove);

      swiperElement.removeEventListener("touchstart", handleTouchStart);
      swiperElement.removeEventListener("touchend", handleTouchEnd);
      swiperElement.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isDragging, startX]);

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
