import { getCollection, type CollectionEntry } from "astro:content";

const COLLECTIONS = ["blog", "projects", "research"] as const;

type CollectionName = (typeof COLLECTIONS)[number];

type BlogEntry = CollectionEntry<"blog">;
type ProjectEntry = CollectionEntry<"projects">;
type ResearchEntry = CollectionEntry<"research">;

export type CollectionItem = BlogEntry | ProjectEntry | ResearchEntry;

export interface TaggedEntry {
  collection: CollectionName;
  entry: CollectionItem;
}

export interface TagBucket {
  slug: string;
  label: string;
  entries: TaggedEntry[];
}

export interface TagSummary {
  slug: string;
  label: string;
  count: number;
}

let tagCache: Promise<Map<string, TagBucket>> | undefined;

export const slugifyTag = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const normaliseLabel = (value: string) => value.trim();

async function loadTagMap(): Promise<Map<string, TagBucket>> {
  const buckets = new Map<string, TagBucket>();

  for (const collection of COLLECTIONS) {
    const entries = await getCollection(collection);

    for (const entry of entries) {
      const tags = Array.isArray((entry.data as any).tags)
        ? ((entry.data as any).tags as string[])
        : [];

      if (tags.length === 0) continue;

      for (const rawTag of tags) {
        const label = normaliseLabel(rawTag);
        if (!label) continue;

        const slug = slugifyTag(label);
        if (!slug) continue;

  const existing = buckets.get(slug);
  const taggedEntry: TaggedEntry = { collection, entry: entry as CollectionItem };

        if (existing) {
          existing.entries.push(taggedEntry);
        } else {
          buckets.set(slug, {
            slug,
            label,
            entries: [taggedEntry],
          });
        }
      }
    }
  }

  // Ensure deterministic order (newest first where possible)
  buckets.forEach((bucket, slug) => {
    const sorted = [...bucket.entries].sort((a, b) => {
      const aDate = getEntryDate(a);
      const bDate = getEntryDate(b);
      if (aDate && bDate) {
        return bDate.getTime() - aDate.getTime();
      }
      return 0;
    });
    buckets.set(slug, { ...bucket, entries: sorted });
  });

  return buckets;
}

function getEntryDate(tagged: TaggedEntry): Date | undefined {
  const { collection, entry } = tagged;

  if (collection === "projects") {
    const data = entry.data as ProjectEntry["data"];
    const date = data.endDate ?? data.startDate;
    return date ? new Date(date) : undefined;
  }

  if (collection === "research") {
    const data = entry.data as ResearchEntry["data"];
    return data.pubDate ? new Date(data.pubDate) : undefined;
  }

  const data = entry.data as BlogEntry["data"];
  return data.pubDate ? new Date(data.pubDate) : undefined;
}

async function getTagMap() {
  if (!tagCache) {
    tagCache = loadTagMap();
  }
  return tagCache;
}

export async function getAllTags(): Promise<TagSummary[]> {
  const map = await getTagMap();
  return Array.from(map.values())
    .map(({ slug, label, entries }) => ({ slug, label, count: entries.length }))
    .sort((a, b) => a.label.localeCompare(b.label));
}

export async function getTagBucket(tagSlug: string): Promise<TagBucket | undefined> {
  const map = await getTagMap();
  return map.get(tagSlug.toLowerCase());
}

export async function getEntriesForTag(tagSlug: string): Promise<TaggedEntry[]> {
  const bucket = await getTagBucket(tagSlug);
  return bucket ? bucket.entries : [];
}
