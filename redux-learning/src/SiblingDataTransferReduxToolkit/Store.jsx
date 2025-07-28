import { configureStore } from "@reduxjs/toolkit";
import palindromeReducer from './palindromeSlice';

export const Store = configureStore({
  reducer: {
    palindrome: palindromeReducer,
  },
});
