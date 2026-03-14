import React from 'react';

type IconSize = 16 | 20 | 24 | 32 | 40;

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: string;
  size?: IconSize;
}

export const Icon: React.FC<IconProps> = ({ name, size = 24, className = '', ...props }) => {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{ fontSize: `${size}px`, width: `${size}px`, height: `${size}px` }}
      {...props}
    >
      {name}
    </span>
  );
};
