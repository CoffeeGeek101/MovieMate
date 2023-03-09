import { createSlice } from "@reduxjs/toolkit";

const initial_state = {
    result : [],
    totalResult : 0,
    page : 0,
    totalPage : 0,
    isFetching : false
}

const serachSlice = createSlice({
    name: "search",
    initialState : initial_state,
    reducers : {
        fetchingSearch : (state) => {
            return{
                ...state,
                isFetching : true,
            };
        },
        fetchedSearchData : (state, action) => {
            return {
                ...state,
                result : action.payload.result,
                totalResult : action.payload.total_result,
                page : action.payload.page,
                totalPage : action.payload.total_page,
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