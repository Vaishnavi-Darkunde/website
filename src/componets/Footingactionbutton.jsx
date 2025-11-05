import React from "react";
import { useLocation } from "react-router-dom";
import { FiArrowUp } from "react-icons/fi";
 
export default function Floatingactionbutton({
  hideOnPaths = ["/login", "/signup"],
  showOnMobile = false,              
}) {
  const { pathname } = useLocation();
 
  if (hideOnPaths.includes(pathname)) return null;
 
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
 
  return (
    <div
      className={`fixed z-50 right-4 bottom-6 flex flex-col items-center gap-3 ${
        showOnMobile ? "" : "hidden md:flex"
      }`}
      aria-hidden={false}
      style={{ pointerEvents: "auto" }}
    >
      {/* Scroll to top */}
      <div className="relative">
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="group w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90 dark:bg-gray-900 shadow-lg flex items-center justify-center text-black dark:text-white hover:scale-105 transform transition-all ring-1 ring-slate-200"
        >
          <FiArrowUp size={18} />
        </button>
 
        {/* tooltip */}
        <div className="absolute right-14 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="bg-black text-white text-xs rounded-md px-2 py-1">
            Top
          </div>
        </div>
      </div>
    </div>
  );
}
 
 