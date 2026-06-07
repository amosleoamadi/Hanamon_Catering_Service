import { useState, useEffect, useRef } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../../../assets/logo.jpeg";
import { useTheme } from "../../../context/useTheme";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const isClickNavigating = useRef(false); // Prevents scroll observer from fighting manual clicks
  const location = useLocation();
  const { darkMode, toggleTheme } = useTheme();
  const isHomePage = location.pathname === "/";

  const navItems = [
    { label: "Home", href: "/", sectionId: "home" },
    { label: "About", href: "/#about", sectionId: "about" },
    { label: "Services", href: "/#services", sectionId: "services" },
    { label: "Gallery", href: "/#gallery", sectionId: "gallery" },
    {
      label: "Testimonials",
      href: "/#testimonials",
      sectionId: "testimonials",
    },
    { label: "Contact", href: "/#contact", sectionId: "contact" },
  ];

  // 1. AUTOMATIC SCROLL SPY EFFECT
  useEffect(() => {
    if (!isHomePage) return;

    // const observers = [];

    // Config: Trigger when a section takes up 40% of the viewport area
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -40% 0px",
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      // If we are currently mid-smooth-scroll from a click, ignore scroll detections temporarily
      if (isClickNavigating.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    // Watch all matching sections on your home page
    navItems.forEach((item) => {
      if (item.sectionId) {
        const element = document.getElementById(item.sectionId);
        if (element) observer.observe(element);
      }
    });

    // Special logic to catch when user scrolls all the way back to the very top
    const handleTopScroll = () => {
      if (window.scrollY < 100 && !isClickNavigating.current) {
        setActiveSection("home");
      }
    };
    window.addEventListener("scroll", handleTopScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleTopScroll);
    };
  }, [isHomePage]);

  // 2. MANUAL CLICK NAVIGATION HANDLER
  const handleNavigation = (e, item) => {
    e.preventDefault();
    setIsOpen(false);

    if (item.sectionId) {
      setActiveSection(item.sectionId);
    }

    if (isHomePage && item.sectionId) {
      // Lock scroll spy detection briefly so it doesn't stutter while moving fast across sections
      isClickNavigating.current = true;

      if (item.sectionId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.pushState(null, "", "/");
        setTimeout(() => {
          isClickNavigating.current = false;
        }, 800);
      } else {
        const element = document.getElementById(item.sectionId);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.scrollY - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
        window.history.pushState(null, "", item.href);
        // Release lock after smooth scroll settles down
        setTimeout(() => {
          isClickNavigating.current = false;
        }, 800);
      }
      return;
    }

    window.location.href = item.href;
  };

  // Full screen mobile menu animations
  const menuOverlayVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
    exit: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const linkItemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -15, transition: { duration: 0.3 } },
  };

  return (
    <>
      {/* Give your home view container component the id="home" if you want to track it precisely! */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-black/85 backdrop-blur-md z-50 border-b border-gray-100 dark:border-zinc-900 transition-colors duration-500">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="shrink-0 cursor-pointer relative z-55">
            <Link
              to="/"
              onClick={(e) =>
                handleNavigation(e, { href: "/", sectionId: "home" })
              }
            >
              <img
                src={logo}
                alt="Hanamon Catering Logo"
                className="h-11 w-auto rounded-lg border border-gray-200/80 dark:border-zinc-800 transition-all duration-300 hover:scale-103 hover:border-amber-500"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.sectionId;

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={(e) => handleNavigation(e, item)}
                  className={`relative py-1 font-bold tracking-wider text-xs uppercase transition-colors duration-300 ${
                    isActive
                      ? "text-amber-600 dark:text-amber-400"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-400"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="desktopActiveIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Action Accessories */}
          <div className="flex items-center gap-3 relative z-55">
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
              animate={{ rotate: darkMode ? 360 : 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="p-2.5 rounded-xl bg-stone-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-400 hover:bg-stone-200 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-zinc-800 dark:text-white hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuOverlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 w-full h-screen z-40 bg-white dark:bg-black flex flex-col justify-center items-center overflow-hidden"
          >
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-amber-500/[0.04] dark:bg-amber-500/[0.02] blur-3xl rounded-full pointer-events-none" />

            <div className="flex flex-col items-center gap-6 relative z-10 w-full px-6 text-center">
              {navItems.map((item) => {
                const isActive = activeSection === item.sectionId;

                return (
                  <motion.div
                    key={item.label}
                    variants={linkItemVariants}
                    className="w-full"
                  >
                    <Link
                      to={item.href}
                      onClick={(e) => handleNavigation(e, item)}
                      className={`block py-3 text-2xl font-black uppercase tracking-widest transition-all duration-300 relative group max-w-xs mx-auto ${
                        isActive
                          ? "text-amber-500 dark:text-amber-400 scale-105"
                          : "text-zinc-800 dark:text-zinc-300 hover:text-amber-500 dark:hover:text-amber-400"
                      }`}
                    >
                      <span className="relative z-10">{item.label}</span>
                      <span
                        className={`absolute bottom-2 left-1/2 -translate-x-1/2 h-0.5 bg-amber-500 dark:bg-amber-400 transition-all duration-300 ease-out ${
                          isActive ? "w-16" : "w-0 group-hover:w-16"
                        }`}
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
