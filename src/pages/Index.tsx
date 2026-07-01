import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/ab234b48-e49e-4d64-95b9-97cc2b9c7b76/files/39090a09-eb02-4a9d-93ac-e7a040906e2d.jpg';

const NAV = [
  { label: 'Каталог', href: '#catalog' },
  { label: 'Сервис', href: '#service' },
  { label: 'Приложение', href: '#app' },
  { label: 'B2B', href: '#b2b' },
  { label: 'Контакты', href: '#contacts' },
];

const CATEGORIES = [
  { name: 'Экскаваторы', count: 48, icon: 'Truck' },
  { name: 'Погрузчики', count: 36, icon: 'Forklift' },
  { name: 'Тракторы', count: 52, icon: 'Tractor' },
  { name: 'Спецтехника', count: 71, icon: 'Cog' },
];

const REVIEWS = [
  { name: 'Андрей К.', role: 'Владелец автопарка', text: 'Взял три экскаватора — сервис на высоте, простоев нет.', rating: 5 },
  { name: 'Марина В.', role: 'Директор стройфирмы', text: 'Оформили лизинг за день. Техника пришла точно в срок.', rating: 5 },
  { name: 'Сергей П.', role: 'Фермер', text: 'Трактор работает как часы, ТО делаю через приложение.', rating: 5 },
];

const STATS = [
  { value: '12 400+', label: 'обслужено клиентов' },
  { value: '4.9', label: 'рейтинг из 5' },
  { value: '18 лет', label: 'на рынке' },
];

const SALE_FEATURES = [
  { icon: 'BadgePercent', title: 'Лизинг 0%', desc: 'на первый взнос по избранным моделям' },
  { icon: 'ShieldCheck', title: 'Гарантия 3 года', desc: 'официальное сервисное покрытие' },
  { icon: 'Gauge', title: 'Тест-драйв', desc: 'запишитесь и проверьте технику в деле' },
  { icon: 'Banknote', title: 'Trade-in', desc: 'обмен старой техники с доплатой' },
];

const SERVICES = [
  { name: 'Диагностика', price: 'от 2 500 ₽', time: '40 мин' },
  { name: 'Плановое ТО', price: 'от 8 900 ₽', time: '3 часа' },
  { name: 'Ремонт двигателя', price: 'от 24 000 ₽', time: '1–2 дня' },
  { name: 'Выездной телесервис', price: 'от 5 000 ₽', time: 'в день заявки' },
];

const APP_FEATURES = [
  { icon: 'CalendarClock', title: 'Запись на сервис', desc: 'выбирайте время в пару касаний' },
  { icon: 'Bell', title: 'Напоминания о ТО', desc: 'приложение само подскажет срок' },
  { icon: 'FileText', title: 'История техники', desc: 'все работы и документы под рукой' },
  { icon: 'Headphones', title: 'Поддержка 24/7', desc: 'связь с мастером в чате' },
];

const B2B_STEPS = [
  { icon: 'Search', title: 'Подбор техники', desc: 'под задачи вашего бизнеса' },
  { icon: 'Handshake', title: 'Корпоративные продажи', desc: 'спецусловия и объёмные скидки' },
  { icon: 'Wrench', title: 'Сервис и обучение', desc: 'обслуживание парка и подготовка операторов' },
  { icon: 'LineChart', title: 'Сопровождение', desc: 'персональный менеджер на весь цикл' },
];

const CASES = [
  { company: 'СтройГрад', result: '−32% простоев', desc: 'Обновили парк из 14 машин с сервисным контрактом' },
  { company: 'АгроХолдинг «Нива»', result: '+21% выработки', desc: '9 тракторов с телеметрией и обучением операторов' },
  { company: 'ЛогистикПро', result: 'окупаемость 11 мес', desc: 'Погрузчики в лизинг под складские задачи' },
];

const Section = ({ id, children, className = '' }: { id?: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`relative py-20 md:py-28 px-6 md:px-10 ${className}`}>
    <div className="mx-auto max-w-7xl">{children}</div>
  </section>
);

