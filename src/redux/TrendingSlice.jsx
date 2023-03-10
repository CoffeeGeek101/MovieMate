import { createSlice } from "@reduxjs/toolkit";

const initial_state = {
    isFetching : false,
    results : [],
    page : 0,
    totalPage : 0,
    totalResults : 0,
}

const trendingSlice = createSlice({
    name : "trendingSlice",
    initialState: initial_state,
    reducers : {
        fetchingTrendingData : (state) =>{
            return{
                ...state,
                isFetching : true,
            }
        },
        fetchedTrendingData : (state, action) => {
            return {
                ...state,
                results : action.payload.results,
                page : action.payload.page,
                totalPage : action.payload.total_pages,
                totalResults : action.payload.total_results,
                isFetching : false,
            }
        },
        resetTrending : (state) => {
            return initial_state;
        }
    }
});

export const {fetchedTrendingData,fetchingTrendingData,resetTrending} = trendingSlice.actions;
export default trendingSlice.reducer;