import React, { useState } from "react";

const AddProduct = () => {
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

export default AddProduct;
