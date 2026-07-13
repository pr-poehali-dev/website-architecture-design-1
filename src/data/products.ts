export const QUAD_IMG =
  'https://cdn.poehali.dev/projects/ab234b48-e49e-4d64-95b9-97cc2b9c7b76/files/3e873453-dd4f-4ba9-b5e6-29c581705dc0.jpg';
export const BUGGY_IMG =
  'https://cdn.poehali.dev/projects/ab234b48-e49e-4d64-95b9-97cc2b9c7b76/files/7341c341-635b-44cc-a353-5905171b84f6.jpg';

export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  power: string;
  engine: string;
  drive: string;
  badge?: string;
}

export const PRODUCTS: Product[] = [
  { id: 'raptor-700', name: 'Raptor 700 X', category: 'Спортивный квадроцикл', price: '890 000 ₽', image: QUAD_IMG, power: '46 л.с.', engine: '686 см³', drive: '2WD', badge: 'Хит' },
  { id: 'grizzly-1000', name: 'Grizzly 1000', category: 'Утилитарный квадроцикл', price: '1 240 000 ₽', image: QUAD_IMG, power: '58 л.с.', engine: '976 см³', drive: '4WD', badge: 'Новинка' },
  { id: 'buggy-x4', name: 'Buggy X4 Turbo', category: 'Багги', price: '2 150 000 ₽', image: BUGGY_IMG, power: '120 л.с.', engine: '999 см³ Turbo', drive: '4WD' },
  { id: 'sport-450', name: 'Sport 450 R', category: 'Спортивный квадроцикл', price: '640 000 ₽', image: QUAD_IMG, power: '39 л.с.', engine: '449 см³', drive: '2WD' },
  { id: 'buggy-duo', name: 'Buggy Duo Cross', category: 'Багги', price: '1 780 000 ₽', image: BUGGY_IMG, power: '90 л.с.', engine: '812 см³', drive: '4WD', badge: 'Хит' },
  { id: 'kids-90', name: 'Junior 90', category: 'Детский квадроцикл', price: '210 000 ₽', image: QUAD_IMG, power: '6 л.с.', engine: '90 см³', drive: '2WD' },
];

export const getProduct = (id?: string) =>
  PRODUCTS.find((p) => p.id === id) ?? PRODUCTS[0];

export const CATEGORIES = [
  { name: 'Спортивные квадроциклы', count: 24, icon: 'Bike' },
  { name: 'Утилитарные квадроциклы', count: 31, icon: 'Truck' },
  { name: 'Багги', count: 18, icon: 'Car' },
  { name: 'Детские модели', count: 12, icon: 'Baby' },
];
