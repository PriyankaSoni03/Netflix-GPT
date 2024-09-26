import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        langauge: "en",
    },
    reducers: {
        changeLang: (state,action) =>{
            state.langauge = action.payload;
        },
    },
}); 

export const {changeLang} = configSlice.actions;

export default configSlice.reducer;