import Icon from '@/components/ui/icon';

const ITEMS = ['Рассрочка 0%', 'Trade-in', 'Гарантия 3 года', 'Телесервис', 'Мобильное приложение', 'Техника для бизнеса'];

const Marquee = () => (
  <div className="border-y border-border bg-lime text-lime-foreground overflow-hidden py-3">
    <div className="flex whitespace-nowrap animate-marquee font-display uppercase tracking-wider text-sm font-600">
      {[...Array(2)].map((_, k) => (
        <div key={k} className="flex shrink-0">
          {ITEMS.map((t) => (
            <span key={t} className="mx-6 flex items-center gap-2">
              <Icon name="Sparkles" size={14} /> {t}
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default Marquee;
