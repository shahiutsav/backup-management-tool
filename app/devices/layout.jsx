"use client";

import DetailViewBar from "@components/DetailViewBar";
import { useEffect, useState } from "react";

const DevicesLayout = ({ children }) => {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      setNavbarHeight(navbar.clientHeight);
    }

    // Simulating an API call to fetch devices
    setTimeout(() => {
      const fetchedDevices = [];

      for (let i = 11; i <= 50; i++) {
        fetchedDevices.push({ id: i, name: `Device ${i}` });
      }

      setDevices(fetchedDevices);
    }, 2000);
  }, []);

  console.log(navbarHeight);
  return (
    <div
      className="flex"
      style={
        navbarHeight !== 0
          ? { height: `calc(100vh - (${navbarHeight}px + 2px))` }
          : {}
      }
    >
      <div className="flex-1 overflow-y-scroll">
        <h2>Devices</h2>
        <ul>
          {devices.map((device) => (
            <li key={device.id}>{device.name}</li>
          ))}
        </ul>
      </div>
      <DetailViewBar />
    </div>
  );
};

export default DevicesLayout;
