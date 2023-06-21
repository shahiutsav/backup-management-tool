"use client";

import BreadCrumbs from "@components/BreadCrumbs";
import DetailViewBar from "@components/DetailViewBar";
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
      <div className="flex flex-col flex-1">
        <BreadCrumbs />

        <div className="flex-1 overflow-y-scroll px-10">{children}</div>
      </div>
      <DetailViewBar />
    </div>
  );
};

export default DevicesLayout;
