import { createSlice } from "@reduxjs/toolkit";

const initial_state = {
    selectedGenre : null,
};

const setGenreSlice = createSlice({
    name : "setGenreSlice",
    initialState : initial_state,
    reducers : {
        selectedMovieGenre : (state, action) =>{
            state.selectedGenre = action.payload;
        }, 
    }
});

export const {selectedMovieGenre} = setGenreSlice.actions;    
export default setGenreSlice.reducer;