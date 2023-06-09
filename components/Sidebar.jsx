import { IoMdSpeedometer } from "react-icons/io";
import { MdDevices } from "react-icons/md";
import { TiDownload } from "react-icons/ti";

import { BiGroup } from "react-icons/bi";
import { GoGear } from "react-icons/go";

import { IoChevronBack } from "react-icons/io5";

const Sidebar = () => {
  return (
    <aside className="sticky bg-blue-500 text-white h-screen min-w-fit flex flex-col pt-32 top-0">
      <ul className="list-none flex-1 flex flex-col gap-2">
        <li className="flex text-lg items-center cursor-pointer bg-white text-blue-500 p-2 mr-5 rounded-r-full">
          <span className="flex-1 font-medium">
            <IoMdSpeedometer
              className="inline-block mr-3 ml-7"
              size={"1.5rem"}
            />
            Overview
          </span>
          <span className="px-2">28</span>
        </li>
        <li className="flex text-lg items-center cursor-pointer bg-blue-400 text-white p-2 mr-5 rounded-r-full">
          <span className="flex-1 font-medium">
            <MdDevices className="inline-block mr-3 ml-7" size={"1.5rem"} />
            Devices
          </span>
          <span className="px-2">58</span>
        </li>
        <li className="flex text-lg items-center cursor-pointer p-2 mr-5 rounded-r-full">
          <span className="flex-1 font-medium">
            <TiDownload className="inline-block mr-3 ml-7" size={"1.5rem"} />
            Backups
          </span>
          <span className="px-2">12</span>
        </li>
      </ul>

      <ul className="list-none flex flex-col gap-3 px-7">
        <li className="flex items-center text-lg">
          <BiGroup className="inline-block mr-3" size={"1.5rem"} />
          Manage accounts
        </li>
        <li className="flex items-center text-lg">
          <GoGear className="inline-block mr-3" size={"1.5rem"} />
          Settings
        </li>
      </ul>

      <div className="bg-blue-400 h-0.5 my-5"></div>

      <IoChevronBack className="mx-7 mb-5" size={"1.5rem"} />
    </aside>
  );
};

export default Sidebar;
