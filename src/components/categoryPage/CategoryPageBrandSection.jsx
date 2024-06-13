import { motion } from "framer-motion";

import CategoryPageBrand from "./CategoryPageBrand";

const CategoryPageBrandSection = ({
  brands,
  activeBrand,
  handleBrandClick,
  language,
}) => (
  <motion.section
    className="flex flex-wrap mt-[53px] md:mt-[95px] px-4 items-center justify-center w-full h-[80px] gap-3 md:gap-11"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.2, duration: 0.5 }}
    viewport={{ once: true, amount: 0.1 }}
  >
    {brands.products.map((brand, index) => (
      <CategoryPageBrand
        key={index}
        isActive={index === activeBrand}
        isBrix={brand.title === "BRIX"}
        onClick={() => handleBrandClick(index)}
        language={language}
        {...brand}
      />
    ))}
  </motion.section>
);

export default CategoryPageBrandSection;
