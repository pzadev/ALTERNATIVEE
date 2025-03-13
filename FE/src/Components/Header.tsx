import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { Bars4Icon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router";
import Sidebar from "./Sidebar";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="bg-white border-b-1 border-gray-300 fixed top-0 left-0 w-screen p-4 z-2 flex">
      <Bars4Icon
        className="size-8 text-black mr-5 hover:text-blue-500 hover:cursor-pointer"
        onClick={toggleSidebar}
      />
      {isSidebarOpen && <Sidebar setIsSidebarOpen={setIsSidebarOpen} />}
      <div className="flex items-center ">
        <GlobeAltIcon className="h-7.5 w-8 text-blue-700 mr-1 hover:text-blue-500" />
        <Link
          to={`/`}
          className="text-black text-[21px] font-bold hover:text-blue-500"
        >
          ALTERNATIVE
        </Link>
      </div>
      <Link to={`/submissions`}>
        <button className="bg-blue-700 fixed top-3 right-5 text-white w-30 h-10 rounded-xl hover:bg-green-500 hover:cursor-pointer">
          Submit
        </button>
      </Link>
    </div>
  );
};

export default Header;
