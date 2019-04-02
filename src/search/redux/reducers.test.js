import reducer from './reducer'
import * as actions from './actions'

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

const response = {
    results: [
        {
            voteAverage: 7.7,
            voteCount: 11713,
            id: 283995,
            mediaType: "movie",
            title: "Guardians of the Galaxy Vol. 2",
            popularity: 45.842,
            posterPath: "/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
            originalLanguage: "en",
            adult: false,
            overview: "The Guardians must fight",
            releaseDate: "2017-04-19"
        },
        {
            voteAverage: 3.7,
            voteCount: 713,
            id: 2995,
            mediaType: "movie",
            title: "another title",
            popularity: 45.842,
            posterPath: "/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
            originalLanguage: "en",
            adult: false,
            overview: "The Guardians must fight",
            releaseDate: "2017-04-19"
        }
    ],
    totalResults: 2,
    totalPages: 2,
    page: 1
}

describe('search reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle GET_MOVIES', () => {
    const newState = {...initialState, isFetching: true}
    expect(
      reducer(initialState, actions.getMovies())
    ).toEqual(newState)
  })

  it('should handle GET_MOVIES_SUCCESS', () => {
    const newState = {...initialState, ...response}
    expect(
      reducer(initialState, actions.getMoviesSuccess(response))
    ).toEqual(newState)
  })

  it('should handle GET_MOVIES_FAILURE', () => {
    const error = {message: 'error message'}
    const newState = {...initialState, error}
    expect(
      reducer(initialState, actions.getMoviesFailure(error))
    ).toEqual(newState)
  })

  it('should handle LOAD_MORE', () => {
    const oldState = {...initialState, ...response}
    const newState = {...oldState, isFetching: true}
    expect(
      reducer(oldState, actions.loadMore())
    ).toEqual(newState)
  })

  it('should handle LOAD_MORE_SUCCESS', () => {
    const error = {message: 'error message'}
    const oldState = {...initialState, ...response}
    const newState = {...oldState, results: [...oldState.results, ...response.results]}
    expect(
      reducer(oldState, actions.loadMoreSuccess(response))
    ).toEqual(newState)
  })

  it('should handle LOAD_MORE_FAILURE', () => {
    const error = {message: 'error message'}
    const oldState = {...initialState, ...response}
    const newState = {...oldState, error}
    expect(
      reducer(oldState, actions.loadMoreFailure(error))
    ).toEqual(newState)
  })

  it('should handle EXPAND_CARD', () => {
    const newState = {...initialState, expanded: {2995: true}}
    expect(
      reducer(initialState, actions.expandCard(2995))
    ).toEqual(newState)
  })

  it('should handle FILTER_RESULTS', () => {
    const newState = {...initialState, search: 'query'}
    expect(
      reducer(initialState, actions.filterResult('query'))
    ).toEqual(newState)
  })
})