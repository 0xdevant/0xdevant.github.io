export interface MediumPost {
  title: string;
  url: string;
  publishedAt: string;
  summary: string;
  tags: string[];
  isExternal?: boolean;
}

export const mediumPosts: MediumPost[] = [
  {
    title: "Semi-technical guide for withdrawing ETH from L2",
    url: "https://mirror.xyz/0x0cBe6434b754469Ef89F7e3763fC2991979b8316/YWIshyjGYlBOI-mDwQI2UurWNppXcJc6KT_HEDOZk5o",
    publishedAt: "2025-01-22",
    summary:
      "A step-by-step technical guide to walk you through how you can initiate, prove, and finalize withdrawal from L2 like Unichain.",
    tags: ["L2", "Unichain", "Withdrawal", "Guide"],
    isExternal: true,
  },
];

export function getMediumPosts(): MediumPost[] {
  return mediumPosts;
}
