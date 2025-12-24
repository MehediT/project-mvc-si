import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'success' | 'danger' | 'warning' | 'info' | 'gray';
}

export default function Badge({ children, variant = 'info' }: BadgeProps) {
  return <span className={`badge badge-${variant}`}>{children}</span>;
}
