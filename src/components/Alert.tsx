import React from 'react';
import { Icon } from './Icon';

interface AlertProps {
  variant?: 'info' | 'success' | 'warning' | 'error';
  title: string;
  children?: React.ReactNode;
  className?: string;
}

export const Alert: React.FC<AlertProps> = ({ 
  variant = 'info', 
  title, 
  children,
  className = ''
}) => {
  const variants = {
    info: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-800', icon: 'info', iconColor: 'text-blue-500' },
    success: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-800', icon: 'check_circle', iconColor: 'text-green-500' },
    warning: { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-800', icon: 'warning', iconColor: 'text-yellow-500' },
    error: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-800', icon: 'error', iconColor: 'text-red-500' },
  };
  
  const active = variants[variant];

  return (
    <div className={`p-4 rounded-lg border ${active.bg} ${active.border} flex gap-3 ${className}`}>
      <Icon name={active.icon} className={`shrink-0 ${active.iconColor}`} />
      <div>
        <h4 className={`font-medium ${active.text}`}>{title}</h4>
        {children && <div className={`text-sm mt-1 opacity-90 ${active.text}`}>{children}</div>}
      </div>
    </div>
  );
};
