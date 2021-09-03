import React from 'react';
import {render, screen} from '@testing-library/react';

import SearchBar from '../SearchBar.jsx'
import userEvent from '@testing-library/user-event';

  test('render input', () => {
    render(<SearchBar/>);
    const inputElement =screen.getByTestId('user-input');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type')
  })
  test('typing in searchbox', () => {
    render(<SearchBar/>);
    const inputElement =screen.getByTestId('user-input');
    userEvent.type(inputElement, 'janusz');

    expect(screen.getByTestId('user-input')).toHaveValue('janusz');
  })