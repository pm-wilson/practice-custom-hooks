import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CharacterList from './CharacterList';
import { getCharacters } from '../../services/characters-api';

jest.mock('../../services/characters-api.js');

describe('CharacterList component', () => {
  it('displays a list of characters after a brief load', async() => {
    getCharacters.mockResolvedValue([
      { name: 'Moulder', image: 'www.google.com', status: 'alive', description: 'xfiles agent' }
    ]);

    render(<MemoryRouter>
      <CharacterList />
    </MemoryRouter>);

    screen.getByText('Loading...');

    const characterList = await screen.findByTestId('characters');

    return waitFor(() => {
      expect(characterList).not.toBeEmptyDOMElement();
    });
  });
});
