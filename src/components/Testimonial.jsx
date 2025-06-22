import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { useRef } from "react";

function TestimonialCard({ quote, name }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const posX = e.clientX - rect.left - rect.width / 2;
    const posY = e.clientY - rect.top - rect.height / 2;

    x.set(posX);
    y.set(posY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
      className="relative w-[400px] p-8 rounded-2xl border border-white/10 backdrop-blur-md bg-neutral-900/80 text-white shadow-lg transition duration-300 overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute -inset-1 bg-amber-900/20 blur-2xl opacity-5 pointer-events-none" />

      <div className="flex flex-col items-start justify-between h-full">
        <div>
          <FaQuoteLeft className="text-amber-600 text-4xl mb-6" />
          <p className="text-lg italic leading-relaxed">{quote}</p>
        </div>
        <div className="mt-10 text-amber-500 font-semibold">{name}</div>
      </div>
    </motion.div>
  );
}


export default function TestimonialsSection() {
  return (
      <div>
          <div className="p-8 mt-32 flex flex-col md:flex-row gap-20 max-w-7xl mx-auto items-center">
            {/* Left side quotes */}
            <div className="md:w-1/2">
              <h2 className="text-5xl font-bold text-neutral-900 mb-10 leading-tight">
                What clients say about their journey
              </h2>

              <div className="flex flex-col gap-14">
                <div>
                  <FaQuoteLeft className="text-amber-600 text-3xl mb-4" />
                  <p className="text-xl text-neutral-700 leading-relaxed">
                    “Dr. Jasmine's guided me through the hardest time in my life. His calm and wisdom changed everything.”
                  </p>
                </div>

                <div>
                  <FaQuoteLeft className="text-amber-600 text-3xl mb-4" />
                  <p className="text-xl text-neutral-700 leading-relaxed">
                    Her honesty and care helped me rediscover myself. I’d recommend him to anyone.”
                  </p>
                </div>
              </div>
            </div>

            {/* Right side card */}
            <div className="md:w-1/2 flex justify-end">
              <TestimonialCard
                quote="“I came in feeling broken, and left every session feeling understood and hopeful.”"
                name="— Mia J."
              />   d
            </div>
          </div>
      </div>
  );
}
