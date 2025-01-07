import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";

const MainLayout = () => {
  const { pathname } = useLocation();
  
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    {
      pathname === "/login" || pathname === "/register"
        ? setVisible(false)
        : setVisible(true);
    }
  }, [pathname]);
  return (
    <>
      <div className="container mx-auto">
        {visible && <Navbar></Navbar>}
       <div>
         <Outlet></Outlet>
       </div>
      </div>
      {visible && <Footer></Footer>}
    </>
  );
};

export default MainLayout;
