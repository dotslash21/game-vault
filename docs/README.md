# Game Vault Documentation

This directory contains documentation for the Game Vault project.

## Contents

- [Architecture Decision Records](./adr/): Contains ADRs documenting significant architectural decisions
- [Components](./components.md): Documentation for reusable components
- [Games](./games.md): Documentation for implementing new games

## Getting Started

For information on setting up and running the project, see the root [README.md](../README.md).

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
