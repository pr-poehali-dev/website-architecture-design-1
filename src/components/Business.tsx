import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const STEPS = [
  { icon: 'Search', title: 'Подбор техники', desc: 'квадроциклы и багги под ваши задачи' },
  { icon: 'Handshake', title: 'Корпоративные продажи', desc: 'спецусловия и объёмные скидки' },
  { icon: 'GraduationCap', title: 'Обучение', desc: 'подготовка операторов и инструкторов' },
  { icon: 'LineChart', title: 'Сопровождение', desc: 'персональный менеджер на весь цикл' },
];

const CASES = [
  { company: 'База отдыха «Тайга»', result: '+40% выручки', desc: 'Парк из 12 квадроциклов для прокатных туров' },
  { company: 'Квест-парк «Дюны»', result: 'окупаемость 8 мес', desc: '6 багги для гонок и корпоративов' },
  { company: 'Турбаза «Урал»', result: '−28% простоев', desc: 'Сервисный контракт на весь парк техники' },
];

const Business = () => (
  <section id="b2b" className="py-20 md:py-28 px-4 md:px-8 bg-card/40 border-y border-border scroll-mt-16">
    <div className="mx-auto max-w-7xl">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="flex items-center gap-2 mb-5 justify-center">
          <span className="h-px w-8 bg-lime" />
          <span className="font-display uppercase tracking-[0.25em] text-xs text-lime">Техника для бизнеса</span>
        </div>
        <h2 className="font-display font-700 uppercase text-4xl md:text-5xl leading-tight mb-4">
          Отдельный путь<br />для вашего бизнеса
        </h2>
        <p className="text-muted-foreground">
          Прокат, туризм, гонки — полное сопровождение от подбора техники до обучения операторов.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-4 mb-14">
        {STEPS.map((s, i) => (
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
    </div>
  </section>
);

export default Business;
