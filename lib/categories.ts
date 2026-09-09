export const categories = [
  "U.S.",
  "World",
  "Politics",
  "Business",
  "Tech",
  "Entertainment",
  "Sports",
  "Opinion",
];

export function slugifyCategory(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function categoryBySlug(slug: string): string | undefined {
  return categories.find((c) => slugifyCategory(c) === slug);
}
