import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const contacts = [
  { icon: "MapPin", label: "Адрес", value: "г. Москва, ул. Тверская, 1" },
  { icon: "Phone", label: "Телефон", value: "+7 (999) 123-45-67" },
  { icon: "Mail", label: "Почта", value: "hello@ladygentleman.ru" },
  { icon: "Clock", label: "Часы работы", value: "Ежедневно 9:00 — 21:00" },
];

export default function Contacts() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <Header />

      <section className="pt-40 pb-20 px-6 text-center">
        <p className="uppercase tracking-[0.3em] text-amber-400 text-sm mb-6">
          Мы вас ждём
        </p>
        <h1 className="font-display text-5xl md:text-7xl text-white mb-6">
          Контакты
        </h1>
        <p className="text-neutral-400 max-w-2xl mx-auto font-light text-lg">
          Запишитесь на визит удобным способом или приходите в гости
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-32 grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          {contacts.map((c) => (
            <div key={c.label} className="flex items-start gap-4">
              <div className="w-12 h-12 shrink-0 rounded-full bg-amber-500/10 flex items-center justify-center">
                <Icon name={c.icon} size={22} className="text-amber-400" />
              </div>
              <div>
                <p className="text-neutral-500 text-sm uppercase tracking-wide mb-1">{c.label}</p>
                <p className="text-white text-lg">{c.value}</p>
              </div>
            </div>
          ))}

          <div className="flex gap-4 pt-4">
            <a href="#" className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center text-white hover:border-amber-500 hover:text-amber-400 transition-colors">
              <Icon name="Instagram" size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center text-white hover:border-amber-500 hover:text-amber-400 transition-colors">
              <Icon name="Send" size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center text-white hover:border-amber-500 hover:text-amber-400 transition-colors">
              <Icon name="Phone" size={20} />
            </a>
          </div>
        </div>

        <form className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 space-y-5">
          <h2 className="font-display text-2xl text-white mb-2">Записаться онлайн</h2>
          <input
            type="text"
            placeholder="Ваше имя"
            className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder:text-neutral-500 focus:border-amber-500 focus:outline-none transition-colors"
          />
          <input
            type="tel"
            placeholder="Телефон"
            className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder:text-neutral-500 focus:border-amber-500 focus:outline-none transition-colors"
          />
          <textarea
            placeholder="Желаемая услуга и время"
            rows={4}
            className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder:text-neutral-500 focus:border-amber-500 focus:outline-none transition-colors resize-none"
          />
          <button
            type="button"
            className="w-full bg-amber-500 text-black font-medium uppercase tracking-wide py-3 rounded-lg hover:bg-amber-400 transition-colors"
          >
            Отправить заявку
          </button>
        </form>
      </section>

      <Footer />
    </main>
  );
}
