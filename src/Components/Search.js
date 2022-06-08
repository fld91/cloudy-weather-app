import React from 'react'
import searchIcon from '../assets/icons8-search-ios-glyph-32.png'
import '../styles/Search.css'
function Search() {
  return (
    <div className='SearchBar'>
     
       <input className='inputStyle'  placeholder="Search City here"/>
       <img id="searchIcon" src={searchIcon} alt="search-icon"/>
    </div>
  )
}

export default Search