import { useLanguage } from "../hooks/useLanguage";

import CategoryPageLayout from "../layouts/CategoryPageLayout";

import { resources } from "../constants";

const HomePage = () => {
  const language = useLanguage();
  const content = resources[language].homePage;

  return <CategoryPageLayout content={content} />;
};

export default HomePage;
