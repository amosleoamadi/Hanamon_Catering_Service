import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { services, whatsappUrl } from "../../../../lib";
import SectionHeader from "../static/SectionHeader";
import { useTheme } from "../../../context/useTheme";

export default function Services() {
  const { darkMode } = useTheme();

  // Animation layout behaviors
  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      id="services"
      className={`py-24 border-t relative transition-colors duration-500 overflow-hidden ${
        darkMode
          ? "bg-zinc-900 border-zinc-950"
          : "bg-stone-50 border-stone-200"
      }`}
    >
      {/* Soft background ambient accent to break the monotony */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-amber-500/3 dark:bg-amber-500/1 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Animated Header Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            badge="What We Excel In"
            title="Catering Offerings Tailored to Perfection"
            description="From grand fairy-tale weddings to intimate corporate power lunches, we handle every detail so you can enjoy your moment."
          />
        </motion.div>

        {/* Services Card Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group relative border rounded-2xl overflow-hidden transition-all duration-300 flex flex-col h-full shadow-md ${
                darkMode
                  ? "bg-zinc-950/60 border-zinc-800/80 hover:border-amber-500/40 hover:shadow-amber-500/2"
                  : "bg-white border-stone-200/80 hover:border-amber-600/30 hover:shadow-xl hover:shadow-stone-200"
              }`}
            >
              {/* Media Container */}
              <div className="h-60 overflow-hidden relative">
                {/* Subtle dark-aware overlay veil */}
                <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent z-10 transition-all duration-500" />
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col grow space-y-4">
                <h3
                  className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                    darkMode
                      ? "text-white group-hover:text-amber-400"
                      : "text-zinc-900 group-hover:text-amber-600"
                  }`}
                >
                  {service.title}
                </h3>

                <p
                  className={`text-sm font-normal leading-relaxed grow ${
                    darkMode ? "text-zinc-400" : "text-stone-600"
                  }`}
                >
                  {service.description}
                </p>

                {/* Bottom Trigger Action Area */}
                <div
                  className={`pt-4 border-t flex items-center justify-between ${
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
                    Inquire Details
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
