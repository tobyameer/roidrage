import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import AdminNavbar from "../../components/AdminNav";
import { IoMdClose } from "react-icons/io";

const AdminProducts = () => {
  const [openProduct, setOpenProduct] = useState(false);
  const [products, setProducts] = useState([]);
  const [image, setImage] = useState(null);

  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    quantity: "",
    category: "",
  });

  // Fetch all products
  const fetchProducts = async () => {
    const res = await fetch("http://localhost:4000/api/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) =>
        formData.append(key, value)
      );
      if (image) formData.append("image", image);

      const response = await fetch("http://localhost:4000/api/products", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, // ✅ Bearer, not x-auth-token
          // DO NOT manually set "Content-Type" when using FormData
        },
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to add product");
      }

      alert("Product added!");
      setOpenProduct(false);
      setForm({
        name: "",
        price: "",
        description: "",
        quantity: "",
        category: "",
      });
      setImage(null);
      fetchProducts();
    } catch (err) {
      console.error(err);
      alert(err.message || "Something went wrong");
    }
  };

  return (
    <div>
      <AdminNavbar />
      <div className="mx-6 mt-[200px] flex flex-col justify-center items-center">
        {/* Add Product Form */}
        {openProduct ? (
          <div className="relative px-8 py-5 border-t border-b border-gray-100/20 bg-gray-500/10 w-[80%] flex flex-col">
            <IoMdClose
              className="absolute top-3 right-5 cursor-pointer"
              onClick={() => setOpenProduct(false)}
            />
            <div className="flex justify-between w-full items-center">
              {/* Image Preview */}
              <div className="grid">
                <input
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                {image && (
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Preview"
                    className="h-[100px] w-[100px] object-cover mt-2"
                  />
                )}
              </div>
              {/* Inputs */}
              <div className="grid w-full ml-10">
                <input
                  className="bg-inherit focus:outline-none border-b px-5 h-[35px]"
                  type="text"
                  placeholder="Product Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  className="bg-inherit focus:outline-none border-t border-b px-5 h-[35px]"
                  type="number"
                  placeholder="Price"
                  value={form.price}
                  onChange={(e) => setForm({ ...form, price: e.target.value })}
                />
                <input
                  className="bg-inherit focus:outline-none border-t px-5 h-[35px]"
                  type="text"
                  placeholder="Description"
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                />
                <div className="mt-5 grid grid-cols-2 gap-4">
                  <input
                    className="bg-inherit focus:outline-none border-t border-b px-5 h-[35px]"
                    type="number"
                    placeholder="Quantity"
                    value={form.quantity}
                    onChange={(e) =>
                      setForm({ ...form, quantity: e.target.value })
                    }
                  />
                  <input
                    className="bg-inherit focus:outline-none border-t border-b px-5 h-[35px]"
                    type="text"
                    placeholder="Category"
                    value={form.category}
                    onChange={(e) =>
                      setForm({ ...form, category: e.target.value })
                    }
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="mt-[20px] h-[50px] w-full hover:bg-gray-500/20 bg-gray-500/10 flex justify-center items-center rounded-md"
                >
                  Add Product
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center h-[150px] w-full text-center">
            <button
              onClick={() => setOpenProduct(true)}
              className="border-t-2 border-b-2 border-gray-100/20 bg-gray-500/10 w-[50%] h-[80px] hover:bg-gray-500/20"
            >
              New Product!
            </button>
          </div>
        )}

        {/* Product List */}
        <div className="mt-[100px] w-[80%] grid grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="p-4 border border-gray-300 rounded-md bg-white shadow"
            >
              {/* Display product image */}
              <img
                src={`http://localhost:4000${product.image}`}
                alt={product.name}
                className="w-full h-[150px] object-cover mb-3"
              />
              <h2 className="font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-600">{product.description}</p>
              <p className="text-sm text-gray-800 mt-1">💰 ${product.price}</p>
              <p className="text-sm">📦 {product.quantity} in stock</p>
              <p className="text-sm">🏷️ {product.category}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminProducts;
