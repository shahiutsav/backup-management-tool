import { MdAvTimer } from "react-icons/md";
import { BiErrorCircle, BiTransfer, BiGridAlt } from "react-icons/bi";
import {
  BsThreeDotsVertical,
  BsGear,
  BsHddStack,
  BsCodeSlash,
} from "react-icons/bs";
import { GiInfo } from "react-icons/gi";
import { FiMonitor, FiDownload, FiUpload } from "react-icons/fi";
import { SlGlobeAlt } from "react-icons/sl";
import { HiOutlineCpuChip } from "react-icons/hi2";
import { LiaComments } from "react-icons/lia";
import { useEffect, useState } from "react";

const DetailViewBar = ({ id }) => {
  const [deviceDetails, setDeviceDetails] = useState(null);

  useEffect(() => {
    const fetchDevice = async () => {
      const res = await fetch(`http://localhost:3001/devices/${id}`);
      const data = await res.json();

      setDeviceDetails(data);
    };

    fetchDevice();
  }, [id]);

  const convertSize = (size) => {
    if (size < 1024) {
      return `${size} GB`;
    } else {
      return `${(size / 1024).toFixed(2)} TB`;
    }
  };

  return (
    <aside className="w-min border-l-2 sticky right-0">
      <div className="flex px-2 py-1 border-b-2 items-center divide-x place-content-between">
        <div className="flex flex-1 items-center pr-4 place-content-between">
          {/* Schedule button probably */}
          <button className="hover:bg-[#f0f0f0] p-2 rounded-full">
            <MdAvTimer size={"1.9em"} />
          </button>

          {/* Report button probably */}
          <button className="hover:bg-[#f0f0f0] p-2 rounded-full">
            <BiErrorCircle size={"1.8em"} />
          </button>

          {/* Transfer button probably */}
          <button className="hover:bg-[#f0f0f0] p-2 rounded-full">
            <BiTransfer size={"1.6em"} />
          </button>

          {/* More options */}
          <button className="hover:bg-[#f0f0f0] p-2 rounded-full">
            <BsThreeDotsVertical size={"1.5em"} />
          </button>
        </div>
        <div className="flex items-center pl-4 gap-4">
          {/* Some grid view button */}
          <button className="hover:bg-[#f0f0f0] p-2 rounded-full">
            <BiGridAlt size={"1.6em"} />
          </button>

          {/* Info button */}
          <button className="hover:bg-[#f0f0f0] p-2 rounded-full">
            <GiInfo size={"1.6em"} />
          </button>
        </div>
      </div>

      {/* Information section */}
      <div className="px-6 pt-5 divide-y border-b-2">
        {/* Brief Computer Info */}
        <div className="flex gap-4 items-center pb-2">
          <FiMonitor size={"1.8em"} />
          <div className="flex-col">
            <p>{deviceDetails?.name}</p>
            <p>Line two</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 py-4">
          <button className="flex items-center justify-center gap-3 flex-1 py-2 px-7 bg-[#1e73e8] rounded-md text-white">
            <FiDownload size={"1.8em"} />
            <span>Backup</span>
          </button>
          <button className="flex items-center justify-center gap-3 flex-1 py-2.5 px-7 bg-[#1e73e8] rounded-md text-white">
            <FiUpload size={"1.8em"} />
            <span>Restore</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-[20%_80%] overflow-y-auto pr-8">
        <div className="mx-auto flex items-center">
          <SlGlobeAlt size={"1.8em"} />
        </div>
        <div className="pl-3 border-b py-3">
          <p className="font-light">IP address:</p>
          <p className="text-gray-700">{deviceDetails?.ip_address}</p>
        </div>
        <div className="mx-auto flex items-center"></div>
        <div className="pl-3 border-b py-3">
          <p className="font-light">Total backup size in cloud:</p>
          <p className="text-gray-700">{convertSize(deviceDetails?.total_size)}</p>
        </div>

        <div className="mx-auto flex items-center"></div>

        <div className="pl-3 border-b py-3 flex">
          <p className="flex-1 font-light">Machine token: </p>
          <p className="text-[#1e73e8] cursor-pointer">Show</p>
        </div>

        <div className="mx-auto flex items-center">
          <BsGear size={"1.8em"} />
        </div>
        <div className="pl-3 border-b py-3">
          <p className="font-light">Agent Version:</p>
          <p className="text-gray-700">
            {deviceDetails?.agent_version}/{deviceDetails?.os_name}
          </p>
        </div>

        <div className="mx-auto flex items-center">
          <HiOutlineCpuChip size={"1.8em"} />
        </div>
        <div className="pl-3 border-b py-3 grid grid-cols-[1fr_5fr]">
          <p className="font-light">OS: </p>
          <p className="text-gray-700">{deviceDetails?.os_name}</p>
          <p className="font-light">CPU: </p>
          <p className="text-gray-700">{deviceDetails?.cpu}</p>
          <p className="font-light">RAM: </p>
          <p className="text-gray-700">{deviceDetails?.ram}</p>
        </div>

        <div className="mx-auto flex items-center">
          <BsHddStack size={"1.8em"} />
        </div>
        <div className="pl-3 border-b py-3">
          <div className="flex">
            <p className="font-light flex-1">Service quota:</p>
            <p className="text-[#1e73e8] cursor-pointer">Change</p>
          </div>
          <p className="text-gray-700">{deviceDetails?.service_quota}</p>
        </div>

        <div className="mx-auto flex items-center">
          <LiaComments size={"1.8em"} />
        </div>
        <div className="pl-3 border-b py-3">
          <div className="flex">
            <p className="font-light flex-1">Comments:</p>
            <p className="text-[#1e73e8] cursor-pointer">Add</p>
          </div>
          <p className="text-gray-700">No comments yet</p>
        </div>

        <div className="mx-auto flex items-center">
          <BsCodeSlash size={"1.4em"} />
        </div>
        <div className="pl-3 border-b py-3">
          <p className="text-[#1e73e8] cursor-pointer text-right">
            See all properties
          </p>
        </div>
      </div>
    </aside>
  );
};

export default DetailViewBar;
