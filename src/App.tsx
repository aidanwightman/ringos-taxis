import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { routes } from "./routes";

/** Routes without a router, so the browser and the prerenderer can each supply their own. */
const App = () => (
  <Routes>
    {routes.map(({ path, element }) => (
      <Route key={path} path={path} element={element} />
    ))}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;
