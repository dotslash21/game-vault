import { render, screen } from '@testing-library/react';
import Layout from './Layout';
import '@testing-library/jest-dom';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('Layout', () => {
  it('renders children content', () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders header', () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('renders home link', () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );
    expect(screen.getByText('Game Vault')).toBeInTheDocument();
  });

  it('renders main content area', () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('applies container max-width', () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );
    const main = screen.getByRole('main');
    expect(main).toHaveClass('max-w-7xl');
  });
});
