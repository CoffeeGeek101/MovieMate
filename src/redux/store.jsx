import { configureStore} from "@reduxjs/toolkit";
import searchReducer from './SearchSlice';
import watcherSaga from "../saga/saga-index";
import createSagaMiddleware from "@redux-saga/core";
import genreReducer from './GenreSlice';
import trendingReducer from './TrendingSlice';
import popularReducer from './PopularSlice';

const sagaMiddleware = createSagaMiddleware();


const store = configureStore({
    reducer:{
        search : searchReducer,
        genre : genreReducer,
        trending : trendingReducer,
        popular : popularReducer,
    },
    middleware : (getDefaultMiddleware) =>{
        return getDefaultMiddleware({thunk : false}).prepend(sagaMiddleware);
    }
});

sagaMiddleware.run(watcherSaga);

export default store;