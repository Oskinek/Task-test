import React from 'react'
import SearchList from '../searchlist/SearchList.jsx'
import './homepage.css'

function HomePage () {
  return (
    <div>
      <div className="homepage">
        <SearchList/>
      </div>
    </div>
  )
}

export default HomePage