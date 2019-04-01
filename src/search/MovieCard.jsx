import React from 'react'


export default class MovieCard extends React.Component {
    render() {
        const {movie} = this.props;
        return (
            <div className="card" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.posterPath})`}}>
                <span className="card-label">{movie.adult ? '18+' : 'G'}</span>        
                <div className="card-info">
                    <h2 className="card-title">{movie.title}</h2>
                    <p>Released: {movie.releaseDate}</p>
                </div>
            </div>
        )
    }
}
