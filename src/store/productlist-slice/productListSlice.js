import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const API_URL = "http://localhost:5003/api/products";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(API_URL);
    return response.data;
  }
);

const productListSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {
    resetError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Products
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null; // Reset error on new fetch
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// export const { resetError } = productSlice.actions;

// export default productSlice.reducer;

export const { actions } = productListSlice;
export default productListSlice.reducer;
