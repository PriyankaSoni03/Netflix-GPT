import { configureStore } from "@reduxjs/toolkit";
import userReducers from "./userSlice";
import movieReducers from "./movieSlice";
import gptReducer from "./gptSlice";
import configReducers from "./configSlice";

const appStore = configureStore({
    reducer:{
        user: userReducers,
        movies: movieReducers,
        gpt: gptReducer,
        config: configReducers,
    },
});

export default appStore;