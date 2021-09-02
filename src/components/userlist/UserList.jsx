import React, {useState, useEffect} from 'react';
import UserContainer from '../user_container/UserContainer.jsx'
import SearchBar from '../searchbar/SearchBar.jsx'
import './userlist_styles.css'

const UserList = () => {
  const [users, setUsers]=useState([]);
  const [searchField, setSearchField]=useState('');

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
    }
    renderUsers();

  }, []);
    const filteredUsers = users.filter(user =>(
      user.username.toLowerCase().includes(searchField.toLowerCase())
    ))
    const allUsers = filteredUsers.map((user, index) => (
      <UserContainer user={user} key={index} />
    ))
    const handleChange = (e) => {
      setSearchField(e.target.value)
    }
    return (
      <div className='list'>
        <div className='title'>Users list</div>
        <SearchBar placeholder='Search by username...' handleChange={(e)=> (handleChange(e))}/>
        {allUsers}
      </div>
    )
}

export default UserList