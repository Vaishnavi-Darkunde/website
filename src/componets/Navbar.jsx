
 import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo Gta.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4">
          <img
            src={logo}
            alt="GTasterix"
            style={{ width: "130px", height: "auto" }}
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-sky-600 font-semibold" : "text-gray-900 hover:text-sky-600"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "text-sky-600 font-semibold" : "text-gray-900 hover:text-sky-600"
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/careers"
            className={({ isActive }) =>
              isActive ? "text-sky-600 font-semibold" : "text-gray-900 hover:text-sky-600"
            }
          >
            Careers
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-sky-600 font-semibold" : "text-gray-900 hover:text-sky-600"
            }
          >
            Contact Us
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-sky-600 font-semibold" : "text-gray-900 hover:text-sky-600"
            }
          >
            About Us
          </NavLink>

          {/* Desktop Login Button */}
          
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow px-6 py-4 space-y-4 text-sm font-medium animate-slideDown">
          <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "block text-sky-600 font-semibold" : "block text-gray-900 hover:text-sky-600"}>
            Home
          </NavLink>

          <NavLink to="/services" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "block text-sky-600 font-semibold" : "block text-gray-900 hover:text-sky-600"}>
            Services
          </NavLink>

          <NavLink to="/careers" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "block text-sky-600 font-semibold" : "block text-gray-900 hover:text-sky-600"}>
            Careers
          </NavLink>

          <NavLink to="/contact" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "block text-sky-600 font-semibold" : "block text-gray-900 hover:text-sky-600"}>
            Contact Us
          </NavLink>

          <NavLink to="/about" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "block text-sky-600 font-semibold" : "block text-gray-900 hover:text-sky-600"}>
            About Us
          </NavLink>

          
        </div>
      )}
    </header>
  );
}


