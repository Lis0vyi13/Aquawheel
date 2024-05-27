import styles from "../categories/category.module.css";

const CategoryPageCategory = ({
  img,
  name,
  isActive,
  onClick,
  className,
  children,
}) => {
  const background = isActive ? "bg-blueGradient" : "bg-grayGradient";
  const [firstWord, secondWord] = children.split(" ");

  const smallTextStyle = "text-[5px] sm:text-[8px]";
  const bigTextStyle = "font-[800] text-[19px] sm:text-[27px]";
  const textColor = isActive ? "text-white" : "text-[#000]";
  return (
    <button
      onClick={onClick}
      className={`category flex overflow-x-hidden min-w-[162px] sm:min-w-[230px] xs:overflow-x-visible relative rounded-[25px] duration-300 pl-[18px] pb-[3px] ${className} ${styles.category} [box-shadow:inset_2px_2px_4px_0_rgba(0,_0,_0,_0.15)] `}
    >
      <div
        className={`category-bg absolute after:content-[""] after:duration-300 after:rounded-[25px] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[#000] after:opacity-0 rounded-[25px] left-0 top-0 w-full h-full ${background} ${styles["category-bg"]}`}
      />
      <h2
        className={`flex justify-end flex-col text-left h-full relative z-[1] uppercase ${textColor}`}
      >
        <span className={secondWord ? smallTextStyle : bigTextStyle}>
          {firstWord}
        </span>
        {secondWord && (
          <span className={bigTextStyle + " " + "ml-[-3px]"}>{secondWord}</span>
        )}
      </h2>
      <img
        className="absolute h-full bottom-0 right-[-20px] xs:right-0"
        src={img}
        alt={name}
      />
    </button>
  );
};

export default CategoryPageCategory;
