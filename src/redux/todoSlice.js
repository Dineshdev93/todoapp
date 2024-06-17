import { createSlice } from "@reduxjs/toolkit";
const todoslice = createSlice({
  initialState: [],
  name: "todo",
  reducers: {
    Addtodo: (state, action) => {
      return (state = [...state, action.payload]);
    },

    Deletetodo: (state, action) => {
      // return state.filter((item, index) => {
      //   const filterdata = index !== action.payload;
      //   return filterdata;
      // });
      return state.filter((item,index)=> index !== action.payload);
    },
  },
});
export const todoAction = todoslice.actions;
export default todoslice;
