import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaHeart, FaShare, FaMapMarkerAlt, FaCarSide } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectProducts, setProducts } from "../redux/slices/productslice";
import axios from "axios";

const TabContent = () => {
  const [activeTab, setActiveTab] = useState("tab1"); // Manage active tab state
 
  const handleTabClick = (tab) => {
    setActiveTab(tab); // Set the active tab
  };



  // Slick settings for internal image carousel
  const imageSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector(selectProducts) || []; // Default to an empty array

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/product`
        );
        dispatch(setProducts(response.data));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [dispatch]);

  const handleNavigate = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="w-full  transform -skew-y-1 -mt-8 ">
      <div className="content bg-tab_section  py-5 pl-10">
        <h3 className="text-4xl py-3 skew-y-1  text-white font-bold">
          Check Your Dream Cars...
        </h3>
        <p className="text-2xl text-white">Just A Few Clicks Away</p>
      </div>
      <section className=" -my-3 mb-10 ">
        {/* Tabs */}
        <div className="flex pt-5 pl-10 mb-10  bg-tab_section ">
          <button
            className={`px-6 py-2 text-lg ${
              activeTab === "tab1"
                ? "border-b-4 bg-white text-btn_location font-bold"
                : "text-white"
            }`}
            onClick={() => handleTabClick("tab1")}
          >
            Available Cars
          </button>
          <button
            className={`px-6 py-2 text-lg ${
              activeTab === "tab2"
                ? "border-b-4 bg-white text-btn_location font-bold"
                : "text-white"
            }`}
            onClick={() => handleTabClick("tab2")}
          >
            More Details
          </button>
        </div>

        {/* Tab Content */}
        <div className="container skew-y-1  mt-0 mx-auto ">
          <div className="p-4   ">
            {activeTab === "tab1" && (
              <div>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((car ,i ) => (
                    <div
                      key={i}
                      className="relative bg-white rounded-lg shadow-lg group overflow-hidden" onClick={() => handleNavigate(car._id)}
                    >
                      {/* Internal Image Carousel */}
                      <Slider {...imageSliderSettings}>
                        {car.images.map((img, index) => (
                          <div key={index} className="w-full h-52 focus:outline-none">
                            <img
                              src={img}
                              alt={`Car ${index}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </Slider>
                    

                      {/* Hover Icons */}
                      <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200">
                          <FaHeart className="" />
                        </button>
                        <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200">
                          <FaShare className="" />
                        </button>
                      </div>

                      {/* Car Details */}
                      <div className="p-4">
                        <div className="flex items-start justify-between ">
                          <div className="p-1">
                            <h3 className="text-lg font-semibold text-gray-800">
                              {car.name}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {car.variant}
                            </p>
                            <p className="text-btn_location  font-bold text-lg mt-2">
                              {car.price}
                            </p>
                          </div>
                          <div className="p-1">
                            <p className="text-btn_location  bg-backgro_status px-2.5 py-1.5 rounded-lg  text-lg mt-2">
                              {car.status}
                            </p>
                          </div>
                        </div>

                        {/* Extra Details */}
                        <div className="flex items-center gap-1 mt-3 text-sm text-gray-500">
                          <span className="flex items-center gap-1 bg-[#F9F9F9] rounded-full  p-4 h-fourty">
                       
                            {car.distance}
                          </span>
                          <span className="flex items-center gap-1 bg-[#F9F9F9] rounded-full  p-4 h-fourty">
                         

                            {car.location}
                          </span>
                          <span className="flex items-center gap-1 bg-[#F9F9F9] rounded-full  p-4 h-fourty">
                            {" "}
                          
                            {car.transmission}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "tab2" && (
              <div className="h-auto">
            
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((car,i) => (
                    <div
                      key={i}
                      className="relative bg-white rounded-lg shadow-lg group overflow-hidden" onClick={() => handleNavigate(car._id)}
                    >
                      {/* Internal Image Carousel */}
                      <Slider {...imageSliderSettings}>
                        {car.images.map((img, index) => (
                          <div key={index} className="w-full h-52 focus:outline-none">
                            <img
                              src={img}
                              alt={`Car ${index}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </Slider>

                      {/* Hover Icons */}
                      <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200">
                          <FaHeart className="" />
                        </button>
                        <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200">
                          <FaShare className="" />
                        </button>
                      </div>

                      {/* Car Details */}
                      <div className="p-4">
                        <div className="flex items-start justify-between ">
                          <div className="p-1">
                            <h3 className="text-lg font-semibold text-gray-800">
                              {car.name}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {car.variant}
                            </p>
                            <p className="text-btn_location  font-bold text-lg mt-2">
                              {car.price}
                            </p>
                          </div>
                          <div className="p-1">
                            <p className="text-btn_location  bg-backgro_status px-2.5 py-1.5 rounded-lg  text-lg mt-2">
                              {car.status}
                            </p>
                          </div>
                        </div>

                        {/* Extra Details */}
                        <div className="flex items-center gap-1 mt-3 text-sm text-gray-500">
                          <span className="flex items-center gap-1 bg-[#F9F9F9] rounded-full  p-4 h-fourty">
                       
                            {car.distance}
                          </span>
                          <span className="flex items-center gap-1 bg-[#F9F9F9] rounded-full  p-4 h-fourty">
                           

                            {car.location}
                          </span>
                          <span className="flex items-center gap-1 bg-[#F9F9F9] rounded-full  p-4 h-fourty">
                            {" "}
                         
                            {car.transmission}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <div className="w-full  flex  text-center items-center justify-center">
        <button className="bg-btn_location  p-3 m-5 text-white ">
          View all
        </button>
      </div>
    </div>
  );
};

export default TabContent;
