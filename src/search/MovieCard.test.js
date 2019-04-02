import React from 'react';
import MovieCard from './MovieCard';
import renderer from 'react-test-renderer';


test('<MovieCard />', () => {
    const movie = {
        voteAverage: 7.7,
        voteCount: 11713,
        id: 283995,
        mediaType: "movie",
        title: "Guardians of the Galaxy Vol. 2",
        popularity: 45.842,
        posterPath: "/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
        originalLanguage: "en",
        adult: false,
        overview: "The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage.",
        releaseDate: "2017-04-19"
    }
    const component = renderer.create(
        <MovieCard movie={movie} expanded={{}} />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    const componentExpanded = renderer.create(
        <MovieCard movie={movie} expanded={{[movie.id]: true}}/>,
    );
    let treeExpanded = componentExpanded.toJSON();
    expect(treeExpanded).toMatchSnapshot();
});