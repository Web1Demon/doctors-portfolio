import { useEffect, useState } from "react";

const quotes = [
  { text: "The wound is the place where the light enters you.", author: "Rumi" },
  { text: "Healing is not linear, and neither is life.", author: "Unknown" },
  { text: "Your story matters — and it’s not over yet.", author: "Jack Bowe" },
  { text: "Growth begins at the edge of your comfort zone.", author: "Neale Donald Walsch" },
];

export default function QuoteSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % quotes.length);
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in-up">
        Words To Heal By
      </h2>

      <div key={current} className="transition-opacity duration-700 ease-in-out">
        <p className="text-amber-700 text-lg italic animate-fade-in-up delay-150">
          “{quotes[current].text}”
        </p>
        <div className="text-gray-400 text-sm mt-2">— {quotes[current].author}</div>
      </div>

      <div className="w-20 h-1 bg-amber-900 mx-auto mt-4"></div>
    </div>
  );
}
