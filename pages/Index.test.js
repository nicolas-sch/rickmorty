import React from 'react';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import Home from './index';

jest.mock('axios');

describe('Home component', () => {
  const character = {
    id: 1,
    name: 'Rick Sanchez',
    species: 'Human',
    status: 'Alive',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  };

  beforeEach(() => {
    localStorage.clear();
  });

  it('should render a list of characters', async () => {
    axios.get.mockResolvedValueOnce({
      data: { results: [character] },
    });

    render(<Home />);

    expect(await screen.findByText('Rick Sanchez')).toBeInTheDocument();
  });

  it('should show previous and next buttons for pagination', async () => {
    axios.get.mockResolvedValueOnce({
      data: { results: [character] },
    });

    render(<Home />);

    expect(screen.getByRole('button', { name: 'Previous' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument();
  });

  it('should navigate to the next page when clicking the next button', async () => {
    axios.get.mockResolvedValueOnce({
      data: { results: [character], info: { next: 'https://rickandmortyapi.com/api/character?page=2' } },
    });
    axios.get.mockResolvedValueOnce({
      data: { results: [character] },
    });

    render(<Home />);

    const nextButton = screen.getByRole('button', { name: 'Next' });
    nextButton.click();

    expect(await screen.findByText('Rick Sanchez')).toBeInTheDocument();
    expect(axios.get).toHaveBeenCalledWith('https://rickandmortyapi.com/api/character?page=2');
  });

});

  