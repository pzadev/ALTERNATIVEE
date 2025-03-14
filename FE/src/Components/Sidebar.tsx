import { GlobeAltIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaQuestion } from "react-icons/fa";
import { LuHandHelping } from "react-icons/lu";
import { FaInfo, FaBook } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface SidebarProps {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ setIsSidebarOpen }: SidebarProps) => {
  return (
    <div className="fixed top-0 left-0 w-64 h-full bg-white border-r-1 border-gray-300 text-black p-5 z-3">
      <div className="flex items-center w-full mb-3 justify-between">
        <GlobeAltIcon className="h-7 w-8 text-black mr-1 hover:text-blue-500" />
        <a href="/">
          <p className="text-black text-[19px] text-center font-bold hover:text-blue-500 ">
            ALTERNATIVE
          </p>
        </a>
        <XMarkIcon
          className="h-7 w-8 hover:text-red-500"
          onClick={() => setIsSidebarOpen(false)}
        />
      </div>
      <ul>
        <li className="mt-6 mb-5">
          <Link
            to="/about"
            className="flex items-center text-black hover:text-blue-500"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaInfo className="h-6 w-6 mr-4" /> About ALTERNATIVE
          </Link>
        </li>
        <li className="mb-5">
          <Link
            to="/support"
            className="flex items-center text-black hover:text-blue-500"
            onClick={() => setIsSidebarOpen(false)}
          >
            <LuHandHelping className="h-7 w-7 mr-3" />
            Support
          </Link>
        </li>
        <li className="mb-5">
          <Link
            to="/faq"
            className="flex items-center text-black hover:text-blue-500"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaQuestion className="h-6 w-6 mr-4" /> FAQ
          </Link>
        </li>
        <li>
          <Link
            to="/submissions"
            className="flex items-center text-black hover:text-blue-500"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaBook className="h-6 w-6 mr-4" /> Submissions
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
