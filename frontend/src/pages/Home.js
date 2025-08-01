import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      await fetch("http://localhost:5001/api/products")
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-pink-50 px-6 py-10">
      <h1 className="text-4xl md:text-5xl font-extrabold text-pink-600 text-center mb-12">
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
        {products.map((product) => (
          <Link
            to={`/product/${product._id}`}
            key={product._id}
            className="w-full max-w-xs transform transition-transform hover:scale-105"
          >
            <div className="border border-pink-100 bg-white rounded-xl shadow-lg hover:shadow-pink-300 p-5 flex flex-col items-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-40 h-40 object-cover rounded mb-4"
              />
              <h3 className="text-lg font-semibold text-pink-700 mb-1">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 mb-1">${product.price}</p>
              <p className="text-sm text-gray-500 text-center">
                {product.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
