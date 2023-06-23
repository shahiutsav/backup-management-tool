import { LuFolderPlus, LuFolderInput } from "react-icons/lu";
import { HiOutlineHome } from "react-icons/hi";

const BreadCrumbs = () => {
  return (
    <div className="flex border-b-2 py-3.5 px-7">
      {/* Breadcrumbs */}
      <div className="flex-1 flex items-center gap-2">
        <HiOutlineHome size={"1.3em"} />

        <span>&gt; Devices &gt; Offices &gt; Kathmandu</span>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="flex gap-2">
          <LuFolderPlus size={"1.7em"} />
          <span>New folder</span>
        </button>
        <button className="flex gap-2">
          <LuFolderInput size={"1.7em"} />
          <span>Move to</span>
        </button>
      </div>
    </div>
  );
};

export default BreadCrumbs;
