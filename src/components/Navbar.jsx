import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 md:px-10 py-5 bg-black fixed w-full z-50 border-b border-gray-800 backdrop-blur-md">
      {/* Logo */}
      <a href="/" className="text-2xl font-bold text-white">
        portfolio.
      </a>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 text-white">
        {["About", "Skills", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-blue-400 transition"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Mobile Menu Icon */}
      <button
        className="md:hidden text-white"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="absolute top-[70px] left-0 w-full bg-black border-t border-gray-800 flex flex-col items-center gap-6 py-6 md:hidden text-white">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="hover:text-blue-400 transition"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
