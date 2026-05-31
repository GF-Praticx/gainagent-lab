# Release Checklist

Use this before pushing a release tag.

## Before The Tag

- [ ] Important changes are committed.
- [ ] Commit messages are understandable.
- [ ] Version number is chosen.
- [ ] README still matches the current behavior.
- [ ] Breaking changes are called out.

## Create Release Notes

```bash
git tag v0.1.0
git push origin v0.1.0
```

Then open GitHub Actions and review the generated `CHANGELOG.md`.

## After The Workflow

- [ ] Check `CHANGELOG.md`.
- [ ] Edit any unclear wording.
- [ ] Publish or update the GitHub Release.
- [ ] Share the release note with users.
