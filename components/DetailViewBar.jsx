import { MdAvTimer } from "react-icons/md";
import { BiErrorCircle, BiTransfer, BiGridAlt } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GiInfo } from "react-icons/gi";
import { FiMonitor, FiDownload, FiUpload } from "react-icons/fi";

const DetailViewBar = () => {
  return (
    <aside className={`w-min-content border-l-2 sticky right-0 `}>
      <div className="flex px-2 py-2 border-b-2 items-center divide-x">
        <div className="flex items-center pr-2 gap-2">
          {/* Schedule button probably */}
          <button className="hover:bg-[#f0f0f0] p-3 rounded-full">
            <MdAvTimer size={"1.9em"} />
          </button>

          {/* Report button probably */}
          <button className="hover:bg-[#f0f0f0] p-3 rounded-full">
            <BiErrorCircle size={"1.8em"} />
          </button>

          {/* Transfer button probably */}
          <button className="hover:bg-[#f0f0f0] p-3 rounded-full">
            <BiTransfer size={"1.6em"} />
          </button>

          {/* More options */}
          <button className="hover:bg-[#f0f0f0] p-3 rounded-full">
            <BsThreeDotsVertical size={"1.5em"} />
          </button>
        </div>
        <div className="flex items-center pl-2 gap-2">
          {/* Some grid view button */}
          <button className="hover:bg-[#f0f0f0] p-3 rounded-full">
            <BiGridAlt size={"1.6em"} />
          </button>

          {/* Info button */}
          <button className="hover:bg-[#f0f0f0] p-3 rounded-full">
            <GiInfo size={"1.6em"} />
          </button>
        </div>
      </div>

      {/* Information section */}
      <div className="px-6 py-5 divide-y">
        {/* Brief Computer Info */}
        <div className="flex gap-4 items-center pb-5">
          <FiMonitor size={"1.8em"} />
          <div className="flex-col">
            <p>Device Name: GZ00-01</p>
            <p>Line two</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 py-4">
          <button className="flex items-center justify-center gap-3 flex-1 py-4 bg-blue-500 rounded-md text-white">
            <FiDownload size={"1.8em"} />
            <span>Backup</span>
          </button>
          <button className="flex items-center justify-center gap-3 flex-1 py-4 bg-blue-500 rounded-md text-white">
            <FiUpload size={"1.8em"} />
            <span>Restore</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default DetailViewBar;
