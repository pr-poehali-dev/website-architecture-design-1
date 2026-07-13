import Icon from '@/components/ui/icon';

const Footer = () => (
  <footer id="contacts" className="px-4 md:px-8 py-16">
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
            Продажа и сервис квадроциклов и багги. Техника для бизнеса и мобильное приложение для управления вашим парком.
          </p>
        </div>
        <div>
          <p className="font-display uppercase text-sm tracking-wider mb-4 text-muted-foreground">Сервисные центры</p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Icon name="MapPin" size={15} className="text-lime" /> Москва, ул. Мотоспортивная, 4</li>
            <li className="flex items-center gap-2"><Icon name="MapPin" size={15} className="text-lime" /> СПб, пр. Внедорожный, 22</li>
            <li className="flex items-center gap-2"><Icon name="MapPin" size={15} className="text-lime" /> Казань, ул. Трассовая, 9</li>
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
        <p>Квадроциклы · Багги · Сервис · Приложение</p>
      </div>
    </div>
  </footer>
);

export default Footer;
