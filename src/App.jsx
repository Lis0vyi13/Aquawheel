import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./layouts/Layout";

import MainPage from "./pages/MainPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

