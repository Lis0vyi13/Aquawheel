const renderDots = ({ length, slide, setSlide }) => {
  return Array.from({ length: length }, (_, index) => (
    <button
      aria-label="slider dots navigation"
      key={index}
      onClick={() => setSlide(index)}
      className={`w-2 h-2 rounded-full bg-white mx-1 ${
        index === slide ? "" : "opacity-[0.43]"
      }`}
    />
  ));
};
export default renderDots;
