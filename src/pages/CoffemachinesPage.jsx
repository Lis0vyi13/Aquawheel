import { useLanguage } from "../hooks/useLanguage";

import CategoryPageLayout from "../layouts/CategoryPageLayout";

import { resources } from "../constants";

const CoffemachinesPage = () => {
  const language = useLanguage();
  const content = resources[language].coffemachinesPage;

  return <CategoryPageLayout content={content} />;
};

export default CoffemachinesPage;
