"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useTheme } from "next-themes";

export type EmbedProvider = "threads" | "instagram";

declare global {
  interface Window {
    instgrm?: { Embeds?: { process?: () => void } };
  }
}

const PROVIDERS: Record<
  EmbedProvider,
  {
    script: string;
    /** Instagram's embed renders light-only; Threads follows data-theme. */
    themed: boolean;
    attributes: (url: string, isDark: boolean) => Record<string, string>;
  }
> = {
  threads: {
    script: "https://www.threads.com/embed.js",
    themed: true,
    attributes: (url, isDark) => ({
      className: "text-post-media",
      "data-text-post-permalink": url,
      "data-theme": isDark ? "dark" : "light",
    }),
  },
  instagram: {
    script: "https://www.instagram.com/embed.js",
    themed: false,
    attributes: (url) => ({
      className: "instagram-media",
      "data-instgrm-permalink": url,
      "data-instgrm-version": "14",
      "data-instgrm-captioned": "",
    }),
  },
};

/**
 * Renders a live social post - author, text and engagement counts - via Meta's
 * official embed, which sizes its own iframe over postMessage. Each script is
 * ~90KB, so it only loads once the embed nears the viewport. Both providers
 * share the window.instgrm.Embeds.process() entry point and chain onto it.
 */
export function SocialEmbed({
  provider,
  url,
}: {
  provider: EmbedProvider;
  url: string;
}) {
  const { resolvedTheme } = useTheme();
  const container = useRef<HTMLDivElement>(null);
  const isNearViewport = useInView(container, { once: true, margin: "200px" });

  const { script, themed, attributes } = PROVIDERS[provider];
  const isDark = resolvedTheme === "dark";
  const themeKey = themed ? String(isDark) : "static";

  useEffect(() => {
    if (!isNearViewport) return;

    if (document.querySelector(`script[src="${script}"]`)) {
      // Already loaded - a theme switch remounted the blockquote as raw markup.
      window.instgrm?.Embeds?.process?.();
      return;
    }
    const el = document.createElement("script");
    el.src = script;
    el.async = true;
    document.body.appendChild(el);
  }, [isNearViewport, script, themeKey]);

  return (
    <div ref={container} className="min-h-[360px]">
      {isNearViewport && (
        // The embed inserts its iframe as a sibling of the blockquote, so the
        // key lives on a wrapper React owns - remounting must take both.
        <div key={themeKey}>
          <blockquote {...attributes(url, isDark)} />
        </div>
      )}
    </div>
  );
}
