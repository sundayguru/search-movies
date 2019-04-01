import { GET_MOVIES, GET_MOVIES_SUCCESS, GET_MOVIES_FAILURE } from "./actionTypes";

const initialState = {
    totalPages: 0,
    totalResults: 0,
    name: '',
    search: '',
    results: [],
    isFetching: false,
    error: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_MOVIES: {
            return {
                ...state,
                isFetching: true
            }
        }

        case GET_MOVIES_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                ...action.response
            }
        }

        case GET_MOVIES_FAILURE: {
            return {
                ...state,
                isFetching: false,
                error: action.error
            }
        }

        default:
            return state;
    }
}


