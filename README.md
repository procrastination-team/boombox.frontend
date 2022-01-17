# Boombox frontend

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Docker build
Add `.env.local` and fill it with variables as in `.env.sample`

```bash 
docker build -t boombox .
docker run -p 3000:3000 boombox
```