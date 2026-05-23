interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={centered ? 'text-center max-w-2xl mx-auto mb-12' : 'mb-10'}>
      {eyebrow && (
        <span className="inline-block text-green-600 font-semibold text-sm uppercase tracking-widest mb-2">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-gray-500 text-lg leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
