import React from 'react';

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className = '', label, ...props }, ref) => {
    return (
      <label className="flex items-center gap-2 cursor-pointer">
        <div className="relative flex items-center justify-center">
          <input
            type="radio"
            className={`peer h-4 w-4 shrink-0 appearance-none rounded-full border border-slate-300 bg-white checked:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all ${className}`}
            ref={ref}
            {...props}
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"></div>
        </div>
        <span className="text-sm text-slate-700 select-none peer-disabled:opacity-50">
          {label}
        </span>
      </label>
    );
  }
);
Radio.displayName = 'Radio';
