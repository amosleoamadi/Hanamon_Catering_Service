import { Mail, Phone } from "lucide-react";
import { BsInstagram, BsTiktok } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import logo from "../../../../assets/logo.jpeg"; // adjust path as needed

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const scrollToSection = (sectionId) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <footer className="bg-gray-100 dark:bg-black border-t border-gray-300 dark:border-zinc-900 text-gray-600 dark:text-zinc-400 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand with Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Hanamon Catering Service Logo"
                className="h-10 w-auto rounded-md border border-gray-300 dark:border-zinc-800"
              />
              <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white">
                Hanamon
                <span className="text-amber-500 dark:text-amber-400">
                  {" "}
                  Catering
                </span>
              </h3>
            </div>
            <p className="text-gray-500 dark:text-zinc-500 font-light text-sm">
              Professional event catering services creating unforgettable
              culinary experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-gray-900 dark:text-white font-semibold">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={(e) => handleLinkClick(e, "about")}
                  className="text-gray-600 dark:text-zinc-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleLinkClick(e, "services")}
                  className="text-gray-600 dark:text-zinc-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleLinkClick(e, "gallery")}
                  className="text-gray-600 dark:text-zinc-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleLinkClick(e, "contact")}
                  className="text-gray-600 dark:text-zinc-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-gray-900 dark:text-white font-semibold">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={(e) => handleLinkClick(e, "services")}
                  className="text-gray-600 dark:text-zinc-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
                >
                  Weddings
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleLinkClick(e, "services")}
                  className="text-gray-600 dark:text-zinc-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
                >
                  Corporate Events
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleLinkClick(e, "services")}
                  className="text-gray-600 dark:text-zinc-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
                >
                  Birthday Celebrations
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleLinkClick(e, "services")}
                  className="text-gray-600 dark:text-zinc-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
                >
                  Private Events
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-gray-900 dark:text-white font-semibold">
              Contact Info
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                <span className="text-gray-600 dark:text-zinc-400">
                  081 652 19031
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                <span className="text-gray-600 dark:text-zinc-400">
                  Hanamoncateringservices@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 dark:border-zinc-900 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.tiktok.com/@hanamoncateringse?_r=1&_t=ZS-975th2hiNUb"
                className="text-gray-500 dark:text-zinc-500 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
              >
                <BsTiktok className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/hanamon_catering_services?igsh=MThjcG1lM3hjenVsaQ=="
                className="text-gray-500 dark:text-zinc-500 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
              >
                <BsInstagram className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-xs text-gray-500 dark:text-zinc-600 text-center">
              &copy; {currentYear} Hanamon Catering Service. All rights
              reserved. <br className="sm:hidden" />
              Bringing culinary excellence to your celebrations.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
