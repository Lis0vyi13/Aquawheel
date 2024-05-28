import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import { motion } from "framer-motion";

import { useLanguage } from "../hooks/useLanguage";

import CategoryPageIntro from "../components/categoryPage/CategoryPageIntro";
import CategoryPageBrand from "../components/categoryPage/CategoryPageBrand";
import CategoryPageProductsList from "../components/categoryPage/products/CategoryPageProductsList";
import CategoryPageCategorySwiper from "../components/categoryPage/CategoryPageCategorySwiper";

import Marquee from "../components/marquee/Marquee";
import Swiper from "../components/swiper/Swiper";
import SidebarForm from "../components/form/SidebarForm";

import { resources } from "../constants";

const CategoryPageLayout = ({ content }) => {
  const language = useLanguage();
  const location = useLocation();

  const [activeBrand, setActiveBrand] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const productsListRef = useRef();

  const categories = resources[language].categories;
  const brands = resources[language].brands;
  const products = resources[language].products;

  const isNotBrixOrStart =
    content?.intro?.title !== "brix" && content?.intro?.title !== "start";

  useEffect(() => {
    scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <motion.section
      className="category-page pb-[70px] sm:pb-[170px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <CategoryPageIntro content={content.intro} />
      {isNotBrixOrStart && (
        <motion.section
          className="flex flex-wrap mt-[53px] md:mt-[95px] px-4 items-center justify-center w-full h-[80px] gap-3 md:gap-11"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true, amount: 0.1 }}
        >
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
        </motion.section>
      )}
      <motion.div
        className={`flex ${isNotBrixOrStart ? "flex-col" : "flex-col-reverse"}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <section
          ref={productsListRef}
          className="products-list mt-[130px] xs:mt-[65px] md:mt-[133px]"
        >
          <div className="container">
            <CategoryPageProductsList
              activeCategory={activeCategory}
              products={products}
            />
          </div>
        </section>
        <section className="mt-[46px] md:mt-[137px]">
          <div className="container">
            <CategoryPageCategorySwiper
              categories={categories}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              productsListRef={productsListRef}
            />
          </div>
        </section>
      </motion.div>
      <section className="marquee mt-[83px] md:mt-[181px]">
        <Marquee />
      </section>
      <section className="swiper mt-[78px] md:mt-[178px]">
        <Swiper />
      </section>
      <SidebarForm />
    </motion.section>
  );
};

export default CategoryPageLayout;
