import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Update the import
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/productsSlice";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import "./App.css";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
