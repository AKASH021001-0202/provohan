import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const Model = () => {
  const [showModal, setShowModal] = useState(false); // Modal visibility state for brand and model
  const [editingBrand, setEditingBrand] = useState(null); // Editing brand
  const [editingModel, setEditingModel] = useState(null); // Editing model
  const [carBrands, setCarBrands] = useState([
    {
        id: 1,
        img: "https://i.ibb.co/4SyGLBx/Ford.png",
        name: "Ford",
        createdOn: "01-09-2024",
        models: [
          { modelName: "Ford Mustang", year: 2024 },
          { modelName: "Ford F-150", year: 2023 },
          { modelName: "Ford Explorer", year: 2022 },
          { modelName: "Ford Fiesta", year: 2023 },
          { modelName: "Ford Focus", year: 2024 }
        ],
      },
      {
        id: 2,
        img: "https://i.ibb.co/dkrdPBF/honda.png",
        name: "Honda",
        createdOn: "02-09-2024",
        models: [
          { modelName: "Honda Civic", year: 2024 },
          { modelName: "Honda Accord", year: 2023 },
          { modelName: "Honda CR-V", year: 2022 },
          { modelName: "Honda Odyssey", year: 2023 },
          { modelName: "Honda Pilot", year: 2024 }
        ],
      },
      {
        id: 3,
        img: "https://i.ibb.co/jydp7FD/toyota.png",
        name: "Toyota",
        createdOn: "03-09-2024",
        models: [
          { modelName: "Toyota Corolla", year: 2024 },
          { modelName: "Toyota Camry", year: 2023 },
          { modelName: "Toyota RAV4", year: 2022 },
          { modelName: "Toyota Highlander", year: 2023 },
          { modelName: "Toyota Tacoma", year: 2024 }
        ],
      },
      {
        id: 4,
        img: "https://i.ibb.co/wN3k5VC/volkswagen.png",
        name: "Volkswagen",
        createdOn: "04-09-2024",
        models: [
          { modelName: "Volkswagen Golf", year: 2024 },
          { modelName: "Volkswagen Passat", year: 2023 },
          { modelName: "Volkswagen Tiguan", year: 2022 },
          { modelName: "Volkswagen Jetta", year: 2023 },
          { modelName: "Volkswagen ID.4", year: 2024 }
        ],
      },
      {
        id: 5,
        img: "https://i.ibb.co/NVfG4f5/hyundai.png",
        name: "Hyundai",
        createdOn: "05-09-2024",
        models: [
          { modelName: "Hyundai Elantra", year: 2024 },
          { modelName: "Hyundai Sonata", year: 2023 },
          { modelName: "Hyundai Tucson", year: 2022 },
          { modelName: "Hyundai Santa Fe", year: 2023 },
          { modelName: "Hyundai Kona", year: 2024 }
        ],
      },
      {
        id: 6,
        img: "https://i.ibb.co/YpGdcSW/Suzuki.png",
        name: "Suzuki",
        createdOn: "06-09-2024",
        models: [
          { modelName: "Suzuki Swift", year: 2024 },
          { modelName: "Suzuki Vitara", year: 2023 },
          { modelName: "Suzuki Baleno", year: 2022 },
          { modelName: "Suzuki S-Cross", year: 2023 },
          { modelName: "Suzuki Ignis", year: 2024 }
        ],
      },
      {
        id: 7,
        img: "https://i.ibb.co/qmDnjsq/audi.png",
        name: "Audi",
        createdOn: "07-09-2024",
        models: [
          { modelName: "Audi A3", year: 2024 },
          { modelName: "Audi A4", year: 2023 },
          { modelName: "Audi Q5", year: 2022 },
          { modelName: "Audi Q7", year: 2023 },
          { modelName: "Audi Q8", year: 2024 }
        ],
      },
      {
        id: 8,
        img: "https://i.ibb.co/5x2PH7D/Nissan.png",
        name: "Nissan",
        createdOn: "08-09-2024",
        models: [
          { modelName: "Nissan Altima", year: 2024 },
          { modelName: "Nissan Sentra", year: 2023 },
          { modelName: "Nissan Maxima", year: 2022 },
          { modelName: "Nissan Rogue", year: 2023 },
          { modelName: "Nissan Frontier", year: 2024 }
        ],
      },
      {
        id: 9,
        img: "https://i.ibb.co/9whbp1M/tata.png",
        name: "Tata",
        createdOn: "09-09-2024",
        models: [
          { modelName: "Tata Nexon", year: 2024 },
          { modelName: "Tata Harrier", year: 2023 },
          { modelName: "Tata Safari", year: 2022 },
          { modelName: "Tata Tiago", year: 2023 },
          { modelName: "Tata Tigor", year: 2024 }
        ],
      },
      {
        id: 10,
        img: "https://i.ibb.co/93MqDsr/Kia.png",
        name: "Kia",
        createdOn: "10-09-2024",
        models: [
          { modelName: "Kia Seltos", year: 2024 },
          { modelName: "Kia Sportage", year: 2023 },
          { modelName: "Kia Stinger", year: 2022 },
          { modelName: "Kia Telluride", year: 2023 },
          { modelName: "Kia Niro", year: 2024 }
        ],
      },
      {
        id: 11,
        img: "https://i.ibb.co/jMXZ4Jj/bentley.png",
        name: "Bentley",
        createdOn: "11-09-2024",
        models: [
          { modelName: "Bentley Continental GT", year: 2024 },
          { modelName: "Bentley Flying Spur", year: 2023 },
          { modelName: "Bentley Bentayga", year: 2022 },
          { modelName: "Bentley Mulsanne", year: 2023 },
          { modelName: "Bentley Bacalar", year: 2024 }
        ],
      },
  
  ]);

  const [formData, setFormData] = useState({
    name: "",
    img: "",
  });

  const [modelData, setModelData] = useState({
    modelName: "",
    year: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleModelInputChange = (e) => {
    const { name, value } = e.target;
    setModelData({ ...modelData, [name]: value });
  };

  // Handle adding or updating a car brand
  const handleSaveBrand = () => {
    if (editingBrand) {
      // Update existing brand
      setCarBrands(
        carBrands.map((brand) =>
          brand.id === editingBrand.id ? { ...brand, ...formData } : brand
        )
      );
    } else {
      // Add new car brand
      const newBrand = {
        id: carBrands.length + 1,
        ...formData,
        createdOn: new Date().toLocaleDateString(),
        models: [],
      };
      setCarBrands([...carBrands, newBrand]);
    }

    setShowModal(false);
    setEditingBrand(null);
    setFormData({ name: "", img: "" });
  };

  // Handle adding or updating a model
  const handleSaveModel = () => {
    if (editingModel) {
      // Update existing model
      setCarBrands(
        carBrands.map((brand) =>
          brand.id === editingBrand.id
            ? {
                ...brand,
                models: brand.models.map((model) =>
                  model.modelName === editingModel.modelName
                    ? { ...model, ...modelData }
                    : model
                ),
              }
            : brand
        )
      );
    } else {
      // Add new model
      const newModel = { ...modelData };
      setCarBrands(
        carBrands.map((brand) =>
          brand.id === editingBrand.id
            ? { ...brand, models: [...brand.models, newModel] }
            : brand
        )
      );
    }

    setShowModal(false);
    setEditingModel(null);
    setModelData({ modelName: "", year: "" });
  };

  // Handle edit action for brand
  const handleEditBrand = (brand) => {
    setEditingBrand(brand);
    setFormData(brand);
    setShowModal(true);
  };

  // Handle edit action for model
  const handleEditModel = (brand, model) => {
    setEditingBrand(brand);
    setEditingModel(model);
    setModelData(model);
    setShowModal(true);
  };

  // Handle delete action for brand
  const handleDeleteBrand = (id) => {
    setCarBrands(carBrands.filter((brand) => brand.id !== id));
  };

  // Handle delete action for model
  const handleDeleteModel = (brandId, modelName) => {
    setCarBrands(
      carBrands.map((brand) =>
        brand.id === brandId
          ? {
              ...brand,
              models: brand.models.filter((model) => model.modelName !== modelName),
            }
          : brand
      )
    );
  };

  return (
    <div className="p-10 bg-white box-shadow">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Car Brand List</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => {
            setEditingBrand(null);
            setFormData({ name: "", img: "" });
            setShowModal(true);
          }}
        >
          Add New Car Brand
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="border border-gray-300 p-3 text-left">Brand Image</th>
              <th className="border border-gray-300 p-3 text-left">Brand Name</th>
              <th className="border border-gray-300 p-3 text-left">Created On</th>
              <th className="border border-gray-300 p-3 text-left">Models</th> {/* Added Models column */}
              <th className="border border-gray-300 p-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {carBrands.map((brand) => (
              <tr key={brand.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 p-3">
                  <img
                    src={brand.img}
                    alt={brand.name}
                    className="w-12 h-12 object-contain"
                  />
                </td>
                <td className="border border-gray-300 p-3">{brand.name}</td>
                <td className="border border-gray-300 p-3">{brand.createdOn}</td>
                <td className="border border-gray-300 p-3">
                  {brand.models.map((model) => model.modelName).join(", ")} {/* Display model names */}
                </td>
                <td className="border border-gray-300 p-3 text-center">
                  <button
                    className="text-blue-500 mr-2 hover:text-blue-700"
                    onClick={() => handleEditBrand(brand)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDeleteBrand(brand.id)}
                  >
                    <FaTrash />
                  </button>

                  {/* Manage models button */}
                  <button
                    className="text-green-500 ml-2 hover:text-green-700"
                    onClick={() => {
                      setEditingBrand(brand);
                      setShowModal(true);
                    }}
                  >
                    Manage Models
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white  rounded box-shadow w-[70%] h-[90vh] overflow-y-scroll p-10 m-10">
            <h2 className="text-xl font-bold mb-4">
              {editingBrand ? "Edit Car Brand" : "Add New Car Brand"}
            </h2>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Brand Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="border border-gray-300 rounded w-full p-2"
                placeholder="Enter brand name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Image URL</label>
              <input
                type="text"
                name="img"
                value={formData.img}
                onChange={handleInputChange}
                className="border border-gray-300 rounded w-full p-2"
                placeholder="Enter image URL"
              />
            </div>

            {/* Manage models section */}
            {editingBrand && (
              <div className="mb-4">
                <h3 className="font-bold text-2xl my-5">Manage Models</h3>
                <ul>
                  {editingBrand.models.map((model, idx) => (
                    <li key={idx} className="flex justify-between items-center mb-2">
                      {model.modelName} ({model.year})
                      <div>
                        <button
                          className="text-blue-500 mr-2"
                          onClick={() => handleEditModel(editingBrand, model)}
                        >
                          <FaEdit />
                        </button>
                        <button
                          className="text-red-500"
                          onClick={() => handleDeleteModel(editingBrand.id, model.modelName)}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mb-4">
                  <h3 className="font-semibold text-2xl my-8">Add Model</h3>
                  <div className="mt-2">
                    <label className="block text-sm font-medium mb-2">Model Name</label>
                    <input
                      type="text"
                      name="modelName"
                      value={modelData.modelName}
                      onChange={handleModelInputChange}
                      className="border border-gray-300 rounded w-full p-2"
                      placeholder="Enter model name"
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-sm font-medium mb-2">Year</label>
                    <input
                      type="number"
                      name="year"
                      value={modelData.year}
                      onChange={handleModelInputChange}
                      className="border border-gray-300 rounded w-full p-2"
                      placeholder="Enter year"
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={editingBrand ? handleSaveBrand : handleSaveModel}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Model;
