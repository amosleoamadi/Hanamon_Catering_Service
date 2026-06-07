import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "../static/SectionHeader";
import { testimonials } from "../../../../lib";
import { useTheme } from "../../../context/useTheme";

export default function Testimonials() {
  const { darkMode } = useTheme();

  // Grid cascade orchestrator
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // Review cards drop into place one after another
      },
    },
  };

  // Card physics behavior definitions
  const cardItemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      className={`py-24 border-t transition-colors duration-500 relative overflow-hidden ${
        darkMode
          ? "bg-zinc-900 border-zinc-950"
          : "bg-zinc-100/70 border-stone-200"
      }`}
    >
      {/* Decorative oversized brand graphic context blurring inside the backdrop */}
      <Quote className="absolute -bottom-10 -right-10 w-80 h-80 opacity-[0.015] dark:opacity-[0.01] rotate-180 pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-125 h-125 bg-amber-500/2 dark:bg-amber-500/0.5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Reveal Container */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            icon={<Quote className="w-4 h-4" />}
            badge="Testimonials"
            title="What Our Clients Say"
            description="Trusted by hundreds of happy clients for unforgettable experiences"
          />
        </motion.div>

        {/* Staggered Animated Review Matrix */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={cardItemVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`border rounded-2xl p-6 backdrop-blur-md flex flex-col h-full transition-all duration-300 group ${
                darkMode
                  ? "bg-zinc-950/40 border-zinc-800/80 hover:border-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/1"
                  : "bg-white border-stone-200/60 hover:border-amber-600/20 hover:shadow-xl hover:shadow-stone-200/50"
              }`}
            >
              {/* Star Rating Strip */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-500 text-amber-500 dark:fill-amber-400 dark:text-amber-400 transform transition-transform duration-300 group-hover:scale-110"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>

              {/* Review Text Area */}
              <p
                className={`text-sm font-normal leading-relaxed grow italic transition-colors duration-300 ${
                  darkMode ? "text-zinc-300" : "text-zinc-700"
                }`}
              >
                "{testimonial.text}"
              </p>

              {/* Identity Footnote Block */}
              <div
                className={`mt-6 pt-4 border-t transition-colors duration-300 ${
                  darkMode ? "border-zinc-900" : "border-stone-100"
                }`}
              >
                <p
                  className={`font-bold tracking-tight text-base transition-colors duration-200 ${
                    darkMode
                      ? "text-white group-hover:text-amber-400"
                      : "text-zinc-900 group-hover:text-amber-700"
                  }`}
                >
                  {testimonial.name}
                </p>
                <p
                  className={`text-xs font-semibold tracking-wider uppercase mt-0.5 ${
                    darkMode ? "text-amber-400/80" : "text-amber-700/80"
                  }`}
                >
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
