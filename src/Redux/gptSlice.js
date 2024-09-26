import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt", 
    initialState: {
        showGptSearch: false,
        movieNames: "null",
        movieResults: "null",
    },
    reducers: {
        toogleGptSearchView: (state,action) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovies: (state,action) => {
            const {movieNames, movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
    },
});

export const {toogleGptSearchView, addGptMovies} = gptSlice.actions;

export default gptSlice.reducer;