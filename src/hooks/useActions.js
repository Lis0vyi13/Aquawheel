import { useMemo } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { actions as languageActions } from "../store/language.slice";
import { actions as burgerActions } from "../store/burger.slice";
import { actions as formActions } from "../store/form.slice";

const rootActions = { ...languageActions, ...burgerActions, ...formActions };

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
