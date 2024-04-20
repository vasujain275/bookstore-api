# Stage 1: Build environment
FROM node:21.7.3 AS builder

# Set working directory
WORKDIR /app

# Clone repository
RUN git clone https://github.com/vasujain275/bookstore-api.git .

# Install pnpm
RUN npm install -g pnpm

# Install project dependencies
RUN pnpm install

# Set up environment variables
RUN cp .env.sample .env

RUN pnpm dlx prisma migrate

RUN pnpm dlx prisma generate

RUN pnpm run build

# Set up PostgreSQL (Assuming PostgreSQL setup is not needed in Docker)

# Stage 2: Production environment
FROM node:alpine AS production

# Set working directory
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/.env.sample /app/.env
COPY --from=builder /app/src/openapi.yaml /app/src/openapi.yaml
COPY --from=builder /app/src/db/schema.prisma /app/src/db/schema.prisma

RUN npm install -g pnpm

RUN pnpm i -P

RUN pnpm dlx prisma migrate deploy

RUN pnpm dlx prisma generate

# Command to start the server
CMD ["npm", "run", "serve"]

EXPOSE 8069
