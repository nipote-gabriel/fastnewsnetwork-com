const categories = [
  "U.S.",
  "World",
  "Politics",
  "Business",
  "Tech",
  "Entertainment",
  "Sports",
  "Opinion",
];

const heroStory = {
  category: "Politics",
  headline: "Placeholder Headline: Lawmakers Reach Deal on Major Bill",
  dek: "Placeholder summary text describing the story goes here. Replace with real reporting before launch.",
};

const secondaryStories = [
  { category: "World", headline: "Placeholder Headline: Summit Ends With New Agreement" },
  { category: "Business", headline: "Placeholder Headline: Markets Rally on Earnings News" },
];

const gridStories = [
  { category: "Tech", headline: "Placeholder Headline: Company Unveils New Device" },
  { category: "Sports", headline: "Placeholder Headline: Team Clinches Division Title" },
  { category: "Entertainment", headline: "Placeholder Headline: Film Tops Weekend Box Office" },
  { category: "U.S.", headline: "Placeholder Headline: Storm System Moves Across Region" },
  { category: "Opinion", headline: "Placeholder Headline: Op-Ed On Current Events" },
  { category: "World", headline: "Placeholder Headline: Officials Meet To Discuss Trade" },
];

const latestHeadlines = [
  "Placeholder: Officials comment on ongoing situation",
  "Placeholder: New report released on economic outlook",
  "Placeholder: Local community responds to development",
  "Placeholder: Analysts weigh in on latest figures",
  "Placeholder: Update issued on developing story",
  "Placeholder: Statement released following meeting",
];

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="flex aspect-video w-full items-center justify-center bg-gradient-to-br from-neutral-300 to-neutral-400 text-xs font-medium uppercase tracking-wide text-neutral-600">
      {label}
    </div>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl">
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
        <a href="/" className="text-3xl font-extrabold tracking-tight text-brand-red">
          FAST NEWS NETWORK
        </a>
        <div className="text-sm text-neutral-500">Search</div>
      </header>

      {/* Category nav */}
      <nav className="overflow-x-auto bg-brand-red">
        <ul className="flex min-w-max gap-6 px-4 py-2 text-sm font-semibold uppercase text-white">
          {categories.map((c) => (
            <li key={c} className="cursor-pointer whitespace-nowrap hover:underline">
              {c}
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

      {/* Hero section */}
      <section className="grid grid-cols-1 gap-6 px-4 py-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <ImagePlaceholder label="Hero Image" />
          <span className="mt-3 inline-block text-xs font-bold uppercase text-brand-red">
            {heroStory.category}
          </span>
          <h1 className="mt-1 text-3xl font-extrabold leading-tight">
            {heroStory.headline}
          </h1>
          <p className="mt-2 text-neutral-600">{heroStory.dek}</p>
        </div>
        <div className="flex flex-col gap-6">
          {secondaryStories.map((s) => (
            <div key={s.headline}>
              <ImagePlaceholder label="Story Image" />
              <span className="mt-2 inline-block text-xs font-bold uppercase text-brand-red">
                {s.category}
              </span>
              <h2 className="mt-1 text-lg font-bold leading-snug">{s.headline}</h2>
            </div>
          ))}
        </div>
      </section>

      {/* Story grid + sidebar */}
      <section className="grid grid-cols-1 gap-8 border-t border-neutral-200 px-4 py-6 lg:grid-cols-3">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
          {gridStories.map((s) => (
            <div key={s.headline}>
              <ImagePlaceholder label="Story Image" />
              <span className="mt-2 inline-block text-xs font-bold uppercase text-brand-red">
                {s.category}
              </span>
              <h3 className="mt-1 text-base font-bold leading-snug">{s.headline}</h3>
            </div>
          ))}
        </div>

        <aside className="border-t border-neutral-200 pt-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
          <h2 className="mb-3 border-b-2 border-brand-red pb-1 text-sm font-extrabold uppercase">
            Latest Headlines
          </h2>
          <ul className="flex flex-col gap-3">
            {latestHeadlines.map((h) => (
              <li
                key={h}
                className="cursor-pointer border-b border-neutral-100 pb-3 text-sm font-semibold leading-snug last:border-b-0 hover:text-brand-red"
              >
                {h}
              </li>
            ))}
          </ul>
        </aside>
      </section>

      {/* Footer */}
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
    </main>
  );
}
