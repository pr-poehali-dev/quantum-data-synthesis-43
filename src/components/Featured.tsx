import { Link } from "react-router-dom";

export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/e7653b1b-7c28-4614-a111-bd2cc5f16844/files/99c1355d-c6b9-4506-9814-35d70ebc2d75.jpg"
          alt="Стиль и красота в Lady&Gentleman"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-[0.2em] text-amber-600">
          О салоне
        </h3>
        <p className="font-display text-3xl lg:text-5xl mb-8 text-neutral-900 leading-tight">
          Каждый визит — это ритуал заботы о себе. Опытные мастера, премиальная
          косметика и атмосфера, в которой хочется задержаться.
        </p>
        <Link
          to="/services"
          className="bg-black text-white border border-black px-6 py-3 text-sm transition-all duration-300 hover:bg-amber-500 hover:border-amber-500 hover:text-black cursor-pointer w-fit uppercase tracking-wide"
        >
          Наши услуги
        </Link>
      </div>
    </div>
  );
}
