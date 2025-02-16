import { render, screen, fireEvent } from '@testing-library/react';
import TagFilter from './TagFilter';
import '@testing-library/jest-dom';

// Mock the tags import
jest.mock('../../data/games', () => ({
  tags: ['puzzle', 'strategy', 'classic', 'multiplayer']
}));

describe('TagFilter', () => {
  it('renders without crashing', () => {
    render(<TagFilter selectedTags={[]} setSelectedTags={() => {}} />);
    expect(screen.getByText('Select tags')).toBeInTheDocument();
  });

  it('displays selected tags count', () => {
    render(<TagFilter selectedTags={['puzzle']} setSelectedTags={() => {}} />);
    expect(screen.getByText('1 tag selected')).toBeInTheDocument();
  });

  it('allows selecting multiple tags', async () => {
    const setSelectedTags = jest.fn();
    render(<TagFilter selectedTags={[]} setSelectedTags={setSelectedTags} />);
    
    // Open the listbox
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    // Select tags from the dropdown
    const puzzleOption = screen.getByText('puzzle');
    const strategyOption = screen.getByText('strategy');
    
    fireEvent.click(puzzleOption);
    expect(setSelectedTags).toHaveBeenCalledWith(['puzzle']);
    
    fireEvent.click(strategyOption);
    expect(setSelectedTags).toHaveBeenCalledWith(['puzzle', 'strategy']);
  });

  it('displays options when clicked', () => {
    render(<TagFilter selectedTags={[]} setSelectedTags={() => {}} />);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    // Verify all options are displayed
    expect(screen.getByText('puzzle')).toBeInTheDocument();
    expect(screen.getByText('strategy')).toBeInTheDocument();
    expect(screen.getByText('classic')).toBeInTheDocument();
    expect(screen.getByText('multiplayer')).toBeInTheDocument();
  });
});
