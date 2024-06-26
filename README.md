# Bookstore API

This project is a simple Express API that serves as a backend for managing a collection of books stored in a PostgreSQL database. It provides endpoints to perform CRUD operations (Create, Read, Update, Delete) on books, authors, and categories.

## Table of Contents

- [Models](#models)
- [Server Setup Using Docker](#server-setup-using-docker)
- [Development](#development)
- [Usage](#usage)
  - [Standard API Response](#standard-api-response)
  - [Standard API Error](#standard-api-error)
- [Contributing](#contributing)
- [License](#license)

## Models

![image](https://github.com/vasujain275/bookstore-api/assets/69643310/edff67df-b576-4e8f-a4f3-9fbf672a2c0c)

## Server Setup Using Docker

This guide will help you set up the server using Docker. We will use the `docker-compose` tool to configure and run the services. The services include a PostgreSQL database and the Bookstore API server.

### Prerequisites

- Docker
- Docker Compose

### Docker Hub Repository

The Docker image for the Bookstore API is available on Docker Hub:
[vasujain275/bookstore-api](https://hub.docker.com/repository/docker/vasujain275/bookstore-api/general)

### Docker Compose File

Create a `docker-compose.yml` file with the following content:

```yaml
version: "3.8"

services:
  postgres:
    image: postgres:latest
    container_name: postgres_db
    ports:
      - "5432:5432"
    environment:
      POSTGRES_USER: ${POSTGRES_USER:-postgres}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD:-postgres123}
      POSTGRES_DB: ${POSTGRES_DB:-bookstoreDB}

  server:
    image: vasujain275/bookstore-api:main
    container_name: bookstore_api
    ports:
      - "8069:8069"
    depends_on:
      - postgres
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgres://${POSTGRES_USER:-postgres}:${POSTGRES_PASSWORD:-postgres123}@postgres:5432/${POSTGRES_DB:-bookstoreDB}
      - PORT=8069
```

Finally, run the following command - 

```bash
docker exec -it bookstore_api /bin/bash -c "cd /app && pnpm dlx prisma migrate deploy"
```


## Development

1. **Clone the repository:**

   - Clone the repository using `git clone https://github.com/vasujain275/bookstore-api.git`.

2. **Install Node.js:**

   - If you haven't installed Node.js yet, make sure to install it. You can find the recommended Node.js version to use in the `.node-version` file.

3. **Install `pnpm`:**

   - If you don't have `pnpm` installed, you can install it globally using `npm install -g pnpm`.

4. **Install dependencies:**

   - Navigate into the project directory and run `pnpm install` to install the project dependencies.

5. **Set up environment variables:**

   - Copy the `.env.example` file and rename it to `.env`. Fill in the required variables with your own values.

6. **Set up PostgreSQL:**

   - Set up your PostgreSQL instance according to your preference. After setting up, run `pnpm dlx prisma migrate` to apply migrations using Prisma.

7. **Start the development server:**
   - Finally, start the development server by running `pnpm dlx run dev`.

## Usage

To use the API, send HTTP requests to the provided endpoints. You can find detailed documentation on how to interact with the API in the Swagger documentation available after hosting at [localhost:8069/docs](http://localhost:8069/docs) or at [bookstore-api.vasujain.me/docs](https://bookstore-api.vasujain.me/docs)

### Standard API Response

The `ApiResponse` class provides a standardized format for API responses. It includes the following properties:

- `statusCode`: A numeric HTTP status code indicating the result of the request.
- `data`: The payload of the response, typically containing the requested data or `null` if no data is available.
- `message`: A descriptive message providing additional information about the response, defaulting to "Success" if not provided.
- `success`: A boolean value indicating whether the request was successful based on the status code.

#### Example

```json
{
  "statusCode": 200,
  "data": { "Your data here" },
  "message": "Success",
  "success": true
}
```

### Standard API Error

The `ApiError` class represents a standardized format for API error responses. It extends the built-in `Error` class and includes the following properties:

- `statusCode`: A numeric HTTP status code indicating the error.
- `data`: Always `null` for error responses.
- `message`: A descriptive message providing details about the error, defaulting to "Something went wrong" if not provided.
- `success`: A boolean value indicating the failure of the request.
- `errors`: An array containing additional error details, such as validation errors or specific error messages.

#### Example

```json
{
  "statusCode": 404,
  "data": null,
  "message": "Resource not found",
  "success": false,
  "errors": ["The requested resource could not be found"]
}
```

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow the standard Git workflow:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Create a new Pull Request.

Please ensure your code adheres to the existing code style and includes appropriate tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
