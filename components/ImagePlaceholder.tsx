export function ImagePlaceholder({
  label,
  className = "aspect-video",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex w-full items-center justify-center bg-gradient-to-br from-neutral-300 to-neutral-400 text-xs font-medium uppercase tracking-wide text-neutral-600 ${className}`}
    >
      {label}
    </div>
  );
}
