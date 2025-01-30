import React, { useState } from "react";
import { FaEdit, FaTrash, FaPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Model = () => {
  const [showModal, setShowModal] = useState(false);
  const [editingBrand, setEditingBrand] = useState(null);
  const [editingModel, setEditingModel] = useState(null);
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

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items to display per page

  // Calculate the total number of pages
  const totalPages = Math.ceil(carBrands.length / itemsPerPage);

  // Get the subset of car brands for the current page
  const currentBrands = carBrands.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleModelInputChange = (e) => {
    const { name, value } = e.target;
    setModelData({ ...modelData, [name]: value });
  };

  const handleSaveBrand = () => {
    if (editingBrand) {
      setCarBrands(
        carBrands.map((brand) =>
          brand.id === editingBrand.id ? { ...brand, ...formData } : brand
        )
      );
    } else {
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

  const handleSaveModel = () => {
    if (editingModel) {
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

  const handleEditBrand = (brand) => {
    setEditingBrand(brand);
    setFormData(brand);
    setShowModal(true);
  };

  const handleEditModel = (brand, model) => {
    setEditingBrand(brand);
    setEditingModel(model);
    setModelData(model);
    setShowModal(true);
  };

  const handleDeleteBrand = (id) => {
    setCarBrands(carBrands.filter((brand) => brand.id !== id));
  };

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

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-10 bg-gradient-to-r from-gray-50 to-gray-100 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Car Brand List</h1>
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center gap-2 shadow-lg"
          onClick={() => {
            setEditingBrand(null);
            setFormData({ name: "", img: "" });
            setShowModal(true);
          }}
        >
          <FaPlus />
          Add New Car Brand
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-xl">
        <table className="w-full border-collapse">
          <thead className="bg-gradient-to-r from-blue-600 to-blue-500 text-white">
            <tr>
              <th className="p-4 text-left">Brand Image</th>
              <th className="p-4 text-left">Brand Name</th>
              <th className="p-4 text-left">Created On</th>
              <th className="p-4 text-left">Models</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentBrands.map((brand) => (
              <tr
                key={brand.id}
                className="hover:bg-gray-50 transition duration-200"
              >
                <td className="p-4 border-b border-gray-200">
                  <img
                    src={brand.img}
                    alt={brand.name}
                    className="w-16 h-16 object-contain rounded-lg"
                  />
                </td>
                <td className="p-4 border-b border-gray-200 text-gray-700 font-semibold">
                  {brand.name}
                </td>
                <td className="p-4 border-b border-gray-200 text-gray-600">
                  {brand.createdOn}
                </td>
                <td className="p-4 border-b border-gray-200 text-gray-600">
  <ul className="list-decimal pl-5">
    {brand.models.map((model, idx) => (
      <li key={idx} className="text-sm">{model.modelName}</li>
    ))}
  </ul>
</td>
                <td className="p-4 border-b border-gray-200 text-center">
                  <div className="flex items-center justify-center gap-4">
                    <button
                      className="text-blue-500 hover:text-blue-700 transition duration-200"
                      onClick={() => handleEditBrand(brand)}
                    >
                      <FaEdit size={18} />
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700 transition duration-200"
                      onClick={() => handleDeleteBrand(brand.id)}
                    >
                      <FaTrash size={18} />
                    </button>
                    <button
                      className="text-green-500 hover:text-green-700 transition duration-200 flex items-center gap-2 px-4 py-2 bg-green-50 rounded-lg"
                      onClick={() => {
                        setEditingBrand(brand);
                        setShowModal(true);
                      }}
                    >
                      <FaPlus size={14} />
                      Manage Models
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6">
        <button
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-l-lg hover:bg-gray-400 transition duration-200 disabled:opacity-50"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FaChevronLeft />
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`px-4 py-2 ${
              currentPage === index + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-blue-500 hover:text-white transition duration-200`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-r-lg hover:bg-gray-400 transition duration-200 disabled:opacity-50"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {editingBrand ? "Edit Car Brand" : "Add New Car Brand"}
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Brand Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter brand name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Image URL
                  </label>
                  <input
                    type="text"
                    name="img"
                    value={formData.img}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter image URL"
                  />
                </div>

                {/* Manage Models Section */}
                {editingBrand && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      Manage Models
                    </h3>
                    <ul className="space-y-3">
                      {editingBrand.models.map((model, idx) => (
                        <li
                          key={idx}
                          className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                        >
                          <span className="text-gray-700">
                            {model.modelName} ({model.year})
                          </span>
                          <div className="flex gap-3">
                            <button
                              className="text-blue-500 hover:text-blue-700"
                              onClick={() => handleEditModel(editingBrand, model)}
                            >
                              <FaEdit size={16} />
                            </button>
                            <button
                              className="text-red-500 hover:text-red-700"
                              onClick={() =>
                                handleDeleteModel(editingBrand.id, model.modelName)
                              }
                            >
                              <FaTrash size={16} />
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-4">
                        Add New Model
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Model Name
                          </label>
                          <input
                            type="text"
                            name="modelName"
                            value={modelData.modelName}
                            onChange={handleModelInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter model name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Year
                          </label>
                          <input
                            type="number"
                            name="year"
                            value={modelData.year}
                            onChange={handleModelInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter year"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex justify-end gap-4 mt-8">
                <button
                  className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-200"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
                  onClick={editingBrand ? handleSaveBrand : handleSaveModel}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Model;