import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { useLanguage } from "../hooks/useLanguage";

import CategoryPageIntro from "../components/CategoryPageIntro";

import { resources } from "../constants";

import styles from "./brand.module.css";

const CategoryPageLayout = ({ content }) => {
  const language = useLanguage();
  const location = useLocation();
  const brands = resources[language].brands;
  const [activeBrand, setActiveBrand] = useState(null);

  useEffect(() => {
    scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <section className="category-page pb-[180px]">
      <CategoryPageIntro content={content.intro} />
      <div className="container flex flex-col items-center">
        <div className="flex mt-[92px] items-center justify-center w-[595px] h-[80px] gap-11">
          {brands.products.map((brand, i) => {
            const isActive = i === activeBrand;
            const isBrix = brand.title === "BRIX";

            const background = isBrix
              ? `bg-orangeGradient ${isActive ? "" : "opacity-50"}`
              : `bg-darkBlueGradient ${isActive ? "" : "opacity-50"}`;

            return (
              <button
                onClick={() => setActiveBrand(i)}
                key={i}
                className={`brand relative rounded-[25px] justify-center items-center flex h-full ${styles.brand}`}
              >
                <div
                  className={`brand cursor-pointer relative after:content-[""] after:duration-300 after:rounded-[25px] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[#000] after:opacity-0 rounded-[25px] justify-center items-center flex w-[280px] h-full ${styles["brand-bg"]} ${background} [box-shadow:inset_1px_1px_3px_0_rgba(0,_0,_0,_0.35)]`}
                >
                  <img
                    width={isBrix ? "162px" : "110px"}
                    className={`brand-bg z-[1] absolute left-4 bottom-0`}
                    src={brand.img}
                    alt="brand-img"
                  />
                  <div className="absolute z-[1] text-center right-[30px] text-white">
                    <p className="uppercase text-[8px]">
                      {language === "ENG" ? "Product" : "Продукція"}
                    </p>
                    <h3 className="font-bold uppercase text-[27px]">
                      {brand.title}
                    </h3>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryPageLayout;
