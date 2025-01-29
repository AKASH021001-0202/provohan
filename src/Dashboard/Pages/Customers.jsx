import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const Customer = () => {
  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const [editingCustomer, setEditingCustomer] = useState(null); // Editing customer
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      registeredOn: "01-01-2024",
      status: true,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
      registeredOn: "02-01-2024",
      status: false,
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    status: true,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveCustomer = () => {
    if (editingCustomer) {
      // Update existing customer
      setCustomers(
        customers.map((cust) =>
          cust.id === editingCustomer.id ? { ...cust, ...formData } : cust
        )
      );
    } else {
      // Add new customer
      const newCustomer = {
        id: customers.length + 1,
        ...formData,
        registeredOn: new Date().toLocaleDateString(),
      };
      setCustomers([...customers, newCustomer]);
    }

    setShowModal(false);
    setEditingCustomer(null);
    setFormData({ name: "", email: "", phone: "", status: true });
  };

  const handleEdit = (customer) => {
    setEditingCustomer(customer);
    setFormData(customer);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setCustomers(customers.filter((cust) => cust.id !== id));
  };

  return (
    <div className="p-5">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Customer List</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => {
            setEditingCustomer(null);
            setFormData({ name: "", email: "", phone: "", status: true });
            setShowModal(true);
          }}
        >
          Add New Customer
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="border border-gray-300 p-3 text-left">Name</th>
              <th className="border border-gray-300 p-3 text-left">Email</th>
              <th className="border border-gray-300 p-3 text-left">Phone</th>
              <th className="border border-gray-300 p-3 text-left">
                Registered On
              </th>
              <th className="border border-gray-300 p-3 text-center">Status</th>
              <th className="border border-gray-300 p-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 p-3">{customer.name}</td>
                <td className="border border-gray-300 p-3">{customer.email}</td>
                <td className="border border-gray-300 p-3">{customer.phone}</td>
                <td className="border border-gray-300 p-3">
                  {customer.registeredOn}
                </td>
                <td className="border border-gray-300 p-3 text-center">
                  <span
                    className={`px-3 py-1 text-sm rounded ${
                      customer.status
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {customer.status ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="border border-gray-300 p-3 text-center">
                  <button
                    className="text-blue-500 mr-2 hover:text-blue-700"
                    onClick={() => handleEdit(customer)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(customer.id)}
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
          <div className="bg-white p-5 rounded shadow-lg w-[90%] sm:w-[400px]">
            <h2 className="text-xl font-bold mb-4">
              {editingCustomer ? "Edit Customer" : "Add New Customer"}
            </h2>
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
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="border border-gray-300 rounded w-full p-2"
                placeholder="Enter email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="border border-gray-300 rounded w-full p-2"
                placeholder="Enter phone number"
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
                onClick={handleSaveCustomer}
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

export default Customer;
