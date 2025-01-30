import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";

const API_URL = `${import.meta.env.VITE_BACKEND_URL}/vehicle-categories`;

const Category = () => {
  const [showModal, setShowModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    category: "",
    name: "",
    status: true,
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null); // For image preview

  // 🔄 Fetch Categories from API
  const fetchCategories = async () => {
    try {
      const response = await axios.get(API_URL);
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // 📌 Handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 📌 Handle Image Upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file }); // Store the file
      setImagePreview(URL.createObjectURL(file)); // Set image preview
    }
  };

  // ✅ Save Category (Add / Update)
  const handleSaveCategory = async () => {
    if (!formData.category || !formData.category.trim()) {
      return alert("Category name cannot be empty");
    }
  
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("vehicleCategory", formData.category);
      if (formData.image) {
        formDataToSend.append("img", formData.image);
      }
  
      if (editingCategory) {
        await axios.put(`${API_URL}/${editingCategory._id}`, formDataToSend);
      } else {
        await axios.post(API_URL, formDataToSend);
      }
  
      fetchCategories();
      setShowModal(false);
      setEditingCategory(null);
      setFormData({ category: "", name: "", status: true, image: null });
      setImagePreview(null); // Reset image preview
    } catch (error) {
      console.error("Error saving category:", error);
    }
  };
  

  // ✏️ Edit Category
  const handleEdit = (category) => {
    setEditingCategory(category);
    setFormData({
      category: category.vehicleCategory,
      name: category.name || "",
      status: category.status,
      image: null, // Reset image input
    });
    setImagePreview(
      category.img
        ? `${import.meta.env.VITE_BACKEND_URL}${category.img}`
        : null
    ); // Set existing image as preview
    setShowModal(true);
  };

  // ❌ Delete Category
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchCategories();
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  return (
    <div className="p-10 bg-white box-shadow">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Category List</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => {
            setEditingCategory(null);
            setFormData({ category: "", name: "", status: true, image: null });
            setImagePreview(null); // Reset image preview
            setShowModal(true);
          }}
        >
          Add New Category
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="border border-gray-300 p-3 text-left">Category</th>
              <th className="border border-gray-300 p-3 text-center">Image</th>
              <th className="border border-gray-300 p-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category._id} className="hover:bg-gray-50">
                <td className="border border-gray-300 p-3">
                  {category.vehicleCategory}
                </td>
                <td className="border border-gray-300 p-3 text-center">
                  {category.img && (
                    <img
                      src={`${import.meta.env.VITE_BACKEND_URL}${category.img}`}
                      alt={category.vehicleCategory}
                      className="h-auto w-16 object-cover "
                    />
                  )}
                </td>
                <td className="border border-gray-300 p-3 text-center">
                  <button
                    className="text-blue-500 mr-2 hover:text-blue-700"
                    onClick={() => handleEdit(category)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(category._id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-5 rounded box-shadow w-[90%] sm:w-[400px]">
            <h2 className="text-xl font-bold mb-4">
              {editingCategory ? "Edit Category" : "Add New Category"}
            </h2>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="border border-gray-300 rounded w-full p-2"
                placeholder="Enter category"
              />
            </div>
            <div className="mb-4">
              
              <label className="cursor-pointer flex flex-col ">
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
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                onClick={() => {
                  setShowModal(false);
                  setImagePreview(null); // Reset image preview on cancel
                }}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleSaveCategory}
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

export default Category;