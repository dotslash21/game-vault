import { render, screen, fireEvent } from '@testing-library/react';
import TicTacToe from './TicTacToe';
import '@testing-library/jest-dom';

describe('TicTacToe', () => {
  it('renders an empty board', () => {
    render(<TicTacToe />);
    const cells = screen.getAllByRole('button');
    expect(cells).toHaveLength(9);
    cells.forEach(cell => {
      expect(cell).toHaveTextContent('');
    });
  });

  it('allows X to move first', () => {
    render(<TicTacToe />);
    const cells = screen.getAllByRole('button');
    fireEvent.click(cells[0]);
    expect(cells[0]).toHaveTextContent('X');
  });

  it('alternates between X and O', () => {
    render(<TicTacToe />);
    const cells = screen.getAllByRole('button');
    
    fireEvent.click(cells[0]);
    expect(cells[0]).toHaveTextContent('X');
    
    fireEvent.click(cells[1]);
    expect(cells[1]).toHaveTextContent('O');
  });

  it('detects a win for X', () => {
    render(<TicTacToe />);
    const cells = screen.getAllByRole('button');
    
    // X wins diagonally
    fireEvent.click(cells[0]); // X
    fireEvent.click(cells[1]); // O
    fireEvent.click(cells[4]); // X
    fireEvent.click(cells[2]); // O
    fireEvent.click(cells[8]); // X
    
    expect(screen.getByText('Winner: X')).toBeInTheDocument();
  });

  it('detects a draw', () => {
    render(<TicTacToe />);
    const cells = screen.getAllByRole('button');
    
    // Fill board without a winner
    fireEvent.click(cells[0]); // X
    fireEvent.click(cells[1]); // O
    fireEvent.click(cells[2]); // X
    fireEvent.click(cells[4]); // O
    fireEvent.click(cells[3]); // X
    fireEvent.click(cells[5]); // O
    fireEvent.click(cells[7]); // X
    fireEvent.click(cells[6]); // O
    fireEvent.click(cells[8]); // X
    
    expect(screen.getByText('Draw!')).toBeInTheDocument();
  });

  it('allows restarting the game', () => {
    render(<TicTacToe />);
    const cells = screen.getAllByRole('button');
    
    // Make some moves
    fireEvent.click(cells[0]);
    fireEvent.click(cells[1]);
    
    // Restart game
    fireEvent.click(screen.getByText('Restart Game'));
    
    // Board should be empty
    cells.forEach(cell => {
      expect(cell).toHaveTextContent('');
    });
  });
});
