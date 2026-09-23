import {
  AVATAR,
  EARLIER_WORK,
  EMAIL,
  IN_BRIEF,
  LEAD_PROJECT,
  MARKETS,
  OFF_THE_CLOCK,
  PRESS_FIGURE,
  PROFILE,
  PROJECTS,
  RECENT_WORK,
  SECTIONS,
  SOCIAL,
  WRITING,
  type Figure,
} from "@/data/front-page";
import { DATA } from "@/data/resume";
import s from "./page.module.css";

// Figures are numbered in the order they appear on the page.
const FIG = new Map<Figure, number>(
  [
    AVATAR,
    ...RECENT_WORK.flatMap((role) => (role.figure ? [role.figure] : [])),
    LEAD_PROJECT.figure,
    PRESS_FIGURE,
  ].map((figure, i) => [figure, i + 1]),
);

function Fig({ figure, className }: { figure: Figure; className?: string }) {
  const img = (
    // Plain img: the site is a static export, so next/image would not optimise anything.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={figure.src}
      width={figure.width}
      height={figure.height}
      alt={figure.alt}
      loading={figure === AVATAR ? "eager" : "lazy"}
      className={s.photo}
    />
  );
  const [creditKind, creditSource] = figure.credit?.split(": ") ?? [];
  return (
    <figure className={`${s.figure} ${className ?? ""}`}>
      {figure.href ? (
        <a href={figure.href} className={s.photoLink}>
          {img}
        </a>
      ) : (
        img
      )}
      <figcaption className={s.caption}>
        <span>
          <b className={s.figNo}>Fig. {FIG.get(figure)}</b>
          {figure.caption}
        </span>
        {figure.credit && (
          <span className={s.credit}>
            {creditKind}: <span className={s.nowrap}>{creditSource}</span>
          </span>
        )}
      </figcaption>
    </figure>
  );
}

