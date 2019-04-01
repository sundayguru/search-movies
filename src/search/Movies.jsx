import React from 'react'
import { connect } from "react-redux"
import {bindActionCreators} from 'redux'
import VisibilitySensor from 'react-visibility-sensor';
import MovieCard from  "./MovieCard"
import {getMovies, expandCard, loadMore} from './redux/actions'
import BubbleLoading from '../common/BubbleLoading'



class Movies extends React.Component {
    constructor() {
        super()
        this.loadMore = this.loadMore.bind(this)
    }
    componentDidMount () {
        this.props.getMovies();
    }
    loadMore (isVisible) {
        const {page, totalPages} = this.props.movies;
        console.log("LOAD MORE", isVisible)
        if (isVisible && page !== totalPages) {
            this.props.loadMore(page + 1)
        }
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
                <div style={{clear: 'both'}}>
                    {results.length > 0 && <VisibilitySensor onChange={this.loadMore}>
                    <BubbleLoading loading={isFetching}/>
                    </VisibilitySensor>}
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
    return bindActionCreators({getMovies, expandCard, loadMore}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
  