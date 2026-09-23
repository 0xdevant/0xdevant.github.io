// Copy for the home page, laid out like a newspaper front page.

export const EMAIL = "0xdevant@gmail.com";

export const SOCIAL = [
  { label: "GitHub", href: "https://github.com/0xdevant" },
  { label: "X", href: "https://x.com/0xdevant" },
  { label: "LinkedIn", href: "https://linkedin.com/in/ant-web3" },
] as const;

export const SECTIONS = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
] as const;

export const MARKETS = {
  label: "Contracts I led at 9GAG/Memeland",
  figures: [
    { value: "$120M+", note: "$MEME locked, Launch & Vesting" },
    { value: "$60M+", note: "TVL secured, Stakeland" },
    { value: "$50M+", note: "ETH locked, Public Sale" },
  ],
};

export const IN_BRIEF = [
  {
    term: "Trained",
    detail:
      "Uniswap Hook Incubator, 1st cohort; Assembly & Formal Verification, Cyfrin Updraft",
  },
  { term: "Studied", detail: "BSc Computing & Information Systems, HKBU" },
  { term: "Before", detail: "Long; Uniswap Foundation; 9GAG/Memeland" },
  { term: "Writes", detail: "Solidity, TypeScript, Rust" },
  { term: "Believes in", detail: "Crypto, FOSS and self-hosted AI" },
];

export const PROFILE = {
  headline:
    "Contracts that have held nine figures. Agents that work for companies big and small.",
  dek: "Obsessed with clean code and security.",
  paragraphs: [
    "Most of the time I'm a smart contract & AI engineer. Sometimes I'm also a founder who loves designing permissionless and sustainable DeFi protocols, and shipping agentic AI infrastructure at Clawify.",
    "It goes without saying that having ownership over our data, assets and AI agents is a basic human right. So what's better in life than embracing Crypto, FOSS and self-hosted AI while making a living from your passion?",
  ],
};

export type Figure = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  credit?: string;
  href?: string;
};

export const AVATAR: Figure = {
  src: "/front-page/avatar.jpg",
  width: 1200,
  height: 1000,
  alt: "Anthony's avatar, waving",
  caption:
    "Dedicated to spreading knowledge about blockchain to Hongkongers.",
};

export type Role = {
  company: string;
  href?: string;
  title: string;
  dates: string;
  bullets: string[];
  figure?: Figure;
};

