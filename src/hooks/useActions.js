import { useMemo } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { actions as languageActions } from "../store/language.slice";

const rootActions = { ...languageActions };
export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
