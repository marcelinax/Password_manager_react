import { configureStore } from "@reduxjs/toolkit";
import masterPasswordSlice from "./state/masterPasswordSlice";

export default configureStore({
  reducer: {
    masterPassword: masterPasswordSlice,
  },
});
