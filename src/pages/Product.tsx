import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getProduct, QUAD_IMG, BUGGY_IMG } from '@/data/products';

const SPECS = [
  { label: 'Двигатель', key: 'engine' as const },
  { label: 'Мощность', key: 'power' as const },
  { label: 'Привод', key: 'drive' as const },
];

const EXTRA_SPECS = [
  ['Макс. скорость', '110 км/ч'],
  ['Тип КПП', 'Вариатор CVT'],
  ['Клиренс', '270 мм'],
  ['Топливный бак', '18 л'],
  ['Снаряжённая масса', '295 кг'],
  ['Подвеска', 'Независимая, регулируемая'],
];

const TRIMS = [
  { name: 'Standard', price: '+0 ₽', features: ['Базовая комплектация', 'Гарантия 2 года'] },
  { name: 'Sport', price: '+95 000 ₽', features: ['Спортивная подвеска', 'Литые диски', 'Гарантия 3 года'], hot: true },
  { name: 'Ultimate', price: '+210 000 ₽', features: ['Лебёдка + кофр', 'Подогрев ручек', 'Премиум-сервис 5 лет'] },
];

const Product = () => {
  const { id } = useParams();
  const product = getProduct(id);
  const gallery = [product.image, QUAD_IMG, BUGGY_IMG];
  const [active, setActive] = useState(0);
  const [trim, setTrim] = useState(1);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />

      <div className="pt-24 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Хлебные крошки */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-foreground">Главная</Link>
            <Icon name="ChevronRight" size={14} />
            <Link to="/#catalog" className="hover:text-foreground">Каталог</Link>
            <Icon name="ChevronRight" size={14} />
            <span className="text-foreground">{product.name}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Галерея */}
            <div>
              <div className="rounded-3xl overflow-hidden border border-border aspect-[4/3] mb-4">
                <img src={gallery[active]} alt={product.name} className="h-full w-full object-cover animate-fade-in" key={active} />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {gallery.map((g, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`rounded-xl overflow-hidden border aspect-[4/3] transition-colors ${
                      active === i ? 'border-lime' : 'border-border opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={g} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Информация */}
            <div>
              {product.badge && <Badge className="bg-lime text-lime-foreground border-0 mb-3">{product.badge}</Badge>}
              <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
              <h1 className="font-display font-700 uppercase text-4xl md:text-5xl mb-4">{product.name}</h1>

              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={16} className="text-lime fill-lime" />
                ))}
                <span className="text-sm text-muted-foreground ml-2">4.9 · 214 отзыва</span>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-8">
                {SPECS.map((s) => (
                  <div key={s.label} className="rounded-xl border border-border bg-card p-4 text-center">
                    <p className="font-display font-700 text-lg text-lime">{product[s.key]}</p>
                    <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Комплектации */}
              <p className="font-display uppercase text-sm tracking-wider text-muted-foreground mb-3">Комплектация</p>
              <div className="grid sm:grid-cols-3 gap-3 mb-8">
                {TRIMS.map((t, i) => (
                  <button
                    key={t.name}
                    onClick={() => setTrim(i)}
                    className={`text-left rounded-xl border p-4 transition-colors ${
                      trim === i ? 'border-lime bg-lime/5' : 'border-border hover:border-lime/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-600">{t.name}</p>
                      {t.hot && <Icon name="Flame" size={15} className="text-lime" />}
                    </div>
                    <p className="text-xs text-lime font-600 mb-2">{t.price}</p>
                    <ul className="space-y-1">
                      {t.features.map((f) => (
                        <li key={f} className="text-[11px] text-muted-foreground flex items-start gap-1">
                          <Icon name="Check" size={11} className="text-lime mt-0.5 shrink-0" /> {f}
                        </li>
                      ))}
                    </ul>
                  </button>
                ))}
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-end justify-between mb-4">
                  <div>
                    <p className="text-xs text-muted-foreground">Цена от</p>
                    <p className="font-display font-700 text-3xl text-lime">{product.price}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">или от 18 900 ₽/мес</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button size="lg" className="flex-1 bg-lime text-lime-foreground hover:bg-lime/90 font-600">
                    <Icon name="ShoppingCart" size={18} className="mr-2" /> Купить
                  </Button>
                  <Button size="lg" variant="outline" className="border-border">
                    <Icon name="Gauge" size={18} className="mr-2" /> Тест-драйв
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Табы с деталями */}
          <div className="mt-16">
            <Tabs defaultValue="specs">
              <TabsList className="bg-card border border-border">
                <TabsTrigger value="specs">Характеристики</TabsTrigger>
                <TabsTrigger value="desc">Описание</TabsTrigger>
                <TabsTrigger value="delivery">Доставка</TabsTrigger>
              </TabsList>
              <TabsContent value="specs" className="mt-6">
                <div className="grid sm:grid-cols-2 gap-x-10 gap-y-1 max-w-3xl">
                  {[...SPECS.map((s) => [s.label, product[s.key]]), ...EXTRA_SPECS].map(([label, value], i) => (
                    <div key={i} className="flex justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground text-sm">{label}</span>
                      <span className="font-600 text-sm">{value}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="desc" className="mt-6 max-w-3xl text-muted-foreground leading-relaxed">
                {product.name} — {product.category.toLowerCase()} для тех, кто не признаёт преград. Мощный двигатель {product.engine},
                надёжный привод {product.drive} и продуманная эргономика делают каждую поездку незабываемой. Проверенная временем
                конструкция, простое обслуживание и полная сервисная поддержка от ВДОХ Моторс.
              </TabsContent>
              <TabsContent value="delivery" className="mt-6 max-w-3xl space-y-3">
                {[
                  ['Truck', 'Доставка по России', 'от 3 дней, транспортной компанией до вашего города'],
                  ['ShieldCheck', 'Предпродажная подготовка', 'полная проверка и настройка перед выдачей'],
                  ['CreditCard', 'Рассрочка и лизинг', 'оформление за 1 день, первый взнос от 0%'],
                ].map(([icon, title, desc]) => (
                  <div key={title} className="flex gap-3 rounded-xl border border-border bg-card p-4">
                    <Icon name={icon} size={22} className="text-lime shrink-0" />
                    <div>
                      <p className="font-600 text-sm">{title}</p>
                      <p className="text-sm text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Product;