const Kicker = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 mb-5">
    <span className="h-px w-8 bg-lime" />
    <span className="font-display uppercase tracking-[0.25em] text-xs text-lime">{children}</span>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
        <div className="mx-auto max-w-7xl h-16 px-6 md:px-10 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="grid place-items-center h-9 w-9 rounded-md bg-lime text-lime-foreground">
              <Icon name="Zap" size={20} />
            </span>
            <span className="font-display font-700 text-lg tracking-wide uppercase">
              ВДОХ<span className="text-lime"> Моторс</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <Button className="bg-lime text-lime-foreground hover:bg-lime/90 font-600">
            <Icon name="Phone" size={16} className="mr-2" /> Позвонить
          </Button>
        </div>
      </header>

      {/* ЭКРАН 1 — КОМПОЗИЦИЯ: доверие + каталог */}
      <Section className="pt-32 md:pt-40 grid-bg">
        <div className="absolute top-24 right-0 h-96 w-96 bg-lime/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
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
              <p className="text-sm text-muted-foreground">Средний рейтинг по 2 300+ отзывам</p>
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

          {/* ПРАВАЯ — доминирующий коммерческий блок */}
          <div className="lg:col-span-8 animate-fade-up anim-delay-200">
            <div className="relative rounded-3xl overflow-hidden border border-border h-full min-h-[560px] flex flex-col justify-end">
              <img src={HERO_IMG} alt="Техника ВДОХ Моторс" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
              <div className="relative p-7 md:p-10">
                <h1 className="font-display font-700 uppercase leading-[0.92] text-5xl md:text-7xl mb-4">
                  Техника,<br />которая <span className="text-lime">везёт</span>
                </h1>
                <p className="text-muted-foreground max-w-md mb-6">
                  Более 200 моделей в наличии. Начните выбор прямо сейчас.
                </p>

                {/* быстрый поиск */}
                <div className="flex items-center gap-2 rounded-full border border-border bg-card/80 backdrop-blur p-1.5 pl-5 max-w-xl mb-6">
                  <Icon name="Search" size={18} className="text-muted-foreground" />
                  <input
                    placeholder="Экскаватор, погрузчик, модель…"
                    className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground"
                  />
                  <Button className="rounded-full bg-lime text-lime-foreground hover:bg-lime/90 font-600">Найти</Button>
                </div>

                {/* категории */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {CATEGORIES.map((c) => (
                    <a
                      key={c.name}
                      href="#catalog"
                      className="group rounded-xl border border-border bg-card/80 backdrop-blur p-4 hover:bg-lime hover:text-lime-foreground transition-colors"
                    >
                      <Icon name={c.icon} size={22} className="mb-3 text-lime group-hover:text-lime-foreground" />
                      <p className="font-600 text-sm">{c.name}</p>
                      <p className="text-xs opacity-70">{c.count} моделей</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* marquee */}
      <div className="border-y border-border bg-lime text-lime-foreground overflow-hidden py-3">
        <div className="flex whitespace-nowrap animate-marquee font-display uppercase tracking-wider text-sm font-600">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex shrink-0">
              {['Лизинг 0%', 'Trade-in', 'Гарантия 3 года', 'Выездной сервис', 'Мобильное приложение', 'B2B решения'].map((t) => (
                <span key={t} className="mx-6 flex items-center gap-2">
                  <Icon name="Sparkles" size={14} /> {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ЭКРАН 2 — ПРОДАЖА ТЕХНИКИ */}
      <Section id="catalog">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Kicker>Покупка техники</Kicker>
            <h2 className="font-display font-700 uppercase text-4xl md:text-5xl leading-tight mb-6">
              Всё для выгодной<br />покупки
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              Выбирайте способ приобретения, оценивайте акции и записывайтесь на тест-драйв — всё в одном месте.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="bg-lime text-lime-foreground hover:bg-lime/90 font-600">
                <Icon name="Gauge" size={18} className="mr-2" /> Записаться на тест-драйв
              </Button>
              <Button size="lg" variant="outline" className="border-border">
                Открыть каталог <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {SALE_FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-border bg-card p-6 hover:-translate-y-1 transition-transform">
                <span className="grid place-items-center h-11 w-11 rounded-lg bg-secondary text-lime mb-4">
                  <Icon name={f.icon} size={22} />
                </span>
                <p className="font-display font-600 text-lg mb-1">{f.title}</p>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ЭКРАН 3 — СЕРВИС */}
      <Section id="service" className="bg-card/40 border-y border-border">
        <Kicker>Сервисное обслуживание</Kicker>
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
          <div className="rounded-2xl border border-lime/40 bg-gradient-to-b from-lime/10 to-transparent p-6 flex flex-col">
            <Icon name="Truck" size={28} className="text-lime mb-4" />
            <p className="font-display font-600 text-xl mb-2">Выездной телесервис</p>
            <p className="text-sm text-muted-foreground mb-6 flex-1">
              Мастер приедет к вам на объект. Диагностика и мелкий ремонт — без простоя техники.
            </p>
            <Button variant="outline" className="border-lime/50 text-lime hover:bg-lime hover:text-lime-foreground">
              Вызвать мастера
            </Button>
          </div>
        </div>
      </Section>

      {/* ЭКРАН 4 — МОБИЛЬНОЕ ПРИЛОЖЕНИЕ */}
      <Section id="app">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <Kicker>Мобильное приложение</Kicker>
            <h2 className="font-display font-700 uppercase text-4xl md:text-5xl leading-tight mb-6">
              Управляйте техникой<br />с телефона
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              Установите приложение сразу после покупки — и держите весь сервис, документы и напоминания в кармане.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {APP_FEATURES.map((f) => (
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
          {/* макет телефона */}
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
                    <p className="font-600 text-sm">через 340 км</p>
                  </div>
                  <div className="rounded-xl bg-secondary p-3">
                    <p className="text-xs text-muted-foreground">Экскаватор EC220</p>
                    <p className="font-600 text-sm text-lime">В работе</p>
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
      </Section>

      {/* ЭКРАН 5 — B2B */}
      <Section id="b2b" className="bg-card/40 border-y border-border">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Kicker>Корпоративным клиентам</Kicker>
          <h2 className="font-display font-700 uppercase text-4xl md:text-5xl leading-tight mb-4">
            Отдельный путь<br />для вашего бизнеса
          </h2>
          <p className="text-muted-foreground">
            От подбора техники до обучения операторов — полное сопровождение корпоративного клиента.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-14">
          {B2B_STEPS.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl border border-border bg-background p-6">
              <span className="font-display font-700 text-5xl text-lime/20 absolute top-3 right-4">0{i + 1}</span>
              <span className="grid place-items-center h-11 w-11 rounded-lg bg-secondary text-lime mb-4">
                <Icon name={s.icon} size={22} />
              </span>
              <p className="font-display font-600 text-lg mb-1">{s.title}</p>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Портфолио решений с результатами */}
        <div className="mb-8">
          <h3 className="font-display font-600 uppercase text-2xl mb-6 flex items-center gap-3">
            <Icon name="Trophy" size={22} className="text-lime" /> Портфолио решений
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {CASES.map((c) => (
              <div key={c.company} className="rounded-2xl border border-border bg-background p-6 hover:border-lime/50 transition-colors">
                <p className="font-display font-700 text-3xl text-lime mb-2">{c.result}</p>
                <p className="font-600 mb-1">{c.company}</p>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-lime/40 bg-gradient-to-r from-lime/10 to-transparent p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display font-700 uppercase text-2xl md:text-3xl mb-2">Получите коммерческое предложение</p>
            <p className="text-muted-foreground">Персональный расчёт под задачи вашего парка за 1 рабочий день.</p>
          </div>
          <Button size="lg" className="bg-lime text-lime-foreground hover:bg-lime/90 font-600 shrink-0">
            Запросить КП <Icon name="ArrowRight" size={18} className="ml-2" />
          </Button>
        </div>
      </Section>

      {/* КОНТАКТЫ / ФУТЕР */}
      <footer id="contacts" className="px-6 md:px-10 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="grid place-items-center h-9 w-9 rounded-md bg-lime text-lime-foreground">
                  <Icon name="Zap" size={20} />
                </span>
                <span className="font-display font-700 text-lg uppercase">ВДОХ Моторс</span>
              </div>
              <p className="text-muted-foreground max-w-sm text-sm">
                Продажа и сервис техники. Корпоративные решения и мобильное приложение для управления вашим парком.
              </p>
            </div>
            <div>
              <p className="font-display uppercase text-sm tracking-wider mb-4 text-muted-foreground">Сервисные центры</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><Icon name="MapPin" size={15} className="text-lime" /> Москва, ул. Промышленная, 4</li>
                <li className="flex items-center gap-2"><Icon name="MapPin" size={15} className="text-lime" /> СПб, пр. Индустриальный, 22</li>
                <li className="flex items-center gap-2"><Icon name="MapPin" size={15} className="text-lime" /> Казань, ул. Заводская, 9</li>
              </ul>
            </div>
            <div>
              <p className="font-display uppercase text-sm tracking-wider mb-4 text-muted-foreground">Связь</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><Icon name="Phone" size={15} className="text-lime" /> 8 800 555-00-11</li>
                <li className="flex items-center gap-2"><Icon name="Mail" size={15} className="text-lime" /> info@vdoh-motors.ru</li>
                <li className="flex items-center gap-2"><Icon name="Clock" size={15} className="text-lime" /> Пн–Сб 9:00–20:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
            <p>© 2026 ВДОХ Моторс. Все права защищены.</p>
            <p>Продажа · Сервис · Приложение · B2B</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
