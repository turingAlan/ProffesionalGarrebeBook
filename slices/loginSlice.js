import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLogin:false,
    uid:null,
    name:null
  },
  reducers: {
    login: (state,uid) => {
      state.isLogin = true,
      state.uid = uid.payload
    },
    nameSet:(state,name)=>{
      state.name = name.payload
    },
    logout: state => {
      state.isLogin = false,
      state.uid = null,
      state.name = null
    },
  }
})

export const { login, logout,nameSet } = loginSlice.actions

export default loginSlice.reducer