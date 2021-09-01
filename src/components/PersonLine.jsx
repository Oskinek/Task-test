import React from 'react';
import '../styles/person_line.css'

class PersonLine extends React.Component {
  render() {
    return (
      <li className="person-line">
        <div className='person-info'>
          <div className='person-name'>{this.props.person.name}</div>
          <div className='person-username'>@{this.props.person.username}</div>
        </div>
      </li>
    )
  }
}

export default PersonLine