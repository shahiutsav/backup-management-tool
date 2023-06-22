"use client";

import Link from "next/link";
import { useState, useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

import { IoMdSpeedometer } from "react-icons/io";
import { MdDevices } from "react-icons/md";
import { TiDownload } from "react-icons/ti";

import { BiGroup } from "react-icons/bi";
import { GoGear } from "react-icons/go";

import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const sidebarContentData = [
  {
    id: 0,
    icon: <IoMdSpeedometer className="inline-block mr-3 ml-3" size={"1.5em"} />,
    text: "Overview",
    link: "/",
    count: 89,
  },
  {
    id: 1,
    icon: <MdDevices className="inline-block mr-3 ml-3" size={"1.5em"} />,
    text: "Devices",
    link: "/devices",
    count: 58,
  },
  {
    id: 2,
    icon: <TiDownload className="inline-block mr-3 ml-3" size={"1.5em"} />,
    text: "Backups",
    link: "/backups",
    count: 12,
  },
];

export const sidebarSettingsData = [
  {
    id: 0,
    icon: <BiGroup className="inline-block mr-3 ml-3" size={"1.5em"} />,
    text: "Manage accounts",
    link: "/accounts",
  },
  {
    id: 1,
    icon: <GoGear className="inline-block mr-3 ml-3" size={"1.5em"} />,
    text: "Settings",
    link: "/settings",
  },
];

const Sidebar = () => {
  const [expanded, setExpanded] = useState(null);

  // To get path name
  const currentPage = usePathname();

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const isActive = (path) => {
    return currentPage === path;
  };

  // fetch sidebar state from local storage
  useEffect(() => {
    const sidebarState = localStorage.getItem("sidebarState");
    if (sidebarState) {
      setExpanded(JSON.parse(sidebarState));
    }
  }, []);

  // save sidebar state to local storage
  useEffect(() => {
    localStorage.setItem("sidebarState", JSON.stringify(expanded));
  }, [expanded]);

  return (
    <aside className="sticky bg-[#1e73e8] text-white h-screen min-w-fit flex flex-col pt-32 top-0">
      <div className="flex-1 flex flex-col gap-2">
        {sidebarContentData.map((item) => (
          <Link
            href={item.link}
            key={item.id}
            className={`${
              isActive(item.link)
                ? "bg-white text-[#1e73e8]"
                : "bg-[#1e73e8] hover:bg-[#317eea]"
            }  flex text-lg items-center cursor-pointer p-2 mr-2 rounded-r-full transition-all duration-300`}
          >
            <span className="flex-1 font-medium">
              <span>{item.icon}</span>
              <span className={expanded ? "inline" : "hidden"}>
                {item.text}
              </span>
            </span>

            <span
              className={`${
                expanded & (item.count > 0) ? "inline" : "hidden"
              } px-2`}
            >
              {item.count}
            </span>
          </Link>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        {sidebarSettingsData.map((item) => (
          <Link
            href={item.link}
            key={item.id}
            className={`${
              isActive(item.link)
                ? "bg-white text-[#1e73e8]"
                : "bg-[#1e73e8] hover:bg-[#317eea]"
            }  flex text-lg items-center cursor-pointer p-2 mr-2 rounded-r-full`}
          >
            <span className="flex-1 font-medium">
              <span>{item.icon}</span>
              <span className={expanded ? "inline mr-6" : "hidden"}>
                {item.text}
              </span>
            </span>
          </Link>
        ))}
      </div>

      <div className="bg-[#317eea] h-0.5 my-5"></div>

      <button onClick={toggleExpanded}>
        {expanded ? (
          <IoChevronBack className="mx-7 mb-5" size={"1.5em"} />
        ) : (
          <IoChevronForward className="mx-7 mb-5" size={"1.5em"} />
        )}
      </button>
    </aside>
  );
};

export default Sidebar;
