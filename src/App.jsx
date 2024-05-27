import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./layouts/Layout";

import MainPage from "./layouts/MainPage";
import PageNotFound from "./pages/PageNotFound";
import WashingPage from "./pages/WashingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/washing" element={<WashingPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

