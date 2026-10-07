import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import { routes } from "./routes";
import { beginSSRHead } from "./hooks/usePageSEO";

export const paths = routes.map((r) => r.path);

/** Render one page to HTML for prerendering, along with its head tags. */
export function render(url: string) {
  const head = beginSSRHead();
  const html = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  );
  return { html, head };
}
