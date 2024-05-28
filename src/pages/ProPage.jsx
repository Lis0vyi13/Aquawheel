import { useLanguage } from "../hooks/useLanguage";

import CategoryPageLayout from "../layouts/CategoryPageLayout";

import { resources } from "../constants";

const ProPage = () => {
  const language = useLanguage();
  const content = resources[language].proPage;

  return <CategoryPageLayout content={content} />;
};

export default ProPage;
