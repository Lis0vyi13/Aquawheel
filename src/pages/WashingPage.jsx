import { useLanguage } from "../hooks/useLanguage";

import CategoryPageLayout from "../layouts/CategoryPageLayout";

import { resources } from "../constants";

const WashingPage = () => {
  const language = useLanguage();
  const content = resources[language].washingPage;

  return <CategoryPageLayout content={content} />;
};

export default WashingPage;
