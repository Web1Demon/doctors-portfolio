import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // lightweight icon lib (if not installed, you can swap these with SVGs)

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
    { name: "Practice", href: "#practice" },
    { name: "About", href: "#about" },
    { name: "Consultation", href: "#consultation" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent transition duration-300">
      <nav
        className={`container mx-auto px-2 py-6 flex items-center justify-between ${
          scrolled ? "bg-white/10 backdrop-blur" : ""
        }`}
      >
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span
            className={`text-3xl font-bold uppercase ${
              scrolled ? "text-teal-400" : "text-white"
            }`}
          >
            Dr Jack Bowe
          </span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-20">
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-2xl font-medium hover:text-gray-800 transition ${
                scrolled ? "text-teal-400" : "text-white"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white hover:text-teal-400 transition"
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className={`fixed top-20 right-0 left-0 bg-white/20 backdrop-blur-lg z-40 py-8 flex flex-col items-center space-y-8 transition ${
            scrolled ? "text-teal-400" : "text-white"
          }`}
        >
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-medium hover:text-gray-800 transition"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
