import { configureStore } from "@reduxjs/toolkit";
import global from "./global/globalSlice";

const store = configureStore({
  reducer: global,
});

export default store;
