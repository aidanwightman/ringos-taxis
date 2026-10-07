// @vitest-environment node
import fs from "node:fs";
import path from "node:path";
import { describe, it, expect } from "vitest";
import { render } from "@/entry-server";
import { routes } from "@/routes";

const sitemap = fs.readFileSync(path.resolve(__dirname, "../../public/sitemap.xml"), "utf8");
const pages = routes.map(({ path }) => ({ path, ...render(path) }));

describe("prerendered pages", () => {
  it.each(pages.map((p) => [p.path, p]))("%s has a title, description, canonical and one H1", (url, page) => {
    expect(page.head.title).toBeTruthy();
    expect(page.head.description).toBeTruthy();
    expect(page.head.canonical).toBe(`https://www.ringotaxis.com${url}`);
    expect(page.html.match(/<h1[\s>]/g)).toHaveLength(1);
  });

  it("gives every page a different title and description", () => {
    expect(new Set(pages.map((p) => p.head.title)).size).toBe(pages.length);
    expect(new Set(pages.map((p) => p.head.description)).size).toBe(pages.length);
  });

  it("lists every page in the sitemap", () => {
    for (const { path: url } of pages) {
      const loc = url === "/" ? "https://www.ringotaxis.com/" : `https://www.ringotaxis.com${url}`;
      expect(sitemap).toContain(`<loc>${loc}</loc>`);
    }
  });

  it("renders the 404 page for unknown URLs", () => {
    const { html, head } = render("/no-such-page");
    expect(html).toContain("Page not found");
    expect(head.title).toContain("Not Found");
  });
});
