import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FiPhoneCall, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#0B0E14] text-white pt-16 pb-10 px-6 md:px-20">
      {/* Top Section */}
      <div className="grid md:grid-cols-4 gap-12">

        {/* Logo + About */}
        <div>
          <h2 className="text-3xl font-bold tracking-wide">
            RiseZonic <span className="text-blue-400">Travel</span>
          </h2>

          <p className="mt-4 text-gray-400 leading-relaxed">
            Explore the world with premium curated packages, luxury stays, and
            unforgettable experiences with RiseZonic — your trusted travel partner.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <div
                key={i}
                className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition cursor-pointer backdrop-blur-md shadow-lg"
              >
                <Icon className="text-xl text-gray-200" />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-300">
            {["Home", "Destinations", "Holiday Packages", "About Us", "Contact"].map((item, i) => (
              <li key={i} className="hover:text-blue-400 transition cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Popular Destinations */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Popular Destinations</h3>
          <ul className="space-y-3 text-gray-300">
            {["Dubai", "Bali", "Manali", "Kashmir", "Thailand"].map((item, i) => (
              <li key={i} className="hover:text-blue-400 transition cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>

          <div className="flex items-start gap-3 text-gray-300">
            <IoLocationSharp className="text-xl text-blue-400" />
            <p>RiseZonic HQ, New Delhi, India</p>
          </div>

          <div className="flex items-center gap-3 mt-3 text-gray-300">
            <FiPhoneCall className="text-lg text-blue-400" />
            <p>+91 98765 43210</p>
          </div>

          <div className="flex items-center gap-3 mt-3 text-gray-300">
            <FiMail className="text-lg text-blue-400" />
            <p>contact@risezonic.com</p>
          </div>

          {/* Newsletter */}
          <div className="mt-6">
            <p className="text-gray-300 mb-2">Subscribe for offers</p>
            <div className="flex">
              <input
                type="text"
                placeholder="Your email"
                className="px-3 py-2 rounded-l-xl bg-white/10 text-gray-200 w-full outline-none backdrop-blur-sm"
              />
              <button className="px-4 py-2 bg-blue-500 rounded-r-xl hover:bg-blue-600 transition">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-400">
        © 2025 RiseZonic Travel. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
