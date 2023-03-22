import { createSlice } from "@reduxjs/toolkit";

const initial_state = {
    results : [],
    page : 0,
    totalResults : 0,
    totalPages : 0,
    isFetching : false,
}

const popularSlice = createSlice({
    name: "popularSlice",
    initialState : initial_state,
    reducers : {
        fetchingPopularMovieData : (state) => {
            return{
                ...state,
                isFetching: true,
            };
        },
        fetchedPopularMovieData : (state,action) =>{
            return{
                ...state,
                results : action.payload.results,
                page : action.payload.page,
                totalPages : action.payload.total_pages,
                totalResults : action.payload.total_results,
                isFetching : false,
            };
        },
        resetPopularData : (state) =>{
            return initial_state;
        },
    }
});

export const {fetchingPopularMovieData, fetchedPopularMovieData, resetPopularData} = popularSlice.actions;
export default popularSlice.reducer;

