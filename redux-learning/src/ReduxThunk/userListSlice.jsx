import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch users
export const fetchUserList = createAsyncThunk(
  "users/fetchUserList",
  async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!res.ok) {
      throw new Error("Some problem occurred, not able to fetch the data");
    }

    const data = await res.json();
    return data;
  }
);

const initialState = {
  items: [],
  status: "",
  error: null,
};

const userListSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserList.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUserList.fulfilled, (state, action) => {
        state.status = "success";
        state.items = action.payload;
      })
      .addCase(fetchUserList.rejected, (state, action) => {
        state.status = "fail";
        state.error = action.error.message || "Unknown error";
      });
  },
});

export default userListSlice.reducer;
