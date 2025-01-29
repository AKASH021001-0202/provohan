import React, { useState } from "react";
import { FaChartPie, FaBox, FaShoppingCart, FaUsers, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io"; 
 import { IoCarOutline } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";

const Sidebar = ({ open }) => {
  const [productSubmenuOpen, setProductSubmenuOpen] = useState(false);

  return (
    <div
      className={`h-full bg-[#f2f2f2] text-[#0A0075] transition-all duration-300 flex flex-col p-5
      ${open ? "w-[60%] sm:w-[20%] md:w-[15%]" : "w-[20%] sm:w-[10%] md:w-[7%] items-center"}`}
    >
      <ul className="space-y-4">
        {/* Dashboard */}
        <li>
          <Link
            to="/dashboard"
            className="flex items-center gap-3 p-3 hover:bg-[#0A0075] hover:text-white rounded"
          >
            <FaChartPie size={24} />
            {open && <span>Dashboard</span>}
          </Link>
        </li>

        {/* Products with Submenu */}
        <li>
          <div
            className="flex items-center gap-3 p-3 hover:bg-[#0A0075] hover:text-white rounded cursor-pointer"
            onClick={() => setProductSubmenuOpen(!productSubmenuOpen)}
          >
            <FaBox size={24} />
            {open && (
              <>
                <span>Vehicle</span>
                <FaChevronDown
                  size={18}
                  className={`ml-auto transition-transform ${
                    productSubmenuOpen ? "rotate-180" : ""
                  }`}
                />
              </>
            )}
          </div>

          {/* Submenu */}
          {productSubmenuOpen && (
            <ul className={`ml-8 space-y-2 transition-all duration-300 ${open ? "block" : "hidden"}`}>
              <li>
                <Link
                  to="/Vehicle/list"
                  className="flex items-center gap-3 p-2 hover:bg-[#0A0075] hover:text-white rounded"
                >
                  <IoCarOutline size={16} />
                  {open && <span>Vehicle List</span>}
                </Link>
              </li>
              <li>
            

                <Link
                  to="/Vehicle/add"
                  className="flex items-center gap-3 p-2 hover:bg-[#0A0075] hover:text-white rounded"
                >
                  <IoMdAdd size={16} />
                  {open && <span>Add Vehicle</span>}
                </Link>
              </li>
              <li>
                <Link
                  to="/Vehicle/Vehiclecategories"
                  className="flex items-center gap-3 p-2 hover:bg-[#0A0075] hover:text-white rounded"
                >
                  <BiCategory size={16} />
                  {open && <span>Vehicle Categories</span>}
                </Link>
              </li>
              <li>
                <Link
                  to="/Vehicle/Vehiclebrand"
                  className="flex items-center gap-3 p-2 hover:bg-[#0A0075] hover:text-white rounded"
                >
                  <BiCategory size={16} />
                  {open && <span>Vehicle Brand</span>}
                </Link>
              </li>
              <li>
                <Link
                  to="/Vehicle/Vehiclemodel"
                  className="flex items-center gap-3 p-2 hover:bg-[#0A0075] hover:text-white rounded"
                >
                  <BiCategory size={16} />
                  {open && <span>Vehicle Model</span>}
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Orders */}
        <li>
          <Link
            to="/orders"
            className="flex items-center gap-3 p-3 hover:bg-[#0A0075] hover:text-white rounded"
          >
            <FaShoppingCart size={24} />
            {open && <span>Orders</span>}
          </Link>
        </li>

        {/* Customers */}
        <li>
          <Link
            to="/customers"
            className="flex items-center gap-3 p-3 hover:bg-[#0A0075] hover:text-white rounded"
          >
            <FaUsers size={24} />
            {open && <span>Customers</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
