import { categories } from "./SiteHeader";

export function SiteFooter() {
  return (
    <footer className="mt-6 bg-brand-dark px-4 py-8 text-sm text-neutral-400">
      <div className="mb-4 flex flex-wrap gap-4 text-white">
        {categories.map((c) => (
          <span key={c} className="cursor-pointer hover:underline">
            {c}
          </span>
        ))}
      </div>
      <p>&copy; 2026 Fast News Network. All rights reserved.</p>
    </footer>
  );
}
