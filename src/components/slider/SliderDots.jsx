const renderDots = ({ length, slide, setSlide }) => {
  return Array.from({ length: length }, (_, index) => (
    <button
      key={index}
      onClick={() => setSlide(index)}
      className={`w-1 h-1 rounded-full bg-white mx-1 ${
        index === slide ? "" : "opacity-[0.43]"
      }`}
    />
  ));
};
export default renderDots;
