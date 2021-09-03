import React from 'react';
import { render} from '@testing-library/react';

import Homepage from '../Homepage.jsx';

describe('Homepage', () => {
  test('renders Homepage component', () => {
    render(<Homepage/>);
  })
})
