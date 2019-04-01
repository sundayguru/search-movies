import * as Types from './actionTypes';


export const getMovies = () => ({
    type: Types.GET_MOVIES
});

export const getMoviesSuccess = (response) => ({
    type: Types.GET_MOVIES_SUCCESS,
    response
});

export const getMoviesFailure = (error) => ({
    type: Types.GET_MOVIES_FAILURE,
    error
});

export const loadMore = (page) => ({
    type: Types.LOAD_MORE,
    page
});

export const loadMoreSuccess = (response) => ({
    type: Types.LOAD_MORE_SUCCESS,
    response
});

export const loadMoreFailure = (error) => ({
    type: Types.LOAD_MORE_FAILURE,
    error
});

export const expandCard = (id) => ({
    type: Types.EXPAND_CARD,
    id
});
