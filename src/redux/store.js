
import {configureStore}  from "@reduxjs/toolkit"
import todoslice from "./todoSlice"

const todoStore = configureStore({
    reducer : {
       tododata : todoslice.reducer
    }
})

export default todoStore;