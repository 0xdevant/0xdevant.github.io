"use client";

import dynamic from "next/dynamic";

const GitHubContributions = dynamic(
  () =>
    import("@/components/github-contributions").then(
      (mod) => mod.GitHubContributions
    ),
  { ssr: false }
);
const EthicsQuote = dynamic(
  () => import("@/components/ethics-quote").then((mod) => mod.EthicsQuote),
  { ssr: false }
);
const TechStack = dynamic(
  () => import("@/components/tech-stack").then((mod) => mod.TechStack),
  { ssr: false }
);
const TimelineItem = dynamic(
  () => import("@/components/resume-card").then((mod) => mod.TimelineItem),
  { ssr: false }
);
const ContactOrbiting = dynamic(
  () =>
    import("@/components/contact-orbiting").then((mod) => mod.ContactOrbiting),
  { ssr: false }
);

const HongKongMap = dynamic(
  () => import("@/components/hong-kong-map").then((mod) => mod.HongKongMap),
  { ssr: false }
);
const WorldMap = dynamic(
  () => import("@/components/world-map").then((mod) => mod.WorldMap),
  { ssr: false }
);
const BlurFade = dynamic(
  () => import("@/components/magicui/blur-fade").then((mod) => mod.default),
  { ssr: false }
);
const BlurFadeText = dynamic(
  () =>
    import("@/components/magicui/blur-fade-text").then((mod) => mod.default),
  { ssr: false }
);
const ProjectCard = dynamic(
  () => import("@/components/project-card").then((mod) => mod.ProjectCard),
  { ssr: false }
);
const ResumeCard = dynamic(
  () => import("@/components/resume-card").then((mod) => mod.ResumeCard),
  { ssr: false }
);
const BookCard = dynamic(
  () => import("@/components/book-card").then((mod) => mod.BookCard),
  { ssr: false }
);
const TableOfContents = dynamic(
  () =>
    import("@/components/table-of-contents").then((mod) => mod.TableOfContents),
  { ssr: false }
);
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] py-section-md">
      <TableOfContents />

      <section id="hero" className="mb-section-lg">
        <div className="w-full space-y-content-lg">
          <div className="gap-2 flex justify-between items-center">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.shortName.split(" ")[0]}.`}
              />
              {/* <BlurFadeText
                delay={BLUR_FADE_DELAY * 1.5}
                className="text-sm text-muted-foreground md:text-base"
                yOffset={8}
                text={`In Cantonese, I'm `}
              /> */}
              <BlurFadeText
                className="max-w-[600px] text-muted-foreground md:text-xl"
                delay={BLUR_FADE_DELAY * 2}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="about" className="mb-section-lg">
        <div className="space-y-content-md">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <h2 className="text-xl font-bold">My Story</h2>
          </BlurFade>
          <div className="space-y-content-sm">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                I&apos;m a Homo sapiens born and raised in Hong Kong. Before
                becoming a FT smart contract engineer and being super passionate
                about crypto and blockchain and all that - I was just a mediocre
                frontend dev who have no idea what he was doing.
              </p>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 12}>
              <p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                But then one day late in 2021 my colleague mentioned to me about
                Polkadot and he kept shilling me because back then it was still
                in the &ldquo;altcoin season&rdquo; i.e. usually the late phase
                in a bullmarket - this is probably the first time I heard about
                a cryptocurrency other than Bitcoin, but at that moment I was
                still thinking all of those things like blockchain, mining etc
                are just buzzwords and scam so I didn&apos;t really pay
                attention and got back to work.
              </p>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 13}>
              <p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                Over the next few days I think DOT actually went up and I still
                didn&apos;t bother to buy because I despises the fact that they
                are buying something that they have no idea what it is and how
                it works - but I did spend quite some time trying to learn how
                the tech works under the hood by watching some YouTube on how
                Bitcoin works, how blockchain actually works etc. Sooner or
                later after the pump - of course DOT starts going down and the
                colleague who was shilling me earlier started to complain - but
                at that time I was still spending lots of efforts deep-diving
                into the rabbit hole of crypto and blockchain, and finally I
                discovered how revolutionary this technology actually is, and
                how its properties like ownership, immutability,
                censorship-resistance, open-source and privacy are so matched
                with my core beliefs.
              </p>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 14}>
              <p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                And so, here I am, trying to contribute to this meaningful
                technology hoping to bring some good impact to the world +
                upholding these core beliefs + designing DeFi & Privacy
                protocols have become a passion I am going to enjoy for the rest
                of my life.
              </p>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 15}>
              <p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                Outside of web3, you&apos;ll find me watching anime, playing
                basketball, or on a mission to hunt down the best cha chaan teng
                (茶餐廳) in Hong Kong.
              </p>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* <section id="ethics" className="mb-section-lg">
        <div className="space-y-content-md">
          <EthicsQuote delay={BLUR_FADE_DELAY * 15.5} />
        </div>
      </section> */}

      <section id="work" className="mb-section-lg">
        <div className="space-y-12">
          <BlurFade delay={BLUR_FADE_DELAY * 17}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <div className="space-y-0">
            {DATA.technicalExperience.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 18 + id * 0.05}
              >
                <TimelineItem
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  bullets={work.bullets}
                  isLast={id === DATA.technicalExperience.length - 1}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="mb-section-lg">
        <div className="space-y-12">
          <BlurFade delay={BLUR_FADE_DELAY * 19}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          <div className="space-y-0">
            {DATA.education.map((education, id) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 20 + id * 0.05}
              >
                <TimelineItem
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  href={education.href}
                  period={`${education.start} - ${education.end}`}
                  isLast={id === DATA.education.length - 1}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="tech-stack" className="mb-section-lg">
        <TechStack delay={BLUR_FADE_DELAY * 21} />
      </section>

      <section id="projects" className="mb-section-lg">
        <div className="space-y-content-lg">
          <BlurFade delay={BLUR_FADE_DELAY * 22}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work.
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve developed and contributed to a variety of projects -
                  from v4 hook, privacy research to a complete DeFi protocol.
                  Here are a few of my favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 23 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="github" className="mb-section-lg">
        <GitHubContributions username="0xdevant" delay={BLUR_FADE_DELAY * 24} />
      </section>

      <section id="books" className="mb-section-lg">
        <div className="space-y-content-lg">
          <BlurFade delay={BLUR_FADE_DELAY * 25}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Commonplace Book.
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A personal collection of readings and ideas that shape my
                  worldview.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 26}>
            <div className="space-y-content-lg">
              {DATA.books.map((themeGroup, themeId) => (
                <div key={themeGroup.theme} className="space-y-content-sm">
                  <BlurFade delay={BLUR_FADE_DELAY * 27 + themeId * 0.1}>
                    <h3 className="text-lg font-semibold text-muted-foreground">
                      {themeGroup.theme}
                    </h3>
                  </BlurFade>
                  <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
                    {themeGroup.books.map((book, bookId) => (
                      <BlurFade
                        key={book.title + book.author}
                        delay={
                          BLUR_FADE_DELAY * 28 + themeId * 0.1 + bookId * 0.05
                        }
                      >
                        <BookCard
                          title={book.title}
                          author={book.author}
                          number={book.number}
                        />
                      </BlurFade>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="hong-kong" className="mb-section-lg">
        <div className="space-y-content-lg">
          <BlurFade delay={BLUR_FADE_DELAY * 29}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Best parts of Hong Kong.
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A collection of my favorite spots and activities in the city I
                  call home.
                </p>
              </div>
            </div>
          </BlurFade>
          <HongKongMap delay={BLUR_FADE_DELAY * 30} />
        </div>
      </section>

      <section id="world" className="mb-section-lg">
        <div className="space-y-content-lg">
          <BlurFade delay={BLUR_FADE_DELAY * 31}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  World Map.
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Countries I&apos;ve visited and want to visit.
                </p>
              </div>
            </div>
          </BlurFade>
          <WorldMap delay={BLUR_FADE_DELAY * 32} />
        </div>
      </section>

      <ContactOrbiting delay={BLUR_FADE_DELAY * 33} />
    </main>
  );
}
