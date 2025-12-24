'use client';

import React from 'react';
import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';

interface HeaderProps {
  userName?: string;
  userRole?: string;
}

export default function Header({ userName, userRole }: HeaderProps) {
  return (
    <header className="h-16 bg-white shadow-sm border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <div className="text-2xl font-bold text-primary">
          📊 ÉvalPro
        </div>
      </div>
      <div className="flex items-center gap-4">
        {userName && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-text-gray">
              {userName}
            </span>
            {userRole && (
              <span className="badge badge-info text-xs px-2 py-1">{userRole}</span>
            )}
          </div>
        )}
        <div className="flex items-center gap-3">
          <BellIcon className="w-6 h-6 text-text-gray cursor-default" />
          <UserCircleIcon className="w-6 h-6 text-text-gray cursor-default" />
        </div>
      </div>
    </header>
  );
}
