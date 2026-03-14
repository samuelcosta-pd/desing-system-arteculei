import React from 'react';
import { Badge } from './Badge';
import { Button } from './Button';

interface CardProps {
  image: string;
  title: string;
  price?: string;
  originalPrice?: string;
  badge?: string;
  badgeVariant?: 'primary' | 'secondary' | 'dark' | 'outline';
  actionText?: string;
}

export const Card: React.FC<CardProps> = ({
  image,
  title,
  price,
  originalPrice,
  badge,
  badgeVariant = 'dark',
  actionText = 'Add to Cart',
}) => {
  return (
    <div className="group flex flex-col w-full max-w-sm bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
      {/* Image Container with Ken Burns effect */}
      <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover ken-burns"
          referrerPolicy="no-referrer"
        />
        {badge && (
          <div className="absolute bottom-3 left-3 z-10">
            <Badge variant={badgeVariant}>{badge}</Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-medium text-slate-900 mb-2">
          <a href="#" className="link-underline-hover">
            {title}
          </a>
        </h3>
        
        <div className="mt-auto flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            {originalPrice && (
              <span className="text-sm text-slate-400 line-through">
                {originalPrice}
              </span>
            )}
            {price && (
              <span className="text-base font-semibold text-slate-900">
                {price}
              </span>
            )}
          </div>
        </div>

        <Button variant="outline" className="w-full group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all duration-300">
          {actionText}
        </Button>
      </div>
    </div>
  );
};
