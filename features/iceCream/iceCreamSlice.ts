import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type initialStateType = {
  numOfIceCreams: number;
};
import { ordered as cakeOrdered } from "../cake/cakeSlice"; // Importing cakeActions from cakeSlice
const initialState: initialStateType = {
  numOfIceCreams: 20,
};

const iceCreamSlice = createSlice({
  name: "iceCream", // Also fixed the name from "cake" to "iceCream"
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCreams--;
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfIceCreams += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIceCreams--;
    });
  },
});

export default iceCreamSlice.reducer; // Exporting the reducer
export const { ordered, restocked } = iceCreamSlice.actions; // Exporting the actions
