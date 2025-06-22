import { useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import TestimonialsSection from "./components/Testimonial";
import Expertise from "./components/Expertise";
import { ContactForm } from "./components/Contact";
import WhatsAppButton from "./components/WhatsappButton";
import { Element } from "react-scroll";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <>
      <Header />
      <HeroSection />
      <Element name="about">
        <About />
      </Element>
      <Element name="consultation">
        <ContactForm />
      </Element>
      <TestimonialsSection />
      <Element name="practice">
        <Expertise />
      </Element>
      <WhatsAppButton />
    </>
  );
};

export default App;