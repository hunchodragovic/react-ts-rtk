import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
type User = {
  id: number;
  name: string;
};
type initialStateType = {
  users: User[];
  loading: boolean;
  error: string | undefined;
};
const initialState: initialStateType = {
  users: [],
  loading: false,
  error: "",
};

// Async thunk to fetch users
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, thunkAPI) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  }
);

// userSlice definition
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload); // Adds a user to the list
    },
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload); // Removes a user by id
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong!";
      });
  },
});

// Exporting actions
export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
