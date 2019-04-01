import React from 'react'
import { connect } from "react-redux"
import {bindActionCreators} from 'redux'
import MovieCard from  "./MovieCard"
import {getMovies} from './redux/actions'
import BubbleLoading from '../common/BubbleLoading'


class Movies extends React.Component {
    componentDidMount () {
        this.props.getMovies();
    }
    render() {
        const {isFetching, results, totalResults} = this.props.movies;
        console.log("isFetching", isFetching)
        console.log("MOVIE", this.props.movies)
        return (
            <div className="search-results">
                <div className="result-info">
                    <p><i>Showing: {results.length} / {totalResults}</i></p>
                </div>
                <BubbleLoading loading={isFetching}/>
                <div>
                    {results.map((movie, index) =>{
                        return <MovieCard movie={movie} key={index} />
                    })}
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
  