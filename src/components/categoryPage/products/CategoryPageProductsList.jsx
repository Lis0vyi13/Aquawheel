import CategoryPageProduct from "./CategoryPageProduct";

const CategoryPageProductsList = ({ activeCategory, products }) => {
  return (
    <ul className="list flex justify-center gap-y-[35px] sm:gap-y-[85px] gap-[115px] flex-wrap">
      {activeCategory
        ? products
            .filter((prod) => prod.categories.includes(activeCategory))
            .map((prod, i) => (
              <li key={i}>
                <CategoryPageProduct {...prod} />
              </li>
            ))
        : products.slice(0, 6).map((prod, i) => (
            <li key={i}>
              <CategoryPageProduct {...prod} />
            </li>
          ))}
    </ul>
  );
};

export default CategoryPageProductsList;
