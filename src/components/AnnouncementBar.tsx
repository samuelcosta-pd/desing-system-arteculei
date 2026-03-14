import React from 'react';

interface AnnouncementBarProps {
  text: string;
  linkText?: string;
  linkUrl?: string;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({
  text,
  linkText,
  linkUrl = '#',
}) => {
  return (
    <div className="w-full bg-slate-900 text-white px-4 py-2.5 text-center text-sm font-medium">
      <span>{text}</span>
      {linkText && (
        <a href={linkUrl} className="ml-2 underline hover:text-primary transition-colors">
          {linkText}
        </a>
      )}
    </div>
  );
};
