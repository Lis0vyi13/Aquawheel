import { Suspense, lazy, memo } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./layouts/Layout";
import Loader from "./components/loader/Loader";

const MainPage = memo(lazy(() => import("./pages/MainPage")));
const PageNotFound = memo(lazy(() => import("./pages/PageNotFound")));
const WashingPage = memo(lazy(() => import("./pages/WashingPage")));
const ProPage = memo(lazy(() => import("./pages/ProPage")));
const HomePage = memo(lazy(() => import("./pages/HomePage")));
const DishesPage = memo(lazy(() => import("./pages/DishesPage")));
const CoffemachinesPage = memo(lazy(() => import("./pages/CoffemachinesPage")));
const StartPage = memo(lazy(() => import("./pages/StartPage")));
const BrixPage = memo(lazy(() => import("./pages/BrixPage")));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="/washing" element={<WashingPage />} />
            <Route path="/coffemachines" element={<CoffemachinesPage />} />
            <Route path="/dishes" element={<DishesPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/pro" element={<ProPage />} />
            <Route path="/start" element={<StartPage />} />
            <Route path="/brix" element={<BrixPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

