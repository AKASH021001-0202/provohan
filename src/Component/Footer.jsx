import React from "react";
import { copyrights, servicesList, touchlink } from "../localstorage";

const Footer = () => {
  return (

    <div className="min-h-screen  flex flex-col align-bottom justify-end ">
    <section className="bg-btn_location py-5 pt-20 relative">
      <div className="container mx-auto ">
        <div className="flex gap-5 max-md:flex-wrap max-md: p-5 max-tablet:flex-wrap md:p-7 tablet:p-4" >
          <div className="w-2/5 max-md:w-full max-tablet:w-full ">
            <h3 className="text-4xl pb-4 text-white">Provahan</h3>
            <p className="text-lg text-white">
              Provahan is the most trusted way of buying and selling used cars.
              Choose from over 5000 fully inspected second-hand car models.
              Select online and book a test drive at your home or at a Provahan
              Car Hub near you. Get a no-questions-asked 5-day money back
              guarantee and a free one-year comprehensive service warranty with
              Assured Resale Value on every Provahan car.
            </p>

            <h4 className="text-xl font-semibold  pt-5 text-white">Follow us</h4>
            <div className="flex  max-md:flex-wrap  max-tablet:flex-wrap gap-5 pt-4">
              {/* facebook */}
              <svg
                width="30"
                height="30"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_482_2913)">
                  <path
                    d="M34.1406 0H5.85938C2.62878 0 0 2.62878 0 5.85938V34.1406C0 37.3712 2.62878 40 5.85938 40H17.6562V25.8594H12.9688V18.8281H17.6562V14.0625C17.6562 10.1852 20.8102 7.03125 24.6875 7.03125H31.7969V14.0625H24.6875V18.8281H31.7969L30.625 25.8594H24.6875V40H34.1406C37.3712 40 40 37.3712 40 34.1406V5.85938C40 2.62878 37.3712 0 34.1406 0Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_482_2913">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              {/* x */}
              <svg
                width="30"
                height="30"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_482_2915)">
                  <path
                    d="M21.3375 19.3169L30.339 32.1922H26.6448L19.2994 21.6859V21.6853L18.221 20.143L9.64038 7.86914H13.3346L20.2591 17.7746L21.3375 19.3169Z"
                    fill="white"
                  />
                  <path
                    d="M35.6779 0H4.32209C1.93513 0 0 1.93513 0 4.32209V35.6779C0 38.0649 1.93513 40 4.32209 40H35.6779C38.0649 40 40 38.0649 40 35.6779V4.32209C40 1.93513 38.0649 0 35.6779 0ZM25.5133 33.9208L18.0802 23.1029L8.77392 33.9208H6.3687L17.0122 21.5491L6.3687 6.05868H14.4867L21.5253 16.3025L30.3377 6.05868H32.743L22.5936 17.8566H22.593L33.6313 33.9208H25.5133Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_482_2915">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              {/* inst */}
              <svg
                width="30"
                height="30"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_482_2918)">
                  <path
                    d="M29.375 7.10938H10.625C8.68652 7.10938 7.10938 8.68652 7.10938 10.625V29.375C7.10938 31.3135 8.68652 32.8906 10.625 32.8906H29.375C31.3135 32.8906 32.8906 31.3135 32.8906 29.375V10.625C32.8906 8.68652 31.3135 7.10938 29.375 7.10938ZM20 28.2031C15.4773 28.2031 11.7969 24.5227 11.7969 20C11.7969 15.4773 15.4773 11.7969 20 11.7969C24.5227 11.7969 28.2031 15.4773 28.2031 20C28.2031 24.5227 24.5227 28.2031 20 28.2031ZM28.2031 14.1406C26.911 14.1406 25.8594 13.089 25.8594 11.7969C25.8594 10.5048 26.911 9.45312 28.2031 9.45312C29.4952 9.45312 30.5469 10.5048 30.5469 11.7969C30.5469 13.089 29.4952 14.1406 28.2031 14.1406Z"
                    fill="white"
                  />
                  <path
                    d="M20 14.1406C16.7694 14.1406 14.1406 16.7694 14.1406 20C14.1406 23.2306 16.7694 25.8594 20 25.8594C23.2306 25.8594 25.8594 23.2306 25.8594 20C25.8594 16.7694 23.2306 14.1406 20 14.1406Z"
                    fill="white"
                  />
                  <path
                    d="M34.0625 0H5.9375C2.70691 0 0 2.70691 0 5.9375V34.0625C0 37.2931 2.70691 40 5.9375 40H34.0625C37.2931 40 40 37.2931 40 34.0625V5.9375C40 2.70691 37.2931 0 34.0625 0ZM35.2344 29.375C35.2344 32.6056 32.6056 35.2344 29.375 35.2344H10.625C7.39441 35.2344 4.76562 32.6056 4.76562 29.375V10.625C4.76562 7.39441 7.39441 4.76562 10.625 4.76562H29.375C32.6056 4.76562 35.2344 7.39441 35.2344 10.625V29.375Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_482_2918">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex gap-5  max-md:flex-wrap  max-tablet:flex-wrap py-6">
              {/* google */}
              <img
                src="https://i.ibb.co/1sjm0K6/android-app-1679302864.png"
                className="google_footer"
                alt="android-app-1679302864"
              />
              <img
                src="https://i.ibb.co/MnkztNK/iphone-app-1679302874.png"
                className="google_footer"
                alt="iphone-app-1679302874"
              />
            </div>
          </div>
          <div className="w-1/4 mx-auto max-md:w-full max-tablet:w-full">
            <h3 className="text-2xl underline pb-4 text-white font-semibold ">
              Touch Link
            </h3>
            <ul>
              {Object.keys(touchlink).map((key) => (
                <li
                  key={key}
                  className="text-white py-1 text-lg font-semibold "
                >
                  <a href
                  ={touchlink[key].link}>{touchlink[key].name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/4  mx-auto max-md:w-full max-tablet:w-full">
            <h3 className="text-2xl pb-4 underline text-white font-semibold ">
              ServicesList
            </h3>
            <ul>
              {Object.keys(servicesList).map((key) => (
                <li
                  key={key}
                  className="text-white text-lg py-1 font-semibold "
                >
                  <a href={servicesList[key].link}>{servicesList[key].name}</a >
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <img src="https://i.ibb.co/FDSnrF0/Group.png" className=" absolute bottom-0" alt="" />
    </section>
    <section className="bg-topbar py-4 max-md:p-3">


    {Object.keys(copyrights).map((key) => (
      <p key={key} className="text-white text-lg py-1  text-center font-semibold"> <a href={copyrights[key].link}>{copyrights[key].name}</a> </p>
    ))}
    </section>
    
    </div>
  );
};

export default Footer;
