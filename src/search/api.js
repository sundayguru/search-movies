import settings from '../../config/settings';
import axios from '../api/axios';

const {apiBaseURL, apiKey} = settings;


export default class MoviesApi {
    static getMovies() {
        return axios.get(`${apiBaseURL}/4/list/1`, {params: {apiKey}});
    }

    static loadMore(page) {
        return axios.get(`${apiBaseURL}/4/list/1`, {params: {apiKey, page}});
    }
}
