import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { whatsappUrl } from "../../../../lib";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { useTheme } from "../../../context/useTheme";

export default function Contact() {
  const { darkMode } = useTheme();

  // Animation configurations for balanced panel entries
  const slideInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.1 },
    },
  };

  return (
    <section
      id="contact"
      className={`py-24 border-t transition-colors duration-500 relative overflow-hidden ${
        darkMode ? "bg-black border-zinc-900" : "bg-stone-100 border-stone-200"
      }`}
    >
      {/* Background ambient lighting blur ring */}
      <div className="absolute bottom-0 right-0 w-150 h-150 bg-amber-500/2 dark:bg-amber-500/0.5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
            className="space-y-8"
          >
            <div
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 backdrop-blur-xs ${
                darkMode
                  ? "bg-zinc-900 border border-amber-500/20 text-amber-400"
                  : "bg-amber-900/10 border border-amber-900/10 text-amber-900"
              }`}
            >
              <Phone className="w-3.5 h-3.5" /> Get in Touch
            </div>

            <h2
              className={`text-3xl sm:text-4xl font-black tracking-tight leading-tight ${
                darkMode ? "text-white" : "text-zinc-900"
              }`}
            >
              Let's Create Something{" "}
              <span className="bg-linear-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent dark:from-amber-400 dark:to-amber-500">
                Extraordinary
              </span>
            </h2>

            <div className="w-12 h-1 bg-linear-to-r from-amber-500 to-amber-600 rounded-full" />

            <p
              className={`text-base font-normal leading-relaxed max-w-md ${
                darkMode ? "text-zinc-400" : "text-stone-600"
              }`}
            >
              Ready to elevate your next event with world-class catering? Reach
              out to us today, and let's start planning an unforgettable
              culinary experience.
            </p>

            {/* Direct Connect Directory */}
            <div className="space-y-4 font-medium text-sm">
              <div
                className={`flex items-center gap-4 transition-colors ${
                  darkMode ? "text-zinc-300" : "text-zinc-800"
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <a
                  href="tel:+1234567890"
                  className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>

              <div
                className={`flex items-center gap-4 transition-colors ${
                  darkMode ? "text-zinc-300" : "text-zinc-800"
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <a
                  href="mailto:hello@hanamoncatering.com"
                  className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
                >
                  hello@hanamoncatering.com
                </a>
              </div>

              <div
                className={`flex items-center gap-4 transition-colors ${
                  darkMode ? "text-zinc-300" : "text-zinc-800"
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Serving Nationwide & Destination Events</span>
              </div>
            </div>

            {/* Social Links Panel */}
            <div className="flex gap-4 pt-2">
              {[
                { icon: <BsInstagram className="w-5 h-5" />, href: "#" },
                { icon: <BsFacebook className="w-5 h-5" />, href: "#" },
                { icon: <BsTwitter className="w-5 h-5" />, href: "#" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -3, scale: 1.05 }}
                  className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-colors ${
                    darkMode
                      ? "border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-amber-400 hover:border-amber-500/30"
                      : "border-stone-200 bg-white text-stone-500 hover:text-amber-700 hover:border-amber-600/30"
                  }`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <div className="pt-4">
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-amber-500 to-amber-600 text-white font-bold text-sm tracking-wide uppercase rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-xl shadow-amber-500/10"
              >
                <MessageCircle className="w-4 h-4" /> Book via WhatsApp
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Decorative CTA Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight}
            className="relative lg:pl-6"
          >
            <div
              className={`absolute -inset-2 rounded-3xl opacity-30 dark:opacity-20 blur-xl bg-linear-to-tr ${
                darkMode
                  ? "from-amber-500/10 to-zinc-800/10"
                  : "from-amber-400/20 to-stone-300/40"
              }`}
            />

            <div
              className={`relative overflow-hidden rounded-2xl border p-10 text-center space-y-6 ${
                darkMode
                  ? "border-zinc-800 bg-zinc-950/40 backdrop-blur-md"
                  : "border-stone-200/80 bg-white shadow-xl shadow-stone-200/40"
              }`}
            >
              <div className="w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400 mx-auto">
                <ShieldCheck className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <h3
                  className={`text-2xl font-black tracking-tight ${
                    darkMode ? "text-white" : "text-zinc-900"
                  }`}
                >
                  Ready to Book?
                </h3>
                <p
                  className={`text-sm font-normal ${
                    darkMode ? "text-zinc-400" : "text-stone-500"
                  }`}
                >
                  Get a personalized event proposal and accurate quote within 24
                  hours.
                </p>
              </div>

              <div
                className={`pt-4 border-t ${
                  darkMode ? "border-zinc-900" : "border-stone-100"
                }`}
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xs font-bold tracking-widest uppercase inline-flex items-center gap-1.5 transition-colors group/link ${
                    darkMode
                      ? "text-amber-400 hover:text-amber-300"
                      : "text-amber-700 hover:text-amber-600"
                  }`}
                >
                  Start your inquiry
                  <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
