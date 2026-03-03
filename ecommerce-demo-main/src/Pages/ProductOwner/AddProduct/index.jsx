import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  /* =========================
     IMAGE HANDLING
  ========================= */
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  /* =========================
     SAVE PRODUCT (AUTH FIXED)
  ========================= */
  const handleSave = async () => {
    if (!name || !price) {
      alert("Please enter product name and price");
      return;
    }

    try {
      // get logged in user token
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));

      if (!userInfo || !userInfo.token) {
        alert("You must be logged in");
        return;
      }

      const response = await fetch(
        "http://localhost:5051/api/products",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.token}`,
          },
          body: JSON.stringify({
            name,
            price,
            category,
            image,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to save product");
      }

      alert("Product saved successfully");

      navigate("/product-owner");
    } catch (error) {
      console.error("Save error:", error);
      alert("Error saving product");
    }
  };

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-semibold mb-6">
        Add New Product
      </h1>

      <div className="bg-white p-6 rounded-xl border space-y-4">

        {/* Product Name */}
        <input
          type="text"
          placeholder="Product Name"
          className="w-full border px-4 py-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Price */}
        <input
          type="number"
          placeholder="Price"
          className="w-full border px-4 py-2 rounded"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        {/* Category */}
        <select
          className="w-full border px-4 py-2 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option>Electronics</option>
          <option>Fashion</option>
          <option>Home</option>
        </select>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Product Image
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />

          {image && (
            <img
              src={image}
              alt="Preview"
              className="mt-3 h-32 object-cover rounded border"
            />
          )}
        </div>

        {/* Save Button */}
        <button
          type="button"
          onClick={handleSave}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Save Product
        </button>

      </div>
    </div>
  );
};

export default AddProduct;


