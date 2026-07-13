import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { PRODUCTS } from '@/data/products';

const FILTERS = ['Все', 'Спортивный квадроцикл', 'Утилитарный квадроцикл', 'Багги', 'Детский квадроцикл'];

const Catalog = () => {
  const [filter, setFilter] = useState('Все');
  const list = filter === 'Все' ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);

  return (
    <section id="catalog" className="py-20 md:py-28 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-2 mb-5">
          <span className="h-px w-8 bg-lime" />
          <span className="font-display uppercase tracking-[0.25em] text-xs text-lime">Каталог техники</span>
        </div>
        <h2 className="font-display font-700 uppercase text-4xl md:text-5xl leading-tight mb-8">
          Выбери свой <span className="text-lime">драйв</span>
        </h2>

        {/* Фильтры */}
        <div className="flex flex-wrap gap-2 mb-8">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                filter === f
                  ? 'bg-lime text-lime-foreground border-lime font-600'
                  : 'border-border text-muted-foreground hover:text-foreground'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Сетка */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map((p) => (
            <Link
              key={p.id}
              to={`/product/${p.id}`}
              className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-lime/50 hover:-translate-y-1 transition-all"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                {p.badge && (
                  <Badge className="absolute top-3 left-3 bg-lime text-lime-foreground border-0">{p.badge}</Badge>
                )}
              </div>
              <div className="p-5">
                <p className="text-xs text-muted-foreground mb-1">{p.category}</p>
                <h3 className="font-display font-600 text-xl mb-3">{p.name}</h3>
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><Icon name="Gauge" size={13} className="text-lime" /> {p.power}</span>
                  <span className="flex items-center gap-1"><Icon name="Cog" size={13} className="text-lime" /> {p.engine}</span>
                  <span className="flex items-center gap-1"><Icon name="Waypoints" size={13} className="text-lime" /> {p.drive}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-display font-700 text-lg text-lime">{p.price}</span>
                  <span className="flex items-center gap-1 text-sm text-muted-foreground group-hover:text-lime transition-colors">
                    Подробнее <Icon name="ArrowRight" size={15} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
