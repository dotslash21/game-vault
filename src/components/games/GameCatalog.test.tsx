import { render, screen, fireEvent } from '@testing-library/react';
import GameCatalog from './GameCatalog';
import '@testing-library/jest-dom';

jest.mock('../../data/games', () => ({
  games: [
    {
      id: 'tictactoe',
      title: 'Tic Tac Toe',
      thumbnail: '/images/games/tictactoe.svg',
      tags: ['puzzle', 'strategy'],
      route: '/games/tictactoe',
    },
  ],
  tags: ['puzzle', 'strategy'],
}));

describe('GameCatalog', () => {
  it('renders the game catalog', () => {
    render(<GameCatalog />);
    expect(screen.getByText('Tic Tac Toe')).toBeInTheDocument();
  });

  it('allows filtering by tags', () => {
    render(<GameCatalog />);
    
    // Open tag filter
    fireEvent.click(screen.getByText('Select tags'));
    
    // Select a tag
    fireEvent.click(screen.getByText('puzzle'));
    
    // Game should still be visible as it has the 'puzzle' tag
    expect(screen.getByText('Tic Tac Toe')).toBeInTheDocument();
  });
});