export const RECENT_WORK: Role[] = [
  {
    company: "Clawify",
    href: "https://clawify.dev/",
    title: "Founder & AI Engineer",
    dates: "MAR 2026 - NOW",
    bullets: [
      "A multi-layered engine on a local LLM, driving an MNC's company-wide AI transformation: data analytics, multi-agent orchestration, RAG over company knowledge with citations, and human-in-the-loop governance.",
      "One-click agent-to-VPS deployment for SMEs, built on OpenClaw and Hermes.",
      "Agentic workflows for SEO analysis, tax audits under Hong Kong IRD rules, and social media content.",
      "The agent runtime underneath: prompt engineering, a RAG pipeline, and tool calling into messaging apps.",
      "Product launch and promo videos, written from scratch in HTML and rendered with HyperFrames.",
    ],
    figure: {
      src: "/front-page/clawify.jpg",
      width: 1100,
      height: 632,
      alt: "The Clawify homepage: A 24/7 assistant that lives in your Discord",
      caption:
        "Clawify's homepage. Launch agents powered by GPT, Claude or Gemini on your own server; pay once, own your data.",
      credit: "Screenshot: clawify.dev",
      href: "https://clawify.dev/",
    },
  },
  {
    company: "Long",
    href: "https://long.xyz/",
    title: "Staff Smart Contract Engineer",
    dates: "APR 2025 - JUL 2026",
    bullets: [
      "Liquidity bootstrapping contracts on Uniswap's Liquidity Launcher and Continuous Clearing Auctions.",
      "Hooks and extensions on Doppler: FDV-milestone unlocks, dynamic fees, and migration to Uniswap v3 with live LP fee streaming.",
      "A simulation framework for bonding curve price dynamics, with Foundry and Tenderly.",
    ],
    figure: {
      src: "/front-page/long.jpg",
      width: 765,
      height: 440,
      alt: "The Long homepage: the LONG wordmark over the line Making tokenized markets valuable again, and a Get started button",
      caption: "Long's homepage: making tokenized markets valuable again.",
      credit: "Screenshot: long.xyz",
      href: "https://long.xyz/",
    },
  },
  {
    company: "Uniswap Foundation",
    href: "https://www.uniswapfoundation.org/",
    title: "Developer Support Associate",
    dates: "OCT 2024 - MAR 2025",
    bullets: [
      "Onboarded developers to Uniswap v4, Unichain and the Uniswap SDK.",
      "Core contributor to Uniswap v4 docs.",
      "Judged ETHTaipei hackathon submissions to the Uniswap Foundation.",
    ],
    figure: {
      src: "/front-page/uniswap-flash-accounting.jpg",
      width: 1100,
      height: 640,
      alt: "The opening of the Uniswap v4 Flash Accounting docs page: its title, summary and first paragraphs",
      caption:
        "Flash Accounting, one of the Uniswap v4 Concepts pages I wrote.",
      credit: "Screenshot: developers.uniswap.org",
      href: "https://developers.uniswap.org/docs/protocols/v4/concepts/flash-accounting",
    },
  },
  {
    company: "9GAG/Memeland",
    href: "https://www.memeland.com/",
    title: "Senior Blockchain Engineer",
    dates: "JUN 2023 - MAR 2025",
    bullets: [
      "Led the MEME Public Sale, Launch & Vesting and Stakeland contracts.",
      "Single-handedly built a liquid staking protocol, a bonding curve token launchpad, and crosschain $MEME via Wormhole.",
      "Led a team of 2 blockchain engineers. Brought fuzzing, invariant testing and formal verification; audited smart contracts for Nobody and CASETiFY.",
    ],
    figure: {
      src: "/front-page/foobar.jpg",
      width: 1100,
      height: 453,
      alt: "Two chat messages from foobar: Appreciate you all as one of the few teams who knows how to do things right. Quality smart contract, flawless execution, etc",
      caption: "foobar on the Memeland smart contract I wrote.",
    },
  },
];

export const EARLIER_WORK = [
  {
    company: "QuantBlock",
    href: "https://quantblock.com/",
    title: "Senior Associate, Blockchain Developer",
    dates: "MAY 2022 - MAR 2023",
  },
  {
    company: "METABRGE",
    href: "https://x.com/metabrge",
    title: "Head of Blockchain",
    dates: "JUN 2021 - MAY 2022",
  },
  {
    company: "SOUL",
    href: "https://soulnation.com/",
    title: "Web Developer",
    dates: "JUN 2020 - JUN 2021",
  },
  {
    company: "Infin Media",
    title: "Full Stack Engineer",
    dates: "JUN 2018 - SEP 2019",
  },
];

export const LEAD_PROJECT = {
  wordmark: "搵食",
  headline: "A Tinder for deciding where to eat in Hong Kong",
  body: "Swipe through the city's top-rated restaurants, filter by district and cuisine, and let the cards decide where to eat tonight. Built because my girlfriend could never decide.",
  cta: { label: "Open 搵食 Tinder", href: "https://eat.clawify.dev/" },
  coverage: "Covered by unwire.hk and @playeateasy",
  figure: {
    src: "/front-page/eat-card.jpg",
    width: 560,
    height: 1106,
    alt: "A 搵食 Tinder swipe card showing a fish ball noodle shop, its district and price, with no and yes buttons",
    caption: "One swipe card in 搵食 Tinder.",
    credit: "Screenshot: eat.clawify.dev",
  } satisfies Figure,
};

