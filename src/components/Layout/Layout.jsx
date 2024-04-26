import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import LoginPage from "../../pages/LoginPage";

function Layout() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      {isLogin ? (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      ) : (
        <LoginPage />
      )}
    </>
  );
}

export default Layout;
