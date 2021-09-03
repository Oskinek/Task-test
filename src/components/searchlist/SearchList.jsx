import React, {useState, useEffect} from 'react';
import UserList from '../userlist/UserList.jsx'
import SearchBar from '../searchbar/SearchBar.jsx'

const SearchList = () => {
  const [users, setUsers]=useState([]);
  const [searchField, setSearchField]=useState('');
  const [loading, setLoading]= useState(true);

  useEffect(() => {
    const url='https://jsonplaceholder.typicode.com/users'
    
    const renderUsers = async () => {
      await fetch(url)
      .then((response) => {
        if (response.ok){
          return response.json()
        }
        throw new Error('Response was not ok')
      })
      .then((response) => setUsers(response))
      .then(() => setLoading(false))
    }
    renderUsers();

  }, []);
  const handleChange = (e) => {
    setSearchField(e.target.value)
  }
  const filteredUsers = users.filter(user =>(
    user.name.toLowerCase().includes(searchField.toLowerCase())
  ))

  return (
    <div>
      <div className='title'>Users list</div>
      <SearchBar placeholder='Search by username...' handleChange={(e)=> (handleChange(e))}/>
      <UserList users={filteredUsers} loading={loading}/>
    </div>
  )
}

export default SearchList