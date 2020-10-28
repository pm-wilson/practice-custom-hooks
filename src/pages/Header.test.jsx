import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';

describe('Header component', () => {
  it('renders Header', () => {
    const { asFragment } = render(<MemoryRouter><Header /></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });
});
