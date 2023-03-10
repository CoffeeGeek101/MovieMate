import { createSlice } from "@reduxjs/toolkit";

const initial_genre_state = {
    genre : [],
    isFetching : false,
}

const genreSlice = createSlice({
    name: "genreSlice",
    initialState : initial_genre_state,
    reducers : {
        fetchingGenre : (state) =>{
            return {
                ...state,
                isFetching : true,
            }
        },
        fetchedGenreData : (state, action) => {
            return{
                ...state,
                genre : action.payload.genres,
                isFetching : false,
            }
        },
        resetGenre : (state) =>{
            return initial_genre_state
        }
    }
});

export const {fetchedGenreData, fetchingGenre, resetGenre} = genreSlice.actions;
export default genreSlice.reducer;