import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../../features/slice/productSlice";

export default configureStore({
  reducer: {
    products: productReducer,
  },
});