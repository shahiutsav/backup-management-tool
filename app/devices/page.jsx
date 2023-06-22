"use client";

import { useState, useEffect } from "react";

import { FiMonitor } from "react-icons/fi";
import {
  BsShieldCheck,
  BsShieldExclamation,
  BsShieldSlash,
} from "react-icons/bs";

const dummyDevices = [
  {
    id: 1,
    uuid: "GZ00-01",
    account_uuid: "GZ00",
    user_uuid: "GZ00-01",
    name: "Device Name GZ00-01",
    os_name: "Windows 10",
    os_version: "10.0.19042",
    hostname: "DESKTOP-1",
    ip_address: "111.111.111.11",
    is_active: true,
    description: "This is a description",
    created_at: "2021-08-10T14:00:00.000000Z",
    protection: "Protected",
    lastBackup: "2021-08-10T14:00:00.000000Z",
    total_size: "100 GB",
    agent_version: "1.0.0",
    cpu: "Intel Core i7-10700K",
    ram: "16 GB",
    service_quota: "Servers",
  },
  {
    id: 2,
    uuid: "GZ00-02",
    account_uuid: "GZ00",
    user_uuid: "GZ00-02",
    name: "Device Name GZ00-02",
    os_name: "Windows 10",
    os_version: "10.0.19042",
    hostname: "DESKTOP-2",
    ip_address: "222.222.222.22",
    is_active: true,
    description: "This is a description",
    created_at: "2021-08-10T14:00:00.000000Z",
    protection: "Unprotected",
    lastBackup: "2021-08-10T14:00:00.000000Z",
    total_size: "100 GB",
    agent_version: "1.0.0",
    cpu: "Intel Core i7-10700K",
    ram: "16 GB",
    service_quota: "Servers",
  },
  {
    id: 3,
    uuid: "GZ00-03",
    account_uuid: "GZ00",
    user_uuid: "GZ00-03",
    name: "Device Name GZ00-03",
    os_name: "Windows 10",
    os_version: "10.0.19042",
    hostname: "DESKTOP-3",
    ip_address: "333.333.333.33",
    is_active: true,
    description: "This is a description",
    created_at: "2021-08-10T14:00:00.000000Z",
    protection: "Warning",
    lastBackup: "2021-08-10T14:00:00.000000Z",
    total_size: "100 GB",
    agent_version: "1.0.0",
    cpu: "Intel Core i7-10700K",
    ram: "16 GB",
    service_quota: "Servers",
  },
  {
    id: 4,
    uuid: "GZ00-04",
    account_uuid: "GZ00",
    user_uuid: "GZ00-04",
    name: "Device Name GZ00-04",
    os_name: "Windows 10",
    os_version: "10.0.19042",
    hostname: "DESKTOP-4",
    ip_address: "444.444.444.44",
    is_active: true,
    description: "This is a description",
    created_at: "2021-08-10T14:00:00.000000Z",
    protection: "Protected",
    lastBackup: "2021-08-10T14:00:00.000000Z",
    total_size: "100 GB",
    agent_version: "1.0.0",
    cpu: "Intel Core i7-10700K",
    ram: "16 GB",
    service_quota: "Servers",
  },
  {
    id: 5,
    uuid: "GZ00-05",
    account_uuid: "GZ00",
    user_uuid: "GZ00-05",
    name: "Device Name GZ00-05",
    os_name: "Windows 10",
    os_version: "10.0.19042",
    hostname: "DESKTOP-5",
    ip_address: "555.555.555.55",
    is_active: false,
    description: "This is a description",
    created_at: "2021-08-10T14:00:00.000000Z",
    protection: "Protected",
    lastBackup: "2021-08-10T14:00:00.000000Z",
    total_size: "100 GB",
    agent_version: "1.0.0",
    cpu: "Intel Core i7-10700K",
    ram: "16 GB",
    service_quota: "Servers",
  },
];

const Devices = () => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    // Simulating an API call to fetch devices
    setTimeout(() => {
      const fetchedDevices = dummyDevices;

      setDevices(fetchedDevices);
    }, 1000);
  }, []);

  return (
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
          <tr key={device.id} className="cursor-pointer hover:bg-[#e2f2ff]">
            <td>
              <div className="flex items-center gap-2 py-3 pl-2">
                <FiMonitor size={"1.8em"} />
                <span>{device.name}</span>
              </div>
            </td>
            <td>
              <div className="flex items-center gap-2 py-3 pl-2">
                {device.protection === "Protected" && (
                  <BsShieldCheck size={"1em"} className="text-green-500" />
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
                {new Date(device.lastBackup).toLocaleDateString("en-US", {
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
  );
};

export default Devices;
