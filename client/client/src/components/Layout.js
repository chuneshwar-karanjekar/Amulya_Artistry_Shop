import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main style={{ minHeight: "76vh" }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
