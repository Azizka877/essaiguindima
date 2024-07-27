import React from 'react';
import { AiOutlineHome, AiOutlineSearch } from 'react-icons/ai';
import { BsCardChecklist } from 'react-icons/bs';

const BottomNav: React.FC = () => {
  const navItems = [
    { name: 'Itinéraires', icon: <AiOutlineHome />, link: '#' },
    { name: 'Stations', icon: <AiOutlineSearch />, link: '#' },
    { name: 'Lignes', icon: <BsCardChecklist />, link: '#' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg flex justify-around p-2">
      {navItems.map((item) => (
        <a key={item.name} href={item.link} className="flex flex-col items-center">
          {item.icon}
          <span className="text-sm">{item.name}</span>
        </a>
      ))}
    </div>
  );
};

export default BottomNav;
