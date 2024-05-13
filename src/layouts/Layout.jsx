import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../components/navbar/Navbar";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
