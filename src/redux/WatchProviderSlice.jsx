// import { createSlice } from "@reduxjs/toolkit";


// const initial_state = {
//     results : [],
//     isFetching : false
// }

// const watchProviderSlice = createSlice({
//     name : "watchProviderSlice",
//     initialState : initial_state,
//     reducers :{
//         fetchingWatchProvider : (state) =>{
//             return{
//                 ...state,
//                 isFetching : true,
//             }
//         },
//         fetchedWatchProvider : (state, action) => {
//             return{
//                 ...state,
//                 results : action.results,
//                 isFetching : false,
//             }
//         },
//         resetWatchProvider : (state) =>{
//             return initial_state;
//         }
//     }
// });

// export const {fetchedWatchProvider,fetchingWatchProvider,resetWatchProvider} = watchProviderSlice.actions;
// export default watchProviderSlice.reducer;