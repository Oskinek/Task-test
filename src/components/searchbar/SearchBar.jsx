import React from 'react';
import './searchbar.css';

const SearchBar = (props) =>{
  return (
    <input 
    type="search"
    placeholder={props.placeholder}
    onChange={props.handleChange}
    />
  )
}

export default SearchBar