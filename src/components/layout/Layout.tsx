import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <main style={{ overflow: "hidden" }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
