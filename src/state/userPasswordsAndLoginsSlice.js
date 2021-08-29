import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const savePasswordManagerListInLocalStorage = (managerPasswordList) => {
  localStorage.setItem(
    "passwordManagerList",
    JSON.stringify(managerPasswordList)
  );
};
const loadPasswordManagerListFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("passwordManagerList") || "[]");
};

export const userPasswordsAndLogins = createSlice({
  name: "userPasswordsAndLogins",
  initialState: {
    userPasswordsAndLogins: loadPasswordManagerListFromLocalStorage(),
  },
  reducers: {
    createPasswordAndLogin: (state, action) => {
      const { login, password, appName, iconUrl } = action.payload;
      const newPasswordAndLogin = {
        login,
        password,
        id: uuidv4(),
        appName,
        iconUrl,
      };
      state.userPasswordsAndLogins = [
        ...state.userPasswordsAndLogins,
        newPasswordAndLogin,
      ];
      savePasswordManagerListInLocalStorage(state.userPasswordsAndLogins);
    },
    removePasswordAndLogin: (state, action) => {
      const id = action.payload;
      const deleteStartIndex = state.userPasswordsAndLogins
        .map((userPasswordAndLogin) => userPasswordAndLogin.id)
        .indexOf(id);
      state.userPasswordsAndLogins.splice(deleteStartIndex, 1);
      state.userPasswordsAndLogins = [...state.userPasswordsAndLogins];
      savePasswordManagerListInLocalStorage(state.userPasswordsAndLogins);
    },
  },
});

export const { createPasswordAndLogin, removePasswordAndLogin } =
  userPasswordsAndLogins.actions;
export default userPasswordsAndLogins.reducer;
