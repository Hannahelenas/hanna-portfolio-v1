import React, { ReactNode } from "react";
import { navMenu } from "../styles/layout.module.css";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header>
        <div className={navMenu}>
          <nav>Menu</nav>
        </div>
      </header>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
};

export default Layout;
