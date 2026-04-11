import { h, render } from "preact";
import { Dashboard } from "@benchkit/chart";
import "@benchkit/chart/css";

render(
  <main style={{ minHeight: "100vh", padding: "24px", background: "radial-gradient(circle at 10% 0%, #1f3a6f, #0b1220 52%)" }}>
    <h1 style={{ margin: "0 0 8px", fontSize: "1.8rem", color: "#f3f5fa" }}>o11ykit Playground</h1>
    <p style={{ margin: "0 0 24px", color: "#b7c4df" }}>
      External E2E validation for parse, monitor, aggregate, compare, and repo-stats actions.
    </p>
    <Dashboard source={{ owner: "strawgate", repo: "o11ykit-playground", branch: "bench-data" }} />
  </main>,
  document.getElementById("app")!,
);
