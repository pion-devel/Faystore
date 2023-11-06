// src/features/productsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      name: "Double coat Bianco",
      thumbnail: "../../assets/product1.webp",
      price: 10.99,
      description: "Description for Product 1",
      availability: "In stock",
    },
    {
      id: 2,
      name: "Double coat Blu",
      thumbnail: "../../assets/product2.webp",
      price: 19.99,
      description: "Description for Product 2",
      availability: "In stock",
    },
    {
      id: 3,
      name: "Double coat Beige",
      thumbnail: "../../assets/product3.webp",
      price: 15.99,
      description: "Description for Product 3",
      availability: "Out of stock",
    },
    {
      id: 4,
      name: "Double coat Nero",
      thumbnail: "../../assets/product4.webp",
      price: 25.99,
      description: "Description for Product 4",
      availability: "In stock",
    },
  ],
  cart: [],
  cartCount: 0,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productToAdd = state.products.find(
        (product) => product.id === action.payload
      );
      if (productToAdd) {
        state.cart.push(productToAdd);
        state.cartCount++;
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { addToCart, removeFromCart } = productsSlice.actions;
export default productsSlice.reducer;
