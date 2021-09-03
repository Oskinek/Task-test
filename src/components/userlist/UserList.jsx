import React from 'react';
import UserContainer from '../user_container/UserContainer.jsx'
import './userlist.css'

const UserList = (props) => {
  if(props.loading){
    return(
      <div className='title'>Loading...</div>
    )
  }
  if(!props.users.length) {
    return <div className='title'>No matching users</div>
  } 
    return (
      <div data-testid='list'>
        {props.users.map((user) => (
          <UserContainer user={user} key={user.id} />
        ))}
      </div>
    )
}

export default UserList