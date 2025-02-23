import Layout from '@/components/layout/Layout';
import SnakeGame from '@/components/games/snake/SnakeGame';
import Link from 'next/link';

export const metadata = {
  title: 'Snake - Game Vault',
  description: 'Play the classic Snake game on Game Vault.',
};

export default function SnakeGamePage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Snake</h1>
          <p className="text-lg text-gray-600">
            Navigate the snake, eat food, and grow longer without colliding with yourself!
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <SnakeGame />
        </div>
      </div>
    </Layout>
  );
}
