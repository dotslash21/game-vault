# Game Vault

Game Vault is a web application that hosts a collection of mini-games. The initial version includes a homepage catalog of games and an implementation of the Tic-Tac-Toe game.

## Features

- **Homepage Catalog:**
  - Displays a list of mini-games with titles, thumbnails, and tags.
  - Allows filtering games by tags.
  - Includes a search bar for future extensibility.

- **Tic-Tac-Toe Game:**
  - Two-player mode.
  - Clear game mechanics: grid interaction, win/draw detection, and restart functionality.
  - Responsive design for both desktop and mobile devices.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/game-vault.git
   cd game-vault
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Run the development server:
   ```sh
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

```
game-vault/
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # Reusable React components
│   │   ├── games/       # Game-specific components
│   │   └── layout/      # Layout components
│   └── data/            # Data and type definitions
├── docs/                # Project documentation
│   └── adr/            # Architecture Decision Records
└── public/             # Static assets
    └── images/         # Image assets
```

## Documentation

- [Components Documentation](./docs/components.md)
- [Adding New Games](./docs/games.md)
- [Architecture Decision Records](./docs/adr/)

## Contributing

Contributions are welcome! Please read the [contributing guidelines](./CONTRIBUTING.md) for more information.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