export default function Page() {
  return (
    <div className={s.page}>
      <header className={s.masthead}>
        <div className={s.topStrip}>
          <span>{DATA.location}</span>
          <span className={s.wideOnly}>Engineer since 2018</span>
          <span className={s.narrowOnly}>Founder, Clawify</span>
          <nav aria-label="Elsewhere" className={`${s.stripLinks} ${s.wideOnly}`}>
            {SOCIAL.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <h1 className={s.nameplate}>{DATA.name}</h1>
        <div className={s.doubleRule} />
        <div className={s.sectionStrip}>
          <span className={s.wideOnly}>{DATA.tagline}</span>
          <nav aria-label="Sections" className={s.sectionNav}>
            {SECTIONS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <span className={`${s.stripEnd} ${s.wideOnly}`}>Founder, Clawify</span>
        </div>
        <section aria-label={MARKETS.label} className={s.markets}>
          <span className={s.marketsLabel}>{MARKETS.label}</span>
          {MARKETS.figures.map((figure) => (
            <div key={figure.value} className={s.market}>
              <span className={s.marketValue}>{figure.value}</span>
              <span className={s.marketNote}>{figure.note}</span>
            </div>
          ))}
        </section>
      </header>

      <main>
        <section className={s.hero}>
          <article className={s.profile}>
            <div className={s.kicker}>Profile</div>
            <h2 className={s.headline}>{PROFILE.headline}</h2>
            <p className={s.dek}>{PROFILE.dek}</p>
            <div className={s.columns}>
              {PROFILE.paragraphs.map((text, i) => (
                <p key={i} className={i === 0 ? s.dropcap : undefined}>
                  {text}
                </p>
              ))}
            </div>
          </article>
          <Fig figure={AVATAR} className={s.avatar} />
          <aside className={s.brief}>
            <div className={s.kicker}>In brief</div>
            <dl className={s.briefList}>
              {IN_BRIEF.map((item) => (
                <div key={item.term}>
                  <dt>{item.term}</dt>
                  <dd>{item.detail}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </section>

        <section id="work" className={s.work}>
          <div className={s.workHead}>
            <h2>Work</h2>
            <span className={s.label}>2018 to now</span>
          </div>
          {RECENT_WORK.map((role) => (
            <article key={role.company} className={s.role}>
              <div className={s.roleText}>
                <span className={s.dates}>{role.dates}</span>
                <h3 className={s.company}>
                  <a className={s.co} href={role.href}>
                    {role.company}
                  </a>
                </h3>
                <span className={s.roleTitle}>{role.title}</span>
                {role.figure && <Bullets items={role.bullets} />}
              </div>
              {role.figure ? (
                <Fig figure={role.figure} className={s.roleFigure} />
              ) : (
                <Bullets items={role.bullets} className={s.roleBullets} />
              )}
            </article>
          ))}
          <div className={s.earlier}>
            <span className={s.label}>Earlier</span>
            <ul>
              {EARLIER_WORK.map((role) => {
                const inner = (
                  <>
                    <span className={s.dates}>{role.dates}</span>
                    <span className={s.earlierCompany}>{role.company}</span>
                    <i>{role.title}</i>
                  </>
                );
                return (
                  <li key={role.company}>
                    {role.href ? (
                      <a href={role.href} className={s.earlierRow}>
                        {inner}
                      </a>
                    ) : (
                      <div className={s.earlierRow}>{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section id="projects" className={s.projects}>
          <div className={s.sectionHead}>
            <h2>Projects</h2>
            <span className={s.label}>Selected</span>
          </div>
          <div className={s.projectsGrid}>
            <article className={s.lead}>
              <div className={s.leadText}>
                <div lang="zh-Hant-HK" className={s.wordmark}>
                  {LEAD_PROJECT.wordmark}
                </div>
                <h3>{LEAD_PROJECT.headline}</h3>
                <p>{LEAD_PROJECT.body}</p>
                <div className={s.leadLinks}>
                  <a href={LEAD_PROJECT.cta.href}>{LEAD_PROJECT.cta.label}</a>
                  <span>{LEAD_PROJECT.coverage}</span>
                </div>
              </div>
              <Fig figure={LEAD_PROJECT.figure} className={s.leadFigure} />
            </article>
            <div className={s.projectList}>
              {PROJECTS.map((project) => (
                <a key={project.href} href={project.href} className={s.project}>
                  <div className={s.projectHead}>
                    <h3>{project.title}</h3>
                    <span className={s.source}>
                      {project.year} · Source ↗
                    </span>
                  </div>
                  <span className={s.projectBody}>{project.description}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="writing" className={s.writing}>
          <div className={s.writingList}>
            <h2 className={s.sectionTitle}>Writing &amp; press</h2>
            {WRITING.map((group) => (
              <div key={group.heading} className={s.clippingGroup}>
                <h3 className={s.label}>{group.heading}</h3>
                <ol>
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <a href={item.href} className={s.clipping}>
                        <span className={s.clippingDate}>{item.date}</span>
                        <span className={s.clippingTitle}>{item.title}</span>
                        <span className={s.clippingOutlet}>{item.outlet}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
          <Fig figure={PRESS_FIGURE} className={s.pressFigure} />
        </section>

        <section aria-label="Off the clock" className={s.offClock}>
          <div className={s.kicker}>Off the clock</div>
          <p>{OFF_THE_CLOCK}</p>
        </section>

        <footer id="contact" className={s.footer}>
          <div className={s.kicker}>Letters to the editor</div>
          <a href={`mailto:${EMAIL}`} className={s.email}>
            {EMAIL}
          </a>
          <div className={s.footerBar}>
            <nav aria-label="Social" className={s.social}>
              {SOCIAL.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
            <span className={s.copyright}>
              © {new Date().getFullYear()} {DATA.name}, {DATA.location}
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
}

function Bullets({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={`${s.bullets} ${className ?? ""}`}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
