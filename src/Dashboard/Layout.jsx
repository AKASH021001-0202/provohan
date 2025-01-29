import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Dashboard from "./Pages/Dashboard";
import Products from "./Pages/Products";
import ProductList from "./Pages/ProductList"; // Subpage for Product List
import AddProduct from "./Pages/AddProduct"; // Subpage for Add Product
import Categories from "./Pages/Categories"; // Subpage for Categories
import Orders from "./Pages/Orders";
import Customers from "./Pages/Customers";
import Brand from "./Pages/Brand";
import Model from "./Pages/Model";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="h-screen flex flex-col">
      {/* Top Navbar */}
      <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex flex-grow">
        {/* Sidebar */}
        <Sidebar open={sidebarOpen} />

        {/* Main Content Area */}
        <div style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          className={`transition-all duration-300 p-5 h-[90vh] overflow-y-scroll  ${
            sidebarOpen
              ? "w-[80%] sm:w-[85%] md:w-[90%]"
              : "w-[90%] sm:w-[95%] md:w-[93%]"
          }`}
        >
          <Routes>
            {/* Main Routes */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />

            {/* Product Routes with Submenu */}
            <Route path="/Vehicle" element={<Products />} />
            <Route path="/Vehicle/list" element={<ProductList />} />
            <Route path="/Vehicle/add" element={<AddProduct />} />
            <Route path="/Vehicle/Vehiclecategories" element={<Categories />} />
            <Route path="/Vehicle/Vehiclebrand" element={<Brand />} />
            <Route path="/Vehicle/Vehiclemodel" element={<Model />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Layout;
