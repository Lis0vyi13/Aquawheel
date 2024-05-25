import { useSelector } from "react-redux";

export const useForm = () => {
  const store = useSelector((store) => store.form);

  return store;
};
