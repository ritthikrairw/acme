const fs = require("node:fs");
const path = require("node:path");

const types = [
  {
    name: "🎨 style: Improve structure/format of the code",
    value: ":art: style"
  },
  { name: "⚡️ perf: Improve performance", value: ":zap: perf" },
  { name: "🔥 remove: Remove code or files", value: ":fire: remove" },
  { name: "🐛 fix: Fix a bug", value: ":bug: fix" },
  { name: "🚑️ hotfix: Critical hotfix", value: ":ambulance: hotfix" },
  { name: "✨ feat: Introduce new features", value: ":sparkles: feat" },
  { name: "📝 docs: Add or update documentation", value: ":memo: docs" },
  { name: "🚀 deploy: Deploy stuff", value: ":rocket: deploy" },
  {
    name: "💄 ui: Add or update the UI and style files",
    value: ":lipstick: ui"
  },
  { name: "🎉 init: Begin a project", value: ":tada: init" },
  {
    name: "✅ test: Add, update, or pass tests",
    value: ":white_check_mark: test"
  },
  {
    name: "🔒️ security: Fix security or privacy issues",
    value: ":lock: security"
  },
  {
    name: "🔐 secrets: Add or update secrets",
    value: ":closed_lock_with_key: secrets"
  },
  { name: "🔖 release: Release / Version tags", value: ":bookmark: release" },
  {
    name: "🚨 lint: Fix compiler/linter warnings",
    value: ":rotating_light: lint"
  },
  { name: "🚧 wip: Work in progress", value: ":construction: wip" },
  { name: "💚 ci: Fix CI Build", value: ":green_heart: ci" },
  {
    name: "⬇️ downgrade: Downgrade dependencies",
    value: ":arrow_down: downgrade"
  },
  { name: "⬆️ upgrade: Upgrade dependencies", value: ":arrow_up: upgrade" },
  {
    name: "📌 pin: Pin dependencies to specific versions",
    value: ":pushpin: pin"
  },
  {
    name: "👷 build: Add or update CI build system",
    value: ":construction_worker: build"
  },
  {
    name: "📈 analytics: Add or update analytics or track code",
    value: ":chart_with_upwards_trend: analytics"
  },
  { name: "♻️ refactor: Refactor code", value: ":recycle: refactor" },
  { name: "➕ add: Add a dependency", value: ":heavy_plus_sign: add" },
  {
    name: "➖ remove: Remove a dependency",
    value: ":heavy_minus_sign: remove"
  },
  {
    name: "🔧 config: Add or update configuration files",
    value: ":wrench: config"
  },
  {
    name: "🔨 tooling: Add or update development scripts",
    value: ":hammer: tooling"
  },
  {
    name: "🌐 i18n: Internationalization and localization",
    value: ":globe_with_meridians: i18n"
  },
  { name: "✏️ typo: Fix typos", value: ":pencil2: typo" },
  {
    name: "💩 badcode: Write bad code that needs to be improved",
    value: ":poop: badcode"
  },
  { name: "⏪️ revert: Revert changes", value: ":rewind: revert" },
  {
    name: "🔀 merge: Merge branches",
    value: ":twisted_rightwards_arrows: merge"
  },
  {
    name: "📦️ package: Add or update compiled files or packages",
    value: ":package: package"
  },
  {
    name: "👽️ api: Update code due to external API changes",
    value: ":alien: api"
  },
  {
    name: "🚚 move: Move or rename resources (e.g.: files, paths, routes)",
    value: ":truck: move"
  },
  {
    name: "📄 license: Add or update license",
    value: ":page_facing_up: license"
  },
  {
    name: "💥 breaking: Introduce breaking changes",
    value: ":boom: breaking"
  },
  { name: "🍱 assets: Add or update assets", value: ":bento: assets" },
  {
    name: "♿️ accessibility: Improve accessibility",
    value: ":wheelchair: accessibility"
  },
  {
    name: "💡 comments: Add or update comments in source code",
    value: ":bulb: comments"
  },
  { name: "🍻 drunk: Write code drunkenly", value: ":beers: drunk" },
  {
    name: "💬 text: Add or update text and literals",
    value: ":speech_balloon: text"
  },
  {
    name: "🗃️ db: Perform database related changes",
    value: ":card_file_box: db"
  },
  { name: "🔊 logs: Add or update logs", value: ":loud_sound: logs" },
  { name: "🔇 remove-logs: Remove logs", value: ":mute: remove-logs" },
  {
    name: "👥 contributors: Add or update contributor(s)",
    value: ":busts_in_silhouette: contributors"
  },
  {
    name: "🚸 ux: Improve user experience / usability",
    value: ":children_crossing: ux"
  },
  {
    name: "🏗️ architecture: Make architectural changes",
    value: ":building_construction: architecture"
  },
  {
    name: "📱 responsive: Work on responsive design",
    value: ":iphone: responsive"
  },
  { name: "🤡 mock: Mock things", value: ":clown_face: mock" },
  {
    name: "🥚 easter-egg: Add or update an easter egg",
    value: ":egg: easter-egg"
  },
  {
    name: "🙈 gitignore: Add or update a .gitignore file",
    value: ":see_no_evil: gitignore"
  },
  {
    name: "📸 snapshots: Add or update snapshots",
    value: ":camera_flash: snapshots"
  },
  {
    name: "⚗️ experiments: Perform experiments",
    value: ":alembic: experiments"
  },
  { name: "🔍️ seo: Improve SEO", value: ":mag: seo" },
  { name: "🏷️ types: Add or update types", value: ":label: types" },
  { name: "🌱 seed: Add or update seed files", value: ":seedling: seed" },
  {
    name: "🚩 flags: Add, update, or remove feature flags",
    value: ":triangular_flag_on_post: flags"
  },
  {
    name: "🥅 error-handling: Catch errors",
    value: ":goal_net: error-handling"
  },
  {
    name: "💫 animations: Add or update animations and transitions",
    value: ":dizzy: animations"
  },
  {
    name: "🗑️ deprecate: Deprecate code that needs to be cleaned up",
    value: ":wastebasket: deprecate"
  },
  {
    name: "🛂 auth: Work on code related to authorization, roles and permissions",
    value: ":passport_control: auth"
  },
  {
    name: "🩹 fix: Simple fix for a non-critical issue",
    value: ":adhesive_bandage: fix"
  },
  {
    name: "🧐 inspect: Data exploration/inspection",
    value: ":monocle_face: inspect"
  },
  { name: "⚰️ deadcode: Remove dead code", value: ":coffin: deadcode" },
  {
    name: "🧪 failing-test: Add a failing test",
    value: ":test_tube: failing-test"
  },
  {
    name: "👔 business: Add or update business logic",
    value: ":necktie: business"
  },
  {
    name: "🩺 healthcheck: Add or update healthcheck",
    value: ":stethoscope: healthcheck"
  },
  {
    name: "🧱 infrastructure: Infrastructure related changes",
    value: ":bricks: infrastructure"
  },
  {
    name: "🧑‍💻 dev: Improve developer experience",
    value: ":technologist: dev"
  },
  {
    name: "💸 sponsorship: Add sponsorships or money related infrastructure",
    value: ":money_with_wings: sponsorship"
  },
  {
    name: "🧵 concurrency: Add or update code related to multithreading or concurrency",
    value: ":thread: concurrency"
  },
  {
    name: "🦺 validation: Add or update code related to validation",
    value: ":safety_vest: validation"
  },
  {
    name: "✈️ offline: Improve offline support",
    value: ":airplane: offline"
  }
];

