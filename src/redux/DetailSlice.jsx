import { createSlice } from "@reduxjs/toolkit";

const initial_state = {
    genres : [],
    title : '',
    overview : '',
    homepage : '',
    backdrop : '',
    poster :'',
    prod : [],
    isFetching : false
}

const detailSLice = createSlice({
    name : "detailSlice",
    initialState : initial_state,
    reducers :{
        fetchingMovieDetail : (state) =>{
            return{
                ...state,
                isFetching : true
            }
        },
        fetchedMovieDetail : (state, action) => {
            return{
                ...state,
                genres : action.payload.genres,
                title : action.payload.original_title,
                overview : action.payload.overview,
                homepage : action.payload.homepage,
                backdrop : action.payload.backdrop_path,
                poster : action.payload.poster_path,
                prod : action.payload.production_companies
            }
        },
        resetMovieDetail : (state) => {
            return initial_state;
        }
    }
});

export const {fetchingMovieDetail,fetchedMovieDetail,resetMovieDetail} = detailSLice.actions;
export default detailSLice.reducer;