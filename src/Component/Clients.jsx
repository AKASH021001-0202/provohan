import React from "react";
import Slider from "react-slick";
import { client1, client2 } from "../localstorage";

const Clients = () => {
  var Clientcarousel = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
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
    <section className="bg-btn_location -mt-20 py-24 client_carousel">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-5">
          {/* Title Section */}
          <div className="lg:w-1/4 text-center lg:text-left">
            <div className="flex">
              <div className="div">
                <h2 className="text-3xl font-bold text-white">
                  Explore Popular Brands
                </h2>
                <p className="text-base text-white mt-4">
                  Yes, you read that right! It's as simple as that.
                </p>
              </div>
            <div className="vl"></div>
            </div>
          </div>

          {/* Carousel Section */}
          <div className="lg:w-3/4">
            <Slider {...Clientcarousel}>
              {client1.map((brand, index) => (
                <div key={index} className="p-2">
                  <div className="flex items-center h-[50px]  justify-between bg-white px-2 py-2 rounded-lg shadow-md">
                    <div className="flex items-center space-x-2">
                      <img
                        src={brand.img}
                        alt={`${brand.name} Logo`}
                        className="client_logo"
                      />
                    </div>
                    <div className="v2"></div>
                    <p className="text-btn_location  w-[110px] text-sm font-semibold">
                      {brand.count}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
            <Slider {...Clientcarousel}>
              {client2.map((brand, index) => (
                <div key={index} className="p-2">
                  <div className="flex items-center h-[50px]   justify-between bg-white px-2 py-2 rounded-lg shadow-md">
                    <div className="flex items-center space-x-2 ">
                      <img
                        src={brand.img}
                        alt={`${brand.name} Logo`}
                        className="client_logo"
                      />
                    </div>
                    <div className="v2"></div>
                    <p className="text-btn_location  w-[110px] text-sm font-semibold">
                      {brand.count}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
