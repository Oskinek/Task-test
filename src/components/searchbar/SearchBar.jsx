import React from 'react';
import './searchbar.css';

const SearchBar = (props) =>{
  return (
    <input 
    type="search"
    data-testid='user-input'
    placeholder={props.placeholder}
    onChange={props.handleChange}
    value={props.searchField}
    />
  )
}

export default SearchBar