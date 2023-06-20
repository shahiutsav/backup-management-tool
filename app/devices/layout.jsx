"use client";

import BreadCrumbs from "@components/BreadCrumbs";
import DetailViewBar from "@components/DetailViewBar";
import { useEffect, useState } from "react";

import { FiMonitor } from "react-icons/fi";
import { BsShieldCheck } from "react-icons/bs";

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

      for (let i = 1; i <= 50; i++) {
        fetchedDevices.push({
          id: i,
          name: `Device Name GZ00-0${i}`,
          protection: "Protected",
          status: "Online",
          lastBackup: "2 days ago",
        });
      }

      setDevices(fetchedDevices);
    }, 2000);
  }, []);

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

        <div className="flex-1 overflow-y-scroll px-10">
          <table className="w-full table-auto text-left">
            <thead className="sticky top-0 z-1 bg-white border-0 after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:border-b-2">
              <tr>
                <th className="font-thin py-3 text-sm">Name</th>
                <th className="font-thin py-3 text-sm">Protection</th>
                <th className="font-thin py-3 text-sm">Status</th>
                <th className="font-thin py-3 text-sm">Last backup</th>
              </tr>
            </thead>
            <tbody className="font-normal text-gray-700">
              {devices.map((device) => (
                <tr
                  key={device.id}
                  className="cursor-pointer hover:bg-[#e2f2ff]"
                >
                  <td>
                    <div className="flex items-center gap-2 py-3 pl-2">
                      <FiMonitor size={"1.8em"} />
                      <span>{device.name}</span>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-2 py-3 pl-2">
                      <BsShieldCheck size={"1em"} className="text-green-500" />
                      <span>{device.protection}</span>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-2 py-3 pl-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span>{device.status}</span>
                    </div>
                  </td>
                  <td>{device.lastBackup}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <DetailViewBar />
    </div>
  );
};

export default DevicesLayout;