export const PROJECTS = [
  {
    title: "Doppler v4 hooks",
    href: "https://github.com/0xdevant/doppler-v4-hooks",
    year: "2026",
    description:
      "Uniswap v4 hooks on Doppler that unlock SSL at FDV milestones and take a dynamic fee on the numeraire token.",
  },
  {
    title: "autoMate",
    href: "https://github.com/0xdevant/autoMate-contracts",
    year: "2024",
    description:
      "A Uniswap v4 hook where swappers double as keepers, racing to run scheduled on-chain tasks for a bounty.",
  },
  {
    title: "ERC8027",
    href: "https://github.com/0xdevant/ERC8027",
    year: "2025",
    description:
      "Subscription NFTs: ERC721 tokens with manual or recurring renewals that expire on their own.",
  },
  {
    title: "facts.hype",
    href: "https://github.com/0xdevant/facts.hype",
    year: "2025",
    description:
      "Crowd-sourced verification of real-world events: an open-source alternative to UMA on HyperLiquid.",
  },
  {
    title: "Web3Privacy Now",
    href: "https://github.com/web3privacy/web3privacy",
    year: "2024",
    description:
      "Research building a culture of privacy in web3, with the largest database of privacy-enhancing solutions.",
  },
];

export type Clipping = {
  title: string;
  href: string;
  outlet: string;
  /** Left empty when the piece carries no date. */
  date?: string;
};

export const WRITING: { heading: string; items: Clipping[] }[] = [
  {
    heading: "Part of my Uniswap v4 contributions",
    items: [
      {
        title: "Flash Accounting",
        href: "https://developers.uniswap.org/docs/protocols/v4/concepts/flash-accounting",
        outlet: "Uniswap docs",
      },
      {
        title: "ERC-6909",
        href: "https://developers.uniswap.org/docs/protocols/v4/concepts/erc-6909",
        outlet: "Uniswap docs",
      },
    ],
  },
  {
    heading: "Written by me",
    items: [
      {
        title: "A Tinder-style way to decide where to eat",
        href: "https://www.threads.com/@0xant_/post/DbQyynkjr_g",
        outlet: "Threads",
        date: "26 JUL 2026",
      },
      {
        title: "Semi-technical guide for withdrawing ETH from L2",
        href: "https://mirror.xyz/0x0cBe6434b754469Ef89F7e3763fC2991979b8316/YWIshyjGYlBOI-mDwQI2UurWNppXcJc6KT_HEDOZk5o",
        outlet: "Mirror",
        date: "22 JAN 2025",
      },
    ],
  },
  {
    heading: "Written about my work",
    items: [
      {
        title: "@playeateasy features 搵食 Tinder",
        href: "https://www.instagram.com/p/DbXUHWsibIW/",
        outlet: "Instagram",
        date: "29 JUL 2026",
      },
      {
        title: "unwire.hk covers 搵食 Tinder",
        href: "https://unwire.hk/2026/07/27/tinderfoodapp/software/",
        outlet: "unwire.hk",
        date: "27 JUL 2026",
      },
    ],
  },
];

export const PRESS_FIGURE: Figure = {
  src: "/front-page/playeateasy.jpg",
  width: 720,
  height: 900,
  alt: "The cover of @playeateasy's Instagram post on 搵食 Tinder: a headline over a 搵食 Tinder swipe card for a yakiniku restaurant",
  caption: "@playeateasy's post on 搵食 Tinder, 29 Jul 2026.",
  credit: "Image: @playeateasy and bizmark.hk",
  href: "https://www.instagram.com/p/DbXUHWsibIW/",
};

// In the author's own words, from the "My Story" section of the previous site.
export const OFF_THE_CLOCK =
  "Outside of web3, you'll find me watching anime, playing basketball, or on a mission to hunt down the best cha chaan teng (茶餐廳) in Hong Kong.";
