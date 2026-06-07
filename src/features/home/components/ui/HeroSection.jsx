import { Award, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { whatsappUrl } from "../../../../lib";
import { useTheme } from "../../../context/useTheme";

export default function Hero() {
  const { darkMode } = useTheme();

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  return (
    /* Light Mode: Changed from bg-white to an ultra-premium warm champagne/sand tone (bg-stone-100) */
    <section className="relative min-h-screen flex items-center justify-center bg-stone-100 dark:bg-zinc-950 pt-20 overflow-hidden transition-colors duration-500">
      {/* Background gradients shifting beautifully between sand/amber tones and deep zinc */}
      <div
        className={`absolute inset-0 transition-all duration-700 ${
          darkMode
            ? "bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-amber-950/20 via-zinc-950 to-zinc-950 opacity-100"
            : "bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-amber-200/30 via-stone-100 to-stone-100 opacity-100"
        }`}
      />

      {/* Floating accent glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none animate-pulse duration-6000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
        {/* Left Column - Text Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-8 text-center lg:text-left"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="inline-block">
            <div
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 backdrop-blur-sm ${
                darkMode
                  ? "bg-zinc-900/80 border border-amber-500/30 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.1)]"
                  : "bg-amber-900/10 border border-amber-900/20 text-amber-900 shadow-xs"
              }`}
            >
              <Award className="w-4 h-4 text-amber-600 dark:text-amber-500" />{" "}
              Premium Catering Experience
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-stone-900 dark:text-white leading-[1.15]"
          >
            Unforgettable Culinary Masterpieces by{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-600 via-amber-700 to-amber-600 dark:from-amber-400 dark:via-amber-300 dark:to-amber-500">
              Hanamon
            </span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            variants={fadeInUp}
            className="text-lg text-stone-700 dark:text-zinc-400 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed"
          >
            We transform your weddings, corporate milestones, and private
            celebrations into elite gastronomic events with curated luxury menus
            and immaculate service.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-r from-amber-500 to-amber-600 text-stone-950 font-bold rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-lg shadow-amber-600/20 dark:shadow-amber-500/10 hover:shadow-xl hover:shadow-amber-600/30 hover:-translate-y-1 transform active:translate-y-0"
            >
              Book Our Services <Calendar className="w-5 h-5" />
            </a>

            <a
              href="#services"
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-xl border transition-all duration-300 hover:-translate-y-1 transform active:translate-y-0 group ${
                darkMode
                  ? "bg-transparent border-zinc-800 text-white hover:bg-zinc-900 hover:border-amber-500/50"
                  : "bg-amber-900/5 border-amber-900/20 text-amber-950 hover:bg-amber-900/10 hover:border-amber-600/50 shadow-xs"
              }`}
            >
              Explore Services{" "}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            variants={fadeInUp}
            className={`grid grid-cols-3 gap-4 p-6 rounded-2xl border max-w-md mx-auto lg:mx-0 backdrop-blur-sm transition-colors duration-300 ${
              darkMode
                ? "border-zinc-900 bg-zinc-900/30"
                : "border-stone-200 bg-stone-50/60"
            }`}
          >
            {[
              { value: "100%", label: "Bespoke Menus" },
              { value: "Elite", label: "Chefs Only" },
              { value: "Seamless", label: "Execution" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                <span className="text-amber-600 dark:text-amber-400 font-extrabold text-2xl tracking-tight">
                  {stat.value}
                </span>
                <span className="text-stone-500 dark:text-zinc-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column - Media Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Ambient Image Shadow Glow */}
          <div
            className={`absolute -inset-2 rounded-3xl opacity-40 blur-2xl transition-all duration-500 ${
              darkMode
                ? "bg-linear-to-tr from-amber-500 to-purple-600"
                : "bg-linear-to-tr from-amber-500 to-amber-300"
            }`}
          />

          <div
            className={`relative w-full max-w-md lg:max-w-lg aspect-4/5 rounded-2xl overflow-hidden border shadow-2xl group transition-colors duration-500 ${
              darkMode
                ? "border-zinc-800 bg-zinc-900"
                : "border-stone-200 bg-stone-50"
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
              alt="Hanamon Catering Masterpiece"
              className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-105 filter saturate-100 dark:brightness-90 dark:contrast-105"
            />

            <div className="absolute inset-0 bg-linear-to-t from-stone-950 via-stone-950/20 to-transparent opacity-80" />

            {/* Caption Card */}
            <div className="absolute bottom-6 left-6 right-6 p-5 bg-stone-950/80 backdrop-blur-md border border-stone-800/50 rounded-xl transition-transform duration-500 group-hover:-translate-y-1">
              <p className="text-amber-400 text-xs font-bold tracking-widest uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
                Signature Dish
              </p>
              <p className="text-sm text-stone-200 mt-2 font-light leading-relaxed">
                Crafted with fresh seasonal ingredients and impeccable artistry.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
