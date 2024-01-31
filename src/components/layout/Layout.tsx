import React from "react";
import { ThemeProvider } from "styled-components";
import { useRouter } from "next/router";

import theme from "@/styles/theme";
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
    <ThemeProvider theme={theme}>
      <div>
        {isNotOriginPath(<Header />)}
        <main
          style={isNotOriginPath({
            paddingTop: "75px",
            paddingBottom: "200px",
          })}
        >
          {children}
        </main>
        {isNotOriginPath(<Footer />)}
      </div>
    </ThemeProvider>
  );
};

export default Layout;
