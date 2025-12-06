import { NavLink, Link } from "react-router-dom";
import Logo from "../images/logo/risezoniclogo.png";
import { useState, useEffect } from "react";
import { TiThMenu, TiTimes } from "react-icons/ti";
import { MdNavigateNext } from "react-icons/md";
import { IoChevronDownOutline } from "react-icons/io5";

export default function HomeNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 10);
    });
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDropdown = (menu) =>
    setActiveDropdown(activeDropdown === menu ? null : menu);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? "backdrop-blur-xl bg-black/60 shadow-lg"
        : "bg-transparent"
        }`}
    >
      <nav className=" mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={Logo}
            alt="Logo"
            className={`transition-all duration-300 ${isScrolled ? "w-24" : "w-28"
              }`}
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 text-white items-center font-medium">
          <li>
            <NavLink to="/about-us" className="hover:text-yellow-400 transition">
              About Us
            </NavLink>
          </li>

          {/* PACKAGES DROPDOWN */}
          <li className="relative group">
            <button className="flex items-center gap-1 hover:text-yellow-400">
              Packages <IoChevronDownOutline />
            </button>

            <div className="absolute top-6 left-0 hidden group-hover:block bg-white text-black shadow-xl rounded-xl py-4 w-60">
              <NavLink
                to="/indian-Tour-Packages"
                className="block px-5 py-2 hover:bg-gray-900 hover:text-white rounded-md"
              >
                Indian Holiday
              </NavLink>
              <NavLink
                to="/international-holiday-packages"
                className="block px-5 py-2 hover:bg-gray-900 hover:text-white rounded-md"
              >
                International Holiday
              </NavLink>
              <NavLink
                to="/international-honeymoon-tour-packages"
                className="block px-5 py-2 hover:bg-gray-900 hover:text-white rounded-md"
              >
                International Honeymoon
              </NavLink>
              <NavLink
                to="/indian-honeymoon-tour-packages"
                className="block px-5 py-2 hover:bg-gray-900 hover:text-white rounded-md"
              >
                Indian Honeymoon
              </NavLink>
            </div>
          </li>

          <li>
            <NavLink to="/flights-booking" className="hover:text-yellow-400 transition">
              Flights
            </NavLink>
          </li>
          <li>
            <NavLink to="/mice" className="hover:text-yellow-400 transition">
              Mice
            </NavLink>
          </li>
          <li>
            <NavLink to="/services/hotels-booking" className="hover:text-yellow-400 transition">
              Hotel Booking
            </NavLink>
          </li>

          {/* MORE DROPDOWN */}
          <li className="relative group">
            <button className="flex items-center gap-1 hover:text-yellow-400">
              More <IoChevronDownOutline />
            </button>

            <div className="absolute top-6 left-0 hidden group-hover:block bg-white text-black shadow-xl rounded-xl py-4 w-52">
              <NavLink to="/cruise-booking" className="block px-5 py-2 hover:bg-gray-900 hover:text-white rounded-md">
                Cruise
              </NavLink>
              <NavLink to="/visa" className="block px-5 py-2 hover:bg-gray-900 hover:text-white rounded-md">
                Visa
              </NavLink>
              <NavLink to="/corporate-event-booking" className="block px-5 py-2 hover:bg-gray-900 hover:text-white rounded-md">
                Events
              </NavLink>
              <NavLink to="/Insurance" className="block px-5 py-2 hover:bg-gray-900 hover:text-white rounded-md">
                Insurance
              </NavLink>
            </div>
          </li>

          {/* Contact Button */}
          <Link to="/contact-us">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-5 py-2 rounded-lg shadow-md transition font-semibold">
              Contact Us
            </button>
          </Link>
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button className="lg:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <TiTimes className="text-4xl text-white" />
          ) : (
            <TiThMenu className="text-4xl text-white" />
          )}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-screen w-[100%] 
  bg-black/95 backdrop-blur-xl text-white shadow-2xl transition-all duration-500
  ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button inside drawer */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
          <img src={Logo} alt="Logo" className="w-24" />

          <button onClick={toggleMenu}>
            <TiTimes className="text-4xl text-white" />
          </button>
        </div>

        {/* Menu Links */}
        <ul className="px-6 py-6 space-y-5 text-lg font-light">

          <li onClick={toggleMenu}>
            <NavLink className="block py-2" to="/">Home</NavLink>
          </li>

          <li onClick={toggleMenu}>
            <NavLink className="block py-2" to="/about-us">About Us</NavLink>
          </li>

          {/* --- MOBILE DROPDOWN: PACKAGES --- */}
          <li>
            <button
              onClick={() => toggleDropdown("packages")}
              className="flex justify-between items-center w-full py-2"
            >
              <span>Packages</span>
              <MdNavigateNext
                className={`transition-transform ${activeDropdown === "packages" ? "rotate-90" : ""}`}
              />
            </button>

            <div
              className={`ml-3 mt-2 space-y-3 text-gray-300 overflow-hidden transition-all duration-300
        ${activeDropdown === "packages" ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <NavLink to="/indian-Tour-Packages" onClick={toggleMenu}>Indian Holiday</NavLink> <br />
              <NavLink to="/international-holiday-packages" onClick={toggleMenu}>International Holiday</NavLink> <br />
              <NavLink to="/international-honeymoon-tour-packages" onClick={toggleMenu}>Int. Honeymoon</NavLink> <br />
              <NavLink to="/indian-honeymoon-tour-packages" onClick={toggleMenu}>Indian Honeymoon</NavLink> <br />
            </div>
          </li>

          {/* Other Direct Links */}
          <li onClick={toggleMenu}>
            <NavLink className="block py-2" to="/flights-booking">Flights</NavLink>
          </li>
          <li onClick={toggleMenu}>
            <NavLink className="block py-2" to="/mice">Mice</NavLink>
          </li>

          <li onClick={toggleMenu}>
            <NavLink className="block py-2" to="/services/hotels-booking">Hotel Booking</NavLink>
          </li>

          {/* --- MOBILE DROPDOWN: MORE --- */}
          <li>
            <button
              onClick={() => toggleDropdown("more")}
              className="flex justify-between items-center w-full py-2"
            >
              <span>More</span>
              <MdNavigateNext
                className={`transition-transform ${activeDropdown === "more" ? "rotate-90" : ""}`}
              />
            </button>

            <div
              className={`ml-3 mt-2 space-y-3 text-gray-300 overflow-hidden transition-all duration-300
        ${activeDropdown === "more" ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <NavLink to="/cruise-booking" onClick={toggleMenu}>Cruise</NavLink> <br />
              <NavLink to="/visa" onClick={toggleMenu}>Visa</NavLink> <br />
              <NavLink to="/corporate-event-booking" onClick={toggleMenu}>Events</NavLink> <br/>
              <NavLink to="/Insurance" onClick={toggleMenu}>Insurance</NavLink> <br/>
            </div>
          </li>

          <li onClick={toggleMenu}>
            <NavLink className="block py-2" to="/ContactUs">Contact Us</NavLink>
          </li>

        </ul>
      </div>

    </header>
  );
}
