import React from 'react';

interface AvatarProps {
  src?: string;
  alt?: string;
  initials?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ 
  src, 
  alt = 'Avatar', 
  initials, 
  size = 'md',
  className = ''
}) => {
  const sizes = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg',
  };

  return (
    <div className={`relative inline-flex items-center justify-center overflow-hidden bg-slate-200 rounded-full shrink-0 ${sizes[size]} ${className}`}>
      {src ? (
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover" 
          referrerPolicy="no-referrer" 
        />
      ) : (
        <span className="font-medium text-slate-600 uppercase">
          {initials || alt.charAt(0)}
        </span>
      )}
    </div>
  );
};
