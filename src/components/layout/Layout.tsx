import React from "react";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const isNotOriginPath = (returnValue: any) => {
    if (router.pathname !== "/") {
      return returnValue;
    }
  };

  return (
    <div>
      {isNotOriginPath(<Header />)}
      <main style={{ overflow: "hidden" }}>{children}</main>
      {isNotOriginPath(<Footer />)}
    </div>
  );
};

export default Layout;
