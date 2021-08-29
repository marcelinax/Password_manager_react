import { configureStore } from "@reduxjs/toolkit";
import masterPasswordSlice from "./state/masterPasswordSlice";
import userPasswordsAndLoginsSlice from "./state/userPasswordsAndLoginsSlice";

export default configureStore({
  reducer: {
    masterPassword: masterPasswordSlice,
    userPasswordsAndLogins: userPasswordsAndLoginsSlice,
  },
});
