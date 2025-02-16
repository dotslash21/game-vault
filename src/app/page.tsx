import Layout from '@/components/layout/Layout';
import GameCatalog from '@/components/games/GameCatalog';

export default function Home() {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Game Vault</h1>
          <p className="mt-2 text-lg text-gray-600">
            Browse our collection of mini-games. Filter by tags or search to find your next favorite game!
          </p>
        </div>
        <GameCatalog />
      </div>
    </Layout>
  );
}
