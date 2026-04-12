# o11ykit-playground

External end-to-end playground for `strawgate/o11ykit` actions and packages.

## What this validates

- `octo11y/actions/parse-results` in both `file` and `auto` modes
- `octo11y/actions/monitor` + custom metrics emission flows
- `octo11y/actions/repo-stats`
- `octo11y/actions/aggregate`
- `octo11y/actions/compare`
- GitHub Pages rendering with `@benchkit/chart` from this repo's `bench-data` branch

## Workflows

- `e2e-parse-file-aggregate-compare`
- `e2e-parse-auto-aggregate`
- `e2e-monitor-hybrid`
- `e2e-repo-stats`
- `e2e-parse-multiformat` (Go, Rust, Hyperfine, pytest-benchmark, benchmark-action)
- `e2e-canary-ergonomics` (canary o11ykit ref with local-built actions)
- `deploy-playground-pages`

## Canary ergonomics flow

`e2e-canary-ergonomics` checks out an arbitrary `strawgate/o11ykit` ref, builds action bundles locally, then validates:

- monitor start/stop with run-scoped telemetry sidecar
- `benchkit-emit` HTTP mode and file fallback mode
- stash with `results + metrics-dir`
- stash with `metrics-dir` only (no benchmark file)
- compare against fresh baseline and aggregate output generation

Run it manually:

```bash
gh workflow run e2e-canary-ergonomics.yml --repo strawgate/o11ykit-playground \
  -f o11ykit-ref=main
```

## Data branch

All benchmark and telemetry artifacts are pushed to the `bench-data` branch by the actions themselves.
