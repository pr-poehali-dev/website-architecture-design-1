import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const SERVICES = [
  { name: 'Диагностика квадроцикла', price: 'от 2 000 ₽', time: '30 мин' },
  { name: 'Плановое ТО', price: 'от 6 500 ₽', time: '2 часа' },
  { name: 'Ремонт двигателя', price: 'от 18 000 ₽', time: '1–2 дня' },
  { name: 'Подготовка к сезону', price: 'от 4 900 ₽', time: '3 часа' },
];

const Service = () => (
  <section id="service" className="py-20 md:py-28 px-4 md:px-8 bg-card/40 border-y border-border">
    <div className="mx-auto max-w-7xl">
      <div className="flex items-center gap-2 mb-5">
        <span className="h-px w-8 bg-lime" />
        <span className="font-display uppercase tracking-[0.25em] text-xs text-lime">Обслуживание</span>
      </div>
      <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
        <h2 className="font-display font-700 uppercase text-4xl md:text-5xl leading-tight max-w-lg">
          Услуги, цены и запись — <span className="text-lime">на одном экране</span>
        </h2>
        <Button size="lg" className="bg-lime text-lime-foreground hover:bg-lime/90 font-600 animate-pulse-glow">
          <Icon name="CalendarClock" size={18} className="mr-2" /> Онлайн-запись
        </Button>
      </div>
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 rounded-2xl border border-border bg-background overflow-hidden">
          {SERVICES.map((s, i) => (
            <div
              key={s.name}
              className={`flex items-center justify-between gap-4 p-5 md:px-7 hover:bg-secondary/50 transition-colors ${
                i !== SERVICES.length - 1 ? 'border-b border-border' : ''
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="font-display text-muted-foreground text-sm w-6">0{i + 1}</span>
                <p className="font-600">{s.name}</p>
              </div>
              <div className="flex items-center gap-6">
                <span className="hidden sm:flex items-center gap-1 text-xs text-muted-foreground">
                  <Icon name="Clock" size={13} /> {s.time}
                </span>
                <span className="font-display font-600 text-lime whitespace-nowrap">{s.price}</span>
              </div>
            </div>
          ))}
        </div>
        {/* Телесервис */}
        <div id="teleservice" className="rounded-2xl border border-lime/40 bg-gradient-to-b from-lime/10 to-transparent p-6 flex flex-col scroll-mt-24">
          <Icon name="Radio" size={28} className="text-lime mb-4" />
          <p className="font-display font-600 text-xl mb-2">Телесервис</p>
          <p className="text-sm text-muted-foreground mb-6 flex-1">
            Мастер на связи в видеозвонке: поможет диагностировать и устранить неполадку прямо на маршруте, без визита в центр.
          </p>
          <Button variant="outline" className="border-lime/50 text-lime hover:bg-lime hover:text-lime-foreground">
            Связаться с мастером
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default Service;
