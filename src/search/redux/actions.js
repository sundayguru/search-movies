import { GET_MOVIES, GET_MOVIES_SUCCESS, GET_MOVIES_FAILURE } from "./actionTypes";


export const getMovies = () => ({
    type: GET_MOVIES
});

export const getMoviesSuccess = (response) => ({
    type: GET_MOVIES_SUCCESS,
    response
});

export const getMoviesFailure = (error) => ({
    type: GET_MOVIES_FAILURE,
    error
});
