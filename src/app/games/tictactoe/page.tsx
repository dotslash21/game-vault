import Layout from '@/components/layout/Layout';
import TicTacToe from '@/components/games/tictactoe/TicTacToe';
import Link from 'next/link';

export const metadata = {
  title: 'Tic Tac Toe - Game Vault',
  description: 'Play the classic game of Tic Tac Toe with a friend.',
};

export default function TicTacToePage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Tic Tac Toe</h1>
          <p className="text-lg text-gray-600">
            Play against a friend! Take turns marking X and O. Get three in a row to win!
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <TicTacToe />
        </div>
      </div>
    </Layout>
  );
}
