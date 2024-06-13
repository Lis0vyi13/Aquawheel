import { motion } from "framer-motion";

import CategoryPageProductsList from "./products/CategoryPageProductsList";
import CategoryPageCategorySwiper from "./CategoryPageCategorySwiper";

const CategoryPageContent = ({
  isNotBrixOrStart,
  productsListRef,
  activeCategory,
  categories,
  setActiveCategory,
  products,
}) => (
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
);

export default CategoryPageContent;
