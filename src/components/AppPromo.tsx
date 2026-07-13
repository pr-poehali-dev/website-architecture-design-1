import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const FEATURES = [
  { icon: 'CalendarClock', title: 'Запись на сервис', desc: 'выбирайте время в пару касаний' },
  { icon: 'Bell', title: 'Напоминания о ТО', desc: 'приложение подскажет срок' },
  { icon: 'Map', title: 'GPS-маршруты', desc: 'записывайте свои поездки' },
  { icon: 'Headphones', title: 'Поддержка 24/7', desc: 'связь с мастером в чате' },
];

const AppPromo = () => (
  <section id="app" className="py-20 md:py-28 px-4 md:px-8 scroll-mt-16">
    <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-14 items-center">
      <div>
        <div className="flex items-center gap-2 mb-5">
          <span className="h-px w-8 bg-lime" />
          <span className="font-display uppercase tracking-[0.25em] text-xs text-lime">Приложение</span>
        </div>
        <h2 className="font-display font-700 uppercase text-4xl md:text-5xl leading-tight mb-6">
          Весь драйв<br />в твоём телефоне
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md">
          Установите приложение сразу после покупки — сервис, маршруты и напоминания о ТО всегда под рукой.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {FEATURES.map((f) => (
            <div key={f.title} className="flex gap-3">
              <span className="grid place-items-center h-10 w-10 shrink-0 rounded-lg bg-secondary text-lime">
                <Icon name={f.icon} size={20} />
              </span>
              <div>
                <p className="font-600 text-sm">{f.title}</p>
                <p className="text-xs text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 font-600">
            <Icon name="Apple" size={18} className="mr-2" /> App Store
          </Button>
          <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 font-600">
            <Icon name="Play" size={18} className="mr-2" /> Google Play
          </Button>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative w-64 h-[520px] rounded-[2.5rem] border-4 border-border bg-card p-3 glow-lime">
          <div className="h-full w-full rounded-[2rem] bg-background overflow-hidden flex flex-col">
            <div className="bg-lime text-lime-foreground p-5">
              <p className="font-display uppercase text-xs tracking-widest opacity-80">ВДОХ Моторс</p>
              <p className="font-display font-700 text-2xl mt-1">Мой гараж</p>
            </div>
            <div className="p-4 space-y-3 flex-1">
              <div className="rounded-xl border border-border p-3">
                <p className="text-xs text-muted-foreground">Ближайшее ТО</p>
                <p className="font-600 text-sm">через 210 км</p>
              </div>
              <div className="rounded-xl bg-secondary p-3">
                <p className="text-xs text-muted-foreground">Raptor 700 X</p>
                <p className="font-600 text-sm text-lime">Готов к выезду</p>
              </div>
              <div className="rounded-xl border border-lime/40 p-3 flex items-center justify-between">
                <p className="font-600 text-sm">Записаться</p>
                <Icon name="ChevronRight" size={16} className="text-lime" />
              </div>
              <div className="rounded-xl border border-border p-3 flex items-center gap-2">
                <Icon name="MessageCircle" size={16} className="text-lime" />
                <p className="text-sm">Чат с мастером</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AppPromo;
