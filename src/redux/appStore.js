import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import tvShowsReducer from "./tvShowsSlice";
import gptReducer from "./GPTSlice";
import configReducer from "./configSlcie";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    tvShows: tvShowsReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});

export default appStore;
