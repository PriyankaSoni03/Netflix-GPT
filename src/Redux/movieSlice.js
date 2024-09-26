import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailer: null,
        popularMovies: null,
        trending: null,
        upcomingMovies: null,
        topRatedMovies: null,
    },
    reducers:{
        addNowPlayingMovies: (state,action) => {
            state.nowPlayingMovies = action.payload;
        },

        addPopularMovies: (state,action) => {
            state.popularMovies = action.payload;
        },

        addTrendingMovies: (state,action) => {
            state.trending = action.payload;
        },

        addUpcomingMovies: (state,action) => {
            state.upcomingMovies = action.payload;
        },

        addTopRated: (state,action) => {
            state.topRatedMovies = action.payload;
        },

        addTrailer: (state,action) =>{ 
            state.trailer = action.payload;
        },
    },
});

export const {addNowPlayingMovies, addTrailer, addPopularMovies, addTrendingMovies, addUpcomingMovies, addTopRated} = movieSlice.actions;
export default movieSlice.reducer;