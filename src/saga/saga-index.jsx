// This is the middleware for our application.

import {delay,call,put,all,takeEvery,takeLatest} from 'redux-saga/effects';
import { fetchedSearchData, fetchingSearch } from '../redux/SearchSlice';
import {API_KEY} from '../credConfig';
import TMDB_API from '../lib/api';
import { fetchedGenreData, fetchingGenre } from '../redux/GenreSlice';
import { fetchedTrendingData, fetchingTrendingData } from '../redux/TrendingSlice';
// import { fetchedWatchProvider, fetchingWatchProvider } from '../redux/WatchProviderSlice';

// creating the instance of the API class
const  myAPI = new TMDB_API(API_KEY);

// this is a generator funtion which gives out the generator object and we perform some works on the obj
function* fetchSearchData(action){
    // this prevents the API load or we can say act as a load-balancer
    yield delay(500);

    // this dispatches the redux action
    yield put(
        // executes an async function and returns the result when the promise resolves
        fetchedSearchData(yield call(
            myAPI.searchMoviesAPI, action.payload
        ))
        // here, the call takes two argument, first one is the fn and the second is the fn argument
    );
}

function* fetchGenreData(){
    yield put(fetchedGenreData(yield call(myAPI.getGenre))
    );
}

function* fetchTrendingMovies(){
    yield put(fetchedTrendingData(yield call(myAPI.getTrendingMovies))
    );
}

// function* fetchWatchProvider(action){
//     yield put(fetchedWatchProvider(yield call(myAPI.getWatchProvider,action.payload))
//     );
// }


// This is the watcher function which listens to the `fetchingSearch` action, which then 
// triggers the `fetchedSearchData` action. 
export default function* watcherSaga(){
    yield all ([
        yield takeLatest(fetchingTrendingData.type, fetchTrendingMovies),
        // yield takeLatest(fetchingWatchProvider.type, fetchWatchProvider),
        yield takeEvery(fetchingGenre.type, fetchGenreData),
        yield takeLatest(fetchingSearch.type, fetchSearchData)
    ])
}