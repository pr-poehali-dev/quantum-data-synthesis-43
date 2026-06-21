import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const reviews = [
  {
    name: "Анна Морозова",
    photo: "https://i.pravatar.cc/150?img=47",
    rating: 5,
    text: "Лучший салон в городе! Мастер по окрашиванию творит настоящие чудеса. Цвет держится идеально, а атмосфера просто волшебная.",
  },
  {
    name: "Дмитрий Соколов",
    photo: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    text: "Хожу сюда на стрижку уже год. Всегда безупречный результат и приятное общение. Рекомендую всем мужчинам, кто ценит качество.",
  },
  {
    name: "Екатерина Лебедева",
    photo: "https://i.pravatar.cc/150?img=45",
    rating: 5,
    text: "Делала маникюр и уход за лицом — в восторге! Внимательный персонал, премиальная косметика. Чувствуешь себя королевой.",
  },
  {
    name: "Ольга Васильева",
    photo: "https://i.pravatar.cc/150?img=32",
    rating: 5,
    text: "Наращивание ресниц превзошло все ожидания. Держатся долго, выглядят естественно. Спасибо мастеру за золотые руки!",
  },
  {
    name: "Игорь Петров",
    photo: "https://i.pravatar.cc/150?img=68",
    rating: 5,
    text: "Современный салон с приятным интерьером. Записаться легко, ждать не пришлось. Стрижка и уход на высшем уровне.",
  },
  {
    name: "Марина Кузнецова",
    photo: "https://i.pravatar.cc/150?img=20",
    rating: 5,
    text: "Косметолог подобрала идеальный уход для моей кожи. Результат виден уже после первой процедуры. Теперь я постоянный клиент!",
  },
];

export default function Reviews() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <Header />

      <section className="pt-40 pb-20 px-6 text-center">
        <p className="uppercase tracking-[0.3em] text-amber-400 text-sm mb-6">
          Нам доверяют
        </p>
        <h1 className="font-display text-5xl md:text-7xl text-white mb-6">
          Отзывы клиентов
        </h1>
        <p className="text-neutral-400 max-w-2xl mx-auto font-light text-lg">
          Более 2000 довольных гостей выбрали Lady&Gentleman
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-32 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, i) => (
          <div
            key={i}
            className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-amber-500/50 transition-colors duration-300 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={review.photo}
                alt={review.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-amber-500/30"
              />
              <div>
                <h3 className="text-white font-medium">{review.name}</h3>
                <div className="flex gap-1 mt-1">
                  {Array.from({ length: review.rating }).map((_, idx) => (
                    <Icon key={idx} name="Star" size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-neutral-300 font-light leading-relaxed">{review.text}</p>
          </div>
        ))}
      </section>

      <Footer />
    </main>
  );
}
