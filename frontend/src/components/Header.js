import React, { useState, useEffect } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import cultLogo from "../assets/cult_logo.jpeg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    { name: "Home", slug: "/" },
    { name: "Clubs", slug: "/clubs" },
    { name: "Events", slug: "/events" },
    { name: "Initiatives", slug: "/initiatives" },
    { name: "Announcements", slug: "/announcements" },
    { name: "Contacts", slug: "/contacts" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      const nav = document.querySelector("nav");
      if (nav && !nav.contains(event.target) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close mobile menu when clicking on links
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="shadow-lg sticky top-0 z-50 bg-white">
      <div className="w-full mx-auto">
        <nav className="font-poppins transition-all duration-300 flex items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="w-full max-w-7xl mx-auto">
            <div className="flex items-center justify-between h-20 px-4 sm:px-6 md:px-8 lg:px-10">
              {/* Logo and Brand */}
              <Link
                to="/"
                className="flex items-center gap-2 md:gap-3 cursor-pointer flex-shrink-0"
              >
                <img
                  src={cultLogo}
                  alt="Cultural Board IIT Guwahati"
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                />
                <div className="leading-tight text-xs md:text-sm text-gray-800">
                  <p className="font-semibold">
                    Cultural
                    <br /> BOARD
                  </p>
                  <p className="font-light">IIT Guwahati</p>
                </div>
              </Link>
              {/* Desktop Navigation */}
              <ul className="hidden md:flex items-center ml-auto space-x-4 text-sm">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <NavLink
                      to={item.slug}
                      className={({ isActive }) =>
                        `inline-block px-4 py-2 duration-300 rounded-full font-medium transition-all text-center
                          ${
                            isActive
                              ? "text-[#7BB9C4] bg-[#f0fbfc]"
                              : "text-gray-700 hover:text-[#7BB9C4] hover:bg-gray-50"
                          }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-gray-700 focus:outline-none"
                aria-label="Toggle navigation menu"
                aria-expanded={isMenuOpen}
              >
                <div className="relative w-6 h-6">
                  <IoMenu
                    className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                      isMenuOpen
                        ? "opacity-0 rotate-180"
                        : "opacity-100 rotate-0"
                    }`}
                  />
                  <RxCross2
                    className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                      isMenuOpen
                        ? "opacity-100 rotate-0"
                        : "opacity-0 -rotate-180"
                    }`}
                  />
                </div>
              </button>
            </div>

            {/* Mobile Navigation Menu */}
            <div
              className={`md:hidden bg-white border-t border-gray-200 transition-all duration-300 ease-in-out overflow-hidden ${
                isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <ul className="px-4 py-2 space-y-1">
                {navItems.map((item) => (
                  <li className="m-0 w-full" key={item.name}>
                    <NavLink
                      to={item.slug}
                      onClick={toggleMenu}
                      className="block px-4 py-3 text-gray-700 hover:text-[#7BB9C4] hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium active:bg-gray-100"
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
