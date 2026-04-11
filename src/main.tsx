import { h, render } from "preact";
import { Dashboard } from "@benchkit/chart";
import "@benchkit/chart/css";

const indexUrl = "https://raw.githubusercontent.com/strawgate/o11ykit-playground/bench-data/data/index.json";

render(
  <main style={{ minHeight: "100vh", padding: "24px", background: "radial-gradient(circle at 10% 0%, #1f3a6f, #0b1220 52%)" }}>
    <Dashboard
      indexUrl={indexUrl}
      title="o11ykit Playground"
      description="External E2E validation for parse, monitor, aggregate, compare, and repo-stats actions."
    />
  </main>,
  document.getElementById("app")!,
);
