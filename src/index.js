// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom"; // Update the import
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/productsSlice";
import App from "./App";
import "./index.css";

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
