'use client';

import { Listbox } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { tags } from '../../data/games';

interface TagFilterProps {
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
}

export default function TagFilter({ selectedTags, setSelectedTags }: TagFilterProps) {
  const handleTagChange = (tags: string[]) => {
    setSelectedTags(tags);
  };

  return (
    <div className="w-72">
      <Listbox value={selectedTags} onChange={handleTagChange} multiple>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-pointer bg-white py-2 pl-3 pr-10 text-left shadow-md rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
            <span className="block truncate">
              {selectedTags.length === 0
                ? 'Select tags'
                : `${selectedTags.length} tag${selectedTags.length === 1 ? '' : 's'} selected`}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {tags.map((tag) => (
              <Listbox.Option
                key={tag}
                value={tag}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'
                  }`
                }
              >
                {({ selected }) => (
                  <>
                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                      {tag}
                    </span>
                    {selected && (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
}
