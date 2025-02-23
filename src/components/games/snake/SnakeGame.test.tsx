import { render, screen, fireEvent, act } from '@testing-library/react';
import SnakeGame from './SnakeGame';
import '@testing-library/jest-dom';

describe('SnakeGame', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('renders initial game state', () => {
    render(<SnakeGame />);
    expect(screen.getByText('Score: 0')).toBeInTheDocument();
    expect(screen.getByText('Pause')).toBeInTheDocument();
    expect(screen.getByText('Use arrow keys or WASD to move')).toBeInTheDocument();
    expect(screen.getByText('Press Space to pause/resume')).toBeInTheDocument();
  });

  it('can pause and resume the game', () => {
    render(<SnakeGame />);
    const pauseButton = screen.getByText('Pause');
    
    fireEvent.click(pauseButton);
    expect(screen.getByText('Resume')).toBeInTheDocument();
    
    fireEvent.click(screen.getByText('Resume'));
    expect(screen.getByText('Pause')).toBeInTheDocument();
  });

  it('can pause and resume with spacebar', () => {
    render(<SnakeGame />);
    
    fireEvent.keyDown(document, { key: ' ' });
    expect(screen.getByText('Resume')).toBeInTheDocument();
    
    fireEvent.keyDown(document, { key: ' ' });
    expect(screen.getByText('Pause')).toBeInTheDocument();
  });

  it('shows game over state when snake collides with itself', () => {
    render(<SnakeGame />);
    
    // Make the snake move right (default direction)
    act(() => {
      jest.advanceTimersByTime(150); // One game tick
    });
    
    // Turn down
    fireEvent.keyDown(document, { key: 'ArrowDown' });
    act(() => {
      jest.advanceTimersByTime(150);
    });
    
    // Turn left
    fireEvent.keyDown(document, { key: 'ArrowLeft' });
    act(() => {
      jest.advanceTimersByTime(150);
    });
    
    // Turn up - this should cause collision
    fireEvent.keyDown(document, { key: 'ArrowUp' });
    act(() => {
      jest.advanceTimersByTime(150);
    });

    expect(screen.getByText('Game Over!')).toBeInTheDocument();
    expect(screen.getByText('Play Again')).toBeInTheDocument();
  });

  it('can restart game after game over', () => {
    render(<SnakeGame />);
    
    // Force game over state
    act(() => {
      const moves = ['ArrowDown', 'ArrowLeft', 'ArrowUp'];
      moves.forEach(key => {
        fireEvent.keyDown(document, { key });
        jest.advanceTimersByTime(150);
      });
    });

    // Click play again
    fireEvent.click(screen.getByText('Play Again'));
    
    // Should be back to initial state
    expect(screen.queryByText('Game Over!')).not.toBeInTheDocument();
    expect(screen.getByText('Score: 0')).toBeInTheDocument();
  });

  it('responds to keyboard controls', () => {
    render(<SnakeGame />);
    
    // Test arrow keys
    ['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft'].forEach(key => {
      fireEvent.keyDown(document, { key });
      act(() => {
        jest.advanceTimersByTime(150);
      });
    });

    // Test WASD keys
    ['w', 'a', 's', 'd'].forEach(key => {
      fireEvent.keyDown(document, { key });
      act(() => {
        jest.advanceTimersByTime(150);
      });
    });

    // Game should still be running (no errors)
    expect(screen.queryByText('Game Over!')).not.toBeInTheDocument();
  });
});
