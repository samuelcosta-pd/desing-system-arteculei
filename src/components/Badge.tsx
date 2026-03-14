import React from 'react';

type BadgeVariant = 'primary' | 'secondary' | 'dark' | 'outline';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'primary',
  className = '',
  children,
  ...props
}) => {
  const variants = {
    primary: 'bg-primary text-slate-900',
    secondary: 'bg-secondary text-white',
    dark: 'bg-slate-900 text-white',
    outline: 'border border-slate-200 bg-white text-slate-900',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};
