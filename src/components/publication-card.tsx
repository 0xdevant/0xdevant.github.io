import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SocialEmbed } from "@/components/social-embed";
import { formatDate } from "@/lib/utils";
import type { Publication } from "@/data/publications";

type Props = Omit<Publication, "kind">;

const CARD_CLASS =
  "p-5 sm:p-6 rounded-2xl border border-border/50 transition-all duration-300";

export function PublicationCard({
  title,
  url,
  outlet,
  publishedAt,
  summary,
  tags,
  embed,
  image,
}: Props) {
  const content = (
    <div className="space-y-3">
      {image && (
        <Image
          src={image}
          alt={title}
          width={800}
          height={420}
          className="h-40 w-full rounded-xl object-cover object-top"
        />
      )}
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base sm:text-lg font-medium tracking-tight leading-snug flex-1">
          {title}
        </h3>
        {!embed && (
          <ExternalLink className="size-4 text-muted-foreground mt-1 flex-shrink-0 opacity-60 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200" />
        )}
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{summary}</p>
      <div className="flex flex-wrap items-center gap-x-2 gap-y-2 pt-1">
        <span className="text-xs font-medium">{outlet}</span>
        <span className="text-xs text-muted-foreground">·</span>
        <time className="text-xs text-muted-foreground">
          {formatDate(publishedAt)}
        </time>
        <div className="flex flex-wrap gap-1 sm:ml-auto">
          {tags.map((tag) => (
            <Badge
              className="px-1.5 py-0 text-[10px] font-medium"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      {embed && (
        // Instagram's embed sets min-width:326px, wider than the card's inner
        // width on a phone - let it scroll here rather than the whole page.
        <div className="overflow-x-auto">
          <SocialEmbed provider={embed} url={url} />
        </div>
      )}
    </div>
  );

  // An embedded post carries its own link out, and an iframe can't live
  // inside an anchor - so only the plain card is wrapped in a Link.
  if (embed) {
    return <article className={CARD_CLASS}>{content}</article>;
  }

  return (
    <Link
      className="group block"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <article
        className={`${CARD_CLASS} hover:border-border hover:shadow-sm hover:shadow-border/20`}
      >
        {content}
      </article>
    </Link>
  );
}
