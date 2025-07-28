import { configureStore } from "@reduxjs/toolkit";
import userListReducer from './userListSlice'
export const Store = configureStore({
    reducer:{
        userList:userListReducer
    }
})