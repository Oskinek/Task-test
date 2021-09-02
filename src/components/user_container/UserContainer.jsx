import React from 'react';
import './user_container.css'

function UserContainer (props) {
  return (
    <li className="user-line">
      <div className='user-info'>
        <div className='user-name'>{props.user.name}</div>
        <div className='user-username'>@{props.user.username}</div>
      </div>
    </li>
  )
}

export default UserContainer