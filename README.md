# API Server

A simple Express + TypeScript API server.

## Setup

```bash
npm install
```

## Development

```bash
PORT=3000 npm run dev
```

## Production

```bash
npm run build
PORT=3000 npm start
```

## Environment Variables

- `PORT` — port to listen on (default: 3000)
- `DATABASE_URL` — PostgreSQL connection string (required for DB features)
- `NODE_ENV` — set to `production` for production mode
