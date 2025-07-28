import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: ''
};

const nameSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    login: (state) => {
      state.value = 'Success';
    }
  }
});


export const { login } = nameSlice.actions;


export default nameSlice.reducer;
