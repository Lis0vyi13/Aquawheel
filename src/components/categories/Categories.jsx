import { useLanguage } from "../../hooks/useLanguage";

import Category from "./Category";

import Title from "../../ui/Title";

import { resources } from "../../constants";

import styles from "./categories.module.css";

const Categories = () => {
  const language = useLanguage();
  const content = resources[language].categories;
  const categoriesStyleList = [
    styles.gridItem1,
    styles.gridItem2,
    styles.gridItem3,
    styles.gridItem4,
    styles.gridItem5,
  ];
  return (
    <section className="categories mt-9 sm:mt-[90px]">
      <div className="container">
        <Title>{content.title}</Title>
        <div
          className={`grid mt-[24px] sm:mt-10 ${styles.gridTemplate} categories-grid gap-[13px] md:gap-[30px]`}
        >
          {content.categoriesList.map((ctg, i) => (
            <Category {...ctg} key={ctg.title} name={categoriesStyleList[i]}>
              {ctg.title}
            </Category>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
