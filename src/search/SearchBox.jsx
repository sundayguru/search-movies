import React from 'react'
import AutoCompleteInput from '../common/AutoCompleteInput'


const SearchBox = ({filterResult, search, movies}) => (
    <div className="search-container">
        <AutoCompleteInput
            className="search-box"
            placeholder="Enter movie title..."
            onChange={(value) => filterResult(value.trim())}
            value={search}
            items={movies}
        />
    </div>
)


export default SearchBox