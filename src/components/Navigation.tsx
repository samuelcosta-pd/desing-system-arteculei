import React, { useState } from 'react';
import { Icon } from './Icon';
import { Button } from './Button';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md border-b border-slate-100 w-full z-50">
      <div className="flex items-center gap-8">
        <div className="text-xl font-bold tracking-tight text-slate-900 font-display">
          Brand<span className="text-primary">.</span>
        </div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          <li><a href="#" className="text-sm font-medium text-slate-900 hover:text-primary transition-colors">Home</a></li>
          <li><a href="#" className="text-sm font-medium text-slate-500 hover:text-primary transition-colors">About</a></li>
          <li><a href="#" className="text-sm font-medium text-slate-500 hover:text-primary transition-colors">Portfolio</a></li>
          <li><a href="#" className="text-sm font-medium text-slate-500 hover:text-primary transition-colors">Contact</a></li>
        </ul>
      </div>
      
      {/* Desktop Actions */}
      <div className="hidden md:flex items-center gap-4">
        <button className="text-sm font-medium text-slate-900 hover:text-primary transition-colors">Log in</button>
        <Button size="sm">Sign up</Button>
      </div>

      {/* Mobile Hamburger Toggle */}
      <button 
        className="md:hidden text-slate-900 p-2 -mr-2 focus:outline-none hover:text-primary transition-colors" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <Icon name={isOpen ? "close" : "menu"} />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-100 p-6 flex flex-col gap-6 md:hidden shadow-xl animate-[fadeInUp_0.2s_ease-out_forwards]">
          <ul className="flex flex-col gap-4">
            <li>
              <a href="#" className="flex items-center justify-between text-lg font-medium text-slate-900 hover:text-primary transition-colors">
                Home <Icon name="chevron_right" size={20} className="text-slate-400" />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-between text-lg font-medium text-slate-600 hover:text-primary transition-colors">
                About <Icon name="chevron_right" size={20} className="text-slate-400" />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-between text-lg font-medium text-slate-600 hover:text-primary transition-colors">
                Portfolio <Icon name="chevron_right" size={20} className="text-slate-400" />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-between text-lg font-medium text-slate-600 hover:text-primary transition-colors">
                Contact <Icon name="chevron_right" size={20} className="text-slate-400" />
              </a>
            </li>
          </ul>
          <div className="flex flex-col gap-3 pt-6 border-t border-slate-100">
            <Button variant="outline" className="w-full justify-center">Log in</Button>
            <Button variant="primary" className="w-full justify-center">Sign up</Button>
          </div>
        </div>
      )}
    </nav>
  );
};
