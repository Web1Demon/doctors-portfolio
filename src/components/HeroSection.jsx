const HeroSection = () => {
  return (
    <section className="head brightness-200 relative min-h-screen flex items-center overflow-hidden">
      <div className="ml-6 md:ml-[50%] p-4 md:p-0">
        <h2 className="text-3xl md:text-6xl text-white font-semibold">
          Finding Clarity, Together.
        </h2>
        <p className="text-base md:text-2xl text-white mt-4 md:mt-6 drop-shadow-lg opacity-100 leading-relaxed">
          I’m Dr. Jack Bowe, a compassionate therapist helping individuals
          <br className="hidden md:block" />
          and couples navigate anxiety, relationships, and life transitions.
          <br className="hidden md:block" /> Let’s build a path forward you can
          believe in.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
