import { useLanguage } from "../hooks/useLanguage";

import CategoryPageLayout from "../layouts/CategoryPageLayout";

import { resources } from "../constants";

const DishesPage = () => {
  const language = useLanguage();
  const content = resources[language].dishesPage;

  return <CategoryPageLayout content={content} />;
};

export default DishesPage;
