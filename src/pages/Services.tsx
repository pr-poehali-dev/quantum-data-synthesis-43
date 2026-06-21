import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const categories = [
  {
    title: "Парикмахерские услуги",
    icon: "Scissors",
    items: [
      { name: "Женская стрижка", price: "от 2 500 ₽" },
      { name: "Мужская стрижка", price: "от 1 800 ₽" },
      { name: "Окрашивание", price: "от 4 500 ₽" },
      { name: "Укладка", price: "от 1 500 ₽" },
    ],
  },
  {
    title: "Ногтевой сервис",
    icon: "Hand",
    items: [
      { name: "Маникюр классический", price: "от 1 500 ₽" },
      { name: "Маникюр с покрытием", price: "от 2 500 ₽" },
      { name: "Педикюр", price: "от 2 800 ₽" },
      { name: "Дизайн ногтей", price: "от 800 ₽" },
    ],
  },
  {
    title: "Косметология",
    icon: "Sparkles",
    items: [
      { name: "Чистка лица", price: "от 3 500 ₽" },
      { name: "Пилинг", price: "от 4 000 ₽" },
      { name: "Уходовые процедуры", price: "от 3 000 ₽" },
      { name: "Массаж лица", price: "от 2 500 ₽" },
    ],
  },
  {
    title: "Брови и ресницы",
    icon: "Eye",
    items: [
      { name: "Оформление бровей", price: "от 1 200 ₽" },
      { name: "Окрашивание бровей", price: "от 1 000 ₽" },
      { name: "Наращивание ресниц", price: "от 3 000 ₽" },
      { name: "Ламинирование", price: "от 2 500 ₽" },
    ],
  },
];

export default function Services() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <Header />

      <section className="pt-40 pb-20 px-6 text-center">
        <p className="uppercase tracking-[0.3em] text-amber-400 text-sm mb-6">
          Прайс-лист
        </p>
        <h1 className="font-display text-5xl md:text-7xl text-white mb-6">
          Наши услуги
        </h1>
        <p className="text-neutral-400 max-w-2xl mx-auto font-light text-lg">
          Полный спектр услуг красоты для леди и джентльменов в одном месте
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-32 grid md:grid-cols-2 gap-8">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-amber-500/50 transition-colors duration-300"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                <Icon name={cat.icon} size={24} className="text-amber-400" />
              </div>
              <h2 className="font-display text-2xl text-white">{cat.title}</h2>
            </div>
            <ul className="space-y-4">
              {cat.items.map((item) => (
                <li
                  key={item.name}
                  className="flex justify-between items-center border-b border-neutral-800 pb-3"
                >
                  <span className="text-neutral-300">{item.name}</span>
                  <span className="text-amber-400 font-medium whitespace-nowrap ml-4">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <Footer />
    </main>
  );
}
