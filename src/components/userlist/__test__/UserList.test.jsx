import React from 'react';
import {render} from '@testing-library/react';

import UserList from '../UserList.jsx';

test('display a list of users', () => {
  const fakeUsers = [{
    'id': 1,
    'name': 'Jan Kowalski',
    'username': 'JanoPL'
  },
  {
    'id': 2,
    'name': 'Anna Kowalska',
    'username': 'AnixPL'
  }]
  const loading = false;

  const {getByTestId} = render(<UserList users={fakeUsers} loading={loading}/>);
  const listElements = getByTestId('list');

  expect(listElements.textContent).toBe(
    fakeUsers[0].name + '@' + fakeUsers[0].username +
    fakeUsers[1].name + '@' + fakeUsers[1].username
  );
 
})

test('display filtered users', () => {
  const fakeUsers = [{
    'id': 1,
    'name': 'Jan Kowalski',
    'username': 'JanoPL'
  },
  {
    'id': 2,
    'name': 'Anna Kowalska',
    'username': 'AnixPL'
  }]
  const searchField = 'Jan';
  const loading= false;
  const filteredUsers = fakeUsers.filter(user =>(
    user.name.toLowerCase().includes(searchField.toLowerCase())
  ))

  const {getByTestId} = render(<UserList users={filteredUsers} loading={loading}/>);
  const listElements = getByTestId('list');
  expect(listElements.textContent).toBe(
    fakeUsers[0].name + '@' + fakeUsers[0].username
  );
})
