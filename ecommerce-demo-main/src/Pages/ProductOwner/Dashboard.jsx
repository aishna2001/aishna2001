import { FaBox, FaShoppingCart, FaRupeeSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

const OwnerDashboard = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  /* =========================
     FETCH OWNER PRODUCTS
  ========================= */
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // token saved during login
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));

        const response = await fetch(
          "http://localhost:5051/api/products/my-products",
          {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
            },
          }
        );

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-semibold text-gray-800">
            Seller Dashboard
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Overview of your store performance
          </p>
        </div>

        <Button
          variant="contained"
          className="!bg-blue-600 !px-6"
          onClick={() => navigate("/product-owner/products/add")}
        >
          + Add Product
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

        <div className="bg-white rounded-xl shadow-sm p-6 border">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
              <FaBox size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Products</p>
              <h2 className="text-2xl font-semibold text-gray-800">
                {products.length}
              </h2>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-green-100 text-green-600">
              <FaShoppingCart size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Orders</p>
              <h2 className="text-2xl font-semibold text-gray-800">132</h2>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-yellow-100 text-yellow-600">
              <FaRupeeSign size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Revenue</p>
              <h2 className="text-2xl font-semibold text-gray-800">
                ₹48,500
              </h2>
            </div>
          </div>
        </div>

      </div>

      {/* Products Section */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Your Products
        </h3>

        {loading ? (
          <p className="text-gray-500">Loading products...</p>
        ) : products.length === 0 ? (
          <div className="text-sm text-gray-500 border border-dashed rounded-lg p-6 text-center">
            No products to show yet.  
            Click <span className="font-medium">“Add Product”</span> to get started.
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product._id} className="border rounded-lg p-4">
                {product.image && (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-32 w-full object-cover rounded mb-3"
                  />
                )}

                <h4 className="font-semibold">{product.name}</h4>
                <p className="text-sm text-gray-500">
                  {product.category}
                </p>
                <p className="text-blue-600 font-medium mt-2">
                  ₹{product.price}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OwnerDashboard;