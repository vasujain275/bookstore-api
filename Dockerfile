# Use an official Node runtime as the parent image
FROM node:21.7.3 AS builder

WORKDIR /app

COPY package.json .

COPY pnpm-lock.yaml .

RUN npm install -g pnpm

RUN pnpm install

COPY . .

EXPOSE 8069

RUN pnpm dlx prisma generate

CMD [ "pnpm", "run", "prod" ]
