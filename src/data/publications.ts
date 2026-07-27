export type PublicationKind = "authored" | "mention";

export interface Publication {
  title: string;
  url: string;
  /** Where it was published, e.g. "Mirror", "Uniswap Docs", "The Defiant". */
  outlet: string;
  /** ISO date - YYYY-MM-DD. */
  publishedAt: string;
  summary: string;
  tags: readonly string[];
  kind: PublicationKind;
  /** Render the live post (text + engagement counts) instead of a link card. */
  embed?: "threads";
}

/** Section heading each kind is grouped under on the homepage. */
export const PUBLICATION_KIND_LABELS: Record<PublicationKind, string> = {
  authored: "Published by me",
  mention: "Featuring my work",
};

const publications: Publication[] = [
  {
    title: "揾食 - a Tinder-style way to decide where to eat in Hong Kong",
    url: "https://www.threads.com/@0xant_/post/DbQyynkjr_g",
    outlet: "Threads",
    publishedAt: "2026-07-26",
    summary:
      "Built a web app for my girlfriend who could never decide where to eat: swipe left and right through 1,000+ Hong Kong restaurants, narrowed down by district and cuisine.",
    tags: ["Side Project", "Hong Kong", "Web App"],
    kind: "authored",
    embed: "threads",
  },
  {
    title: "Semi-technical guide for withdrawing ETH from L2",
    url: "https://mirror.xyz/0x0cBe6434b754469Ef89F7e3763fC2991979b8316/YWIshyjGYlBOI-mDwQI2UurWNppXcJc6KT_HEDOZk5o",
    outlet: "Mirror",
    publishedAt: "2025-01-22",
    summary:
      "A step-by-step technical guide to walk you through how you can initiate, prove, and finalize withdrawal from L2 like Unichain.",
    tags: ["L2", "Unichain", "Withdrawal", "Guide"],
    kind: "authored",
  },
];

export function getPublications(kind: PublicationKind): Publication[] {
  return publications
    .filter((publication) => publication.kind === kind)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}
