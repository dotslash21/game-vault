import { render, screen } from '@testing-library/react';
import GameCard from './GameCard';
import '@testing-library/jest-dom';

const game = {
  id: 'tictactoe',
  title: 'Tic Tac Toe',
  thumbnail: 'https://placehold.co/600x400/e2e8f0/475569?text=Tic+Tac+Toe',
  tags: ['puzzle', 'strategy', 'classic', 'multiplayer'],
  route: '/games/tictactoe',
};

describe('GameCard', () => {
  it('renders game title', () => {
    render(<GameCard game={game} />);
    expect(screen.getByText('Tic Tac Toe')).toBeInTheDocument();
  });

  it('renders game tags', () => {
    render(<GameCard game={game} />);
    game.tags.forEach((tag) => {
      expect(screen.getByText(tag)).toBeInTheDocument();
    });
  });

  it('renders game thumbnail', () => {
    render(<GameCard game={game} />);
    const img = screen.getByAltText('Tic Tac Toe');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', expect.stringContaining(encodeURIComponent(game.thumbnail)));
  });
});
