import { h, render } from "preact";
import { Dashboard } from "@benchkit/chart";
import "@benchkit/chart/css";

render(
  <main style={{ minHeight: "100vh", padding: "24px", background: "radial-gradient(circle at 10% 0%, #1f3a6f, #0b1220 52%)", color: "#f3f5fa" }}>
    <h1 style={{ margin: "0 0 8px", fontSize: "1.9rem" }}>o11ykit Playground</h1>
    <p style={{ margin: "0 0 16px", color: "#b7c4df", maxWidth: "72ch" }}>
      Public stress harness for benchkit and octo11y actions. These workflows intentionally exercise noisy logs,
      multi-format parsers, monitor + custom metrics, aggregate/index generation, and compare behavior.
    </p>
    <section
      style={{
        margin: "0 0 20px",
        borderRadius: "12px",
        border: "1px solid rgba(183,196,223,0.3)",
        background: "rgba(11,18,32,0.55)",
        padding: "12px 14px",
      }}
    >
      <strong style={{ display: "block", marginBottom: "6px" }}>E2E Workflows</strong>
      <ul style={{ margin: 0, paddingLeft: "18px", color: "#d4def4" }}>
        <li>e2e-canary-ergonomics: canary monitor/stash + benchkit-emit CLI flow</li>
        <li>e2e-parse-multiformat: Go, Rust, Hyperfine, pytest-benchmark, benchmark-action matrix</li>
        <li>e2e-parse-file-aggregate-compare, e2e-parse-auto-aggregate, e2e-monitor-hybrid, e2e-repo-stats</li>
      </ul>
      <p style={{ margin: "10px 0 0", color: "#b7c4df" }}>
        Action runs:{" "}
        <a href="https://github.com/strawgate/o11ykit-playground/actions" style={{ color: "#7ec8ff" }}>
          github.com/strawgate/o11ykit-playground/actions
        </a>
      </p>
    </section>
    <Dashboard source={{ owner: "strawgate", repo: "o11ykit-playground", branch: "bench-data" }} />
  </main>,
  document.getElementById("app")!,
);
