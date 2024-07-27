"use client"

import { useState } from 'react';
import { transportLines } from './data/transportLines';
import TransportLineCard from '../components/TransportLineCard';
import SearchBar from '../components/SearchBar';
import Tabs from '../components/Tabs';
import BottomNav from '../components/BottomNav ';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTab, setSelectedTab] = useState<string>('tous');

  const filteredLines = transportLines.filter((line) => {
    const matchesType = selectedTab === 'tous' ? true : line.type.toLowerCase() === selectedTab;
    const matchesSearch = line.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });
  return (
    <div className="container mx-auto p-4 pb-20">
      <SearchBar searchQuery={searchQuery} onSearch={setSearchQuery} />
      <Tabs selectedTab={selectedTab} onSelectTab={setSelectedTab} />
      <div className="grid grid-cols-1 gap-4">
        {filteredLines.map((line) => (
          <TransportLineCard key={line.id} line={line} />
        ))}
      </div>
      <BottomNav />
    </div>
  );
}


// import { useState } from 'react';
// import { transportLines } from './data/transportLines';
// import TransportLineCard from '../components/TransportLineCard';
// import SearchBar from '../components/SearchBar';
// import Tabs from '../components/Tabs';
// import BottomNav from '../components/BottomNav ';

// export default function Home() {
//   const [searchQuery, setSearchQuery] = useState<string>('');
//   const [selectedTab, setSelectedTab] = useState<string>('tous');

//   const filteredLines = transportLines.filter((line) => {
//     const matchesType = selectedTab === 'tous' ? true : line.category.toLowerCase() === selectedTab;
//     const matchesSearch = line.name.toLowerCase().includes(searchQuery.toLowerCase());
//     return matchesType && matchesSearch;
//   });

//   return (
//     <div className="container mx-auto p-4 pb-20">
//       <SearchBar searchQuery={searchQuery} onSearch={setSearchQuery} />
//       <Tabs selectedTab={selectedTab} onSelectTab={setSelectedTab} />
//       <div className="grid grid-cols-1 gap-4">
//         {filteredLines.map((line) => (
//           <TransportLineCard key={line.id} line={line} />
//         ))}
//       </div>
//       <BottomNav />
//     </div>
//   );
// }
