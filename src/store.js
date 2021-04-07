import { configureStore } from "@reduxjs/toolkit";
import houseReducer from "./redux/houseSlice";

export default configureStore({
  reducer: {
    houseReducer: houseReducer,
  },
});
