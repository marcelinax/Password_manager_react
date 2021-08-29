import { createSlice } from "@reduxjs/toolkit";

const saveMasterPasswordInLocalStorage = (masterPassword) => {
  localStorage.setItem("masterPassword", JSON.stringify(masterPassword));
};

const loadMasterPasswordFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("masterPassword") || "1111");
};

export const masterPasswordSlice = createSlice({
  name: "masterPassword",
  initialState: {
    masterPassword: loadMasterPasswordFromLocalStorage(),
  },
  reducers: {
    setNewMasterPassword: (state, action) => {
      const masterPassword = action.payload;
      state.masterPassword = masterPassword;
      saveMasterPasswordInLocalStorage(state.masterPassword);
    },
  },
});

export const { setNewMasterPassword } = masterPasswordSlice.actions;
export default masterPasswordSlice.reducer;
