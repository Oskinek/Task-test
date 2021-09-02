import React from 'react'
import UserList from '../userlist/UserList.jsx'
import './homepage_styles.css'

function HomePage () {
  return (
    <div>
      <div className="homepage">
        <UserList/>
      </div>
    </div>
  )
}

export default HomePage