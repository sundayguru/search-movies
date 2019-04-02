import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import {Movies} from './Movies'
import Adapter from 'enzyme-adapter-react-16'
import MovieCard from './MovieCard';
import SearchBox from './SearchBox';
import BubbleLoading from '../common/BubbleLoading';

Enzyme.configure({adapter: new Adapter()})

test('<Movies />', () => {
    const props = {
        getMovies: jest.fn(),
        movies: {
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
            expanded: {},
            totalResults: 0,
            search: '',
            isFetching: false
        }
    }

    const wrapper = shallow(
        <Movies {...props} />
    );
    expect(props.getMovies.mock.calls.length).toBe(1)
    expect(wrapper.containsAllMatchingElements([<MovieCard />, <SearchBox />, <BubbleLoading />])).toBe(true)
});
