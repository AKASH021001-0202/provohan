import React from "react";
import { carData } from "../../localstorage";

import Slider from "react-slick";
import { FaHeart, FaShare } from "react-icons/fa";


const Carcarousel = () => {
  const settings = {
    dots: false, // Add dots for better testing
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, // Enable or test with both arrows
};

  const imageSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };
  return (
    <div id="card_carouserl">
      <Slider {...settings}>
       
          {carData.map((car) => (
            <div
              key={car.id}
              className="relative bg-white rounded-lg box-shadow group overflow-hidden"
            >
              {/* Internal Image Carousel */}
              <Slider {...imageSliderSettings}>
                {car.images.map((img, index) => (
                  <div key={index} className="w-full h-52 focus:outline-none">
                    <img
                      src={img}
                      alt={`Car ${index}`}
                      className="w-[100%] h-auto object-cover"
                    />
                  </div>
                ))}
              </Slider>

              {/* Hover Icons */}
              <div className="absolute hovericon flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200">
                  <FaHeart className="" />
                </button>
                <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200">
                  <FaShare className="" />
                </button>
              </div>

              {/* Car Details */}
              <div className="px-1 py-5">
                <div className="flex  items-start justify-around ">
                  <div className="p-1">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {car.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{car.variant}</p>
                    <p className="text-btn_location  font-bold text-lg mt-2">
                      {car.price}
                    </p>
                  </div>
                  <div className="p-1">
                    <p className="text-btn_location  bg-backgro_status px-2.5 py-1.5 rounded-lg  text-sm mt-2">
                      {car.status}
                    </p>
                  </div>
                </div>

                {/* Extra Details */}
                <div className="flex items-center justify-around gap-1 mt-3 text-sm text-gray-500">
                  <span className="flex items-center gap-1 bg-[#F9F9F9] rounded-full  p-2 h-fourty">
                    <svg
                      width="17"
                      height="14"
                      viewBox="0 0 17 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.6307 6.94333C16.371 6.08679 15.9785 5.28158 15.4644 4.54935C14.9394 3.79815 14.2979 3.14157 13.5592 2.5957C12.8205 2.05003 12.0034 1.62846 11.1319 1.3448C10.2795 1.06918 9.3946 0.928589 8.499 0.928589C7.60318 0.928589 6.71563 1.06918 5.86586 1.3448C4.99461 1.62846 4.17746 2.05003 3.43855 2.5957C2.69985 3.14157 2.0586 3.80083 1.53358 4.54935C1.0193 5.28158 0.629721 6.08679 0.367315 6.94333C0.107387 7.79987 -0.0171059 8.68877 0.00188807 9.58035C0.020882 10.4938 0.18584 11.3907 0.491808 12.2553C0.491808 12.2582 0.491808 12.2609 0.494492 12.2609C0.656766 12.7148 1.07628 13.0282 1.55258 13.0634C1.57962 13.0688 1.60667 13.0714 1.63372 13.0714H15.3616C15.3886 13.0714 15.4157 13.0688 15.44 13.0634C15.919 13.0335 16.3437 12.7175 16.5062 12.2609C16.5062 12.2582 16.5062 12.2582 16.5089 12.2553C16.8173 11.3934 16.9825 10.4938 16.9986 9.58035C17.0149 8.68609 16.8904 7.79987 16.6307 6.94333ZM3.91753 3.23887C6.65885 1.20957 10.3418 1.20957 13.0829 3.23887C15.8243 5.26797 16.8958 8.78607 15.7485 11.9933C15.689 12.1527 15.5375 12.2609 15.3643 12.2609C15.3426 12.2609 15.3236 12.2636 15.3019 12.2662H1.69586C1.67418 12.2636 1.65539 12.2609 1.63372 12.2609C1.46318 12.2609 1.30896 12.1527 1.2495 11.9933C1.2495 11.9933 1.2495 11.9933 1.2495 11.9906C0.104703 8.78607 1.17642 5.26797 3.91753 3.23887Z"
                        fill="black"
                      />
                      <path
                        d="M1.62174 8.5872V8.61007V8.63293V8.64992C1.62174 8.65863 1.62447 8.66712 1.62447 8.67278C1.62447 8.67844 1.6272 8.68432 1.6272 8.68998C1.62992 8.69847 1.62992 8.70718 1.63286 8.71285C1.63559 8.71851 1.63559 8.72417 1.63831 8.72983C1.64104 8.73854 1.64376 8.7442 1.64649 8.74986C1.64922 8.75553 1.65194 8.7614 1.65194 8.76707C1.65467 8.77273 1.6576 8.77839 1.66033 8.78405C1.66306 8.78993 1.66578 8.79842 1.67123 8.80408C1.67396 8.80975 1.67669 8.81563 1.67941 8.81846C1.68235 8.82412 1.6878 8.83261 1.69325 8.83827C1.69598 8.84415 1.69871 8.84698 1.70143 8.85264C1.70688 8.8583 1.70982 8.86702 1.71527 8.87268C1.718 8.87834 1.72345 8.88117 1.72618 8.88683C1.73163 8.89271 1.73456 8.89837 1.74002 8.90403C1.74547 8.9097 1.75092 8.91536 1.75637 8.91819C1.76204 8.92124 1.76476 8.9269 1.77021 8.92973C1.77567 8.93539 1.78384 8.94105 1.79223 8.94693C1.79496 8.94976 1.79769 8.95259 1.80041 8.95259L1.80314 8.95542C1.80859 8.95825 1.81153 8.96108 1.81698 8.96392C1.82243 8.96675 1.82788 8.97263 1.83627 8.97546C1.84172 8.97829 1.84445 8.98112 1.8499 8.98395C1.85808 8.98961 1.86647 8.99244 1.87465 8.99527C1.87737 8.99527 1.8801 8.9981 1.8801 8.9981C1.89121 9.00398 1.90484 9.00681 1.91596 9.00964H1.92141C1.93231 9.01247 1.94343 9.01531 1.95433 9.01814H1.95706H1.95979C1.96817 9.02097 1.97908 9.02097 1.98726 9.02097H1.99292C2.00382 9.02097 2.01494 9.0238 2.02584 9.0238H2.02857H2.05604H2.06715C2.07533 9.0238 2.08078 9.02097 2.08896 9.02097C2.09462 9.02097 2.10008 9.01814 2.10553 9.01814C2.11371 9.01531 2.11937 9.01531 2.12755 9.01247C2.13027 9.01247 2.13573 9.00964 2.13845 9.00964C2.14684 9.00681 2.15229 9.00398 2.16047 9.00398C2.1632 9.00398 2.16592 9.00115 2.16886 9.00115C2.17704 8.9981 2.18794 8.99244 2.19633 8.98961C2.19906 8.98961 2.20178 8.98678 2.20178 8.98678C2.20996 8.98395 2.21814 8.97829 2.22653 8.97263C2.22653 8.97263 2.22925 8.97263 2.22925 8.96958C2.24016 8.96392 2.24855 8.95825 2.25672 8.94976C2.2649 8.94388 2.27329 8.93539 2.28147 8.92973L2.2842 8.9269C2.30076 8.91253 2.31439 8.89837 2.33096 8.88117C2.33369 8.87834 2.33641 8.87551 2.33641 8.87268C2.34186 8.86702 2.34459 8.86114 2.35025 8.85547C2.35298 8.85264 2.3557 8.84698 2.35843 8.84415C2.35843 8.84415 2.35843 8.84132 2.36116 8.84132C4.12308 6.17253 7.41038 5.05089 10.3515 6.11548C10.4421 6.14684 10.5356 6.16404 10.6262 6.16404C10.9038 6.16404 11.1676 6.01553 11.3188 5.7588C11.3188 5.7588 11.3188 5.75597 11.3215 5.75597L12.0253 4.54853C12.1436 4.34602 12.1738 4.10061 12.1105 3.87219C12.0501 3.64964 11.8989 3.45824 11.6927 3.3498C10.7252 2.83328 9.63952 2.55652 8.55096 2.54781C7.4626 2.53932 6.37424 2.7991 5.39828 3.30145C4.42254 3.80359 3.56233 4.5457 2.91079 5.45046C2.25945 6.3524 1.81425 7.41416 1.62447 8.52166V8.52449C1.62447 8.52732 1.62447 8.53015 1.62174 8.53298V8.5443C1.62174 8.55301 1.61902 8.56151 1.61902 8.57C1.62447 8.57588 1.62447 8.58154 1.62174 8.5872ZM5.76946 4.06337C7.51754 3.16427 9.59549 3.18147 11.3272 4.10627C11.3299 4.10627 11.3299 4.1091 11.3327 4.1091V4.11476L10.6318 5.31916C9.82092 5.02519 8.97707 4.8769 8.12232 4.87102C7.28938 4.86819 6.46211 5.00233 5.66775 5.27365C4.8734 5.54475 4.13126 5.94433 3.46335 6.46084C3.32873 6.56362 3.19955 6.67206 3.0731 6.78333C3.66949 5.619 4.60959 4.66002 5.76946 4.06337Z"
                        fill="black"
                      />
                      <path
                        d="M12.9368 5.80973L8.1152 7.20459C7.18086 7.40276 6.4762 8.26945 6.4762 9.30847C6.4762 10.4909 7.39116 11.4524 8.51683 11.4524C9.13416 11.4524 9.68877 11.1625 10.0629 10.7062L13.576 6.9462C13.7809 6.72526 13.8219 6.38672 13.6717 6.1198C13.5214 5.85572 13.2208 5.72937 12.9368 5.80973ZM9.76797 7.61209L12.5735 6.79993L10.5383 8.97826C10.4564 8.42733 10.1723 7.9423 9.76797 7.61209ZM7.29007 9.30563C7.29007 8.59375 7.84197 8.01391 8.51954 8.01391C9.1969 8.01391 9.74879 8.59375 9.74879 9.30563C9.74879 10.0173 9.1969 10.5971 8.51954 10.5971C7.84197 10.5971 7.29007 10.0173 7.29007 9.30563Z"
                        fill="black"
                      />
                    </svg>
                    {car.distance}
                  </span>
                  <span className="flex items-center gap-1 bg-[#F9F9F9] rounded-full  p-2 h-fourty">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.74548 7.49951C3.74544 11.4878 8.99359 15.7495 8.99359 15.7495C8.99359 15.7495 14.2455 11.4878 14.2455 7.49951C14.2455 4.61787 11.9955 2.24951 8.99359 2.24951C5.99171 2.24951 3.74551 4.6196 3.74548 7.49951Z"
                        stroke="#18181B"
                        strokeWidth="1.63634"
                        strokeLinecap="round"
                        strokeLinejoin="bevel"
                      />
                      <rect
                        x="7.49817"
                        y="5.99829"
                        width="3"
                        height="3"
                        rx="1.5"
                        stroke="#18181B"
                        strokeWidth="1.63634"
                      />
                    </svg>

                    {car.location}
                  </span>
                  <span className="flex items-center gap-1 bg-[#F9F9F9] rounded-full  p-2 h-fourty">
                    {" "}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.655 13.5588C13.4761 13.0859 12.2972 12.7668 11.1315 12.5991L11.0328 12.0141C10.9833 11.6543 10.763 11.343 10.4538 11.1714V10.0238C10.4538 9.75378 10.2981 9.50288 10.0572 9.38451L9.87722 9.29612L11.6151 5.61753C11.6852 5.63127 11.756 5.64132 11.8273 5.64132C11.9553 5.64132 12.0839 5.61908 12.2078 5.57431C12.4939 5.47117 12.7225 5.26147 12.8513 4.98352L14.0029 2.4991C14.3182 1.81877 14.0274 1.00482 13.355 0.684704L12.4536 0.255412C12.1281 0.100367 11.762 0.0825136 11.4236 0.204736C11.0817 0.328059 10.8084 0.579094 10.6546 0.911433L9.50292 3.39558C9.2767 3.88324 9.42522 4.4514 9.82648 4.77251L8.10201 8.42412L7.70926 8.23121C7.43529 8.09704 7.10872 8.1539 6.896 8.37335L5.687 9.61891C5.18596 9.5453 4.67927 9.82006 4.48711 10.289L3.4895 12.2927C2.93894 12.0928 2.39773 11.8269 1.87154 11.4926C1.68807 11.3765 1.46587 11.3681 1.27731 11.472C1.05896 11.5921 0.923279 11.8371 0.923279 12.1113V15.1637C0.923279 15.5559 1.20837 15.875 1.5587 15.875H14.4413C14.7917 15.875 15.0768 15.5559 15.0768 15.1637V14.2313C15.0768 13.9301 14.9074 13.6598 14.655 13.5588ZM10.0132 3.6322L11.1649 1.14792C11.2552 0.952912 11.4148 0.805832 11.6145 0.733734C11.8109 0.662735 12.0229 0.673172 12.2119 0.76326L13.1133 1.19255C13.5085 1.38083 13.6788 1.8608 13.4926 2.26262L12.341 4.7469C12.2759 4.88739 12.1608 4.99341 12.0171 5.04518C11.876 5.09599 11.7238 5.08872 11.5881 5.02403L10.307 4.41402C10.307 4.41398 10.3071 4.41405 10.307 4.41402C10.307 4.41398 10.3067 4.41386 10.3066 4.41383L10.286 4.40399C10.0011 4.26831 9.87865 3.92224 10.0132 3.6322ZM10.3207 5.04347L11.0908 5.41018L9.37221 9.04805L8.60701 8.6722L10.3207 5.04347ZM7.2996 8.76515C7.34231 8.72121 7.40782 8.70995 7.46138 8.73618L9.37525 9.67621C9.37848 9.67789 9.38038 9.68095 9.38371 9.68251C9.38632 9.68375 9.38915 9.68318 9.39178 9.68433L9.80916 9.88933C9.85915 9.91377 9.89128 9.96664 9.89128 10.0238V10.9646L6.29705 9.79802L7.2996 8.76515ZM4.99893 10.5213C5.11332 10.2431 5.41133 10.1016 5.69395 10.1937L10.0857 11.6191C10.2923 11.6861 10.4455 11.8713 10.4768 12.0991L10.5488 12.5263C10.1136 12.4828 9.68053 12.46 9.2505 12.46H9.24748C8.42405 12.4603 7.77503 12.539 7.20224 12.6086C6.38691 12.7075 5.68241 12.7932 4.72207 12.6255C4.49038 12.585 4.2598 12.5318 4.0305 12.4678L4.99893 10.5213ZM14.5143 15.1637C14.5143 15.2563 14.4635 15.3125 14.4413 15.3125H1.5587C1.53645 15.3125 1.48578 15.2563 1.48578 15.1637V12.1113C1.48578 12.0227 1.52657 11.9769 1.56996 11.9675C2.5472 12.5884 3.57524 12.9961 4.6254 13.1795C5.66745 13.3616 6.41013 13.2713 7.27008 13.167C7.85414 13.0961 8.45812 13.0228 9.24748 13.0225H9.2505C10.9468 13.0225 12.695 13.3786 14.4457 14.0809C14.4745 14.0924 14.5143 14.1511 14.5143 14.2313L14.5143 15.1637Z"
                        fill="black"
                      />
                    </svg>
                    {car.transmission}
                  </span>
                </div>
              </div>
            </div>
          ))}
        
      </Slider>
    </div>
  );
};

export default Carcarousel;
