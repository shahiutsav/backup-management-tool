"use client";

import Link from "next/link";
import { useState } from "react";
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
    count: 28,
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
  const [expanded, setExpanded] = useState(true);

  // To get path name
  const currentPage = usePathname();

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const isActive = (path) => {
    return currentPage === path;
  };

  return (
    <aside className="sticky bg-blue-500 text-white h-screen min-w-fit flex flex-col pt-32 top-0">
      <div className="flex-1 flex flex-col gap-2">
        {sidebarContentData.map((item) => (
          <Link
            href={item.link}
            key={item.id}
            className={`${
              isActive(item.link)
                ? "bg-white text-blue-500"
                : "bg-blue-500 hover:bg-blue-400"
            }  flex text-lg items-center cursor-pointer p-2 mr-2 rounded-r-full`}
          >
            <span className="flex-1 font-medium">
              <span>{item.icon}</span>
              <span className={expanded ? "inline" : "hidden"}>
                {item.text}
              </span>
            </span>

            <span className={`${expanded ? "inline" : "hidden"} px-2`}>
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
                ? "bg-white text-blue-500"
                : "bg-blue-500 hover:bg-blue-400"
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

      {/* <ul className="list-none flex flex-col gap-3 px-7">
        <li className="flex items-center text-lg">
          <BiGroup className="inline-block mr-3" size={"1.5rem"} />
          Manage accounts
        </li>
        <li className="flex items-center text-lg">
          <GoGear className="inline-block mr-3" size={"1.5rem"} />
          Settings
        </li>
      </ul> */}

      <div className="bg-blue-400 h-0.5 my-5"></div>

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
