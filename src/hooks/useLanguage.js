import { useSelector } from "react-redux";

export const useLanguage = () => {
  const store = useSelector((store) => store.language);

  return store;
};
