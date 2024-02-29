import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  guid: "",
};

const guidSlice = createSlice({
  name: "guid",
  initialState,
  reducers: {
    setGuid: (state, action) => {
      console.log("Setting guid value:", action.payload);
      state.guid = action.payload;
    },
  },
});

export const { setGuid } = guidSlice.actions;

export default guidSlice.reducer;
