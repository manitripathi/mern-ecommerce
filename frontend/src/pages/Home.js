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
    <div>
      <h1>Products</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((product) => (
          <Link to={`/product/${product._id}`} key={product._id}>
            <div
              key={product._id}
              style={{ border: "1px solid #ccc", padding: 10, margin: 10 }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{ width: 100 }}
              />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <p>{product.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
