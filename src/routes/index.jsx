import MainPage from "../pages/MainPage";
import PageNotFound from "../pages/PageNotFound";
import WashingPage from "../pages/WashingPage";
import ProPage from "../pages/ProPage";
import HomePage from "../pages/HomePage";
import DishesPage from "../pages/DishesPage";
import CoffemachinesPage from "../pages/CoffemachinesPage";
import StartPage from "../pages/StartPage";
import BrixPage from "../pages/BrixPage";

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
