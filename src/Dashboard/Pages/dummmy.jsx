import React, { useState } from "react";
import { formdata } from "../../localstorage";

const dummmy = () => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    location: "",
    price: "",
    images: ["", "", ""],
    description: "",
    status: "",
    specs: ["", "", "", "", "", ""],
    registrationYear: "",
    month: "",
    vehicleModel: "",
    vehicleMake: "",
    kilometerDriven: "",
    fuelType: "",
    transmission: "",
    numberOfOwners: "",
    color: "",
    insurance: false,
    loan: false,
    exchange: false,
    powerSteering: false,
    powerWindow: false,
    alloyWheel: false,
    floodAffected: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="p-5">
      <form
        onSubmit={handleSubmit}
        className="mx-auto p-10 bg-white rounded-lg box-shadow"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Add Product</h2>

        <div className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700">Car Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
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
                  <img
                    src={item.img}
                    alt={item.name}
                    className="mb-2 w-[60px]"
                  />
                  {item.name}
                </label>
              ))}
            </div>
          </div>
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
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-[60px] mb-2"
                  />
                  {item.name}
                </label>
              ))}
            </div>
          </div>

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
                  <img
                    src={item.img}
                    alt={item.name}
                    className=" w-[60px] mb-2"
                  />
                  {item.name}
                </label>
              ))}
            </div>
          </div>

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
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-[60px] mb-2"
                  />
                  {item.name}
                </label>
              ))}
            </div>
          </div>

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
          <div>
            <label className="block font-medium text-gray-700">Car Type</label>
            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">
              Images (URLs)
            </label>
            {formData.images.map((image, index) => (
              <input
                key={index}
                type="text"
                name={`image${index}`}
                value={image}
                onChange={(e) => {
                  const newImages = [...formData.images];
                  newImages[index] = e.target.value;
                  setFormData({ ...formData, images: newImages });
                }}
                className="w-full p-3 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))}
          </div>

          <div>
            <label className="block font-medium text-gray-700">
              Description
            </label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Status</label>
            <input
              type="text"
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">
              Specifications
            </label>
            {formData.specs.map((spec, index) => (
              <input
                key={index}
                type="text"
                name={`spec${index}`}
                value={spec}
                onChange={(e) => {
                  const newSpecs = [...formData.specs];
                  newSpecs[index] = e.target.value;
                  setFormData({ ...formData, specs: newSpecs });
                }}
                className="w-full p-3 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))}
          </div>

          <div>
            <label className="block font-medium text-gray-700">
              Registration Year
            </label>
            <input
              type="text"
              name="registrationYear"
              value={formData.registrationYear}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Month</label>
            <input
              type="text"
              name="month"
              value={formData.month}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">
              Vehicle Model
            </label>
            <input
              type="text"
              name="vehicleModel"
              value={formData.vehicleModel}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">
              Vehicle Make
            </label>
            <input
              type="text"
              name="vehicleMake"
              value={formData.vehicleMake}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">
              Kilometer Driven
            </label>
            <input
              type="text"
              name="kilometerDriven"
              value={formData.kilometerDriven}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Fuel Type</label>
            <input
              type="text"
              name="fuelType"
              value={formData.fuelType}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">
              Transmission
            </label>
            <input
              type="text"
              name="transmission"
              value={formData.transmission}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">
              Number of Owners
            </label>
            <input
              type="text"
              name="numberOfOwners"
              value={formData.numberOfOwners}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Color</label>
            <input
              type="text"
              name="color"
              value={formData.color}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <div>
              <label className="inline-flex items-center text-gray-700">
                Insurance
              </label>
              <input
                type="checkbox"
                name="insurance"
                checked={formData.insurance}
                onChange={handleInputChange}
                className="ml-2 text-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="inline-flex items-center text-gray-700">
                Loan
              </label>
              <input
                type="checkbox"
                name="loan"
                checked={formData.loan}
                onChange={handleInputChange}
                className="ml-2 text-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="inline-flex items-center text-gray-700">
                Exchange
              </label>
              <input
                type="checkbox"
                name="exchange"
                checked={formData.exchange}
                onChange={handleInputChange}
                className="ml-2 text-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="inline-flex items-center text-gray-700">
                Power Steering
              </label>
              <input
                type="checkbox"
                name="powerSteering"
                checked={formData.powerSteering}
                onChange={handleInputChange}
                className="ml-2 text-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="inline-flex items-center text-gray-700">
                Power Window
              </label>
              <input
                type="checkbox"
                name="powerWindow"
                checked={formData.powerWindow}
                onChange={handleInputChange}
                className="ml-2 text-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="inline-flex items-center text-gray-700">
                Alloy Wheel
              </label>
              <input
                type="checkbox"
                name="alloyWheel"
                checked={formData.alloyWheel}
                onChange={handleInputChange}
                className="ml-2 text-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="inline-flex items-center text-gray-700">
                Flood Affected
              </label>
              <input
                type="checkbox"
                name="floodAffected"
                checked={formData.floodAffected}
                onChange={handleInputChange}
                className="ml-2 text-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default dummmy;
