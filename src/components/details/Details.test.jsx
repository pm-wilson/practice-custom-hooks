import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CharacterDetail from './Details';
import { getDetails } from '../../services/details-api';
import { MemoryRouter, Route } from 'react-router-dom';

jest.mock('../../services/details-api.js');

describe('CharacterDetail component', () => {
  it('display a character after a load screen', () => {
    getDetails.mockResolvedValue({
      name: 'mulder',
      image: 'www.google.com',
      status: 'alive',
      description: 'some guy that works somewhere'
    });

    render(<MemoryRouter initialEntries={['/details/1']}>
      <Route path="/details/:id" component={CharacterDetail}/>
    </MemoryRouter>);

    screen.getByText('Loading...');

    return waitFor(() => {
      screen.getByText('mulder');
      screen.getByText('alive');
      screen.getByText('some guy that works somewhere');
      screen.getByAltText('mulder');
    });
  });
});
