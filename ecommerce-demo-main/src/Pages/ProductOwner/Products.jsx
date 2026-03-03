import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch(
          "https://ecommerce-backend-1-szbm.onrender.com",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await res.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">
        Your Products
      </h1>

      {products.length === 0 ? (
        <div className="bg-white p-6 rounded border text-gray-500">
          No products added yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div
              key={p._id}
              className="bg-white border rounded-xl shadow-sm"
            >
              <div className="h-40 bg-gray-100 flex items-center justify-center text-gray-400">
                No Image
              </div>

              <div className="p-4">
                <h3 className="font-medium">{p.name}</h3>
                <p className="text-sm text-gray-500">
                  {p.category}
                </p>
                <p className="text-lg font-semibold mt-2">
                  ₹{p.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;

