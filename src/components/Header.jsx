import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; 
import { Link } from "react-scroll"; 

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
    { name: "About", to: "about" },
    { name: "Consultation", to: "consultation" },
    { name: "Practice", to: "practice" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent transition duration-300">
      <nav
        className={`container mx-auto px-2 py-6 flex items-center justify-between ${scrolled ? "bg-white/10 backdrop-blur px-6" : ""}`}
      >
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className={`text-3xl font-bold uppercase ${scrolled ? "text-teal-400" : "text-white"}`}>
           Dr Jasmine Osadebay
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
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white hover:text-teal-400 transition">
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={`fixed top-20 right-0 left-0 bg-white/20 backdrop-blur-lg z-40 py-8 flex flex-col items-center space-y-8 transition ${scrolled ? "text-teal-400" : "text-white"}`}>
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-medium hover:text-gray-800 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;