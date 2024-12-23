import React from "react";
import Slider from "react-slick";
import { cardsvehicle } from "../../localstorage";

const Rightsidebar = () => {
  var Shopcards = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div>
        <div className="flex gap-5 items-center">
          <h5 className="text-xl font-bold ">Home</h5>
          <svg
            width="12"
            height="12"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.06464 15.7443L3.5369 15.2202C3.37208 15.0552 3.28128 14.8358 3.28128 14.6012C3.28128 14.3668 3.37208 14.1471 3.5369 13.9822L9.51574 8.00358L3.53026 2.0181C3.36545 1.85341 3.27478 1.6337 3.27478 1.3993C3.27478 1.16489 3.36545 0.945048 3.53026 0.780234L4.05475 0.256002C4.39583 -0.085334 4.95141 -0.085334 5.29249 0.256002L12.4445 7.38243C12.6092 7.54712 12.7253 7.76657 12.7253 8.00306V8.00579C12.7253 8.24033 12.6091 8.45978 12.4445 8.62446L5.31187 15.7443C5.14719 15.9092 4.9211 15.9997 4.68669 16C4.45216 16 4.22919 15.9092 4.06464 15.7443Z"
              fill="black"
              fill-opacity="0.5"
            />
          </svg>
          <h5 className="text-xl  ">New Cars in chennai</h5>
        </div>
        <div>
          <Slider {...Shopcards}>
            {cardsvehicle.map((brand, index) => (
              <div key={index} className="p-1 mt-10 ">
                <div className="flex items-center   justify-center w-[450px] h-[250px] bg-gradient-to-b from-[#F0F0FF] to-[#FFFFFF] p-5 rounded-3xl shadow-md">
                  <div className="w-[50%]">
                    <h2 className=" text-black text-xl mb-1 font-bold">
                      {brand.heading}
                    </h2>
                    <p className="text-[#404446] mb-1   text-l font-semibold">
                      {brand.content}
                    </p>
                    <button className="px-4 py-1 mt-2 bg-[#493391] text-white rounded-full text-l">
                      Go Check
                    </button>
                  </div>
                  <div className="flex w-[50%] items-center justify-center">
                    <img
                      src={brand.img}
                      alt={`${brand.name} Logo`}
                      className="w-[100%] overflow-hidden"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="flex gap-5 items-center justify-between mt-5 mb-10">
          <h5 className="text-xl font-bold ">557 Used cars in Chennai</h5>
          <div className="">
            <label
              for="sort-select"
              class="block mb-2 text-sm font-medium bg-[#71717A33] border border-gray-300 text-btn_location rounded-lg w-full dark:text-white"
            >
              <div class="flex items-center gap-2 p-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.16949 11.7389C1.0816 11.9471 1.12664 12.1877 1.28375 12.3497L3.44696 14.5794C3.44709 14.5795 3.4473 14.5796 3.44744 14.5798C3.54968 14.6856 3.69174 14.7524 3.8507 14.7524C4.00966 14.7524 4.15173 14.6856 4.25397 14.5798C4.25411 14.5796 4.25431 14.5795 4.25445 14.5794L6.41821 12.3497C6.57531 12.1877 6.62036 11.9471 6.53246 11.7389C6.44457 11.5307 6.24023 11.3956 6.01446 11.3956H4.4132V3.81006C4.4132 3.49915 4.16162 3.24756 3.8507 3.24756C3.53979 3.24756 3.2882 3.49915 3.2882 3.81006V11.3956H1.68749C1.46173 11.3956 1.25738 11.5307 1.16949 11.7389Z"
                    fill="#5E0075"
                  />
                  <path
                    d="M15.1199 7.2691C15.1199 6.95819 14.8683 6.7066 14.5574 6.7066H8.45337C8.14246 6.7066 7.89087 6.95819 7.89087 7.2691C7.89087 7.58002 8.14246 7.8316 8.45337 7.8316H14.5574C14.8683 7.8316 15.1199 7.58002 15.1199 7.2691Z"
                    fill="#5E0075"
                  />
                  <path
                    d="M8.45337 11.2912H12.8023C13.1132 11.2912 13.3648 11.0396 13.3648 10.7287C13.3648 10.4178 13.1132 10.1662 12.8023 10.1662H8.45337C8.14246 10.1662 7.89087 10.4178 7.89087 10.7287C7.89087 11.0396 8.14246 11.2912 8.45337 11.2912Z"
                    fill="#5E0075"
                  />
                  <path
                    d="M8.45337 14.7524H11.0472C11.3582 14.7524 11.6097 14.5009 11.6097 14.1899C11.6097 13.879 11.3582 13.6274 11.0472 13.6274H8.45337C8.14246 13.6274 7.89087 13.879 7.89087 14.1899C7.89087 14.5009 8.14246 14.7524 8.45337 14.7524Z"
                    fill="#5E0075"
                  />
                  <path
                    d="M16.3124 3.24756H8.45337C8.14246 3.24756 7.89087 3.49915 7.89087 3.81006C7.89087 4.12097 8.14246 4.37256 8.45337 4.37256H16.3124C16.6234 4.37256 16.8749 4.12097 16.8749 3.81006C16.8749 3.49915 16.6234 3.24756 16.3124 3.24756Z"
                    fill="#5E0075"
                  />
                </svg>
                <select
                  id="sort-select"
                  class="bg-transparent text-btn_location text-sm rounded-lg block w-full focus-visible:border-transparent focus:outline-none  focus-visible:ring-transparent focus:border-transparent focus:ring-transparent"
                  aria-label="Sort options"
                >
                  <option>Sort by popularity</option>
                  <option>Sort by average rating</option>
                  <option>Sort by latest</option>
                  <option>Sort by price: low to high</option>
                  <option>Sort by price: high to low</option>
                </select>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightsidebar;
