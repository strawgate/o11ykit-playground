# o11ykit-playground

External end-to-end playground for `strawgate/o11ykit` actions and packages.

## What this validates

- `octo11y/actions/parse-results` in both `file` and `auto` modes
- `octo11y/actions/monitor` + `octo11y/actions/emit-metric`
- `octo11y/actions/repo-stats`
- `octo11y/actions/aggregate`
- `octo11y/actions/compare`
- GitHub Pages rendering with `@benchkit/chart` from this repo's `bench-data` branch

## Workflows

- `e2e-parse-file-aggregate-compare`
- `e2e-parse-auto-aggregate`
- `e2e-monitor-hybrid`
- `e2e-repo-stats`
- `deploy-playground-pages`

## Data branch

All benchmark and telemetry artifacts are pushed to the `bench-data` branch by the actions themselves.
