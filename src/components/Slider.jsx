import { Children, useState, useCallback, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Slider({ children, autoPlay = true, interval = 10000 }) {
  const [currentPage, setCurrentPage] = useState(0);
  const pages = Children.toArray(children);

  const nextSlide = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % pages.length);
  }, [pages.length]);

  const prevSlide = useCallback(() => {
    setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length);
  }, [pages.length]);

  // Автопрокрутка
  useEffect(() => {
    if (!autoPlay || pages.length <= 1) return;
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, nextSlide, pages.length]);

  if (pages.length === 0) return null;

  return (
    <div className="relative overflow-hidden rounded-xl group w-9/12 mx-auto pb-20">
      {/* Контейнер слайдов */}
      <div 
        className="flex transition-transform duration-500 ease-out will-change-transform"
        style={{ transform: `translateX(-${currentPage * 100}%)` }}
      >
        {pages.map((page, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <div className="relative aspect-video w-full">
              {page}
            </div>
          </div>
        ))}
      </div>

      {/* Навигация */}
      {pages.length > 1 && (
        <>
          <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full">
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Индикаторы */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {pages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentPage ? 'w-6 bg-white' : 'w-2 bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}