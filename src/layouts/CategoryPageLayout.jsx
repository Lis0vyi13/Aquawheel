import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { useLanguage } from "../hooks/useLanguage";
import { useSwipeScroll } from "../hooks/useSwipeScroll";

import CategoryPageCategory from "../components/categoryPage/CategoryPageCategory";
import CategoryPageBrand from "../components/categoryPage/CategoryPageBrand";
import CategoryPageIntro from "../components/categoryPage/CategoryPageIntro";

import { resources } from "../constants";
import Marquee from "../components/marquee/Marquee";
import Swiper from "../components/swiper/Swiper";

const CategoryPageLayout = ({ content }) => {
  const language = useLanguage();
  const location = useLocation();
  const swiperRef = useSwipeScroll();

  const [activeBrand, setActiveBrand] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = resources[language].categories;
  const brands = resources[language].brands;
  const products = resources[language].products;

  useEffect(() => {
    scrollTo(0, 0);
  }, [location.pathname]);
  console.log(activeCategory);
  console.log(
    products.filter((prod) => prod.categories.includes(activeCategory)),
  );
  return (
    <section className="category-page pb-[70px] sm:pb-[170px]">
      <CategoryPageIntro content={content.intro} />

      <div className="flex flex-wrap mt-[53px] md:mt-[95px] px-4 items-center justify-center w-full h-[80px] gap-3 md:gap-11">
        {brands.products.map((brand, i) => (
          <CategoryPageBrand
            key={i}
            isActive={i === activeBrand}
            isBrix={brand.title === "BRIX"}
            onClick={() => setActiveBrand(i)}
            language={language}
            {...brand}
          />
        ))}
      </div>
      <section className="products-list">
        {/* <ul className="list">
          {activeCategory
            ? products
                .filter((prod) => prod.categories.includes(activeCategory))
                .map((prod, i) => (
                  <li key={i}>
                    <div>
                      <img src={prod.img} alt={prod.name} />
                    </div>
                  </li>
                ))
            : products.slice(0, 6).map((prod, i) => (
                <li key={i}>
                  <div>
                    <img src={prod.img} alt={prod.name} />
                  </div>
                </li>
              ))}
        </ul> */}
      </section>
      <section className="swiper">
        <div className="container">
          <div className="flex justify-center overflow-hidden">
            <div
              ref={swiperRef}
              className={`swiper-content select-none h-[80px] mt-[137px] flex justify-start gap-[13px] md:gap-[25px] cursor-grab whitespace-nowrap overflow-auto snap-mandatory noScrollbar`}
            >
              {categories.categoriesList.map((ctg) => {
                return (
                  <CategoryPageCategory
                    onClick={() => setActiveCategory(ctg.id)}
                    isActive={ctg.id === activeCategory}
                    className={`h-full`}
                    {...ctg}
                    key={ctg.title}
                  >
                    {ctg.title}
                  </CategoryPageCategory>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <div className="marquee mt-[83px] sm:mt-[181px]">
        <Marquee />
      </div>
      <div className="swiper mt-[78px] sm:mt-[178px]">
        <Swiper />
      </div>
    </section>
  );
};

export default CategoryPageLayout;
