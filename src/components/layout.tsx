import React, { ReactNode } from "react";
import { navMenu, themeButton } from "../styles/layout.module.css";
import DarkmodeIcon from "./DarkmodeIcon";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header>
        <div className={navMenu}>
          <nav>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
          <button
            className={themeButton}
            title="Toggle theme"
            aria-label="Toggle theme"
            onClick={() => console.log("click")}
          >
            <DarkmodeIcon />
          </button>
        </div>
      </header>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
};

export default Layout;
