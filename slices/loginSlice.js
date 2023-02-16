import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLogin: false,
    uid: null,
    name: null,
    clicked: false,
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
  },
});

export const { login, logout, nameSet, changeClicked } = loginSlice.actions;

export default loginSlice.reducer;
