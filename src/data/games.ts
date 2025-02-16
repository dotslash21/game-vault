export interface Game {
  id: string;
  title: string;
  thumbnail: string;
  tags: string[];
  route: string;
}

export const tags = [
  'puzzle',
  'strategy',
  'classic',
  'multiplayer',
] as const;

export type Tag = typeof tags[number];

export const games: Game[] = [
  {
    id: 'tictactoe',
    title: 'Tic Tac Toe',
    thumbnail: 'https://placehold.co/600x400/e2e8f0/475569?text=Tic+Tac+Toe',
    tags: ['puzzle', 'strategy', 'classic', 'multiplayer'],
    route: '/games/tictactoe',
  },
  // More games can be added here in the future
];
