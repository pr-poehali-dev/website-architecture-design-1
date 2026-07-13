import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const NAV = [
  { label: 'Каталог', href: '#catalog', icon: 'Grid3x3' },
  { label: 'Обслуживание', href: '#service', icon: 'Wrench' },
  { label: 'Техника для бизнеса', href: '#b2b', icon: 'Briefcase' },
  { label: 'Телесервис', href: '#teleservice', icon: 'Radio' },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
      <div className="mx-auto max-w-7xl h-16 px-4 md:px-8 flex items-center gap-4">
        {/* Логотип */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <span className="grid place-items-center h-9 w-9 rounded-md bg-lime text-lime-foreground">
            <Icon name="Zap" size={20} />
          </span>
          <span className="font-display font-700 text-lg tracking-wide uppercase hidden sm:inline">
            ВДОХ<span className="text-lime"> Моторс</span>
          </span>
        </a>

        {/* Кнопка приложения — чуть левее */}
        <Button
          variant="outline"
          className="hidden xl:flex border-lime/40 text-lime hover:bg-lime hover:text-lime-foreground shrink-0"
          onClick={() => scrollTo('#app')}
        >
          <Icon name="Download" size={16} className="mr-2" /> Скачать приложение
        </Button>

        {/* 4 кнопки навигации */}
        <nav className="hidden lg:flex items-center gap-1 mx-auto">
          {NAV.map((n) => (
            <button
              key={n.href}
              onClick={() => scrollTo(n.href)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              <Icon name={n.icon} size={16} /> {n.label}
            </button>
          ))}
        </nav>

        {/* Звонок / чат — справа */}
        <div className="flex items-center gap-2 ml-auto lg:ml-0 shrink-0">
          <Button variant="ghost" size="icon" className="hidden md:inline-flex" title="Чат">
            <Icon name="MessageCircle" size={20} />
          </Button>
          <Button className="bg-lime text-lime-foreground hover:bg-lime/90 font-600">
            <Icon name="Phone" size={16} className="md:mr-2" />
            <span className="hidden md:inline">Позвонить</span>
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(!open)}>
            <Icon name={open ? 'X' : 'Menu'} size={22} />
          </Button>
        </div>
      </div>

      {/* Мобильное меню */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in px-4 py-4 space-y-1">
          {NAV.map((n) => (
            <button
              key={n.href}
              onClick={() => scrollTo(n.href)}
              className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm hover:bg-secondary transition-colors"
            >
              <Icon name={n.icon} size={18} className="text-lime" /> {n.label}
            </button>
          ))}
          <Button
            variant="outline"
            className="w-full border-lime/40 text-lime mt-2"
            onClick={() => scrollTo('#app')}
          >
            <Icon name="Download" size={16} className="mr-2" /> Скачать приложение
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
