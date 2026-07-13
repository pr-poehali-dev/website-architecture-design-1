import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { QUAD_IMG, CATEGORIES } from '@/data/products';

const REVIEWS = [
  { name: 'Андрей К.', role: 'Владелец Raptor 700', text: 'Квадрик — зверь! Прошёл всё бездорожье, сервис на высоте.', },
  { name: 'Марина В.', role: 'Клуб внедорожников', text: 'Взяли 3 багги для проката. Простоев нет, ТО делаем онлайн.', },
  { name: 'Сергей П.', role: 'Отец двоих', text: 'Детский квадроцикл — сын в восторге, а я спокоен за безопасность.', },
];

const STATS = [
  { value: '8 900+', label: 'счастливых райдеров' },
  { value: '4.9', label: 'рейтинг из 5' },
  { value: '15 лет', label: 'на бездорожье' },
];

const Hero = () => {
  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="pt-24 md:pt-28 pb-16 px-4 md:px-8 grid-bg relative">
      <div className="absolute top-24 right-0 h-96 w-96 bg-lime/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-6 items-stretch">
        {/* ЛЕВАЯ — доверие */}
        <div className="lg:col-span-4 flex flex-col gap-4 animate-slide-right">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-display text-4xl font-700 text-lime">4.9</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={16} className="text-lime fill-lime" />
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground">Средний рейтинг по 1 800+ отзывам райдеров</p>
          </div>

          <div className="flex-1 flex flex-col gap-4">
            {REVIEWS.map((r, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-5 hover:border-lime/50 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full bg-secondary grid place-items-center font-display font-600 text-lime">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="font-600 text-sm leading-tight">{r.name}</p>
                    <p className="text-xs text-muted-foreground">{r.role}</p>
                  </div>
                </div>
                <p className="text-sm text-foreground/90">«{r.text}»</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-3">
            {STATS.map((s, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-3 text-center">
                <p className="font-display font-700 text-lg leading-none">{s.value}</p>
                <p className="text-[10px] text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ПРАВАЯ — каталог */}
        <div className="lg:col-span-8 animate-fade-up anim-delay-200">
          <div className="relative rounded-3xl overflow-hidden border border-border h-full min-h-[560px] flex flex-col justify-end">
            <img src={QUAD_IMG} alt="Квадроцикл ВДОХ Моторс" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
            <div className="relative p-7 md:p-10">
              <h1 className="font-display font-700 uppercase leading-[0.92] text-5xl md:text-7xl mb-4">
                Квадроциклы<br />и <span className="text-lime">багги</span>
              </h1>
              <p className="text-muted-foreground max-w-md mb-6">
                Более 80 моделей для бездорожья в наличии. Выбирайте свой драйв прямо сейчас.
              </p>

              <div className="flex items-center gap-2 rounded-full border border-border bg-card/80 backdrop-blur p-1.5 pl-5 max-w-xl mb-6">
                <Icon name="Search" size={18} className="text-muted-foreground" />
                <input
                  placeholder="Raptor, багги, детский квадроцикл…"
                  className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground"
                />
                <Button className="rounded-full bg-lime text-lime-foreground hover:bg-lime/90 font-600" onClick={() => scrollTo('#catalog')}>
                  Найти
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {CATEGORIES.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => scrollTo('#catalog')}
                    className="group text-left rounded-xl border border-border bg-card/80 backdrop-blur p-4 hover:bg-lime hover:text-lime-foreground transition-colors"
                  >
                    <Icon name={c.icon} size={22} className="mb-3 text-lime group-hover:text-lime-foreground" />
                    <p className="font-600 text-sm leading-tight">{c.name}</p>
                    <p className="text-xs opacity-70">{c.count} моделей</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
