FROM node:21.7.3 AS builder

WORKDIR /app

COPY . .

RUN npm install -g pnpm

RUN pnpm install -P

# Install postgresql-client for the psql command
RUN apt-get update && apt-get install -y postgresql-client

# Make the wait-for-postgres-docker.sh script executable
COPY scripts/wait-for-postgres-docker.sh /wait-for-postgres-docker.sh
RUN chmod +x /wait-for-postgres-docker.sh

# Use the wait-for-postgres-docker.sh script to ensure Postgres is ready before running migrations and starting the server
CMD /wait-for-postgres-docker.sh postgres:5432 -- pnpm dlx prisma migrate deploy && pnpm run start

EXPOSE 8069
