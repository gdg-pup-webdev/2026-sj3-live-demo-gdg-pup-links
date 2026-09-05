# Study Jam 3 Live Demo: GDG PUP Links

[![Status: Teaching](https://img.shields.io/badge/Status-Teaching-blue)](docs/state.md)
[![Stack: React](https://img.shields.io/badge/Stack-React-black)](#about)
[![FMD philosophy: 1.31.0](https://img.shields.io/badge/FMD%20philosophy-1.31.0-blue)](AGENTS.md)


React + Vite live demo used in GDG PUP Study Jam 3. Builds a links-style page with HMR, ESLint, and modern React tooling for the session walkthrough.

## Table of Contents

- [About](#about)
- [Start here](#start-here)
- [Features](#features)
- [Quick start](#quick-start)
- [React Compiler](#react-compiler)
- [ESLint](#eslint)
- [Documentation](#documentation)
- [Contributors](#contributors)

## About

This repository is the live coding demo for Study Jam 3 (GDG PUP Links). It gives facilitators and attendees a minimal React + Vite app to follow during the session. It is a teaching demo, not a production product launch.

## Start here

- **Humans:** this README, then [docs/state.md](docs/state.md)
- **Agents:** [AGENTS.md](AGENTS.md) (state → index → FLAGS)
- **Contributors:** table below

## Features

- Minimal React setup with Vite HMR
- ESLint rules for React Hooks and refresh
- Official Vite React plugin options (`@vitejs/plugin-react` via Babel, or SWC via `@vitejs/plugin-react-swc`)

## Quick start

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

Other scripts:

```bash
npm run build
npm run preview
npm run lint
```

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev and build performance. To add it, see the [React Compiler installation docs](https://react.dev/learn/react-compiler/installation).

## ESLint

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Documentation

| Doc | Purpose |
| --- | --- |
| [State](docs/state.md) | Operate position / teaching handover |
| [Index](docs/index.md) | Document manifest |
| [FLAGS](FLAGS.md) | Improvement register |
| [AGENTS](AGENTS.md) | Agent read order |

## Contributors

This project is made possible by the GDG PUP community.

| Name | Role | GitHub |
| --- | --- | --- |
| [Carlos Jerico Dela Torre](https://www.linkedin.com/in/delatorrecj) | Chief Technology Officer (2025-2026) | [@delatorrecj](https://github.com/delatorrecj) |
| [Erwin Daguinotas](https://www.linkedin.com/in/erwin-daguinotas) | Web Development Lead | [@SauceCode01](https://github.com/SauceCode01) |

