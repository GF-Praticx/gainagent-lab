# Troubleshooting

## Empty Changelog

Likely causes:

- checkout did not fetch full history
- no tags exist
- the selected arguments only include the latest tag and there are no commits

Fix:

- ensure `fetch-depth: 0`
- push at least two tags over time
- run manually and inspect the action logs

## Permission Denied When Committing

Check that the workflow contains:

```yaml
permissions:
  contents: write
```

Also check repository settings for GitHub Actions workflow permissions.

## Bad Grouping

The included `cliff.toml` groups by common commit prefixes. If your repository
does not use those prefixes, edit `commit_parsers`.

## Release Notes Are Too Noisy

Start excluding low-value commits by tightening commit conventions or adding
custom parsers for your project.
