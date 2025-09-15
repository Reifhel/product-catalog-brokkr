# Product Catalog Web

This is a React + TypeScript project using Vite, TailwindCSS, and ShadcnUI components. It provides a simple product catalog interface with search, product details, and theme switching (light/dark/system).

## Features

- Product listing with search and filters
- Product details page
- Theme toggle (light/dark/system)
- Responsive UI with TailwindCSS
- API integration using Axios and React Query

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

```sh
npm install
```

### Running Locally

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```sh
npm run build
```

### Lint

```sh
npm run lint
```

## Project Structure

- `src/` — Main source code
  - `components/` — UI and theme components
  - `pages/` — Catalog and product details pages
  - `api/` — API request functions
  - `lib/` — Utility libraries

## API

The frontend expects a backend running at `http://localhost:3000` with endpoints for products.
