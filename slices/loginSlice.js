import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLogin:false,
    uid:null,
    name:null
  },
  reducers: {
    login: (state,uid,name) => {
      state.isLogin = true,
      state.uid = uid,
      state.name = name
    },
    logout: state => {
      state.isLogin = false,
      state.uid = null,
      state.name = null
    },
  }
})

export const { login, logout } = loginSlice.actions

export default loginSlice.reducer