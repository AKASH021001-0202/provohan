import React from "react";

const Buysell = () => {
  return (
    <>
      <div className="buy_sell flex items-center">
        <div className="container mx-auto">
          <div className="flex align-center  max-[600px]:flex-col gap-6">
            {/* First Section */}
            <div className="flex align-center bg-[#FF6C47] justify-center p-5 gap-5 min-h-[230px]">
              <img src="https://i.ibb.co/hLLbbMY/fi-10965178.png" className= " -mt-11 max-[600px]:m-0" alt="" />
              <div className="innerbox">
                <h3 className="text-white text-2xl font-bold">
                  Are You looking for a Vehicle?
                </h3>
                <p className="text-white  text-lg pb-3">
                  Our cars are delivered fully-registered with all requirements
                  completed. We’ll deliver your car wherever you are.
                </p>
                <button className="bg-white text-topbar px-10 py-2">
                  Buy Now{" "}
                </button>
              </div>
            </div>

            {/* Second Section */}
            <div className="flex align-center bg-[#493391] g justify-center p-5 gap-5 min-h-[230px]">
              <img src="https://i.ibb.co/rbq8tRL/fi-7435299.png" className= " -mt-11 max-[600px]:m-0" alt="" />
              <div className="innerbox">
                <h3 className="text-white text-2xl font-bold">
                  Do You want to sell a vehicle?
                </h3>
                <p className="text-white  text-lg pb-3">
                  What is your car worth? Get the best value for your vehicle by
                  choosing us. We also handle all the paperwork!
                </p>
                <button className="bg-white text-topbar roun px-10 py-2">
                  Buy Now{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FFBC47] p-10 ">
        <div className="container mx-auto">
          <div className="flex align-center gap-6  max-[600px]:flex-col text-white">
            <div className="w-1/2  max-[600px]:w-full ">
              <h2 className="text-3xl font-bold text-black mb-5 ">
                Car Dealership With Provahan
              </h2>
              <p className="text-xl text-black mb-5 font-medium">
                Provahan is your trusted destination for buying and selling
                quality pre-owned vehicles. With a commitment to transparency,
                reliability, and customer service, we connect you with a wide
                selection of used cars, bikes, scooters, bicycles, trucks,
                bus/van and heavy vehicles to suit every budget and lifestyle.
              </p>
              <p className="text-xl text-black mb-5 font-medium">
                Our dealership focuses on offering well-inspected, road-ready
                vehicles to ensure your peace of mind. Whether you're upgrading
                your dream vehicle or selling your current one, we make the
                process simple, fast, and hassle-free for you.
              </p>

              <button className="bg-btn_location text-white px-14 py-3">
                {" "}
                Show All
              </button>
            </div>
            <div className="w-1/2 max-[600px]:w-full">
              <img src="https://i.ibb.co/Zx8SR9K/Group-427319965.png" className="-mt-20 max-[767px]:mt-0"  alt="" />
            </div>
          </div>
        </div>
      </div>

    
    </>
  );
};

export default Buysell;
