import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const Category = () => {
  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const [editingCategory, setEditingCategory] = useState(null); // Editing category
  const [categories, setCategories] = useState([
    {
      id: 1,
      category: "Biryani",
      name: "Chicken Biryani",
      createdOn: "01-09-2024",
      status: true,
    },
    {
      id: 2,
      category: "Category",
      name: "Idli sambar",
      createdOn: "02-09-2024",
      status: true,
    },
    {
      id: 3,
      category: "Rice",
      name: "Curd rice",
      createdOn: "03-09-2024",
      status: true,
    },
    {
      id: 4,
      category: "Chicken",
      name: "Chicken 65",
      createdOn: "04-09-2024",
      status: false,
    },
  ]);

  const [formData, setFormData] = useState({
    category: "",
    name: "",
    status: true,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle adding or updating a category
  const handleSaveCategory = () => {
    if (editingCategory) {
      // Update existing category
      setCategories(
        categories.map((cat) =>
          cat.id === editingCategory.id ? { ...cat, ...formData } : cat
        )
      );
    } else {
      // Add new category
      const newCategory = {
        id: categories.length + 1,
        ...formData,
        createdOn: new Date().toLocaleDateString(),
      };
      setCategories([...categories, newCategory]);
    }

    setShowModal(false);
    setEditingCategory(null);
    setFormData({ category: "", name: "", status: true });
  };

  // Handle edit action
  const handleEdit = (category) => {
    setEditingCategory(category);
    setFormData(category);
    setShowModal(true);
  };

  // Handle delete action
  const handleDelete = (id) => {
    setCategories(categories.filter((cat) => cat.id !== id));
  };

  return (
    <div className="p-10  bg-white box-shadow">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Category List</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => {
            setEditingCategory(null);
            setFormData({ category: "", name: "", status: true });
            setShowModal(true);
          }}
        >
          Add New Category
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="border border-gray-300 p-3 text-left">Category</th>
              <th className="border border-gray-300 p-3 text-left">Name</th>
              <th className="border border-gray-300 p-3 text-left">
                Created On
              </th>
              <th className="border border-gray-300 p-3 text-center">Status</th>
              <th className="border border-gray-300 p-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 p-3">{category.category}</td>
                <td className="border border-gray-300 p-3">{category.name}</td>
                <td className="border border-gray-300 p-3">{category.createdOn}</td>
                <td className="border border-gray-300 p-3 text-center">
                  <span
                    className={`px-3 py-1 text-sm rounded ${
                      category.status
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {category.status ? "Active" : "Inactive"}
                  </span>
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
                    onClick={() => handleDelete(category.id)}
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
          <div className="bg-white p-5 rounded  box-shadow w-[90%] sm:w-[400px]">
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
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="border border-gray-300 rounded w-full p-2"
                placeholder="Enter name"
              />
            </div>
            <div className="mb-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="status"
                  checked={formData.status}
                  onChange={() =>
                    setFormData({ ...formData, status: !formData.status })
                  }
                />
                <span>Active</span>
              </label>
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
