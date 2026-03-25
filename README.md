# Vite + Bun + shadcn/ui

This repo is a Vite React app wired for Bun and shadcn/ui. It includes:

- A home screen in `src/App.jsx`
- A routed component showcase at `/showcase`
- A fallback 404 page
- A theme switcher with light, dark, and system modes
- Generated shadcn/ui components under `src/components/ui`

## Stack

- Vite
- Bun
- React 19
- React Router DOM
- shadcn/ui
- Tailwind CSS v4

## Getting Started

```bash
bun install
bun dev
```

## Available Scripts

```bash
bun dev
bun build
bun lint
bun preview
```

## Routes

- `/` renders the existing `App.jsx` home page
- `/showcase` renders the responsive shadcn component showcase
- any unknown path renders the 404 page

## Notes

- Global styling lives in `src/index.css`
- The app uses a `ThemeProvider` from `next-themes`
- The router is defined in `src/router.jsx`
- The showcase page is intentionally large because it exercises many generated components in one place
