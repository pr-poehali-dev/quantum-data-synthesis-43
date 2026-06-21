import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-neutral-900 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between">
            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-amber-400 text-xs sm:text-sm tracking-wide">Навигация</h3>
                <Link to="/services" className="text-white hover:text-amber-400 transition-colors duration-300 text-sm sm:text-base">
                  Услуги
                </Link>
                <Link to="/reviews" className="text-white hover:text-amber-400 transition-colors duration-300 text-sm sm:text-base">
                  Отзывы
                </Link>
                <Link to="/contacts" className="text-white hover:text-amber-400 transition-colors duration-300 text-sm sm:text-base">
                  Контакты
                </Link>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-amber-400 text-xs sm:text-sm tracking-wide">Контакты</h3>
                <span className="text-white text-sm sm:text-base">+7 (999) 123-45-67</span>
                <span className="text-white text-sm sm:text-base">г. Москва, ул. Тверская, 1</span>
                <span className="text-white text-sm sm:text-base">Ежедневно 9:00 — 21:00</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1 className="font-display text-[13vw] sm:text-[11vw] lg:text-[9vw] leading-[0.8] mt-4 sm:mt-6 lg:mt-10 text-white tracking-tight">
                Lady<span className="text-amber-400">&</span>Gentleman
              </h1>
              <p className="text-white text-sm sm:text-base">© {new Date().getFullYear()} Lady&Gentleman</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
