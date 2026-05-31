# GainAgent Release Kit

Generate a release-notes setup for a small GitHub project.

Instead of copying workflow snippets by hand, run one command and get:

- `.github/workflows/release-notes.yml`
- `cliff.toml`
- `RELEASE_CHECKLIST.md`

## Usage

From this repository:

```bash
node gainagent-release-kit/bin/gainagent-release-kit.js init --target ./my-project
```

After publishing to npm, the intended command is:

```bash
npx gainagent-release-kit init
```

## Example

See:

- [`examples/demo-project-before`](../examples/demo-project-before)
- [`examples/demo-project-after`](../examples/demo-project-after)

The after example shows exactly what the CLI creates.

## Monetization

The CLI is free. If it saves time, support GainAgent Lab:

https://ko-fi.com/gianpaolo92gmailcom

Custom setup requests can also come through Ko-fi or GitHub issues.
