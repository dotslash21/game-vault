'use client';

import { useState, useCallback } from 'react';

type Player = 'X' | 'O';
type Cell = Player | null;
type Board = Cell[];

const WINNING_COMBINATIONS = [
  [0, 1, 2], // top row
  [3, 4, 5], // middle row
  [6, 7, 8], // bottom row
  [0, 3, 6], // left column
  [1, 4, 7], // middle column
  [2, 5, 8], // right column
  [0, 4, 8], // diagonal
  [2, 4, 6], // diagonal
];

export default function TicTacToe() {
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
  const [winner, setWinner] = useState<Player | 'Draw' | null>(null);

  const checkWinner = useCallback((boardState: Board): Player | 'Draw' | null => {
    // Check for winner
    for (const [a, b, c] of WINNING_COMBINATIONS) {
      if (
        boardState[a] &&
        boardState[a] === boardState[b] &&
        boardState[a] === boardState[c]
      ) {
        return boardState[a] as Player;
      }
    }

    // Check for draw
    if (boardState.every((cell) => cell !== null)) {
      return 'Draw';
    }

    return null;
  }, []);

  const handleCellClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const gameResult = checkWinner(newBoard);
    if (gameResult) {
      setWinner(gameResult);
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
  };

  const renderCell = (index: number) => {
    return (
      <button
        key={index}
        onClick={() => handleCellClick(index)}
        className={`w-full h-24 text-4xl font-bold bg-white border border-gray-200 
          ${!board[index] && !winner ? 'hover:bg-gray-50' : ''} 
          ${winner ? 'cursor-not-allowed' : 'cursor-pointer'}
          focus:outline-none focus:ring-2 focus:ring-blue-500`}
        disabled={!!winner}
      >
        <span className={board[index] === 'X' ? 'text-blue-600' : 'text-red-600'}>
          {board[index]}
        </span>
      </button>
    );
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-4 text-center">
        {!winner && (
          <p className="text-xl">
            Current Player: 
            <span className={currentPlayer === 'X' ? 'text-blue-600' : 'text-red-600'}>
              {` ${currentPlayer}`}
            </span>
          </p>
        )}
        {winner && (
          <p className="text-2xl font-bold">
            {winner === 'Draw' ? "It's a Draw!" : `Player ${winner} Wins!`}
          </p>
        )}
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4">
        {Array(9).fill(null).map((_, index) => renderCell(index))}
      </div>

      <button
        onClick={resetGame}
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Reset Game
      </button>
    </div>
  );
}
