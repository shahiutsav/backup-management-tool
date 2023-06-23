"use client";

import { useState, useEffect } from "react";

import { FiMonitor } from "react-icons/fi";
import {
  BsShieldCheck,
  BsShieldExclamation,
  BsShieldSlash,
} from "react-icons/bs";

import DetailViewBar from "@components/DetailViewBar";
import BreadCrumbs from "@components/BreadCrumbs";

const Devices = () => {
  const [devices, setDevices] = useState([]);

  const [selectedDeviceId, setSelectedDeviceId] = useState(0);

  useEffect(() => {
    const fetchDevices = async () => {
      const res = await fetch("http://localhost:3001/devices");
      const data = await res.json();

      setDevices(data);
    };

    fetchDevices();
  }, []);

  const handleSelection = (id) => {
    setSelectedDeviceId(id);
  };

  return (
    <>
      <div className="flex flex-col flex-1">
        <BreadCrumbs />
        <div className="flex-1 overflow-y-scroll px-10">
          <table className="w-full table-auto text-left">
            <thead className="sticky top-0 z-1 bg-white border-0 after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:border-b-2">
              <tr>
                <th className="font-light py-3 text-sm">Name</th>
                <th className="font-light py-3 text-sm">Protection</th>
                <th className="font-light py-3 text-sm">Status</th>
                <th className="font-light py-3 text-sm">Last backup</th>
              </tr>
            </thead>
            <tbody className="font-normal text-gray-700">
              {devices.map((device) => (
                <tr
                  key={device.id}
                  className={`cursor-pointer ${
                    selectedDeviceId === device.id
                      ? "bg-[#e2f2ff]"
                      : "hover:bg-[#f2faff]"
                  }`}
                  onClick={() => handleSelection(device.id)}
                >
                  <td>
                    <div className="flex items-center gap-2 py-3 pl-2">
                      <FiMonitor size={"1.8em"} />
                      <span>{device.name}</span>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-2 py-3 pl-2">
                      {device.protection === "Protected" && (
                        <BsShieldCheck
                          size={"1em"}
                          className="text-green-500"
                        />
                      )}
                      {device.protection === "Warning" && (
                        <BsShieldExclamation
                          size={"1em"}
                          className="text-yellow-500"
                        />
                      )}
                      {device.protection === "Unprotected" && (
                        <BsShieldSlash size={"1em"} className="text-red-500" />
                      )}
                      <span>{device.protection}</span>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-2 py-3 pl-2">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          device.is_active ? "bg-green-500" : "bg-red-500"
                        } `}
                      ></div>
                      <span>{device.is_active ? "Online" : "Offline"}</span>
                    </div>
                  </td>
                  <td>
                    <span>
                      {new Date(device.last_backup).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                      })}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <DetailViewBar id={selectedDeviceId} />
    </>
  );
};

export default Devices;
