import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = `${import.meta.env.VITE_BACKEND_URL}`;

const Model = () => {
  const [carBrands, setCarBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    category: "",
    img: "",
    year: "",
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCarBrands();
    fetchModels();
  }, []);

  const fetchCarBrands = async () => {
    try {
      const res = await axios.get(`${API_URL}/brand`);
      setCarBrands(res.data);
    } catch (error) {
      toast.error("Failed to fetch car brands");
    }
  };

  const fetchModels = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_URL}/models`);
      setModels(res.data);
    } catch (error) {
      toast.error("Failed to fetch models");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "brand") {
      const selectedBrand = carBrands.find((brand) => brand._id === value);

      setFormData({
        ...formData,
        brand: selectedBrand?._id || "", // Ensure brand is an ObjectId
        category: selectedBrand?.category?._id || "", // Ensure category is an ObjectId
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setFormData((prev) => ({ ...prev, img: file })); // Store the file object
      setImagePreview(URL.createObjectURL(file));
    } else {
      toast.error("Please upload a valid image file.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.brand ||
      !formData.model ||
      !formData.img ||
      !formData.category ||
      !formData.year
    ) {
      toast.error("All fields are required");
      return;
    }

    const data = new FormData();
    data.append("vehicle_make", formData.brand);
    data.append("vehicle_model", formData.model);
    data.append("category", formData.category);
    data.append("year", formData.year);
    data.append("img", formData.img);

    try {
      await axios.post(`${API_URL}/models`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Model added successfully");
      setModalOpen(false);
      fetchModels();
      resetForm();
    } catch (error) {
      toast.error(error.response?.data?.error || "Failed to save model");
    }
  };

  const handleEdit = (model) => {
    setFormData({
      brand: model.brand,
      model: model.model,
      category: model.category,
      img: model.img,
      year: model.year,
    });
    setImagePreview(model.img);
    setEditingId(model._id);
    setModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this model?")) {
      try {
        await axios.delete(`${API_URL}/models/${id}`);
        toast.success("Model deleted successfully");
        fetchModels();
      } catch (error) {
        toast.error("Failed to delete model");
      }
    }
  };

  const resetForm = () => {
    setFormData({ brand: "", model: "", category: "", img: "", year: "" });
    setImagePreview(null);
    setEditingId(null);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = models.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-4">
      <button
        onClick={() => setModalOpen(true)}
        className="bg-blue-500 text-white p-2 rounded mb-4"
      >
        Add Car Model
      </button>

      {modalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded shadow-md w-96">
            <h2 className="text-xl mb-3">
              {editingId ? "Edit Model" : "Add Model"}
            </h2>
            <form onSubmit={handleSubmit}>
              <select
                name="brand"
                value={formData.brand}
                onChange={handleInputChange}
                className="w-full p-2 mb-2 border"
              >
                <option value="">Select Brand</option>
                {carBrands.map((brand) => (
                  <option key={brand._id} value={brand._id}>
                    {brand.vehicle_make}
                  </option>
                ))}
              </select>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Category
                </label>
                <input
                  type="text"
                  name="category"
                  value={formData.category?.vehicleCategory}
                  readOnly
                  className="border border-gray-300 rounded w-full p-2 bg-gray-100"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Model</label>
                <input
                  type="text"
                  name="model"
                  value={formData.model}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded w-full p-2"
                  placeholder="Enter Model"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Year</label>
                <input
                  type="number"
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded w-full p-2"
                  placeholder="Enter Year"
                />
              </div>

              <div className="mb-4">
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

              <button
                type="submit"
                className="bg-green-500 text-white p-2 rounded w-full"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => {
                  setModalOpen(false);
                  resetForm();
                }}
                className="bg-gray-500 text-white p-2 rounded w-full mt-2"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="mt-6">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Brand</th>
              <th className="px-4 py-2">Model</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Year</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  Loading...
                </td>
              </tr>
            ) : (
              currentItems.map((model) => (
                <tr key={model._id}>
                  <td className="px-4 py-2">
                    {model.vehicle_make}
                  </td>
                  <td className="px-4 py-2">{model.vehicle_model}</td>
                  <td className="px-4 py-2">{model.category}</td>
                  <td className="px-4 py-2">{model.year}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleEdit(model)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(model._id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-4">
          <button
            className="px-4 py-2 bg-gray-200 rounded-l"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 bg-gray-200"
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage * itemsPerPage >= models.length}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Model;
