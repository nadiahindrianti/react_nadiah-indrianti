import { createSlice } from "@reduxjs/toolkit";
import { InitialProduct } from "./initialProduct";

export const productSlice = createSlice({
  name: "product",
  initialProduct: InitialProduct,
  reducers: {
    addProduct: (state, action) => {
      const newProduct = {
        no: action.payload.no,
        name: action.payload.name,
        category: action.payload.category,
        image: action.payload.image,
        freshness: action.payload.freshness,
        description: action.payload.description,
        price: action.payload.price,
      };

      return [...state, newProduct];
    },
    deleteProduct: (state, action) => {
      const id = action.payload.id;

      if (id === -1) {
        return state.slice(0, -1);
      }

      return state.filter((data) => data.no != id);
    },
  },
});

// export action
export const { addProduct, deleteProduct } = productSlice.actions;

// export reducer
export default productSlice.reducer;