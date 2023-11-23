import React from "react";

import Header from "../components/Header";

import "./styles.css";
import { VolumeContextProvider } from "../context";

function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <VolumeContextProvider>
          <Header />
          {children}
          <footer>
            <img src='/ie-badge.gif' width={100} />
            <span>Thanks for visiting!</span>
          </footer>
        </VolumeContextProvider>
      </body>
    </html>
  );
}

export default RootLayout;
