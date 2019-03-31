import React from 'react'
import MovieCard from  "./MovieCard";


class Movies extends React.Component {
    render() {
        return (
            <div className="search-results">
                <div className="result-info">
                    <p><i>Showing: 1 / 20</i></p>
                </div>
                <div>
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                </div>
               
            </div>
        )
    }
}

export default Movies