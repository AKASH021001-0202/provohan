import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const Brand = () => {
  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const [editingBrand, setEditingBrand] = useState(null); // Editing brand
  const [carBrands, setCarBrands] = useState([
    {
      id: 1,
      img: "https://i.ibb.co/4SyGLBx/Ford.png",
      name: "Ford",
      createdOn: "01-09-2024",
    },
    {
      id: 2,
      img: "https://i.ibb.co/dkrdPBF/honda.png",
      name: "Honda",
      createdOn: "02-09-2024",
    },
    {
      id: 3,
      img: "https://i.ibb.co/jydp7FD/toyota.png",
      name: "Toyota",
      createdOn: "03-09-2024",
    },
    {
      id: 4,
      img: "https://i.ibb.co/wN3k5VC/volkswagen.png",
      name: "Volkswagen",
      createdOn: "04-09-2024",
    },
    {
      id: 5,
      img: "https://i.ibb.co/NVfG4f5/hyundai.png",
      name: "Hyundai",
      createdOn: "05-09-2024",
    },
    {
      id: 6,
      img: "https://i.ibb.co/YpGdcSW/Suzuki.png",
      name: "Suzuki",
      createdOn: "06-09-2024",
    },
    {
      id: 7,
      img: "https://i.ibb.co/qmDnjsq/audi.png",
      name: "Audi",
      createdOn: "07-09-2024",
    },
    {
      id: 8,
      img: "https://i.ibb.co/5x2PH7D/Nissan.png",
      name: "Nissan",
      createdOn: "08-09-2024",
    },
    {
      id: 9,
      img: "https://i.ibb.co/9whbp1M/tata.png",
      name: "Tata",
      createdOn: "09-09-2024",
    },
    {
      id: 10,
      img: "https://i.ibb.co/93MqDsr/Kia.png",
      name: "Kia",
      createdOn: "10-09-2024",
    },
    {
      id: 11,
      img: "https://i.ibb.co/jMXZ4Jj/bentley.png",
      name: "Bentley",
      createdOn: "11-09-2024",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    img: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
      };
      setCarBrands([...carBrands, newBrand]);
    }

    setShowModal(false);
    setEditingBrand(null);
    setFormData({ name: "", img: "" });
  };

  // Handle edit action
  const handleEdit = (brand) => {
    setEditingBrand(brand);
    setFormData(brand);
    setShowModal(true);
  };

  // Handle delete action
  const handleDelete = (id) => {
    setCarBrands(carBrands.filter((brand) => brand.id !== id));
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
                <td className="border border-gray-300 p-3 text-center">
                  <button
                    className="text-blue-500 mr-2 hover:text-blue-700"
                    onClick={() => handleEdit(brand)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(brand.id)}
                  >
                    <FaTrash />
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
          <div className="bg-white p-5 rounded box-shadow w-[90%] sm:w-[400px]">
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
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleSaveBrand}
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

export default Brand;
