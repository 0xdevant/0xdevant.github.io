"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useTheme } from "next-themes";

const EMBED_SCRIPT = "https://www.threads.com/embed.js";

declare global {
  interface Window {
    instgrm?: { Embeds?: { process?: () => void } };
  }
}

/**
 * Renders the live Threads post - author, text and engagement counts - via
 * Meta's official embed, which sizes its own iframe over postMessage.
 * The script is ~90KB, so it only loads once the embed nears the viewport.
 */
export function ThreadsEmbed({ url }: { url: string }) {
  const { resolvedTheme } = useTheme();
  const container = useRef<HTMLDivElement>(null);
  const isNearViewport = useInView(container, { once: true, margin: "200px" });

  useEffect(() => {
    if (!isNearViewport) return;

    if (document.querySelector(`script[src="${EMBED_SCRIPT}"]`)) {
      // Already loaded - a theme switch remounted the blockquote as raw markup.
      window.instgrm?.Embeds?.process?.();
      return;
    }
    const script = document.createElement("script");
    script.src = EMBED_SCRIPT;
    script.async = true;
    document.body.appendChild(script);
  }, [isNearViewport, resolvedTheme]);

  return (
    <div ref={container} className="min-h-[360px]">
      {isNearViewport && (
        // embed.js inserts its iframe as a sibling of the blockquote, so the
        // key lives on a wrapper React owns - remounting must take both.
        <div key={resolvedTheme}>
          <blockquote
            className="text-post-media"
            data-text-post-permalink={url}
            data-theme={resolvedTheme === "dark" ? "dark" : "light"}
          />
        </div>
      )}
    </div>
  );
}
