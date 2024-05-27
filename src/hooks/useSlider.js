import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

export const useSlider = (SLIDER_IMAGES_LENGTH) => {
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
        slide + 1 >= SLIDER_IMAGES_LENGTH ? 0 : slide + 1,
      ),
    onSwipedRight: () =>
      handleNavigationButtonClick(
        slide - 1 < 0 ? SLIDER_IMAGES_LENGTH - 1 : slide - 1,
      ),
  });

  return { slide, handleNavigationButtonClick, handlers };
};
