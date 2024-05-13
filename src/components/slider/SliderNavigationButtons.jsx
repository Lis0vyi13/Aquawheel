import TransparentNavigationButton from "../../ui/navigationButtons/TransparentNavigationButton";
import NavigationButton from "../../ui/navigationButtons/NavigationButton";

const SliderNavigationButtons = ({ onClick, slide, imgArr }) => {
  const handlePrevClick = () => onClick(slide - 1 < 0 ? 0 : slide - 1);
  const handleNextClick = () =>
    onClick(slide + 1 >= imgArr.length ? slide : slide + 1);

  return (
    <div className="absolute z-20 bottom-[40px] left-10 flex items-center gap-4">
      <div className="h-[41px] w-[41px]">
        <TransparentNavigationButton onClick={handlePrevClick} />
      </div>
      <div className="h-[41px] w-[41px]">
        <NavigationButton onClick={handleNextClick} reversed />
      </div>
    </div>
  );
};

export default SliderNavigationButtons;
