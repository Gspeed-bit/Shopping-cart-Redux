import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = 0

export const counterSlice = createSlice ({
  name: "counter",
  initialState: {value: initialStateValue },
  reducers: {
    increment : (state)=>{
      state.value ++
 },
    decrement : (state)=>{
      state.value --
 },

    reset : (state)=>{
      state.value = initialStateValue
 },
    AddBy10 : (state)=>{
      state.value += 10
 }
}
});

export const { increment, decrement, reset, AddBy10 } = counterSlice.actions;
export default counterSlice.reducer;