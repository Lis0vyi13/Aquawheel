import {
  MainPage,
  PageNotFound,
  WashingPage,
  ProPage,
  HomePage,
  DishesPage,
  CoffemachinesPage,
  StartPage,
  BrixPage,
} from "./lazyComponents";

const routes = [
  { path: "/", element: <MainPage />, index: true },
  { path: "/washing", element: <WashingPage /> },
  { path: "/coffemachines", element: <CoffemachinesPage /> },
  { path: "/dishes", element: <DishesPage /> },
  { path: "/home", element: <HomePage /> },
  { path: "/pro", element: <ProPage /> },
  { path: "/start", element: <StartPage /> },
  { path: "/brix", element: <BrixPage /> },
  { path: "*", element: <PageNotFound /> },
];

export default routes;
