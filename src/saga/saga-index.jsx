import {delay,call,put,all,takeEvery,takeLatest} from 'redux-saga/effects';
import { fetchedSearchData, fetchingSearch } from '../redux/SearchSlice';
import {API_KEY} from '../credConfig';
import TMDB_API from '../lib/api';

const  myAPI = new TMDB_API(API_KEY);

function* fetchSearchData(action){
    yield delay(500);

    yield put(
        fetchedSearchData(yield call(
            myAPI.searchMoviesAPI, action.payload
        ))
    );
}

export default function* watcherSaga(){
    yield all ([
        yield takeLatest(fetchingSearch.type, fetchSearchData)
    ])
}