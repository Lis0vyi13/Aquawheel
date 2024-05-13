const renderDots = ({ length, slide }) => {
  return Array.from({ length: length }, (_, index) => (
    <div
      key={index}
      className={`w-1 h-1 rounded-full bg-white mx-1 ${
        index === slide ? "" : "opacity-[0.43]"
      }`}
    />
  ));
};
export default renderDots;
