import { GET_MOVIES, GET_MOVIES_SUCCESS, GET_MOVIES_FAILURE, EXPAND_CARD } from "./actionTypes";


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

export const expandCard = (id) => ({
    type: EXPAND_CARD,
    id
});
