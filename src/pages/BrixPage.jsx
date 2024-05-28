import { useLanguage } from "../hooks/useLanguage";

import CategoryPageLayout from "../layouts/CategoryPageLayout";

import { resources } from "../constants";

const BrixPage = () => {
  const language = useLanguage();
  const content = resources[language].brixPage;

  return <CategoryPageLayout content={content} />;
};

export default BrixPage;
