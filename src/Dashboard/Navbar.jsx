import { FiMenu, FiSearch, FiBell, FiUser,FiSettings ,FiMessageSquare} from "react-icons/fi";

const Navbar = ({ toggleSidebar }) => {
  return (
    <>
      <div className=" bg-[#3B3391] p-4 shadow-md flex  items-center">
        <div className="w-[20%] flex  gap-10">
          <img
            alt="Company Logo"
            src="https://i.ibb.co/Jqnhzg5/Provahan-logo-final-1-2.png"
            className="h-16 w-auto"
          />

          <button onClick={toggleSidebar} className="text-[#fff]">
            <FiMenu size={24} />
          </button>
        </div>
        <div className="w-[80%] p-4 flex justify-between items-center">
          {/* Toggle Sidebar Button */}

          {/* Search Box */}
          <div className="flex items-center gap-3">
            <div className="search max-[600px]:hidden  desktop:block">
              <div className="flex items-center w-search border rounded-full bg-white px-3 py-1.5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500">
                <input
                  type="text"
                  placeholder="Search"
                  className="ml-3 w-full  bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7  bg-topbar text-white border rounded-full p-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Notification and User Icons */}
          <div className="flex items-center gap-4 text-[#fff]">
            <FiBell size={24} />
            <FiMessageSquare size={24} />
            <FiSettings size={24} />
            <FiUser size={24} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
