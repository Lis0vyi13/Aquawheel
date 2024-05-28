import CategoryPageCategory from "./CategoryPageCategory";

const CategoryPageCategorySwiper = ({
  categories,
  activeCategory,
  setActiveCategory,
  productsListRef,
}) => {
  const handleCategoryClick = (ctg) => {
    setActiveCategory(ctg.id);
    const topOffset =
      productsListRef.current.getBoundingClientRect().top +
      window.scrollY -
      150;
    window.scrollTo({ top: topOffset, behavior: "smooth" });
  };

  return (
    <div className="flex justify-center overflow-hidden">
      <div
        className={`swiper-content select-none h-[80px] flex justify-start gap-[13px] md:gap-[25px] cursor-grab whitespace-nowrap overflow-auto snap-mandatory noScrollbar`}
      >
        {categories.categoriesList.map((ctg) => (
          <CategoryPageCategory
            key={ctg.title}
            {...ctg}
            onClick={() => handleCategoryClick(ctg)}
            isActive={ctg.id === activeCategory}
            className={`h-full`}
          >
            {ctg.title}
          </CategoryPageCategory>
        ))}
      </div>
    </div>
  );
};

export default CategoryPageCategorySwiper;
