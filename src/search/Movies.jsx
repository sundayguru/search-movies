import React from 'react'
import { connect } from "react-redux"
import {bindActionCreators} from 'redux'
import VisibilitySensor from 'react-visibility-sensor';
import MovieCard from  "./MovieCard"
import * as Actions from './redux/actions'
import BubbleLoading from '../common/BubbleLoading'
import SearchBox from  "./SearchBox";



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
        const {isFetching, results, totalResults, expanded, search} = this.props.movies;
        let movies = results
        if (search) {
            movies = results.filter((movie) => {
                        if (movie.title.toLowerCase().indexOf(search) > -1) {
                            return true;
                        }
                        return false
                    })
        }
        console.log("MOVIE", this.props.movies)
        return (
            <div>
                <SearchBox filterResult={this.props.filterResult} search={search}/>
                <div className="search-results">
                    <div className="result-info">
                        <p><i>Showing: {movies.length} / {totalResults}</i></p>
                    </div>
                    <BubbleLoading loading={isFetching}/>
                    <div>
                        {movies.map((movie, index) =>{
                            return <MovieCard movie={movie} expanded={expanded} expandCard={this.props.expandCard} key={index} />
                        })}
                    </div>
                    <div style={{clear: 'both'}}>
                        {results.length > 0 && <VisibilitySensor onChange={this.loadMore}>
                        <BubbleLoading loading={isFetching}/>
                        </VisibilitySensor>}
                    </div>
                    
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
    return bindActionCreators({...Actions}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
  