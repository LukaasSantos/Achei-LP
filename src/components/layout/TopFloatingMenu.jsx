import React from 'react';
import {
  HomeIcon,
  UserGroupIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

export const TopFloatingMenu = ({ currentPage, onNavigate, isHeaderVisible = true }) => {
  const menuItems = [
    { id: 'home', label: 'Início', icon: HomeIcon, hash: '#/' },
    { id: 'parceiros', label: 'Parceiros', icon: UserGroupIcon, hash: '#/parceiros' },
    { id: 'academy', label: 'Academy', icon: AcademicCapIcon, hash: '#/academy' }
  ];

  const handleClick = (e, item) => {
    e.preventDefault();
    onNavigate(item.id);
    window.location.hash = item.hash;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed left-1/2 -translate-x-1/2 z-[995] flex items-center bg-[#131b2e]/90 backdrop-blur-xl border border-white/10 px-2 py-1.5 rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.55)] transition-all duration-300 ease-out md:top-6 ${
        isHeaderVisible ? 'top-[64px]' : 'top-3'
      }`}
    >
      <nav className="flex items-center space-x-1 sm:space-x-1.5" aria-label="Menu Flutuante Principal">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;

          return (
            <button
              key={item.id}
              onClick={(e) => handleClick(e, item)}
              className={`flex items-center space-x-1.5 sm:space-x-2 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-500 ease-out cursor-pointer ${
                isActive
                  ? 'bg-[#00AB4F] text-white shadow-[0_0_15px_rgba(0,171,79,0.4)] scale-105'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon className="w-4 h-4 shrink-0 stroke-[2.2]" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

