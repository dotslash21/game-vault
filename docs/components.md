# Components Documentation

This document provides an overview of the reusable components in the Game Vault project.

## Layout Components

### Layout
The main layout wrapper for all pages.

```tsx
import Layout from '@/components/layout/Layout';

export default function Page() {
  return (
    <Layout>
      <div>Page content</div>
    </Layout>
  );
}
```

### Header
The main navigation header with logo and search functionality.

```tsx
import Header from '@/components/layout/Header';

// Used automatically by Layout component
// Contains search bar and navigation links
```

## Game Components

### GameCard
Displays a game entry in the catalog with title, thumbnail, and tags.

```tsx
import GameCard from '@/components/games/GameCard';

// Usage:
<GameCard 
  game={{
    id: 'game-id',
    title: 'Game Title',
    thumbnail: '/path/to/image.jpg',
    tags: ['tag1', 'tag2'],
    route: '/games/game-route'
  }} 
/>
```

### GameCatalog
Displays a filterable grid of game cards.

```tsx
import GameCatalog from '@/components/games/GameCatalog';

// Usage:
<GameCatalog />
```

### TagFilter
Provides a multi-select dropdown for filtering games by tags.

```tsx
import TagFilter from '@/components/games/TagFilter';

// Usage:
<TagFilter 
  selectedTags={selectedTags}
  setSelectedTags={setSelectedTags}
/>
```

## Game-Specific Components

### TicTacToe
Implementation of the Tic-Tac-Toe game.

```tsx
import TicTacToe from '@/components/games/tictactoe/TicTacToe';

// Usage:
<TicTacToe />
```

Features:
- Two-player gameplay
- Win/draw detection
- Game state management
- Responsive grid layout
- Reset functionality

## Adding New Components

When adding new components:

1. Place them in the appropriate directory under `src/components/`
2. Use TypeScript for type safety
3. Include JSDoc comments for props and functions
4. Follow the existing pattern of using Tailwind CSS for styling
5. Make components as reusable as possible
6. Add documentation in this file
