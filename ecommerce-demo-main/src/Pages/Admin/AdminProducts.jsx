import Button from "@mui/material/Button";
import { useState } from "react";

const AdminProducts = () => {
  const [products, setProducts] = useState([
    { _id: "1", name: "Laptop", price: "₹55,000" },
    { _id: "2", name: "Headphones", price: "₹2,500" },
    { _id: "3", name: "Smart Watch", price: "₹8,000" },
  ]);

  const removeProduct = (id) => {
    setProducts(products.filter((p) => p._id !== id));
  };

  return (
    <>
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-semibold text-gray-800">
            Products Management
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            View and manage platform products
          </p>
        </div>

        <Button
          variant="contained"
          className="!bg-blue-600 !px-6"
          onClick={() => alert("Add product coming soon")}
        >
          + Add Product
        </Button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-6">
        {products.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            No products available
          </div>
        ) : (
          <table className="w-full text-left">
            <thead className="border-b">
              <tr className="text-gray-600 text-sm">
                <th className="py-3">Product</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr key={product._id} className="border-b text-sm">
                  <td className="py-4">{product.name}</td>
                  <td>{product.price}</td>
                  <td className="flex gap-2 py-3">
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => alert("Edit later")}
                    >
                      Edit
                    </Button>

                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      onClick={() => removeProduct(product._id)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default AdminProducts;