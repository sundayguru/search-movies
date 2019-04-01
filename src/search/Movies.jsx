import React from 'react'
import { connect } from "react-redux"
import {bindActionCreators} from 'redux'
import MovieCard from  "./MovieCard"
import {getMovies} from './redux/actions'


class Movies extends React.Component {
    componentDidMount () {
        this.props.getMovies();
    }
    render() {
        const {isFetching} = this.props.movies;
        console.log("isFetching", isFetching)
        console.log("MOVIE", this.props.movies)
        return (
            <div className="search-results">
                <div className="result-info">
                    <p><i>Showing: 1 / 20</i></p>
                </div>
                <div>
                    {isFetching && "Loading Movies"}
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                </div>
               
            </div>
        )
    }
}


const mapStateToProps = state => {
    const { movies } = state;
    return { movies };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({getMovies}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
  