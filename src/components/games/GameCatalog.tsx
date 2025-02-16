'use client';

import { useState, useMemo } from 'react';
import { Game, games } from '@/data/games';
import GameCard from './GameCard';
import TagFilter from './TagFilter';

export default function GameCatalog() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      // Filter by tags (if any selected)
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.every((tag) => game.tags.includes(tag));

      // Filter by search query
      const matchesSearch =
        searchQuery === '' ||
        game.title.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesTags && matchesSearch;
    });
  }, [selectedTags, searchQuery]);

  return (
    <div>
      <div className="mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <TagFilter selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
        <input
          type="text"
          placeholder="Search games..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full sm:w-72 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {filteredGames.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No games found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}
    </div>
  );
}
