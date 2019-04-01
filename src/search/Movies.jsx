import React from 'react'
import { connect } from "react-redux"
import {bindActionCreators} from 'redux'
import MovieCard from  "./MovieCard"
import {getMovies, expandCard} from './redux/actions'
import BubbleLoading from '../common/BubbleLoading'


class Movies extends React.Component {
    componentDidMount () {
        this.props.getMovies();
    }
    render() {
        const {isFetching, results, totalResults, expanded} = this.props.movies;
        console.log("MOVIE", this.props.movies)
        return (
            <div className="search-results">
                <div className="result-info">
                    <p><i>Showing: {results.length} / {totalResults}</i></p>
                </div>
                <BubbleLoading loading={isFetching}/>
                <div>
                    {results.map((movie, index) =>{
                        return <MovieCard movie={movie} expanded={expanded} expandCard={this.props.expandCard} key={index} />
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
    return bindActionCreators({getMovies, expandCard}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
  