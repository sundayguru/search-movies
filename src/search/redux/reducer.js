import * as Types from './actionTypes'

const initialState = {
    totalPages: 0,
    totalResults: 0,
    expanded: {},
    name: '',
    search: '',
    results: [],
    isFetching: false,
    error: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case Types.GET_MOVIES:
        case Types.LOAD_MORE:
        {
            return {
                ...state,
                isFetching: true
            }
        }

        case Types.GET_MOVIES_SUCCESS:
        {
            return {
                ...state,
                isFetching: false,
                ...action.response
            }
        }
        case Types.LOAD_MORE_SUCCESS:
        {
            return {
                ...state,
                isFetching: false,
                page: action.response.page,
                results: [...state.results, ...action.response.results],
            }
        }

        case Types.EXPAND_CARD: {
            return {
                ...state,
                expanded: {[action.id]: !state.expanded[action.id]}
            }
        }

        case Types.GET_MOVIES_FAILURE:
        case Types.LOAD_MORE_FAILURE:
        {
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


