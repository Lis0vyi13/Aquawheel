import { useEffect, useRef } from "react";
import { useLanguage } from "../hooks/useLanguage";
import { resources } from "../constants";

const Swiper = () => {
  const language = useLanguage();
  const content = resources[language].swiper;
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperElement = swiperRef.current;

    const handleMouseDown = () => {
      swiperElement.style.cursor = "grabbing";
    };

    const handleMouseUp = () => {
      swiperElement.style.cursor = "grab";
    };

    swiperElement.addEventListener("mousedown", handleMouseDown);
    swiperElement.addEventListener("mouseup", handleMouseUp);

    return () => {
      swiperElement.removeEventListener("mousedown", handleMouseDown);
      swiperElement.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <section className="swiper">
      <div className="mx-auto max-w-[1460px] overflow-hidden">
        <div
          ref={swiperRef}
          className="swiper-content select-none h-[356px] flex lgXl:justify-center gap-6 sm:gap-8 cursor-grab overflow-x-auto snap-mandatory"
        >
          {content.images.map((elem) => (
            <img
              className="h-[257px] w-[181px] sm:h-[356px] sm:w-[252px]"
              draggable={false}
              key={elem.alt}
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
