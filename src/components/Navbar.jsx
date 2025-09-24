import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const links = [
    { name: "Home", to: "home", isExternal: false },
    { name: "Projects", to: "projects", isExternal: false },
    { name: "About", to: "about", isExternal: false },
    {
      name: "Resume",
      to: "https://drive.google.com/file/d/1TnF3kRnKHphqtC5o8_0j2e8HgYXyd6Pw/view?usp=drivesdk",
      isExternal: true,
    },
    { name: "Contact", to: "contact", isExternal: false },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur-lg shadow-xl border-b border-slate-700">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 cursor-pointer">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text tracking-wide cursor-pointer">
          Shalini.dev
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10">
          {links.map((link) =>
            link.isExternal ? (
              <a
                key={link.name}
                href={link.to}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg font-medium transition duration-300 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 hover:text-transparent hover:bg-clip-text p-2 rounded-md"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active-link"
                className="text-white text-lg font-medium transition duration-300 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 hover:text-transparent hover:bg-clip-text p-2 rounded-md"
              >
                {link.name}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="text-white p-2 rounded-md hover:bg-slate-800 transition"
          >
            {navOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <nav className="md:hidden bg-[#0f172a]/90 backdrop-blur px-6 py-6 flex flex-col gap-6 transition-all duration-500 ease-in-out">
          {links.map((link) =>
            link.isExternal ? (
              <a
                key={link.name}
                href={link.to}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setNavOpen(false)}
                className="text-white text-2xl font-medium transition duration-300 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 hover:text-transparent hover:bg-clip-text p-3 rounded-md"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setNavOpen(false)}
                activeClass="active-link"
                className="text-white text-2xl font-medium transition duration-300 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 hover:text-transparent hover:bg-clip-text p-3 rounded-md"
              >
                {link.name}
              </Link>
            )
          )}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
