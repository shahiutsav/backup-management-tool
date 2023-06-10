import { TfiSearch, TfiHelpAlt } from "react-icons/tfi";
import { TbGridDots } from "react-icons/tb";
import { BsPerson } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="border-2 h-min w-full overflow-hidden flex py-2 px-5">
      {/* Search bar */}
      <div className="flex items-center flex-1">
        <TfiSearch
          className="absolute  text-[#7b7b7b] text-center mx-3"
          size={"1em"}
        />
        <input
          type="text"
          className="bg-neutral-100 p-3 rounded-lg pl-10 focus:outline-none focus-visible:outline-none"
        />
      </div>
      <div className="flex items-center gap-8 h-full">
        <button className="bg-[#1e73e8] px-7 border-none text-white font-medium rounded-full h-full">
          Add Device
        </button>

        <button>
          <TbGridDots size={"1.8em"} />
        </button>

        <button>
          <TfiHelpAlt size={"1.8em"} />
        </button>

        <button>
          <BsPerson size={"1.8em"} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
