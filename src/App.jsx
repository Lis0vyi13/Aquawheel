import { Suspense } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./layouts/Layout";

import Loader from "./components/loader/Loader";

import routes from "./routes";

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            {routes.map(({ path, element, index }) => (
              <Route key={path} path={path} element={element} index={index} />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

