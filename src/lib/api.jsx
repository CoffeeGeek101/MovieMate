export default class TMDB_API {
    baseURL = "https://api.themoviedb.org/3";
    apiKey;

    constructor(apiKey){
        this.apiKey = apiKey;
    }

    searchMoviesAPI = async (query) => {
        const res = await fetch(
            `${this.baseURL}/search/movie?api_key=${this.apiKey}&query=${query}`
        )
        return res.json();
    };

    getGenre = async () => {
        const res = await fetch(
            `${this.baseURL}/genre/movie/list?api_key=${this.apiKey}`
        )
    }
}