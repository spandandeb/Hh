import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 text-primary font-bold text-xl">
            FoodLink
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <button onClick={() => scrollToSection("about")} className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                About
              </button>
              <button onClick={() => scrollToSection("testimony")} className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Testimonials
              </button>
              <button onClick={() => scrollToSection("tracking")} className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Food Tracking
              </button>
              <button onClick={() => scrollToSection("impact")} className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Impact
              </button>
              <button onClick={() => scrollToSection("ai-matching")} className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                AI Matching
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <button onClick={() => scrollToSection("about")} className="text-gray-600 hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left">
              About
            </button>
            <button onClick={() => scrollToSection("testimony")} className="text-gray-600 hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left">
              Testimonials
            </button>
            <button onClick={() => scrollToSection("tracking")} className="text-gray-600 hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left">
              Food Tracking
            </button>
            <button onClick={() => scrollToSection("impact")} className="text-gray-600 hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left">
              Impact
            </button>
            <button onClick={() => scrollToSection("ai-matching")} className="text-gray-600 hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left">
              AI Matching
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;