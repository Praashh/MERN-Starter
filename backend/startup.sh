#!/bin/sh
cp .env.example ./prisma/.env
npx prisma migrate dev
npx prisma generate
npm run start