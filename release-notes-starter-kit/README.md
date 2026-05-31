# Release Notes Starter Kit

A copy-paste starter kit for small open-source projects that want cleaner
release notes without building a release system from scratch.

This kit uses:

- GitHub Actions
- `orhun/git-cliff-action`
- a small `cliff.toml`
- conventional-ish commit grouping

## What You Get

- `.github/workflows/release-notes.yml`
- `cliff.toml`
- a quick setup guide
- a troubleshooting checklist

## Who It Helps

Maintainers who already tag releases but still write changelogs by hand.

## Quick Start

1. Copy `.github/workflows/release-notes.yml` into your repository.
2. Copy `cliff.toml` into the repository root.
3. Create or push a tag like `v0.1.0`.
4. Run the workflow from GitHub Actions.
5. Review the generated `CHANGELOG.md`.

## Why This Exists

Many useful projects have decent code but weak release communication. Better
release notes help users understand what changed, whether they should upgrade,
and what risks matter.

## Human Note

This is an independent starter kit. It is not affiliated with GitHub Actions or
`git-cliff`.
