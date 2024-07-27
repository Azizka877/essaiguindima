import React from 'react';

type TabsProps = {
  selectedTab: string;
  onSelectTab: (tab: string) => void;
};

const Tabs: React.FC<TabsProps> = ({ selectedTab, onSelectTab }) => {
  const tabs = ['Tous', 'Bus', 'Tram', 'Ferry'];

  return (
    <div className="flex mb-4 space-x-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onSelectTab(tab.toLowerCase())}
          className={`px-4 py-2 flex-1 ${
            selectedTab === tab.toLowerCase()
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700'
          } rounded-md`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;



//avec filtre categorie
// import React from 'react';

// type TabsProps = {
//   selectedTab: string;
//   onSelectTab: (tab: string) => void;
// };

// const Tabs: React.FC<TabsProps> = ({ selectedTab, onSelectTab }) => {
//   const tabs = ['Tous', 'Dakar Dem Dikk', 'Tata', 'Tram', 'Ferris'];

//   return (
//     <div className="flex mb-4 space-x-2">
//       {tabs.map((tab) => (
//         <button
//           key={tab}
//           onClick={() => onSelectTab(tab.toLowerCase())}
//           className={`px-4 py-2 flex-1 ${
//             selectedTab === tab.toLowerCase()
//               ? 'bg-blue-600 text-white'
//               : 'bg-gray-200 text-gray-700'
//           } rounded-md`}
//         >
//           {tab}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default Tabs;


