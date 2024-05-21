import styles from "./category.module.css";

const Category = ({ img, name, href, isLarge, isBlue, children }) => {
  const background = isBlue ? "bg-blueGradient" : "bg-grayGradient";
  const [firstWord, secondWord] = children.split(" ");

  const smallTextStyle = "text-[10px] sm:text-[13px]";
  const bigTextStyle = "font-[800] text-[34px] xs:text-[45px]";
  const textColor = isBlue ? "text-white" : "text-[#000]";

  return (
    <a
      href={href}
      className={`category overflow-x-hidden xs:overflow-x-visible relative rounded-[25px] duration-300 p-6 pb-2 h-[105px] xs:h-[180px] ${
        isLarge ? "md:h-[280px]" : "md:h-[250px]"
      }  ${name || "col-span-full"} ${
        styles.category
      } [box-shadow:inset_2px_2px_4px_0_rgba(0,_0,_0,_0.15)] `}
    >
      <div
        className={`category-bg absolute after:content-[""] after:duration-300 after:rounded-[25px] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[#000] after:opacity-0 rounded-[25px] left-0 top-0 w-full h-full ${background} ${styles["category-bg"]}`}
      />
      <h2
        className={`flex flex-col h-full relative z-[1] uppercase justify-end ${textColor} ${
          isBlue ? "md:justify-start" : ""
        }`}
      >
        <span className={secondWord ? smallTextStyle : bigTextStyle}>
          {firstWord}
        </span>
        {secondWord && (
          <span className={bigTextStyle + " " + "ml-[-3px]"}>{secondWord}</span>
        )}
      </h2>
      <img
        className="absolute max-h-[130px] xs:max-h-[200px] md:max-h-none bottom-0 right-[-20px] xs:right-0"
        src={img}
        alt={name}
      />
    </a>
  );
};

export default Category;
