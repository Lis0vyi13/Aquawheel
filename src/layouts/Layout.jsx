import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Loader from "../components/loader/Loader";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
