import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    async function fetchProducts() {
      await fetch(`http://localhost:5001/api/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }

    fetchProducts();
  }, [id]);

  return (
    <div className="p-5 border border-pink-200 rounded-md shadow-md shadow-pink-100 w-64 bg-pink-100">
      <img
        src={product.image}
        alt={product.name}
        className="w-48 h-auto mx-auto mb-4 rounded"
      />
      <h2 className="text-lg font-semibold text-pink-800 mb-2">
        {product.name}
      </h2>
      <p className="text-sm text-pink-700 mb-2">{product.description}</p>
      <h3 className="text-md font-bold text-pink-900 mb-4">${product.price}</h3>
      <button
        onClick={() => addToCart(product)}
        className="w-full py-2 px-4 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-md transition duration-200"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
