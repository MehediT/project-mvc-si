'use client';

import React from 'react';

interface MenuItem {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
}

interface SidebarProps {
  items: MenuItem[];
}

export default function Sidebar({ items }: SidebarProps) {
  return (
    <aside className="w-60 bg-white min-h-[calc(100vh-4rem)] py-6 shadow-sm border-r border-gray-200">
      <nav>
        <ul className="space-y-1">
          {items.map((item, index) => (
            <li key={index}>
              <div
                className={`flex items-center gap-3 px-6 py-3 text-base cursor-default transition-colors ${
                  item.active
                    ? 'bg-blue-50 text-primary font-semibold border-r-2 border-primary'
                    : 'text-text-gray hover:bg-bg-gray'
                }`}
              >
                <span className="w-5 h-5">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
