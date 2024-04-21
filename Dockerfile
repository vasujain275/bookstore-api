# Use an official Node runtime as the parent image
FROM node:21.7.3 AS builder

WORKDIR /app

COPY package.json .

COPY pnpm-lock.yaml .

RUN npm install -g pnpm

RUN pnpm install -P

# Install postgresql-client for the psql command
RUN apt-get update && apt-get install -y postgresql-client

COPY . .

# Use the wait-for-postgres.js script to ensure Postgres is ready before running migrations and starting the server
CMD node scripts/wait-for-postgres.js && pnpm dlx prisma migrate deploy && pnpm run start

EXPOSE 8069
