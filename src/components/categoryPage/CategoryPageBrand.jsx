import { Link } from "react-router-dom";

import styles from "../brands/brand.module.css";

const CategoryPageBrand = ({
  title,
  img,
  isActive,
  href,
  isBrix,
  language,
}) => {
  const background = isBrix
    ? `bg-orangeGradient ${isActive ? "opacity-50" : ""}`
    : `bg-darkBlueGradient ${isActive ? "opacity-50" : ""}`;

  const imgSize = isBrix ? "w-[96px] md:w-[162px]" : "w-[69px] md:w-[110px]";
  return (
    <Link
      to={"/" + href}
      className={`brand relative rounded-[25px] justify-center items-center flex h-full ${styles.brand}`}
    >
      <div
        className={`cursor-pointer relative rounded-[25px] justify-center items-center flex w-[171px] md:w-[280px] h-full ${styles["brand-bg"]} ${background} [box-shadow:inset_1px_1px_3px_0_rgba(0,_0,_0,_0.35)] after:content-[""] after:duration-300 after:rounded-[25px] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[#000] after:opacity-0`}
      >
        <img
          className={`brand-bg z-[1] absolute left-2 md:left-4 bottom-0 ${imgSize}`}
          src={img}
          alt="brand-img"
        />
        <div className="absolute z-[1] text-center right-[10px] md:right-[30px] text-white">
          <p className="uppercase text-[7px] md:text-[8px]">
            {language === "ENG" ? "Product" : "Продукція"}
          </p>
          <h3 className="font-bold uppercase text-[22px] md:text-[27px]">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
};
export default CategoryPageBrand;
