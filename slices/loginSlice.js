import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLogin: false,
    uid: null,
    name: null,
    clicked: false,
    theme: "light",
  },
  reducers: {
    login: (state, uid) => {
      (state.isLogin = true), (state.uid = uid.payload);
    },
    nameSet: (state, name) => {
      state.name = name.payload;
    },
    logout: (state) => {
      (state.isLogin = false), (state.uid = null), (state.name = null);
    },
    changeClicked: (state) => {
      state.clicked = !state.clicked;
    },
    changeTheme: (state, theme) => {
      state.theme = theme.payload;
    },
  },
});

export const { login, logout, nameSet, changeClicked, changeTheme } =
  loginSlice.actions;

export default loginSlice.reducer;
