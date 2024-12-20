import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const slides = [
    {
      image: "src/assets/slider.png",
      heading: "Sell your car at your doorstep across Tamil Nadu",
      paragraph: "Yes, you read that right! It’s as simple as that.",
      buttonText: "Sell a Used Vehicle",
    },
    {
      image: "src/assets/slider.png",
      heading: "Find the best deals on used cars",
      paragraph: "Browse through a wide range of vehicles at great prices.",
      buttonText: "Browse Cars",
    },
  ];

  return (
    <div className="w-full mx-auto  overflow-x-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative h-[500px] slider-bgimg bg-cover bg-center "
            
          >
            {/* Content Overlay */}
            <div className="container mx-auto">
              <div className="absolute top-1/2 left-30 transform -translate-y-1/2 text-white max-w-[40%] max-[767px]:max-w-[100%] max-[767px]:p-5">
                <h1 className="text-4xl mb-2">{slide.heading}</h1>
                <p className="text-lg mb-4">{slide.paragraph}</p>
                <button className="px-4 py-2 bg-[#A439AD] text-white rounded-md text-lg">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