const apps = fs.readdirSync(path.resolve(__dirname, "apps"));
const e2eApps = fs.readdirSync(path.resolve(__dirname, "e2e"));

const packagesDir = path.resolve(__dirname, "packages");
const packages = fs.readdirSync(packagesDir).flatMap((pkg) => {
  const pkgPath = path.join(packagesDir, pkg);
  if (fs.statSync(pkgPath).isDirectory()) {
    const subdirs = fs
      .readdirSync(pkgPath)
      .filter((sub) => fs.statSync(path.join(pkgPath, sub)).isDirectory());
    if (subdirs.length > 0) {
      return subdirs.map((sub) => `${pkg}-${sub}`);
    }
    return [pkg];
  }
  return [];
});
const scopes = [...apps, ...e2eApps, ...packages];

/** @type {import('cz-git').UserConfig} */
module.exports = {
  extends: ["gitmoji"],
  prompt: {
    allowBreakingChanges: ["feat", "fix"],
    allowCustomScopes: true,
    confirmColorize: true,
    maxSubjectLength: 100,
    minSubjectLength: 3,
    scopes,
    types,
    upperCaseSubject: true
  },
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "build",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
        "chore",
        "wip",
        "config",
        "remove",
        "init",
        "deploy",
        "security",
        "secrets",
        "release",
        "lint",
        "analytics",
        "i18n",
        "typo",
        "badcode",
        "merge",
        "package",
        "api",
        "move",
        "license",
        "breaking",
        "assets",
        "accessibility",
        "comments",
        "drunk",
        "text",
        "db",
        "logs",
        "remove-logs",
        "contributors",
        "ux",
        "architecture",
        "responsive",
        "mock",
        "easter-egg",
        "gitignore",
        "snapshots",
        "experiments",
        "seo",
        "types",
        "seed",
        "flags",
        "error-handling",
        "animations",
        "deprecate",
        "auth",
        "fix",
        "inspect",
        "deadcode",
        "failing-test",
        "business",
        "healthcheck",
        "infrastructure",
        "dev",
        "sponsorship",
        "concurrency",
        "validation",
        "offline"
      ]
    ]
  }
};
