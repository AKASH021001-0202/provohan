import React, { useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Chicken Biryani", category: "Biryani", price: 500, order: 1, store: "Store-1", createdBy: "Admin", status: true },
    { id: 2, name: "Idli Sambar", category: "Category", price: 500, order: 2, store: "Store-2", createdBy: "Admin", status: true },
    { id: 3, name: "Curd Rice", category: "Rice", price: 500, order: 3, store: "Store-3", createdBy: "Admin", status: true },
    { id: 4, name: "Chicken 65", category: "Chicken", price: 500, order: 4, store: "Store-4", createdBy: "Admin", status: true },
    { id: 5, name: "Shawarma", category: "Masala", price: 500, order: 5, store: "Store-5", createdBy: "Admin", status: true },
    { id: 6, name: "Rice", category: "Rice", price: 500, order: 6, store: "Store-6", createdBy: "Admin", status: true },
  ]);

  const toggleStatus = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, status: !product.status } : product
      )
    );
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">Product List</h1>
        <div className="flex gap-2">
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
            + Add Product
          </button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">
            Import Product
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-1/3 px-4 py-2 border rounded-lg"
        />
        <button className="bg-gray-200 px-4 py-2 rounded-lg">
          Sort by Date
        </button>
      </div>

      <table className="table-auto w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border">Product</th>
            <th className="px-4 py-2 border">Category</th>
            <th className="px-4 py-2 border">Price</th>
            <th className="px-4 py-2 border">Order</th>
            <th className="px-4 py-2 border">Store</th>
            <th className="px-4 py-2 border">Created By</th>
            <th className="px-4 py-2 border">Status</th>
            <th className="px-4 py-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="text-center">
              <td className="px-4 py-2 border">{product.name}</td>
              <td className="px-4 py-2 border">{product.category}</td>
              <td className="px-4 py-2 border">₹{product.price.toFixed(2)}</td>
              <td className="px-4 py-2 border">{String(product.order).padStart(2, "0")}</td>
              <td className="px-4 py-2 border">{product.store}</td>
              <td className="px-4 py-2 border">{product.createdBy}</td>
              <td className="px-4 py-2 border">
                <input
                  type="checkbox"
                  checked={product.status}
                  onChange={() => toggleStatus(product.id)}
                />
              </td>
              <td className="px-4 py-2 border">
                <div className="flex justify-center gap-2">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded">
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => deleteProduct(product.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex justify-between items-center">
        <p>Showing data 1 to {products.length} of 256K entries</p>
        <div className="flex gap-2">
          <button className="px-4 py-2 border rounded-lg">Prev</button>
          <button className="px-4 py-2 border rounded-lg">Next</button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
