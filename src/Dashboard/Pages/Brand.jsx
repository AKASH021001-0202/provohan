import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_URL = `${import.meta.env.VITE_BACKEND_URL}/brand`;
const CATEGORY_URL = `${import.meta.env.VITE_BACKEND_URL}/vehicle-categories`;

const Brand = () => {
  const [carBrands, setCarBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingBrand, setEditingBrand] = useState(null);
  const [formData, setFormData] = useState({ name: "", img: "", category: "" });
  const [imagePreview, setImagePreview] = useState("");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Number of items per page

  // Fetch brands and categories from backend
  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => setCarBrands(response.data))
      .catch((error) => {
        console.error("Error fetching brands:", error);
        toast.error("Failed to fetch brands!");
      });

    axios
      .get(CATEGORY_URL)
      .then((response) => setCategories(response.data))
      .catch((error) => {
        console.error("Error fetching categories:", error);
        toast.error("Failed to fetch categories!");
      });
  }, []);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setFormData({ ...formData, img: file });
    }
  };

  // Handle save (Add or Edit)
  const handleSaveBrand = async () => {
    const formDataToSend = new FormData();
    formDataToSend.append("vehicle_make", formData.name);
    formDataToSend.append("category", formData.category);

    if (formData.img instanceof File) {
      formDataToSend.append("img", formData.img);
    }

    try {
      if (editingBrand) {
        await axios.put(`${API_URL}/${editingBrand._id}`, formDataToSend);
        toast.success("Brand updated successfully!");
      } else {
        await axios.post(API_URL, formDataToSend);
        toast.success("Brand added successfully!");
      }
      const response = await axios.get(API_URL);
      setCarBrands(response.data);
      setShowModal(false);
      setEditingBrand(null);
      setFormData({ name: "", img: "", category: "" });
      setImagePreview("");
    } catch (error) {
      console.error("Error saving brand:", error);
      toast.error("Failed to save brand!");
    }
  };

  // Handle delete
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setCarBrands(carBrands.filter((brand) => brand._id !== id));
      toast.success("Brand deleted successfully!");
    } catch (error) {
      console.error("Error deleting brand:", error);
      toast.error("Failed to delete brand!");
    }
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = carBrands.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Car Brand List</h1>
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center gap-2 transition duration-300"
          onClick={() => {
            setEditingBrand(null);
            setFormData({ name: "", img: "", category: "" });
            setImagePreview("");
            setShowModal(true);
          }}
        >
          <FaPlus /> Add New Car Brand
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-xl">
        <table className="w-full border-collapse">
          <thead className="bg-topbar text-white sticky top-0 shadow-lg">
            <tr>
              <th className="p-4 text-left font-semibold">Brand Image</th>
              <th className="p-4 text-left font-semibold">Brand Name</th>
              <th className="p-4 text-left font-semibold">Category</th>
              <th className="p-4 text-left font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((brand, idx) => (
              <tr
                key={brand._id}
                className="hover:bg-gray-50 transition duration-300 even:bg-white odd:bg-gray-50"
              >
                <td className="p-4 border-b text-sm">
                  <img
                    src={`${import.meta.env.VITE_BACKEND_URL}${brand.img}`}
                    alt={brand.vehicle_make}
                    className="w-16 h-16 object-contain "
                  />
                </td>
                <td className="p-4 border-b text-sm">{brand.vehicle_make}</td>
                <td className="p-4 border-b text-sm">
                  {brand.category?.vehicleCategory}
                </td>
                <td className="p-4 border-b text-sm">
                  <div className="flex gap-4">
                    <button
                      className="text-blue-500 hover:text-blue-700 transition duration-300"
                      onClick={() => {
                        setEditingBrand(brand);
                        setFormData({
                          name: brand.vehicle_make,
                          category: brand.category?._id,
                          img: brand.img,
                        });
                        setImagePreview(brand.img);
                        setShowModal(true);
                      }}
                    >
                      <FaEdit size={18} />
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700 transition duration-300"
                      onClick={() => handleDelete(brand._id)}
                    >
                      <FaTrash size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="flex justify-between items-center mt-6 p-4">
          <p className="text-sm text-gray-600">
            Showing {indexOfFirstItem + 1} to{" "}
            {Math.min(indexOfLastItem, carBrands.length)} of {carBrands.length}{" "}
            entries
          </p>
          <div className="flex gap-2">
            <button
              className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition duration-300 disabled:opacity-50"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition duration-300 disabled:opacity-50"
              onClick={() => paginate(currentPage + 1)}
              disabled={indexOfLastItem >= carBrands.length}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-md p-8">
            <h2 className="text-2xl font-bold">
              {editingBrand ? "Edit Car Brand" : "Add New Car Brand"}
            </h2>
            <div className="mt-6">
              <label className="block text-base pb-3 font-medium">
                Brand Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mt-4">
              <label className="block text-base pb-3 font-medium">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled>
                  Select a category
                </option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.vehicleCategory}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-4">
              <label className="cursor-pointer flex flex-col">
                <span className="block text-sm font-medium mb-2">
                  {imagePreview ? "Change image" : "Click to upload an image"}
                </span>
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="h-32 w-32 object-cover rounded-lg mt-2"
                  />
                ) : (
                  <img
                    src="https://i.ibb.co/smCK5q3/addimage.png"
                    alt="Upload"
                    className="w-[100px] mt-2"
                  />
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            </div>
            <div className="flex justify-end gap-4 mt-6">
              <button
                className="px-6 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition duration-300"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
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
