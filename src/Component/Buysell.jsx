import React from "react";

const Buysell = () => {
  return (
    <div className="buy_sell flex items-center">
      <div className="container mx-auto">
        <div className="flex align-center gap-6">
          {/* First Section */}
          <div className="flex align-center bg-[#FF6C47] justify-center p-5 gap-5 min-h-[230px]">
        <img src="https://i.ibb.co/hLLbbMY/fi-10965178.png"  alt="" />
            <div className="innerbox">
              <h3 className="text-white text-3xl font-bold">
                Are You looking for a Vehicle?
              </h3>
              <p className="text-white  pb-3">
                Our cars are delivered fully-registered with all requirements
                completed. We’ll deliver your car wherever you are.
              </p>
              <button className="bg-white text-topbar px-5 py-2">Buy Now </button>
            </div>
          </div>

          {/* Second Section */}
          <div className="flex align-center bg-[#493391] justify-center p-5 gap-5 min-h-[230px]">
           <img src="https://i.ibb.co/rbq8tRL/fi-7435299.png"  alt="" />
            <div className="innerbox">
              <h3 className="text-white text-3xl font-bold">
                Are You looking for a Vehicle?
              </h3>
              <p className="text-white  pb-3">
                Our cars are delivered fully-registered with all requirements
                completed. We’ll deliver your car wherever you are.
              </p>
              <button className="bg-white text-topbar px-5 py-2">Buy Now </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buysell;
