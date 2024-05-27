import { useEffect, useRef, useState } from "react";

export const useSwipeScroll = () => {
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

  return swiperRef;
};
