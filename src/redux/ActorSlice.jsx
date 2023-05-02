import { createSlice } from "@reduxjs/toolkit";

const initial_state = {
    id : 0,
    cast : [],
    isFetching : false
}

const actorSlice = createSlice({
    name : 'actorSlice',
    initialState : initial_state,
    reducers : {
        fetchingActorsData : (state) => {
            return{
                ...state,
                isFetching : true
            }
        },
        fetchedActorsData : (state, action) => {
            return{
                ...state,
                id : action.payload.id,
                cast : action.payload.cast
            }
        },
        resetActorsData : (state) => {
            return initial_state;
        }
    }
});

export const {fetchingActorsData,fetchedActorsData,resetActorsData} = actorSlice.actions;
export default actorSlice.reducer;