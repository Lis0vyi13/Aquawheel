import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

import SliderNavigationButtons from "./SliderNavigationButtons";
import SliderItemContent from "./SliderItemContent";
import SliderDots from "./SliderDots";

import { mobileSliderImages, pcSlidersImg } from "../../constants";

const Slider = ({ content }) => {
  const SLIDER_IMAGES_LENGTH = pcSlidersImg.length;

  const [slide, setSlide] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const handleNavigationButtonClick = (newSlide) => {
    setSlide(newSlide);
    clearInterval(intervalId);
  };

  useEffect(() => {
    const id = setInterval(() => {
      setSlide((state) => (state + 1 >= SLIDER_IMAGES_LENGTH ? 0 : state + 1));
    }, 5000);
    setIntervalId(id);

    return () => {
      clearInterval(id);
    };
  }, [SLIDER_IMAGES_LENGTH, slide]);

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      handleNavigationButtonClick(
        slide + 1 >= pcSlidersImg.length ? slide : slide + 1,
      ),
    onSwipedRight: () =>
      handleNavigationButtonClick(slide - 1 < 0 ? 0 : slide - 1),
  });

  return (
    <>
      <div className="relative hidden sm:block w-full h-full slider-container">
        <div
          style={{ transform: `translateX(-${slide * 100}%)` }}
          className={`absolute flex h-full left-0 top-0 duration-500`}
        >
          {pcSlidersImg.map((img, i) => (
            <div
              key={"slider-img" + i}
              className={`rounded-[30px] flex origin-right w-full flex-[0_0_auto] `}
            >
              <img
                className="h-full rounded-xl object-cover object-left bg-cover"
                src={img}
                alt={"img" + i}
              />
              <SliderItemContent content={{ ...content, i }} />
            </div>
          ))}
        </div>
        <SliderNavigationButtons
          slide={slide}
          imgArr={pcSlidersImg}
          onClick={handleNavigationButtonClick}
        />
      </div>

      <div
        {...handlers}
        className="relative block sm:hidden w-full h-full slider-container"
      >
        <div
          style={{ transform: `translateX(-${slide * 100}%)` }}
          className={`absolute flex h-full w-full left-0 top-0 duration-500`}
        >
          {mobileSliderImages.map((img, i) => (
            <div
              key={"slider-img" + i}
              className={`relative rounded-[30px] flex origin-left w-full flex-[0_0_auto] `}
            >
              <img
                className="h-full rounded-xl object-top xs:object-[none] w-full object-cover bg-cover"
                src={img}
                alt={"img" + i}
              />
              <SliderItemContent mobile content={{ ...content, i }} />
            </div>
          ))}
        </div>
        <div className="mobile-navigation absolute flex left-1/2 bottom-3 -translate-x-1/2 -translate-y-1/2">
          <SliderDots slide={slide} length={SLIDER_IMAGES_LENGTH} />
        </div>
      </div>
    </>
  );
};

export default Slider;
