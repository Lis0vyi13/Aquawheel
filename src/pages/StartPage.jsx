import { useLanguage } from "../hooks/useLanguage";

import CategoryPageLayout from "../layouts/CategoryPageLayout";

import { resources } from "../constants";

const StartPage = () => {
  const language = useLanguage();
  const content = resources[language].startPage;

  return <CategoryPageLayout content={content} />;
};

export default StartPage;
