export type Story = {
  slug: string;
  category: string;
  headline: string;
  dek: string;
  byline: string;
  date: string;
  paragraphs: string[];
};

export const stories: Story[] = [
  {
    slug: "lawmakers-reach-deal-on-major-bill",
    category: "Politics",
    headline: "Placeholder Headline: Lawmakers Reach Deal on Major Bill",
    dek: "Placeholder summary text describing the story goes here. Replace with real reporting before launch.",
    byline: "Fast News Network Staff",
    date: "September 9, 2026",
    paragraphs: [
      "Placeholder paragraph one. Replace with the opening of the actual story — who, what, when, where, and why this is newsworthy.",
      "Placeholder paragraph two. Add supporting details, quotes from officials or sources, and background context here.",
      "Placeholder paragraph three. Close with next steps, reactions, or what happens next in the story.",
    ],
  },
  {
    slug: "summit-ends-with-new-agreement",
    category: "World",
    headline: "Placeholder Headline: Summit Ends With New Agreement",
    dek: "Placeholder summary text describing the story goes here.",
    byline: "Fast News Network Staff",
    date: "September 9, 2026",
    paragraphs: [
      "Placeholder paragraph one describing the summit and its outcome.",
      "Placeholder paragraph two with reaction from involved parties.",
      "Placeholder paragraph three on what comes next.",
    ],
  },
  {
    slug: "markets-rally-on-earnings-news",
    category: "Business",
    headline: "Placeholder Headline: Markets Rally on Earnings News",
    dek: "Placeholder summary text describing the story goes here.",
    byline: "Fast News Network Staff",
    date: "September 9, 2026",
    paragraphs: [
      "Placeholder paragraph one covering the market move.",
      "Placeholder paragraph two with analyst commentary.",
      "Placeholder paragraph three on outlook.",
    ],
  },
  {
    slug: "company-unveils-new-device",
    category: "Tech",
    headline: "Placeholder Headline: Company Unveils New Device",
    dek: "Placeholder summary text describing the story goes here.",
    byline: "Fast News Network Staff",
    date: "September 9, 2026",
    paragraphs: [
      "Placeholder paragraph one introducing the device.",
      "Placeholder paragraph two on features and pricing.",
      "Placeholder paragraph three on availability.",
    ],
  },
  {
    slug: "team-clinches-division-title",
    category: "Sports",
    headline: "Placeholder Headline: Team Clinches Division Title",
    dek: "Placeholder summary text describing the story goes here.",
    byline: "Fast News Network Staff",
    date: "September 9, 2026",
    paragraphs: [
      "Placeholder paragraph one recapping the game.",
      "Placeholder paragraph two with player quotes.",
      "Placeholder paragraph three looking ahead to the playoffs.",
    ],
  },
  {
    slug: "film-tops-weekend-box-office",
    category: "Entertainment",
    headline: "Placeholder Headline: Film Tops Weekend Box Office",
    dek: "Placeholder summary text describing the story goes here.",
    byline: "Fast News Network Staff",
    date: "September 9, 2026",
    paragraphs: [
      "Placeholder paragraph one on the box office numbers.",
      "Placeholder paragraph two on critical reception.",
      "Placeholder paragraph three on upcoming releases.",
    ],
  },
  {
    slug: "storm-system-moves-across-region",
    category: "U.S.",
    headline: "Placeholder Headline: Storm System Moves Across Region",
    dek: "Placeholder summary text describing the story goes here.",
    byline: "Fast News Network Staff",
    date: "September 9, 2026",
    paragraphs: [
      "Placeholder paragraph one describing the storm's path.",
      "Placeholder paragraph two on advisories and preparation.",
      "Placeholder paragraph three on the forecast ahead.",
    ],
  },
  {
    slug: "op-ed-on-current-events",
    category: "Opinion",
    headline: "Placeholder Headline: Op-Ed On Current Events",
    dek: "Placeholder summary text describing the story goes here.",
    byline: "Guest Columnist",
    date: "September 9, 2026",
    paragraphs: [
      "Placeholder paragraph one stating the columnist's position.",
      "Placeholder paragraph two supporting the argument.",
      "Placeholder paragraph three with a closing take.",
    ],
  },
  {
    slug: "officials-meet-to-discuss-trade",
    category: "World",
    headline: "Placeholder Headline: Officials Meet To Discuss Trade",
    dek: "Placeholder summary text describing the story goes here.",
    byline: "Fast News Network Staff",
    date: "September 9, 2026",
    paragraphs: [
      "Placeholder paragraph one on the meeting's agenda.",
      "Placeholder paragraph two on statements from officials.",
      "Placeholder paragraph three on next steps.",
    ],
  },
];

export function getStoryBySlug(slug: string): Story | undefined {
  return stories.find((s) => s.slug === slug);
}
