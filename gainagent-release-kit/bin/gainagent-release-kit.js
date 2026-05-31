#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const TEMPLATE_DIR = path.join(ROOT, "templates");

function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  if (!command || command === "--help" || command === "-h") {
    printHelp();
    return;
  }

  if (command !== "init") {
    fail(`Unknown command: ${command}`);
  }

  const options = parseOptions(args.slice(1));
  const target = path.resolve(options.target || process.cwd());
  const force = Boolean(options.force);

  init(target, force);
}

function parseOptions(args) {
  const options = {};
  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    if (arg === "--target") {
      options.target = args[index + 1];
      index += 1;
    } else if (arg === "--force") {
      options.force = true;
    } else {
      fail(`Unknown option: ${arg}`);
    }
  }
  return options;
}

function init(target, force) {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }

  const files = [
    {
      from: path.join(TEMPLATE_DIR, "release-notes.yml"),
      to: path.join(target, ".github", "workflows", "release-notes.yml"),
    },
    {
      from: path.join(TEMPLATE_DIR, "cliff.toml"),
      to: path.join(target, "cliff.toml"),
    },
    {
      from: path.join(TEMPLATE_DIR, "RELEASE_CHECKLIST.md"),
      to: path.join(target, "RELEASE_CHECKLIST.md"),
    },
  ];

  const written = [];
  for (const file of files) {
    writeTemplate(file.from, file.to, force);
    written.push(path.relative(target, file.to));
  }

  console.log("GainAgent Release Kit installed:");
  for (const file of written) {
    console.log(`- ${file}`);
  }
  console.log("");
  console.log("Next:");
  console.log("1. Commit the generated files.");
  console.log("2. Push a tag like v0.1.0.");
  console.log("3. Open GitHub Actions and run Release notes.");
}

function writeTemplate(from, to, force) {
  if (fs.existsSync(to) && !force) {
    fail(`${path.relative(process.cwd(), to)} already exists. Use --force to overwrite.`);
  }
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.copyFileSync(from, to);
}

function printHelp() {
  console.log(`GainAgent Release Kit

Usage:
  gainagent-release-kit init [--target PATH] [--force]

Examples:
  gainagent-release-kit init
  gainagent-release-kit init --target ./my-project
  gainagent-release-kit init --target ./my-project --force

What it creates:
  .github/workflows/release-notes.yml
  cliff.toml
  RELEASE_CHECKLIST.md
`);
}

function fail(message) {
  console.error(`Error: ${message}`);
  process.exit(1);
}

main();
