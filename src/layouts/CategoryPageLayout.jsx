import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import { motion } from "framer-motion";

import { useLanguage } from "../hooks/useLanguage";

import CategoryPageIntro from "../components/categoryPage/CategoryPageIntro";
import CategoryPageBrandSection from "../components/categoryPage/CategoryPageBrandSection";
import CategoryPageContent from "../components/categoryPage/CategoryPageContent";
import Marquee from "../components/marquee/Marquee";
import Swiper from "../components/swiper/Swiper";

import Loader from "../components/loader/Loader";
import SidebarForm from "../components/form/SidebarForm";

import { resources } from "../constants";

const CategoryPageLayout = ({ content }) => {
  const language = useLanguage();
  const location = useLocation();

  const [activeBrand, setActiveBrand] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const productsListRef = useRef();

  const categories = resources[language].categories;
  const brands = resources[language].brands;
  const products = resources[language].products;

  const isNotBrixOrStart =
    content?.intro?.title !== "brix" && content?.intro?.title !== "start";

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    scrollTo(0, 0);
  }, [location.pathname]);

  const handleBrandClick = (index) => {
    setActiveBrand(index);
  };

  return isLoaded ? (
    <motion.section
      className="category-page pb-[70px] sm:pb-[170px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <CategoryPageIntro content={content.intro} />
      {isNotBrixOrStart && (
        <CategoryPageBrandSection
          brands={brands}
          activeBrand={activeBrand}
          handleBrandClick={handleBrandClick}
          language={language}
        />
      )}
      <CategoryPageContent
        isNotBrixOrStart={isNotBrixOrStart}
        productsListRef={productsListRef}
        activeCategory={activeCategory}
        categories={categories}
        setActiveCategory={setActiveCategory}
        products={products}
      />
      <section className="marquee mt-[83px] md:mt-[181px]">
        <Marquee />
      </section>
      <section className="swiper mt-[78px] md:mt-[178px]">
        <Swiper />
      </section>
      <SidebarForm />
    </motion.section>
  ) : (
    <Loader />
  );
};

export default CategoryPageLayout;
