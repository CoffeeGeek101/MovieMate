// We are creating the reducers and actions for our global variables here using createSlice method

import { createSlice } from "@reduxjs/toolkit";


// this is the initial state of the search payload.
const initial_state = {
    result : [],
    totalResult : 0,
    page : 0,
    totalPage : 0,
    isFetching : false
}

// this is the slice for search, that contains all the reducers and action required for it
const serachSlice = createSlice({
    // just to refer the slice 
    name: "serachSlice",
    initialState : initial_state,
    // creates the reducers and actions in the same time (RTK feature)
    reducers : {
        fetchingSearch : (state) => {
            // we are immutablely updating the state, as we are making a copy and then adding the changes to it
            return{
                ...state,
                isFetching : true,
            };
        },
        fetchedSearchData : (state, action) => {
            return {
                ...state,
                result : action.payload.results,
                totalResult : action.payload.total_results,
                page : action.payload.page,
                totalPage : action.payload.total_pages,
                isFetching : false,
            };
        },
        resetSearchData : (state) => {
            return initial_state;
        },
    }
});

export const {fetchingSearch, fetchedSearchData, resetSearchData} = serachSlice.actions;
export default serachSlice.reducer;