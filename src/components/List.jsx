import React from 'react';
import PersonLine from './PersonLine.jsx'
import SearchBar from './SearchBar.jsx'
import '../styles/list_styles.css'

class List extends React.Component {
  state = {
    persons: [],
    searchField: ''
  }
  componentDidMount() {
    this.renderPersons()
  }
  async renderPersons() {
    const url='https://jsonplaceholder.typicode.com/users'
    const response= await fetch(url)
    const data = await response.json()
    this.setState({persons: data})
  }
  render() {
    const filteredPersons = this.state.persons.filter(person =>(
      person.username.toLowerCase().includes(this.state.searchField.toLowerCase())
    ))
    const allPersons = filteredPersons.map((person, index) => (
      <PersonLine person={person} key={index} />
    ))
    return (
      <div className='list'>
        <div className='title'>Users list</div>
        <SearchBar placeholder='Search by username...' handleChange={(e)=> this.setState({searchField:e.target.value})}/>
        {allPersons}
      </div>
    )
  }
}

export default List