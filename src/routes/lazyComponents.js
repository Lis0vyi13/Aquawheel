import { lazy } from "react";

export const MainPage = lazy(() => import("../pages/MainPage"));
export const PageNotFound = lazy(() => import("../pages/PageNotFound"));
export const WashingPage = lazy(() => import("../pages/WashingPage"));
export const ProPage = lazy(() => import("../pages/ProPage"));
export const HomePage = lazy(() => import("../pages/HomePage"));
export const DishesPage = lazy(() => import("../pages/DishesPage"));
export const CoffemachinesPage = lazy(() =>
  import("../pages/CoffemachinesPage"),
);
export const StartPage = lazy(() => import("../pages/StartPage"));
export const BrixPage = lazy(() => import("../pages/BrixPage"));
