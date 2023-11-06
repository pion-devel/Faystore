// src/components/Checkout.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [creditCard, setCreditCard] = useState("");

  const handleCheckout = () => {
    // Handle the checkout logic here (e.g., sending data to a server)
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form>
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Credit Card:
          <input
            type="text"
            value={creditCard}
            onChange={(e) => setCreditCard(e.target.value)}
          />
        </label>
      </form>
      <button onClick={handleCheckout}>Complete Purchase</button>
      <Link to="/cart">Back to Cart</Link>
    </div>
  );
};

export default Checkout;
