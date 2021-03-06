import { createSlice } from "@reduxjs/toolkit";

 

export const userSlice = createSlice ({
  name: "user",
  initialState: {isLoggedIn: false} ,

  reducers: {
    login : (state,action)=>{
      state.isLoggedIn = true;
    },
    logout : (state) => {
      state.isLoggedIn = false;
    },
  }
});

export const {login, logout} = userSlice.actions

export default userSlice.reducer;