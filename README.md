# NX Monorepo Boilerplate

## Overview

This repository serves as a boilerplate for building scalable and maintainable applications using the Nx monorepo framework. It includes a variety of tools, libraries, and configurations to streamline development.

## Features

### Core Tools

- ✅ **TypeScript**: Strongly typed programming language for building robust applications.
- ✅ **ESLint**: Linter for identifying and fixing code issues.
  - **@nx/enforce-module-boundaries**: Enforces module boundaries to maintain a clean architecture.
  - **eslint-config-nex**: Pre-configured ESLint rules for Next.js applications.
  - **eslint-config-prettier**: Code formatter for maintaining consistent code style.
  - **eslint-plugin-import**: Plugin for managing import/export syntax.
  - **eslint-plugin-jsx-a11y**: Accessibility checks for JSX elements.
  - **eslint-plugin-perfectionist**: Enforces code style rules for better readability.
  - **eslint-plugin-playwright**: Provides Playwright-specific linting rules.
  - **eslint-plugin-react**: Linting rules for React applications.
  - **eslint-plugin-react-hooks**: Enforces rules of React Hooks.
- ✅ **Prettier**: Code formatter for consistent style.
- ✅ **Husky**: Git hooks for enforcing pre-commit checks.
  - **lint-staged**: Runs linters on pre-committed files to ensure code quality.
- ✅ **cz-git**: Customizable commit message prompt with Gitmoji support.
  - **commitizen**: Tool for creating standardized commit messages.
  - **commitlint**: Ensures commit messages follow a defined convention.
  - **commitlint-config-gitmoji**: Emoji-based commit message convention for better readability.

### UI Libraries

- ✅ **HeroUI**: Pre-designed UI components for modern web applications.
- ✅ **Tailwind CSS**: Utility-first CSS framework for rapid UI development.

### Helpers Libraries

🚧 in progress

## Applications

- ✅ **Next.js App**: Fully functional Next.js application.
- 🚧 **Tanstack Start**: Starter template for Tanstack (In Progress).
- 🚧 **React App**: React application setup (In Progress).
- 🚧 **Node.js App**: Node.js backend application (In Progress).
- 🚧 **Cloudflare Worker**: Serverless application for Cloudflare (In Progress).
- 🚧 **Hono App**: Application using the Hono framework (In Progress).

## Packages and Libraries

- ✅ **Shared Feature**: Reusable features shared across applications.
- ✅ **Shared Data-access**: Centralized data access layer.
- ✅ **Shared UI**: Common UI components.
- ✅ **Shared Utilities**: Utility functions for various use cases.

## Planned Enhancements

- 🚧 Build applications as Docker images.
- 🚧 Deploy applications with Cloudflare Pages/Workers.
- 🚧 Automate build and publish processes to GitHub Registry.
- 🚧 Manage environment variables with dotenvx.
- 🚧 Add Storybook for UI component documentation and testing.

---

This README provides a high-level overview of the repository. For detailed instructions on setting up and running the project, refer to the documentation in the respective application or package folders.
