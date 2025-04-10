import React, { useState } from "react";
import NavItems from "./navItems.jsx";

import { LazyLoadImage } from "react-lazy-load-image-component";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen((pre) => !pre);
    };
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90">
          <div className="max-w-7xl mx-auto">
                  <div className="flex justify-between items-center py-5 mx-auto c-space">
                      <a
                        href="/"
                        rel="noreferrer"
                        className="flex items-center gap-2"
                      >
                          <LazyLoadImage
                            src={"/logo.png"}
                            alt="Logo"
                            width={48}
                            height={40}
                          />
                          <span className="text-xl font-bold">FUYIN Marketing</span>
                      </a>
                      <button
                        onClick={toggleMenu}
                        className="text-back hover:text-white focus:outline-none sm:hidden flex"
                        aria-label="Toggle button"
                      >
                          <img
                            src={isOpen ? "/image/close.svg" : "/image/menu.svg"}
                            alt="toggle"
                            className="w-6 h-6 invert"
                          />
                      </button>
                      <nav className="sm:flex hidden">
                          <NavItems/>
                      </nav>
                  </div>
              </div>
              <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
              <nav className="p-5">
                  <NavItems/>
              </nav>
          </div>
      </header>
    );
}

export default Navbar;
