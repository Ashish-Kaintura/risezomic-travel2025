import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FiPhoneCall, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#05070C] text-white pt-20 pb-10 px-6 md:px-20 relative overflow-hidden">

      {/* Premium Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent pointer-events-none"></div>

      {/* Top Section */}
      <div className="grid md:grid-cols-3 gap-14 relative z-10">

        {/* Logo + About */}
        <div>
          <h2 className="text-3xl font-extrabold tracking-wide">
            Risezonic <span className="text-blue-400">Travel</span>
          </h2>

          <p className="mt-4 text-gray-400 leading-relaxed text-sm">
            Discover premium curated travel packages, luxury destinations,
            and unforgettable global experiences with Risezonic — your trusted travel partner.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            <a
              href="https://www.facebook.com/risezonictravel"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="p-3 rounded-xl bg-white/10 hover:bg-blue-600/20 transition-all duration-300 backdrop-blur-md shadow-lg group-hover:scale-110">
                <FaFacebookF className="text-xl text-gray-200 group-hover:text-blue-400 transition" />
              </div>
            </a>

            <a
              href="https://www.instagram.com/risezonictravel/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="p-3 rounded-xl bg-white/10 hover:bg-pink-500/20 transition-all duration-300 backdrop-blur-md shadow-lg group-hover:scale-110">
                <FaInstagram className="text-xl text-gray-200 group-hover:text-pink-400 transition" />
              </div>
            </a>

            <a
              href="https://www.linkedin.com/company/risezonic-travel/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="p-3 rounded-xl bg-white/10 hover:bg-blue-500/20 transition-all duration-300 backdrop-blur-md shadow-lg group-hover:scale-110">
                <FaLinkedinIn className="text-xl text-gray-200 group-hover:text-blue-300 transition" />
              </div>
            </a>
            <a
              href="https://www.youtube.com/@risezonictravel"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="p-3 rounded-xl bg-white/10 hover:bg-blue-500/20 transition-all duration-300 backdrop-blur-md shadow-lg group-hover:scale-110">
                <FaYoutube className="text-xl text-gray-200 group-hover:text-blue-300 transition" />
              </div>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Quick Links</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            {[
              { name: "Home", link: "/" },
              { name: "Indian Holiday Packages", link: "/indian-Tour-Packages" },
              { name: "International Holiday Packages", link: "/international-holiday-packages" },
              { name: "About Us", link: "/about-us" },
              { name: "Flight", link: "/flights-booking" },
              { name: "Cruise", link: "/cruise-booking" },
              { name: "Contact", link: "/contact-us" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  to={item.link}
                  className="hover:text-blue-400 transition-all duration-300 flex items-center gap-1"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition"></span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Popular Destinations */}
        {/* <div>
          <h3 className="text-xl font-semibold mb-5">Popular Destinations</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            {[
              { name: "Dubai", link: "/dubai" },
              { name: "Bali", link: "/bali" },
              { name: "Manali", link: "/manali" },
              { name: "Kashmir", link: "/kashmir" },
              { name: "Thailand", link: "/thailand" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  to={item.link}
                  className="hover:text-blue-400 transition duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div> */}

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Contact Us</h3>

          <div className="flex items-start gap-3 text-gray-300 text-sm">
            {/* <IoLocationSharp className="text-xl text-blue-400" /> */}
            <p>Risezonic: RZ11/D, Upper Ground Floor Opp. Palam Metro Station Gate No 3, Palam Dwarka Road, Delhi, 110045</p>
            {/* <IoLocationSharp className="text-xl text-blue-400" /> */}
            <p>Risezonic - Awfis: 07th Floor, Gate No 3 & 4, Ambience Island, DLF Phase 3, NH-8, Gurugram, Haryana 122002</p>

          </div>


          <div className="flex items-center gap-3 mt-3 text-gray-300 text-sm">
            <FiPhoneCall className="text-lg text-blue-400" />
            <p>+91 81788 57250</p>
          </div>

          <div className="flex items-center gap-3 mt-3 text-gray-300 text-sm">
            <FiMail className="text-lg text-blue-400" />
            <p>info@risezonictravel.com</p>
          </div>

          {/* Newsletter */}
          <div className="mt-6">
            <p className="text-gray-300 mb-3 text-sm">Subscribe for offers</p>
            <div className="flex">
              <input
                type="text"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-xl bg-white/10 text-gray-200 w-full outline-none backdrop-blur-md text-sm border border-white/10"
              />
              <button className="px-5 py-2 bg-blue-600 rounded-r-xl hover:bg-blue-700 transition text-sm font-medium">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-400 text-sm relative z-10">
        © 2025 Risezonic Travel • All Rights Reserved
      </div>

      {/* Footer Bottom Links */}
      <div className="mt-4 text-center">
        <div className="flex justify-center gap-6 text-gray-500 text-xs">
          <Link to="/privacy-policy" className="hover:text-blue-400 transition">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-blue-400 transition">Terms & Conditions</Link>
          <Link to="/refund" className="hover:text-blue-400 transition">Refund Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
