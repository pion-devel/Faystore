// src/components/Home.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { addToCart } from "../features/productsSlice";

const Home = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const styles = {
    title: { textAlign: "center" },
  };
  return (
    <div>
      <h1 style={styles.title}>Fay Store</h1>
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <Link to={`/product/${product.id}`}>
            <img src={product.thumbnail} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">Prezzo: €{product.price}</p>
          </Link>
          <button
            onClick={() => dispatch(addToCart(product.id))}
            className="add-to-cart"
            disabled={product.availability === "Out of stock"}
          >
            Aggiungi al carello
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
