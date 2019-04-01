import React from 'react'

const SearchBox = ({filterResult, search}) => (
    <div className="search-container">
        <input type="text" className="search-box" placeholder="Enter movie name..." onChange={(e) => {
            filterResult(e.target.value)
        }} value={search} />
    </div>
)


export default SearchBox