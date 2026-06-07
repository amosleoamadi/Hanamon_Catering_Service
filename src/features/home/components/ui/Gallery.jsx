import { Camera } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "../static/SectionHeader";
import { galleryImages } from "../../../../lib";
import { useTheme } from "../../../context/useTheme";

export default function Gallery() {
  const { darkMode } = useTheme();

  // Grid container stagger orchestration
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Staggers the image load wave perfectly
      },
    },
  };

  // Individual grid image item animations
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.92, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      className={`py-24 border-t transition-colors duration-500 relative overflow-hidden ${
        darkMode ? "bg-black border-zinc-900" : "bg-white border-stone-200"
      }`}
    >
      {/* Delicate organic glow backdrops behind the gallery elements */}
      <div className="absolute -top-40 -left-40 w-150 h-150 bg-amber-500/2 dark:bg-amber-500/1 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Animated Section Title Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            icon={<Camera className="w-4 h-4" />}
            badge="Visual Journey"
            title="Our Culinary Gallery"
            description="Explore moments from recent events and our signature presentations"
          />
        </motion.div>

        {/* Staggered Animated Image Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-2xl border aspect-square cursor-pointer transition-all duration-500 ${
                darkMode
                  ? "border-zinc-900 bg-zinc-950 hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/2"
                  : "border-stone-200 bg-stone-50 hover:border-amber-600/30 hover:shadow-2xl hover:shadow-stone-200"
              }`}
            >
              {/* Media Wrap with dynamic scale overlay interaction */}
              <div className="w-full h-full overflow-hidden relative">
                <img
                  src={img}
                  alt={`Gallery image ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 group-hover:rotate-[0.5deg]"
                />

                {/* Immersive Dark Shadow-Veil Gradient Blend */}
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-10" />
              </div>

              {/* Text Link Reveal Effect sliding into view smoothly on hover */}
              <div className="absolute inset-x-0 bottom-0 z-20 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="text-white text-sm font-bold tracking-wide">
                    View Event
                  </span>
                  <p className="text-amber-400 text-xs font-medium tracking-wider uppercase">
                    Hanamon Catering
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white transform scale-90 group-hover:scale-100 transition-transform duration-500">
                  <Camera className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
