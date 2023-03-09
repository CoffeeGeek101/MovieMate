import { configureStore} from "@reduxjs/toolkit";
import searchReducer from './SearchSlice'
import watcherSaga from "../saga/saga-index";
import createSagaMiddleware from "@redux-saga/core";


const sagaMiddleware = createSagaMiddleware();


const search = configureStore({
    reducer:{
        search : searchReducer
    },
    middleware : (getDefaultMiddleware) =>{
        return getDefaultMiddleware({thunk : false}).prepend(sagaMiddleware);
    }
});

sagaMiddleware.run(watcherSaga);

export default search;