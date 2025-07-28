import { configureStore } from "@reduxjs/toolkit";


import counterReducer from "./counterSlice";
import nameReducer from "./NameSlice";

export const Store = configureStore({
    reducer:{
        counter:counterReducer,
        name : nameReducer
        
    }
})