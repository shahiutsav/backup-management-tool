"use client";

import { useEffect, useState } from "react";

const DevicesLayout = ({ children }) => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      setNavbarHeight(navbar.clientHeight);
    }
  });

  return (
    <div
      className="flex"
      style={
        navbarHeight !== 0
          ? { height: `calc(100vh - (${navbarHeight}px + 2px))` }
          : {}
      }
    >
      {children}
    </div>
  );
};

export default DevicesLayout;
