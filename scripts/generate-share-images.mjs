/**
 * Renders the OG card and favicon into public/ as real .png files.
 * Next's opengraph-image/icon routes emit extensionless files under
 * `output: export`, which GitHub Pages serves as application/octet-stream -
 * social crawlers reject that, so the images are generated ahead of the build.
 *
 * Run after editing this file or src/data/site.json: pnpm gen:share-images
 */
import { ImageResponse } from "next/og.js";
import React from "react";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const h = React.createElement;
const resolve = (path) => fileURLToPath(new URL(path, import.meta.url));

const site = JSON.parse(readFileSync(resolve("../src/data/site.json"), "utf8"));

const ogCard = h(
  "div",
  {
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      background: "#09090b",
      padding: "80px",
    },
  },
  h(
    "div",
    { style: { display: "flex", flexDirection: "column" } },
    h(
      "div",
      { style: { fontSize: 88, color: "#fafafa", letterSpacing: "-0.04em" } },
      site.name,
    ),
    h("div", {
      style: {
        width: 120,
        height: 8,
        background: "#60a5fa",
        borderRadius: 4,
        margin: "32px 0",
      },
    }),
    h(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          fontSize: 40,
          color: "#a1a1aa",
          lineHeight: 1.3,
        },
      },
      h("div", {}, site.tagline),
      h("div", {}, site.location),
    ),
  ),
  h(
    "div",
    { style: { display: "flex", fontSize: 30, color: "#71717a" } },
    site.url.replace("https://", ""),
  ),
);

const icon = h(
  "div",
  {
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#09090b",
      color: "#fafafa",
      fontSize: 42,
      letterSpacing: "-0.05em",
    },
  },
  "0x",
);

const images = [
  { element: ogCard, size: { width: 1200, height: 630 }, file: "og.png" },
  { element: icon, size: { width: 64, height: 64 }, file: "icon.png" },
];

for (const { element, size, file } of images) {
  const png = Buffer.from(
    await new ImageResponse(element, size).arrayBuffer(),
  );
  writeFileSync(resolve(`../public/${file}`), png);
  console.log(`generated public/${file} (${size.width}x${size.height})`);
}
