// src/components/ShopSidebar.js
import React, { useState } from "react";
import { cardsvehicle, filterConfig } from "../../localstorage";
import Slider from "react-slick";
import Rightsidebar from "./Rightsidebar";
import Carsgrid from "./Carsgrid";

const ShopSidebar = () => {
  const [filters, setFilters] = useState({
    location: [],
    radius: "",
    make: [],
    owners: [],
    transmission: [],
    kilometers: 500000,
    colors: [],
    listingAge: [],
    years: 2024,
    fuel: [],
  });

  const [searchTerm, setSearchTerm] = useState({});
  const [isOpen, setIsOpen] = useState(
    Object.fromEntries(filterConfig.map((filter) => [filter.key, true]))
  );

  const handleToggle = (key) => {
    setIsOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleCheckbox = (key, value) => {
    setFilters((prev) => {
      const currentValues = prev[key];
      const updatedValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];
      return { ...prev, [key]: updatedValues };
    });
  };

  const handleSlider = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleSearch = (key, value) => {
    setSearchTerm((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="flex">
      <div className="max-w-[20%] bg-white p-5 max-[767px]:w-full">
        {filterConfig.map((filter) => (
          <div key={filter.key} className="mb-4">
            <h3
              className="text-lg font-semibold flex justify-between items-center cursor-pointer"
              onClick={() => handleToggle(filter.key)}
            >
              {filter.label}
              <span className="text-gray-500">
                {isOpen[filter.key] ? (
                  <svg
                    width="16"
                    height="10"
                    viewBox="0 0 16 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3"
                  >
                    <path
                      d="M15.7443 1.06463L15.2202 0.536881C15.0552 0.372067 14.8358 0.281269 14.6012 0.281269C14.3668 0.281269 14.1471 0.372067 13.9822 0.536881L8.00358 6.51573L2.0181 0.530247C1.85341 0.365433 1.6337 0.274765 1.3993 0.274765C1.16489 0.274765 0.945048 0.365433 0.780234 0.530247L0.256002 1.05474C-0.085334 1.39581 -0.085334 1.9514 0.256002 2.29247L7.38243 9.44453C7.54712 9.60921 7.76657 9.72525 8.00306 9.72525H8.00579C8.24033 9.72525 8.45978 9.60908 8.62446 9.44453L15.7443 2.31185C15.9092 2.14717 15.9997 1.92109 16 1.68668C16 1.45214 15.9092 1.22918 15.7443 1.06463Z"
                      fill="black"
                    />
                  </svg>
                ) : (
                  <svg
                    width="16"
                    height="10"
                    viewBox="0 0 16 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 transform rotate-180"
                  >
                    <path
                      d="M15.7443 1.06463L15.2202 0.536881C15.0552 0.372067 14.8358 0.281269 14.6012 0.281269C14.3668 0.281269 14.1471 0.372067 13.9822 0.536881L8.00358 6.51573L2.0181 0.530247C1.85341 0.365433 1.6337 0.274765 1.3993 0.274765C1.16489 0.274765 0.945048 0.365433 0.780234 0.530247L0.256002 1.05474C-0.085334 1.39581 -0.085334 1.9514 0.256002 2.29247L7.38243 9.44453C7.54712 9.60921 7.76657 9.72525 8.00306 9.72525H8.00579C8.24033 9.72525 8.45978 9.60908 8.62446 9.44453L15.7443 2.31185C15.9092 2.14717 15.9997 1.92109 16 1.68668C16 1.45214 15.9092 1.22918 15.7443 1.06463Z"
                      fill="black"
                    />
                  </svg>
                )}
              </span>
            </h3>
            {isOpen[filter.key] && (
              <div className="mt-2">
                {/* Searchable Input */}
                {filter.searchable && (
                  <div className="flex items-center w-[100%] border rounded-full mb-4 bg-white px-3 py-1.5 shadow-sm focus-within:ring-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5  text-black "
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
                    <input
                      type="text"
                      placeholder={`Search ${filter.label}`}
                      value={searchTerm[filter.key] || ""}
                      onChange={(e) => handleSearch(filter.key, e.target.value)}
                      className="ml-3 w-full  bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none"
                    />
                  </div>
                )}

                {/* Checkbox Filters */}
                {filter.type === "checkbox" &&
                  filter.options
                    .filter(
                      (option) =>
                        !filter.searchable ||
                        option
                          .toLowerCase()
                          .includes(
                            (searchTerm[filter.key] || "").toLowerCase()
                          )
                    )
                    .map((option) => (
                      <label
                        key={option}
                        className="flex gap-4 mb-2 items-center"
                      >
                        <input
                          type="checkbox"
                          className="form-checkbox"
                          onChange={() => handleCheckbox(filter.key, option)}
                          checked={filters[filter.key].includes(option)}
                        />
                        <span className="custom-checkbox"></span>
                        <span>{option}</span>
                      </label>
                    ))}

                {/* Slider Filters */}
                {filter.type === "slider" && (
                  <>
                    <input
                      type="range"
                      min={filter.range.min}
                      max={filter.range.max}
                      step={filter.range.step}
                      value={filters[filter.key]}
                      onChange={(e) => handleSlider(filter.key, e.target.value)}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm">
                      <span>
                        {filter.range.min}
                        {filter.keyin}{" "}
                      </span>
                      <span>
                        {filters[filter.key].toLocaleString()} {filter.keyin}
                      </span>
                    </div>
                  </>
                )}

                {/* Button Filters */}
                {filter.type === "button" && (
                  <div className="grid grid-cols-4 gap-2">
                    {filter.options.map((option) => (
                      <button
                        key={option}
                        className={`w-8 h-8 rounded-full border-2 ${
                          filters[filter.key].includes(option)
                            ? "border-black"
                            : "border-gray-300"
                        }`}
                        style={{ backgroundColor: option.toLowerCase() }}
                        onClick={() => handleCheckbox(filter.key, option)}
                      ></button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="max-w-[80%] p-5  max-[767px]:w-full">
       <Rightsidebar />
       <Carsgrid />
       </div>
    </div>
  );
};

export default ShopSidebar;
