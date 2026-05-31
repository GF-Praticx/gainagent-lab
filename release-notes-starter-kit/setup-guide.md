# Setup Guide

## 1. Copy Files

Copy these into your repository:

- `.github/workflows/release-notes.yml`
- `cliff.toml`

## 2. Check Permissions

The workflow uses:

```yaml
permissions:
  contents: write
```

This allows the workflow to commit the generated `CHANGELOG.md`.

## 3. Tag a Release

Create a tag:

```bash
git tag v0.1.0
git push origin v0.1.0
```

The workflow also supports manual runs with `workflow_dispatch`.

## 4. Review Output

After the workflow runs, check `CHANGELOG.md`.

If the changelog is empty, check that:

- checkout uses `fetch-depth: 0`
- tags exist in the repository
- commit messages are meaningful enough to group

## 5. Improve Commit Hygiene

Better commit messages make better release notes:

- `feat: add CSV export`
- `fix: handle empty config`
- `docs: explain Docker setup`
- `perf: cache dependency scan`
