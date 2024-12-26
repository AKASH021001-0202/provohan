import React, { useRef, useState } from "react";
import { formdata } from "../../localstorage";

const Sellform = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "Categories",
    "Brand",
    "Model",
    "Fuel",
    "Variant",
    "State",
    "Location",
    "KiloMeter",
    "Year",
    "Month",
    "Color",
    "owner",
    "Others",
  ];

  const totalSteps = steps.length;

  const progressPercentage = Math.round((currentStep / totalSteps) * 100);

  const handleRadioChange = (value) => {
    setSelected(value);  // Set the selected value for radio button
  
    // Move to the next step after selecting a radio button
    handleNext();
  };
  
  const handleNext = () => {
    // Increment step to move to the next one
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Submitted:", inputValue);
  };
  const scrollContainer = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setScrollLeft(scrollContainer.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const distance = e.clientX - startX;
    scrollContainer.current.scrollLeft = scrollLeft - distance;
  };
  const [selected, setSelected] = useState(null);

  // Function to handle radio button selection

  //   const [selected, setSelected] = useState('');
  const [price, setPrice] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <div
        className="bg-local bg-cover h-[500px]  flex items-center flex-col gap-3 justify-center"
        style={{
          backgroundImage: "url('https://i.ibb.co/0fB6SRD/image-3.png')",
        }}
      >
        <h3 className="text-4xl text-white font-bold text-center ">
          Sell Fast, Sell Easy <br />
          With QuickSell
        </h3>
        <p className="text-xl text-white text-center">
          Sell Fast, Sell Easy With Quick Sell
        </p>
        <button className="bg-btn_location text-white rounded-3xl p-3 px-8">
          {" "}
          Sell a Used Vehicle{" "}
        </button>
      </div>

      <div className="max-w-4xl mx-auto p-6 -my-20 stepform  ">
        {/* Progress Bar */}
        <div className=" bg-btn_location py-6 px-5 rounded-tr-2xl rounded-tl-2xl ">
          <div className="flex justify-between items-center mb-2">
            <svg
              width="51"
              height="51"
              viewBox="0 0 51 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={` ${
                currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handleBack}
              disabled={currentStep === 1}
            >
              <circle
                cx="25.5"
                cy="25.5"
                r="24"
                transform="matrix(-1 0 0 1 51 0)"
                stroke="white"
                strokeWidth="3"
              />
              <g clipPath="url(#clip0_396_11484)">
                <path
                  d="M15.2864 25.8087C15.2867 25.8084 15.287 25.8081 15.2873 25.8078L20.39 20.7297C20.7723 20.3493 21.3906 20.3507 21.7711 20.733C22.1516 21.1153 22.1501 21.7336 21.7679 22.1141L18.3419 25.5234H39.0234C39.5628 25.5234 40 25.9606 40 26.5C40 27.0394 39.5628 27.4766 39.0234 27.4766H18.3419L21.7678 30.8859C22.1501 31.2664 22.1516 31.8847 21.7711 32.267C21.3906 32.6494 20.7722 32.6507 20.39 32.2703L15.2873 27.1922C15.287 27.1919 15.2867 27.1916 15.2864 27.1913C14.9039 26.8095 14.9051 26.1892 15.2864 25.8087Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_396_11484">
                  <rect
                    width="25"
                    height="25"
                    fill="white"
                    transform="matrix(-1 0 0 1 40 14)"
                  />
                </clipPath>
              </defs>
            </svg>

            <span className="text-sm text-white p-2 bg-btn_location rounded-full border-2  ">
              {progressPercentage}%
            </span>
          </div>
        </div>

        {/* Stepper Header */}
        <div
          className="flex justify-between items-center  mb-6 scrollbar-hidden-x overflow-x-scroll w-full cursor-grab bg-white shadow rounded-tr-2xl rounded-tl-2xl -mt-5"
          ref={scrollContainer}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {steps.map((step, index) => (
            <button
              key={index}
              className={` btn_tab border rounded-full ${
                currentStep === index + 1
                  ? "bg-btn_location text-white"
                  : "bg-gray-100 text-gray-600"
              } mx-2`}
              onClick={() => setCurrentStep(index + 1)}
            >
              {step}
            </button>
          ))}
        </div>

        {/* Step Content */}
        <div className="px-4 pb-16 pt-16 bg-white -mt-10 mb-14  rounded-2xl  shadow ">
          {currentStep === 1 && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Select a Category</h2>
              <div className="flex gap-4 flex-wrap">
                {/* category */}
                {formdata[0].category.map((item, index) => (
                  <label
                    key={index}
                    className={`p-4 border rounded-lg bg-white shadow hover:bg-gray-200 flex items-center relative cursor-pointer ${
                      selected === item.name
                        ? "bg-purple-600 border-purple-600"
                        : "bg-white border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="category"
                      value={item.name}
                      className="absolute opacity-0 w-0 h-0"
                      checked={selected === item.name}
                      onChange={() => handleRadioChange(item.name)}
                    />
                    <img src={item.img} alt={item.name} className="w-[60px]" />
                    {item.name}
                  </label>
                ))}
              </div>
            </div>
          )}
          {/* brand */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Select a Brand</h2>
              <div className="flex gap-4 flex-wrap">
              {formdata[0].brand.map((item, index) => (
                <label
                  key={index}
                  className={`p-4 border rounded-lg bg-white shadow hover:bg-gray-200 flex items-center relative cursor-pointer ${
                    selected === item.name
                      ? "bg-purple-600 border-purple-600"
                      : "bg-white border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="brand"
                    value={item.name}
                    className="absolute opacity-0 w-0 h-0"
                    checked={selected === item.name}
                    onChange={() => handleRadioChange(item.name)}
                  />
                  <img src={item.img} alt={item.name} className="w-[60px]" />
                  {item.name}
                </label>
              ))}
              </div>
            </div>
          )}

          {/* model */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Select a Model</h2>
              <div className="flex gap-4 flex-wrap">
                {formdata[0].modal.map((item, index) => (
                  <label
                    key={index}
                    className={`p-4 border rounded-lg bg-white shadow hover:bg-gray-200 flex items-center relative cursor-pointer ${
                      selected === item.name
                        ? "bg-purple-600 border-purple-600"
                        : "bg-white border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="model"
                      value={item.name}
                      className="absolute opacity-0 w-0 h-0"
                      checked={selected === item.name}
                      onChange={() => handleRadioChange(item.name)}
                    />
                    <img src={item.img} alt={item.name} className="mb-2 w-[60px]" />
                    {item.name}
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* fuel */}
          {currentStep === 4 && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Select a Model</h2>
              <div className="flex gap-4 flex-wrap">
                {formdata[0].fuel.map((item, index) => (
                  <label
                    key={index}
                    className={`p-4 border rounded-lg bg-white shadow hover:bg-gray-200 flex items-center relative cursor-pointer ${
                      selected === item.name
                        ? "bg-purple-600 border-purple-600"
                        : "bg-white border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="fuel"
                      value={item.name}
                      className="absolute opacity-0 w-0 h-0"
                      checked={selected === item.name}
                      onChange={() => handleRadioChange(item.name)}
                    />
                    <img src={item.img} alt={item.name} className="w-[60px] mb-2" />
                    {item.name}
                  </label>
                ))}
              </div>
            </div>
          )}
          {/* varient */}
          {currentStep === 5 && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Select a fuel</h2>
              <div className="flex gap-4 flex-wrap">
                {formdata[0].variant.map((item, index) => (
                  <label
                    key={index}
                    className={`p-4 border rounded-lg bg-white shadow hover:bg-gray-200 flex items-center relative cursor-pointer ${
                      selected === item.name
                        ? "bg-purple-600 border-purple-600"
                        : "bg-white border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="variant"
                      value={item.name}
                      className="absolute opacity-0 w-0 h-0"
                      checked={selected === item.name}
                      onChange={() => handleRadioChange(item.name)}
                    />
                    <img src={item.img} alt={item.name} className=" w-[60px] mb-2" />
                    {item.name}
                  </label>
                ))}
              </div>
            </div>
          )}
          {/* state */}
          {currentStep === 6 && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Select a state</h2>
              <div className="flex gap-4 flex-wrap">
                {formdata[0].state.map((item, index) => (
                  <label
                    key={index}
                    className={`p-4 border rounded-lg bg-white shadow hover:bg-gray-200 flex items-center relative cursor-pointer ${
                      selected === item.state
                        ? "bg-purple-600 border-purple-600"
                        : "bg-white border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="state"
                      value={item.state}
                      className="absolute opacity-0 w-0 h-0"
                      checked={selected === item.state}
                      onChange={() => handleRadioChange(item.state)}
                    />
                    {item.state} ({item.code})
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* location */}
          {currentStep === 7 && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Select a Model</h2>
              <div className="flex gap-4 flex-wrap">
                {formdata[0].location.map((item, index) => (
                  <label
                    key={index}
                    className={`p-4 border rounded-lg bg-white shadow hover:bg-gray-200 flex items-center relative cursor-pointer ${
                      selected === item.name
                        ? "bg-purple-600 border-purple-600"
                        : "bg-white border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="location"
                      value={item.name}
                      className="absolute opacity-0 w-0 h-0"
                      checked={selected === item.name}
                      onChange={() => handleRadioChange(item.name)}
                    />
                    <img src={item.img} alt={item.name} className="w-[60px] mb-2" />
                    {item.name}
                  </label>
                ))}
              </div>
            </div>
          )}
          {/* kilometer */}
          {currentStep === 8 && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Select a Model</h2>
              <div className="flex gap-4 flex-wrap">
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleChange}
                  className="flex-grow border-none outline-none text-lg"
                  placeholder="Type something..."
                />
                <button
                  onClick={handleSubmit}
                  className="text-blue-500 text-xl cursor-pointer"
                >
                  &#8594;
                </button>
              </div>
            </div>
          )}

          {/* year */}
          {currentStep === 9 && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Select a Model</h2>
              <div className="flex gap-4 flex-wrap">
                {formdata[0].year.map((year, index) => (
                  <label
                    key={index}
                    className={`p-4 border rounded-lg bg-white shadow hover:bg-gray-200 flex items-center relative cursor-pointer ${
                      selected === year.toString()
                        ? "bg-purple-600 border-purple-600"
                        : "bg-white border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="year"
                      value={year}
                      className="absolute opacity-0 w-0 h-0"
                      checked={selected === year.toString()}
                      onChange={() => handleRadioChange(year.toString())}
                    />
                    {year}
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* month */}
          {currentStep === 10 && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Select a Model</h2>
              <div className="flex gap-4 flex-wrap">
                {formdata[0].month.map((month, index) => (
                  <label
                    key={index}
                    className={`p-4 border rounded-lg bg-white shadow hover:bg-gray-200 flex items-center relative cursor-pointer ${
                      selected === month
                        ? "bg-purple-600 border-purple-600"
                        : "bg-white border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="month"
                      value={month}
                      className="absolute opacity-0 w-0 h-0"
                      checked={selected === month}
                      onChange={() => handleRadioChange(month)}
                    />
                    {month}
                  </label>
                ))}
              </div>
            </div>
          )}
          {/* color */}
          {currentStep === 11 && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Select a Model</h2>
              <div className="flex gap-4 flex-wrap">
                {formdata[0].color.map((item, index) => (
                   
                  <label
                    key={index}
                    className={`p-4 border rounded-lg bg-white shadow hover:bg-gray-200 flex items-center relative cursor-pointer ${
                      selected === item.name
                        ? "bg-purple-600 border-purple-600"
                        : "bg-white border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="color"
                      value={item.name}
                      className="absolute opacity-0 w-0 h-0"
                      checked={selected === item.name}
                      onChange={() => handleRadioChange(item.name)}
                    />
                    <div
                      className="w-7 h-7 rounded"
                      style={{ backgroundColor: item.code }}
                    />
                    {item.name}
                  </label>
                ))}
              </div>
            </div>
          )}
          {/* owner */}
          {currentStep === 12 && (
            <div>
              {/* Select Number of Owners */}
              <h2 className="text-lg font-semibold mb-4 mt-6">
                Select Number of Owners
              </h2>
              <div className="flex gap-4 flex-wrap">
                {formdata[0].owner.map((owner, index) => (
                  <label
                    key={index}
                    className={`p-4 border rounded-lg bg-white shadow hover:bg-gray-200 flex items-center relative cursor-pointer ${
                      selected === owner
                        ? "bg-purple-600 border-purple-600"
                        : "bg-white border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="owner"
                      value={owner}
                      className="absolute opacity-0 w-0 h-0"
                      checked={selected === owner}
                      onChange={() => handleRadioChange(owner)}
                    />
                    {owner}
                  </label>
                ))}
              </div>

              {/* Vehicle Price */}
              <div className="mt-6">
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700"
                >
                  Vehicle Price
                </label>
                <input
                  id="price"
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter vehicle price"
                />
              </div>

              {/* Vehicle Number */}
              <div className="mt-6">
                <label
                  htmlFor="vehicleNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Vehicle Number
                </label>
                <input
                  id="vehicleNumber"
                  type="text"
                  value={vehicleNumber}
                  onChange={(e) => setVehicleNumber(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter vehicle number"
                />
              </div>

              {/* Vehicle Description */}
              <div className="mt-6">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Vehicle Description
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter vehicle description"
                  rows="4"
                ></textarea>
              </div>
              <div className="mt-6">
                <label
                  htmlFor="vehicleImages"
                  className="block text-sm font-medium text-gray-700"
                >
                  Upload Vehicle Image
                </label>
                <div className="flex gap-4 mt-2">
                  {[...Array(5)].map((_, index) => (
                    <div
                      key={index}
                      className="w-24 h-24 border-dashed border-2 border-purple-600 flex flex-col items-center justify-center rounded-md bg-purple-100 cursor-pointer"
                    >
                      <input
                        type="file"
                        id={`upload-image-${index}`}
                        className="hidden"
                        onChange={(e) => handleImageUpload(e, index)}
                      />
                      <label
                        htmlFor={`upload-image-${index}`}
                        className="cursor-pointer flex flex-col items-center"
                      >
                        <img
                          src="https://i.ibb.co/smCK5q3/addimage.png"
                          alt="Upload"
                          className="h-8 mt-2"
                        />
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {currentStep === 13 && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Information</h2>
              <div className="grid grid-cols-1 gap-4 items-center">
                <div className="flex justify-around">

                <div className="text-center font-medium"></div>
                <div className="text-center font-medium">Yes</div>
                <div className="text-center font-medium">No</div>
                </div>

                {/* Dynamically Generated Rows */}
                {formdata[0].other.map((other, index) => (
                  <div className="grid grid-cols-3 items-center" key={index}>
                    {/* Information Label */}
                    <div className="text-left font-medium">{other}</div>

                    {/* Yes Radio Button */}
                    <div className="text-center">
                      <input
                        type="radio"
                        id={`${other}-yes`}
                        name={other}
                        value="yes"
                        className="form-radio text-purple-600"
                      />
                    </div>

                    {/* No Radio Button */}
                    <div className="text-center">
                      <input
                        type="radio"
                        id={`${other}-no`}
                        name={other}
                        value="no"
                        className="form-radio text-purple-600"
                      />
                    </div>
                  </div>
                ))}
                <button
            className={`px-4 py-2 rounded ${
              currentStep === totalSteps
                ? "bg-btn_location text-white"
                : "bg-purple-600 text-white"
            }`}
            
          >
           Submit
          </button>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className=" bg-btn_location py-5 px-5 rounded-br-2xl rounded-bl-2xl mb-28 -mt-14 -z-0">
          
        </div>
      </div>
    </>
  );
};

export default Sellform;
