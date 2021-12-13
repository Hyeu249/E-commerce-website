import { createSlice } from "@reduxjs/toolkit";

const credentialsSlice = createSlice({
  name: "credentials",
  initialState: {
    user: false,
  },
  reducers: {
    loginHandle: (state, actions) => {
      state.user = actions.payload;
    },
  },
});

export const { loginHandle } = credentialsSlice.actions;

export default credentialsSlice.reducer;
