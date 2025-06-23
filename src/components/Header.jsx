import { useEffect, useState } from "react";
import { Menu, X, Home, Info, PhoneCall, User } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { name: "About", to: "about", icon: <Info size={24} /> },
    { name: "Consultation", to: "consultation", icon: <PhoneCall size={24} /> },
    { name: "Practice", to: "practice", icon: <User size={24} /> },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent transition duration-300">
      <nav
        className={`container mx-auto px-6 py-6 flex items-center justify-between ${scrolled ? "bg-white/10 backdrop-blur px-6" : ""}`}
      >
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className={`md:text-3xl text-xl font-bold uppercase ${scrolled ? "text-teal-400" : "text-white"}`}>
           Dr Jasmine
          </span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-20">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              className={`relative text-2xl font-medium transition-colors duration-300 cursor-pointer ${scrolled ? "text-teal-400" : "text-white"} 
                after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-500 after:ease-in-out hover:after:scale-x-100`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white hover:text-amber-400 transition md:hidden"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black backdrop-blur-sm z-40"
              onClick={() => setMenuOpen(false)}
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-[70%] bg-white shadow-xl z-50 flex flex-col items-start p-8 space-y-8"
            >
              <div className="flex justify-between w-full items-center">
                <h2 className="text-2xl font-bold text-amber-900">Menu</h2>
                <button onClick={() => setMenuOpen(false)}><X size={26} className="text-amber-900" /></button>
              </div>

              <div className="flex flex-col gap-6 mt-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    smooth={true}
                    duration={500}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-4 text-xl font-medium text-gray-800 hover:text-amber-900 transition"
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;