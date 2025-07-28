import { createSlice } from "@reduxjs/toolkit";

const palindromeSlice = createSlice({
  name: 'palindrome',
  initialState: { inputString: '' },
  reducers: {
    setInputString: (state, action) => {
      state.inputString = action.payload;
    },
  },
});

export const { setInputString } = palindromeSlice.actions;
export default palindromeSlice.reducer;
