import { createSlice } from "@reduxjs/toolkit";

const tvShowsSlice = createSlice({
  name: "tvShows",
  initialState: {
    tvShows: null,
  },
  reducers: {
    addTvShows: (state, action) => {
      state.tvShows = action.payload;
    },
  },
});

export const { addTvShows } = tvShowsSlice.actions;

export default tvShowsSlice.reducer;
