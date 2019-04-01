import React from 'react'


const MovieCard = ({movie, expanded, expandCard}) => (
    <div 
        className={expanded[movie.id] ? "card card-expanded" : "card"} 
        style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.posterPath})`}}
        onClick={() => {
            console.log("expand", movie.id, expanded)
            expandCard(movie.id)
        }}>
        <span className="card-label">{movie.adult ? '18+' : 'G'}</span>        
        <div className="card-info">
            <h2 className="card-title">{movie.title}</h2>
            <p>Released: {movie.releaseDate}</p>
            <div className="more-details">
                <p className="movie-desc">{movie.overview}</p>
                <p>Voting Average: {movie.voteAverage}</p>
                <p>Total Votes: {movie.voteCount}</p>
                <p>Popuplarity: {movie.popularity}%</p>
                <p>Media Type: {movie.mediaType}%</p>
                <p>Language: {movie.originalLanguage}%</p>
            </div>
        </div>
    </div>
)

export default MovieCard