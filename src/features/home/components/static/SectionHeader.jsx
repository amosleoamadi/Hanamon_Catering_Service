export default function SectionHeader({ icon, badge, title, description }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 dark:bg-zinc-900 border border-amber-200 dark:border-amber-500/30 rounded-full text-amber-600 dark:text-amber-400 text-sm tracking-wide">
        {icon && icon}
        {badge}
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h2>
      <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full mt-2" />
      <p className="text-gray-600 dark:text-zinc-400 font-light pt-2">
        {description}
      </p>
    </div>
  );
}
