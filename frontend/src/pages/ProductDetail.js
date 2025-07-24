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
    <div style={{ padding: 20 }}>
      <img src={product.image} alt={product.name} style={{ width: 200 }} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h3>${product.price}</h3>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
