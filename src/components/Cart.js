// src/components/Cart.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/productsSlice";
import { Link } from "react-router-dom";
const Cart = () => {
  const cart = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <h2>Carello</h2>
      {cart.length === 0 ? (
        <p>Il tuo carello è vuoto</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <div className="item-image">
                <img src={product.thumbnail} alt={product.name} />
              </div>
              <div className="item-info">
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
              </div>
              <div className="item-actions">
                <button onClick={() => dispatch(removeFromCart(product.id))}>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <Link to="/checkout">
        <button className="checkout-button">Vai alla Cassa</button>
      </Link>
    </div>
  );
};

export default Cart;
