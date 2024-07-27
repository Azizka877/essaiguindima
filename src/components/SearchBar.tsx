import React from 'react';

type SearchBarProps = {
  searchQuery: string;
  onSearch: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, onSearch }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Recherchez une ligne"
        value={searchQuery}
        onChange={(e) => onSearch(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
  );
};

export default SearchBar;
