# Adding New Games

This document provides guidelines for adding new games to the Game Vault project.

## Steps to Add a New Game

1. **Create Game Data**
   - Add a new entry to the `games` array in `src/data/games.ts`.
   - Include the game ID, title, thumbnail URL, tags, and route.

```ts
export const games: Game[] = [
  {
    id: 'newgame',
    title: 'New Game',
    thumbnail: 'https://placehold.co/600x400/e2e8f0/475569?text=New+Game',
    tags: ['tag1', 'tag2'],
    route: '/games/newgame',
  },
  // Other games...
];
```

2. **Create Game Component**
   - Create a new directory for the game under `src/components/games/`.
   - Implement the game logic and UI in a new component file.

```tsx
// src/components/games/newgame/NewGame.tsx
'use client';

import { useState } from 'react';

export default function NewGame() {
  // Game logic and UI here
  return (
    <div>
      <h1>New Game</h1>
      {/* Game implementation */}
    </div>
  );
}
```

3. **Create Game Page**
   - Create a new page for the game under `src/app/games/`.
   - Use the `Layout` component to wrap the game component.

```tsx
// src/app/games/newgame/page.tsx
import Layout from '@/components/layout/Layout';
import NewGame from '@/components/games/newgame/NewGame';
import Link from 'next/link';

export const metadata = {
  title: 'New Game - Game Vault',
  description: 'Play the new game on Game Vault.',
};

export default function NewGamePage() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Link 
            href="/"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            ← Back to Games
          </Link>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">New Game</h1>
          <p className="text-lg text-gray-600">
            Enjoy playing the new game!
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <NewGame />
        </div>
      </div>
    </Layout>
  );
}
```

4. **Test the Game**
   - Ensure the game works correctly and is responsive.
   - Add unit tests for the game logic if applicable.

5. **Update Documentation**
   - Add the new game to the list of games in the documentation.
   - Update any relevant sections to include information about the new game.

## Guidelines

- Follow the existing code style and patterns.
- Use Tailwind CSS for styling.
- Ensure the game is accessible and responsive.
- Write clean, well-documented code.
