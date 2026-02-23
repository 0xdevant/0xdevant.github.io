import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, SparklesIcon } from "lucide-react";

export const DATA = {
  name: "Anthony Lau",
  shortName: "Ant",
  initials: "AL",
  url: "https://0xdevant.github.io",
  location: "Hong Kong",
  locationLink: "https://www.google.com/maps/place/hongkong",
  description:
    "Most of the time I'm a smart contract engineer that's obsessed with clean code and security - but sometimes I'm also a founder who loves designing permissionless and sustainable DeFi protocols. It goes without saying that having ownership over our data and asset is a basic human right. So if you ask me, what's better in life than embracing the ideology of Crypto and FOSS while making a living from your passion?",
  summary:
    "I'm a HongKonger born and raised in Hong Kong. I also spent a year studying in the UK and semesters in the US and France, experiences that opened my mind and shaped how I see the world.\n\nBefore university, I was that kid obsessed with biology and completely hooked on the Olympiad. I loved exploring the mysteries of life. But after countless hours pipetting in the lab, I started to feel burnt out. I realized I loved biology, just not the endless wet lab work.\n\nAt the same time, I discovered the beauty and speed of simulations, where you can explore complex systems without spilling a single drop. One day, I had a lightbulb moment: \"What if I could use math and code to solve big biology questions instead?\" That idea completely changed my path.\n\nAnd so, here I am, merging my love for biology with the power of math and computation.\n\nWhen I'm not coding or solving equations, you'll find me kayaking, playing tennis, or on a mission to hunt down the best ramen and handmade pasta in Hong Kong (I might have tried them all by now). And when it comes to boba, it's always \"No.1\" at Comebuytea.",
  avatarUrl: "/me.png",

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    // { href: "/showcase", icon: SparklesIcon, label: "Showcase" },
  ],
  contact: {
    email: "anty1025@proton.me",
    tel: "+852-XXX-XXX-XXX",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/0xdevant",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/ant-web3",
        icon: Icons.linkedin,
        navbar: true,
      },
      Twitter: {
        name: "Twitter",
        url: "https://x.com/intent/follow?screen_name=0xdevant",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:anty1025@proton.me",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  technicalExperience: [
    {
      company: "Long",
      href: "https://long.xyz/",
      badges: [],
      location: "Remote",
      title: "Staff Smart Contract Engineer",
      logoUrl: "/logo_long.svg",
      start: "Apr 2025",
      end: "Now",
      bullets: [
        "Study and integrate with Uniswap's Liquidity Launcher and Continuous Clearing Auctions, the latest standard for bootstrapping liquidity",
        "Develop liquidity bootstrapping strategy contract on top of LiquidityLauncher to customize liquidity migration to Uniswap v4 pool by minting single-sided positions and swapping remaining Currency via Uniswap v3 maths + v4 PositionManager + UniversalRouter",
        "Develop several hooks on top of Doppler for Frame to e.g. unlock SSL based on different FDV milestones the new token reached, take dynamic fee on numeraire token under any swap directions via TickMath + resolving delta",
        "Develop extension contracts on top of Doppler for Long to enable bonding curve liquidity migration to Uniswap v3 pool with real-time LP fee streaming",
        "Actively contribute to the Doppler repo and work with ex-Uniswap team",
        "Build simulation framework to test different price dynamic with customized params on Doppler’s bonding curve and Uniswap’s Liquidity Launcher via Foundry and Tenderly",
      ],
    },
    {
      company: "Uniswap Foundation",
      href: "https://www.uniswapfoundation.org/",
      badges: [],
      location: "Remote",
      title: "Developer Support Associate",
      logoUrl: "/logo_uf.png",
      start: "Oct 2024",
      end: "Mar 2025",
      bullets: [
        "Onboard developers into the Uniswap ecosystem, providing them technical assistance related to Uniswap v4, Unichain, Uniswap SDK, Uniswap frontend etc",
        "Core contributor to Uniswap v4 docs",
        "Judges for ETHTaipei Hackathon submissions to UF",
      ],
    },
    {
      company: "9GAG/Memeland",
      badges: [],
      href: "https://www.memeland.com/",
      location: "Remote",
      title: "Senior Blockchain Engineer",
      logoUrl: "/logo_9gag.svg",
      start: "Jun 2023",
      end: "Mar 2025",
      bullets: [
        "Led & built smart contracts on mainnet for 1) MEME Public Sale which locked over $50M in ETH, 2) MEME Launch & Vesting which locked over $120M in $MEME, 3) Stakeland which secured over $60M in TVL",
        "Single-handedly design & build the smart contracts for 1) Liquid Staking Protocol like Lido but more efficient, 2) Bonding Curve Token Launch Protocol like pump.fun but for EVM, 3) Crosschain $MEME via Wormhole, 4) Stakeland v2 via Uniswap Permit2, 5)SPL Token Presale contract on Solana with Rust and Anchor",
        "Lead a team of 2 blockchain engineers by assigning tasks based on their strengths, and make technical decisions on overall smart contract architecture",
        "Introduce fuzz, invariant testing & formal verification to smart contract security practice",
        "Provide smart contract audit including an audit report for renowned NFT projects e.g. Nobody and CASETiFY",
      ],
    },
    {
      company: "QuantBlock",
      href: "https://quantblock.com/",
      badges: [],
      location: "Hong Kong",
      title: "Senior Associate, Blockchain Developer",
      logoUrl: "/logo_qb2.svg",
      start: "May 2022",
      end: "Mar 2023",
      bullets: [
        "Develop smart contracts on ETH & Polkadot for: ",
        "1) DEX similar to Balancer (securing >1M USD in TVL)",
        "2) Native liquid staking of $DOT on parachain of Polkadot",
        "3) NFT Projects (with ERC2981 Royalty Standard)",
      ],
    },
    {
      company: "METABRGE",
      href: "https://x.com/metabrge",
      badges: [],
      location: "Hong Kong",
      title: "Head of Blockchain",
      logoUrl: "/logo_metabrge.svg",
      start: "May 2022",
      end: "Mar 2023",
      bullets: [
        "Lead a team of ~5 engineers on system design, task allocation and project management",
        "Develop one-stop launchpad for Fashion Brands' integration w/ Metaverse",
      ],
    },
  ],
  education: [
    {
      school: "Hong Kong Baptist University",
      href: "https://www.hkbu.edu.hk/",
      degree: "Bachelor of Science in Computing and Information Systems",
      logoUrl: "/logo_bu.svg",
      start: "2016",
      end: "2018",
    },
    {
      school: "Atrium Academy",
      href: "https://atrium.academy/uniswap",
      degree: "1st Cohort of Uniswap Hook Incubator",
      logoUrl: "/logo_atrium.png",
      start: "2024 Mar",
      end: "2024 Jun",
    },
    {
      school: "Cyfrin Updraft",
      href: "https://www.cyfrin.io/updraft",
      degree: "Assembly and Formal Verification",
      logoUrl: "/logo_cyfrin_updraft.jpg",
      start: "2024 Jan",
      end: "2024 Mar",
    },
    {
      school: "Alchemy University",
      href: "https://www.alchemy.com/university",
      degree: "Blockchain & Cryptography",
      logoUrl: "/logo_alchemy_uni.png",
      start: "2023 Feb",
      end: "2023 May",
    },
  ],
  projects: [
    {
      title: "facts.hype",
      href: "https://github.com/0xdevant/facts.hype",
      dates: "2025 Aug - Present",
      active: true,
      description:
        "A decentralized and actually fair market resolution system to provide crowd-sourced verification of real-world events for DApps to build on top of i.e. an open-source alternative to UMA on HyperLiquid.",
      technologies: [
        "Solidity",
        "Foundry",
        "Next.js",
        "Supabase",
        "HyperLiquid",
        "DeFi",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/0xdevant/facts.hype",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Doppler v4 hooks",
      href: "https://github.com/0xdevant/doppler-v4-hooks",
      dates: "2026 Jan - 2026 Feb",
      active: true,
      description:
        "v4 hooks built on top of Doppler to e.g. unlock SSL based on different FDV milestones the new token reached, or take dynamic fee on numeraire token under any swap directions via TickMath + resolving delta.",
      technologies: ["Solidity", "Foundry", "Uniswap", "Doppler", "DeFi"],
      links: [
        {
          type: "Source",
          href: "https://github.com/0xdevant/doppler-v4-hooks",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Liquidity Launcher Strategy contracts",
      href: "https://github.com/0xdevant/liquidity-launcher-strategies",
      dates: "2025 Dec - 2026 Jan",
      active: true,
      description:
        "Liquidity bootstrapping strategy contracts built on top of Uniswap's LiquidityLauncher and Continuous Clearing Auctions to customize liquidity migration to v4 pool by minting single-sided positions and swapping remaining Currency via TickMath + PositionManager + UniversalRouter.",
      technologies: ["Solidity", "Foundry", "Uniswap", "CCA", "DeFi"],
      links: [
        {
          type: "Source",
          href: "https://github.com/0xdevant/liquidity-launcher-strategies",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "ERC8027",
      href: "https://github.com/0xdevant/ERC8027",
      dates: "2025 Sep - Present",
      active: true,
      description:
        "A ERC standard implementation for NFTs - specifically ERC721 tokens to enable manual and recurring subscription service with auto expiration i.e. Subscription NFTs (SubNFTs).",
      technologies: ["Solidity", "Permit2", "EIP", "ERC", "NFT"],
      links: [
        {
          type: "Source",
          href: "https://github.com/0xdevant/ERC8027",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "autoMate",
      href: "https://github.com/0xdevant/autoMate-contracts",
      dates: "2024 Jun - Present",
      active: true,
      description:
        "A general-purpose Uniswap v4 hook to let users put up a bounty and subscribe to an automatic on-chain task execution service running by a network of keepers(a.k.a. the swappers). Keepers are incentivized to execute the task as closely to the scheduled execution time as possible in order to claim the maximum amount of bounty.",
      technologies: ["Solidity", "Foundry", "Uniswap v4"],
      links: [
        {
          type: "Source",
          href: "https://github.com/0xdevant/autoMate-contracts",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Web3Privacy Now",
      href: "https://github.com/web3privacy/web3privacy",
      dates: "2024 - Present",
      active: true,
      description:
        "Web3Privacy Now is a research project aimed at building a culture of privacy industry in web3: the most extensive database of privacy-enhancing solutions, the framework for PEDApps ideation, use-cases database & many more. Feel free to collaborate.",
      technologies: ["React", "Typescript", "Astro", "Privacy"],
      links: [
        {
          type: "Source",
          href: "https://github.com/web3privacy/web3privacy",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  books: [
    {
      theme: "Political Philosophy & Social Theory",
      books: [
        {
          title: "The Social Contract",
          author: "Jean-Jacques Rousseau",
          number: 1,
        },
        {
          title: "On Liberty",
          author: "John Stuart Mill",
          number: 2,
        },
      ],
    },
    {
      theme: "Analytic Philosophy",
      books: [
        {
          title: "李天命的思考藝術",
          author: "Lee Tien Ming",
          number: 3,
        },
      ],
    },
    {
      theme: "Mathematical Economics",
      books: [
        {
          title: "Game Theory: Manga de Yasashiku Wakaru Game Riron",
          author: "Satoshi Kawanishi",
          number: 4,
        },
      ],
    },
    {
      theme: "History & Global Affairs",
      books: [
        {
          title: "空白的一百年",
          author: "Last Minute 香城史",
          number: 5,
        },
      ],
    },
    {
      theme: "Digital Life & Privacy",
      books: [
        {
          title: "The Art of Invisibility",
          author: "Kevin Mitnick",
          number: 6,
        },
      ],
    },
    {
      theme: "Counselling and Psychology",
      books: [
        {
          title: "Counselling for Toads: A Psychological Adventure",
          author: "Robert De Board",
          number: 7,
        },
      ],
    },
  ],
} as const;
