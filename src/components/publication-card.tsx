import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import type { Publication } from "@/data/publications";

type Props = Omit<Publication, "kind">;

export function PublicationCard({
  title,
  url,
  outlet,
  publishedAt,
  summary,
  tags,
}: Props) {
  return (
    <Link
      className="group block"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <article className="p-5 sm:p-6 rounded-2xl border border-border/50 hover:border-border transition-all duration-300 hover:shadow-sm hover:shadow-border/20">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-base sm:text-lg font-medium tracking-tight leading-snug flex-1">
              {title}
            </h3>
            <ExternalLink className="size-4 text-muted-foreground mt-1 flex-shrink-0 opacity-60 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200" />
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {summary}
          </p>
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
        </div>
      </article>
    </Link>
  );
}
