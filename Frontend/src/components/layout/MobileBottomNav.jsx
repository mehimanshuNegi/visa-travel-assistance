import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Compass, Briefcase, Phone } from 'lucide-react';

export default function MobileBottomNav() {
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    if (path === '/visa') return location.pathname.startsWith('/visa');
    return location.pathname.startsWith(path);
  };

  const navItems = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'Visa Services', path: '/visa', icon: Compass },
    { label: 'Services', path: '/services', icon: Briefcase },
    { label: 'Contact', path: '/contact', icon: Phone }
  ];

  return (
    <div className="fixed bottom-3 left-4 right-4 z-50 md:hidden">
      <div className="flex items-center justify-around rounded-2xl border border-slate-200/90 bg-white/95 px-2 py-2 shadow-2xl backdrop-blur-lg">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center gap-1 rounded-xl px-3 py-1.5 transition ${
                active
                  ? 'bg-brand-dark text-white shadow-sm'
                  : 'text-slate-500 hover:text-brand-dark'
              }`}
            >
              <Icon className={`h-4.5 w-4.5 ${active ? 'text-sky-300' : 'text-slate-500'}`} />
              <span className="text-[10px] font-bold tracking-tight">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
