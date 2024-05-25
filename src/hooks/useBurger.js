import { useSelector } from "react-redux";

export const useBurger = () => {
  const store = useSelector((store) => store.burger);

  return store;
};
