import { createSlice } from "@reduxjs/toolkit"; 

const initial_state = {
    results : [],
    page :  0,
    totalResult : 0,
    totalPage : 0,
    hasMore : true,
    isFetching : false
}

const movieByGenre = createSlice({
    name:"movieByGenre",
    initialState : initial_state,
    reducers : {
        fetchingMovieByGenre : (state) =>{
            return{
                ...state,
                isFetching : true
            }
        },
        fetchedMovieByGenre : (state, action) => {
            return{
                ...state,
                results : [...state.results, ...action.payload.results],
                hasMore : action.payload.page < action.payload.total_pages,
                page : action.payload.page,
                totalPage : action.payload.total_pages,
                totalResult : action.payload.total_results,
                isFetching : false
            }
        },
        resetFetchingByGenre : (state) => {
            return initial_state
        }
    }
});  

export const {fetchingMovieByGenre,fetchedMovieByGenre,resetFetchingByGenre} = movieByGenre.actions;
export default movieByGenre.reducer;