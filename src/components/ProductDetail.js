// src/components/ProductDetail.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../features/productsSlice";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.products.find((p) => p.id === parseInt(id))
  );
  const dispatch = useDispatch();

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product.id));
  };

  return (
    <div className="product-detail">
      <img src={product.thumbnail} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Prezzo: ${product.price}</p>
      <p>Disponibiltà: {product.availability}</p>
      <button
        onClick={handleAddToCart}
        disabled={product.availability === "Out of stock"}
      >
        Aggiungi al carello
      </button>
      <Link to="/cart">View Cart</Link>
    </div>
  );
};

export default ProductDetail;
