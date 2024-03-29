// This is the middleware for our application.

import {delay,call,put,all,takeEvery,takeLatest} from 'redux-saga/effects';
import { fetchedSearchData, fetchingSearch } from '../redux/SearchSlice';
import {API_KEY} from '../credConfig';
import TMDB_API from '../lib/api';
import { fetchedGenreData, fetchingGenre } from '../redux/GenreSlice';
import { fetchedTrendingData, fetchingTrendingData } from '../redux/TrendingSlice';
import { fetchedPopularMovieData, fetchingPopularMovieData } from '../redux/PopularSlice';
import { fetchedMovieByGenre, fetchingMovieByGenre } from '../redux/MovieByGenreSlice';
import { fetchedMovieDetail, fetchingMovieDetail } from '../redux/DetailSlice';
import {fetchedActorsData, fetchingActorsData} from '../redux/ActorSlice'
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

function* fetchPopularMovies(action){
    yield put(fetchedPopularMovieData(yield call(myAPI.getPopularMovies, action.payload))
    );
}

function* fetchMovieByGenre(action){
    const selectedGenreID = action.payload.selectedGenre;
    const pageNumber = action.payload.page;
    // console.log(pageNumber)
    const idString = String(selectedGenreID.selectedGenre)
    // console.log(idString);
    yield put(fetchedMovieByGenre(yield call(myAPI.getSelectedGenreMovie, idString, pageNumber))
    );
}

function* fetchMovieDetail(action){
    yield put(fetchedMovieDetail(yield call(myAPI.getMovieDetails, action.payload))
    );
}

function* fetchMovieActors(action){
    yield put (fetchedActorsData(yield call(myAPI.getActors,action.payload))
    );
}

// This is the watcher function which listens to the `fetchingSearch` action, which then 
// triggers the `fetchedSearchData` action. 
export default function* watcherSaga(){
    yield all ([
        yield takeLatest(fetchingTrendingData.type, fetchTrendingMovies),
        yield takeEvery(fetchingPopularMovieData.type, fetchPopularMovies),
        yield takeLatest(fetchingMovieByGenre.type, fetchMovieByGenre),
        yield takeEvery(fetchingActorsData.type, fetchMovieActors),
        yield takeEvery(fetchingMovieDetail.type, fetchMovieDetail),
        yield takeEvery(fetchingGenre.type, fetchGenreData),
        yield takeLatest(fetchingSearch.type, fetchSearchData)
    ])
}