import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = `${import.meta.env.VITE_BACKEND_URL}`;

const Model = () => {
  const [carBrands, setCarBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [years, setYears] = useState([]);
  const [carModels, setCarModels] = useState([]);
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
   
   
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchCarBrands();
    fetchCarModels();
  }, []);

  const fetchCarBrands = async () => {
    try {
      const res = await axios.get(`${API_URL}/brand`);
      setCarBrands(res.data);
    } catch (error) {
      toast.error("Failed to fetch car brands");
    }
  };

  const fetchCarModels = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_URL}/models`);
      setCarModels(res.data);
    } catch (error) {
      toast.error("Failed to fetch models");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.brand || !formData.model || !formData.year) {
      setErrorMessage("All fields are required");
      toast.error("All fields are required");
      return;
    }
    setErrorMessage("");

    try {
      if (editingId) {
        await axios.put(`${API_URL}/models/${editingId}`, formData);
        toast.success("Model updated successfully");
      } else {
        await axios.post(`${API_URL}/models`, formData);
        toast.success("Model added successfully");
      }
      setModalOpen(false);
      fetchCarModels();
    } catch (error) {
      toast.error("Failed to save model");
    }
  };

  const handleEdit = (model) => {
    setFormData(model);
    setEditingId(model._id);
    setModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this model?")) return;
    try {
      await axios.delete(`${API_URL}/models/${id}`);
      toast.success("Model deleted successfully");
      fetchCarModels();
    } catch (error) {
      toast.error("Failed to delete model");
    }
  };

  return (
    <div className="p-4">
      <button
        onClick={() => {
          setFormData({ brand: "", model: "", year: ""});
          setEditingId(null);
          setModalOpen(true);
        }}
        className="bg-blue-500 text-white p-2 rounded mb-4"
      >
        Add Car Model
      </button>

      {modalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded shadow-md w-96">
            <h2 className="text-xl mb-3">{editingId ? "Edit Model" : "Add Model"}</h2>
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
                    {brand.brand}
                  </option>
                ))}
              </select>



              <input
                type="text"
                name="model"
                value={formData.model}
                onChange={handleInputChange}
                className="border border-gray-300 rounded w-full p-2 mb-2"
                placeholder="Enter Model"
              />

              <input
                type="text"
                name="year"
                value={formData.year}
                onChange={handleInputChange}
                className="border border-gray-300 rounded w-full p-2 mb-2"
                placeholder="Enter Year"
              />

             
       

              {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

              <button type="submit" className="bg-btn_location text-white p-2 rounded w-full">
                Save
              </button>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="bg-black text-white p-2 rounded w-full mt-2"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      <table className="w-full mt-4 border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Brand</th>
            <th className="p-2 border">Model</th>
            <th className="p-2 border">Year</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {carModels.map((car) => (
            <tr key={car._id} className="text-center border">
              <td className="p-2 border">{car.brand.brand}</td>
              <td className="p-2 border">{car.model}</td>
              <td className="p-2 border">{car.year}</td>
              <td className="p-2 border">
                <button onClick={() => handleEdit(car)} className="text-blue-500 bg-btn_location mr-2">Edit</button>
                <button onClick={() => handleDelete(car._id)} className="text-red-500">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Model;