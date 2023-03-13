
// So, this is the API class or section that help us create different and new instances of this
// TMDB_API class which has a constructor which takes the API_KEY as an argument, will be adding the 
// various end-point as function of this class so that we can use them with redux-saga.

import { Base_Provider_URL } from "../credConfig";

export default class TMDB_API {
    baseURL = "https://api.themoviedb.org/3";
    apiKey;

    constructor(apiKey){
        this.apiKey = apiKey;
    }
    // This is Search Movie endpoint, which searches for the movie, takes in the payload as the query and fetches the
    // data from the db
    searchMoviesAPI = async (query) => {
        const res = await fetch(
            `${this.baseURL}/search/movie?api_key=${this.apiKey}&query=${query}`
        )
        return res.json();
    };
    // This is Genre endpoint, this just searches for the genre of the movie
    getGenre = async () => {
        const res = await fetch(
            `${this.baseURL}/genre/movie/list?api_key=${this.apiKey}`
        )
        return res.json();
    }
    getTrendingMovies = async() =>{
        const res = await fetch(
            `${this.baseURL}/trending/movie/day?api_key=${this.apiKey}`
        )
        return res.json();
    }

    
    getWatchProvider = async (movieID) => {
        const res = await fetch(
            `${Base_Provider_URL}/movie/${movieID}/watch/providers?api_key=${this.apiKey}`
        )
        return res.json(); 
    }
}