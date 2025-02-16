import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import '@testing-library/jest-dom';

const mockPush = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

describe('Header', () => {
  beforeEach(() => {
    mockPush.mockClear();
  });

  it('renders the app title', () => {
    render(<Header />);
    expect(screen.getByText('Game Vault')).toBeInTheDocument();
  });

  it('renders with correct styling', () => {
    render(<Header />);
    expect(screen.getByRole('banner')).toHaveClass('bg-slate-800');
  });

  it('contains a clickable link to home', () => {
    render(<Header />);
    const link = screen.getByRole('link', { name: 'Game Vault' });
    fireEvent.click(link);
    expect(mockPush).toHaveBeenCalledWith('/');
  });

  it('displays in a responsive container', () => {
    render(<Header />);
    const container = screen.getByRole('banner').firstChild;
    expect(container).toHaveClass('max-w-7xl');
  });

  it('maintains consistent padding', () => {
    render(<Header />);
    const container = screen.getByRole('banner').firstChild;
    expect(container).toHaveClass('px-4');
  });
});
