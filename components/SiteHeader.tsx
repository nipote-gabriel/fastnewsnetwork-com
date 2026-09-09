import Link from "next/link";
import { categories, slugifyCategory } from "@/lib/categories";

export function SiteHeader() {
  return (
    <>
      {/* Top utility bar */}
      <div className="flex items-center justify-between bg-brand-dark px-4 py-1.5 text-xs text-neutral-300">
        <span>Wednesday, September 9, 2026</span>
        <div className="flex gap-4">
          <span>Watch Live</span>
          <span>Sign In</span>
        </div>
      </div>

      {/* Header / logo */}
      <header className="flex items-center justify-between border-b border-neutral-200 px-4 py-4">
        <Link href="/" className="text-3xl font-extrabold tracking-tight text-brand-red">
          FAST NEWS NETWORK
        </Link>
        <div className="text-sm text-neutral-500">Search</div>
      </header>

      {/* Category nav */}
      <nav className="overflow-x-auto bg-brand-red">
        <ul className="flex min-w-max gap-6 px-4 py-2 text-sm font-semibold uppercase text-white">
          {categories.map((c) => (
            <li key={c} className="whitespace-nowrap">
              <Link href={`/category/${slugifyCategory(c)}`} className="hover:underline">
                {c}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Breaking news ticker */}
      <div className="flex items-center gap-3 bg-brand-dark px-4 py-2 text-sm text-white">
        <span className="shrink-0 rounded bg-brand-red px-2 py-0.5 text-xs font-bold uppercase">
          Breaking
        </span>
        <span className="truncate">
          Placeholder breaking news ticker text — replace with live headline feed.
        </span>
      </div>
    </>
  );
}
