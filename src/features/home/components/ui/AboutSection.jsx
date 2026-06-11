import { useEffect, useRef, useState } from "react";
import { Users, ChefHat, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { whatsappUrl } from "../../../../lib";
import { useTheme } from "../../../context/useTheme";

function CountUp({ to, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      let start = 0;
      const duration = 2000; // 2 seconds
      const stepTime = 20; // update every 20ms
      const steps = duration / stepTime;
      const increment = to / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= to) {
          setCount(to);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, to]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const { darkMode } = useTheme();

  const slideInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

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
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  return (
    <section
      className={`py-24 border-t transition-colors duration-500 relative overflow-hidden ${
        darkMode
          ? "bg-zinc-950 border-zinc-900"
          : "bg-zinc-100/80 border-stone-200"
      }`}
    >
      <div className="absolute top-0 right-0 w-125 h-125 bg-amber-500/2 dark:bg-amber-500/1 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Chef Image Showcase */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
            className="relative group lg:pr-4"
          >
            <div
              className={`absolute -inset-3 rounded-2xl opacity-10 group-hover:opacity-20 transition duration-700 blur-lg ${
                darkMode ? "bg-amber-400" : "bg-amber-900"
              }`}
            />

            <div
              className={`absolute bottom-4 -left-4 w-24 h-24 border-l-2 border-b-2 rounded-bl-xl pointer-events-none transition-transform duration-500 group-hover:-translate-x-1 group-hover:translate-y-1 ${
                darkMode ? "border-amber-500/30" : "border-amber-900/20"
              }`}
            />

            <div
              className={`relative overflow-hidden rounded-2xl border shadow-xl ${
                darkMode
                  ? "border-zinc-800 bg-zinc-900"
                  : "border-stone-200 bg-stone-50"
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80"
                alt="Chef Hanamon - Executive Chef"
                className="w-full h-full object-cover aspect-4/5 filter saturate-[0.85] contrast-[1.02] group-hover:saturate-100 group-hover:scale-[1.03] transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 backdrop-blur-xs bg-black/30 p-4 rounded-xl border border-white/10">
                <div className="flex gap-2 items-center">
                  <ChefHat className="w-5 h-5 text-amber-400 animate-pulse" />
                  <span className="text-white font-bold text-lg tracking-tight">
                    Chef Hanamon
                  </span>
                </div>
                <p className="text-amber-400/90 text-xs tracking-wider uppercase font-medium mt-0.5">
                  Executive Chef & Founder
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Chef Story Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.div variants={fadeInUp} className="inline-block">
              <div
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 backdrop-blur-xs ${
                  darkMode
                    ? "bg-zinc-900 border border-amber-500/20 text-amber-400"
                    : "bg-amber-900/10 border border-amber-900/10 text-amber-900"
                }`}
              >
                <Users className="w-4 h-4 text-amber-600 dark:text-amber-400" />{" "}
                Our Story
              </div>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className={`text-3xl sm:text-4xl font-black tracking-tight leading-tight ${
                darkMode ? "text-white" : "text-zinc-900"
              }`}
            >
              Crafting Culinary Excellence Since 2012
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="w-12 h-1 bg-linear-to-r from-amber-500 to-amber-600 rounded-full"
            />

            <motion.div
              variants={fadeInUp}
              className="space-y-4 font-normal text-base leading-relaxed"
            >
              <p className={darkMode ? "text-zinc-400" : "text-zinc-700"}>
                Chef Hanamon brings over 5 years of experience in luxury
                catering, having trained in Paris and worked in Michelin-starred
                kitchens before founding Hanamon Catering Service. Our
                philosophy is simple: every event deserves unforgettable food
                that creates lasting memories.
              </p>
              <p className={darkMode ? "text-zinc-400" : "text-zinc-700"}>
                We pride ourselves on using only the finest seasonal
                ingredients, innovative presentation, and impeccable service.
                From intimate gatherings to grand celebrations, our team ensures
                that your culinary experience exceeds expectations.
              </p>
            </motion.div>

            {/* Stats Block */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              {[
                { targetValue: 100, suffix: "+", title: "Events Catered" },
                { targetValue: 50, suffix: "+", title: "5-Star Reviews" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-xl border transition-all duration-300 ${
                    darkMode
                      ? "bg-zinc-900/40 border-zinc-900 hover:border-zinc-800"
                      : "bg-zinc-50 border-zinc-200/60 hover:border-zinc-300"
                  }`}
                >
                  <div className="text-3xl font-black tracking-tight text-amber-600 dark:text-amber-400">
                    <CountUp to={stat.targetValue} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest mt-1 text-zinc-500">
                    {stat.title}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold text-sm tracking-wide uppercase transition-all duration-300 group text-amber-700 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300"
              >
                Meet the team
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
