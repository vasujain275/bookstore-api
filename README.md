# Bookstore API

This project is a simple Express API that serves as a backend for managing a collection of books stored in a PostgreSQL database. It provides endpoints to perform CRUD operations (Create, Read, Update, Delete) on books.

## Project Functionality

- **Create a new book**: Allows users to add a new book to the database.
- **Retrieve all books**: Fetches a list of all books stored in the database.
- **Retrieve a specific book**: Retrieves details of a specific book by its ID.
- **Update a book**: Allows users to update information of an existing book.
- **Delete a book**: Deletes a book from the database.

## API Routes

### Get all books

- **Endpoint:** `/api/books`
- **Method:** `GET`
- **Description:** Retrieves a list of all books.
- **Response:** An array of book objects with details like `id`, `title`, `author`, and `published_year`.

### Get a specific book

- **Endpoint:** `/api/books/:id`
- **Method:** `GET`
- **Description:** Retrieves details of a specific book identified by its ID.
- **Parameters:** `id` - ID of the book.
- **Response:** Details of the book including `id`, `title`, `author`, and `published_year`.

### Add a new book

- **Endpoint:** `/api/books`
- **Method:** `POST`
- **Description:** Adds a new book to the database.
- **Request Body:** JSON object with `title`, `author`, and `published_year` fields.
- **Response:** Details of the newly added book including `id`, `title`, `author`, and `published_year`.

### Update a book

- **Endpoint:** `/api/books/:id`
- **Method:** `PUT`
- **Description:** Updates information of an existing book identified by its ID.
- **Parameters:** `id` - ID of the book to be updated.
- **Request Body:** JSON object with updated `title`, `author`, and `published_year` fields.
- **Response:** Details of the updated book including `id`, `title`, `author`, and `published_year`.

### Delete a book

- **Endpoint:** `/api/books/:id`
- **Method:** `DELETE`
- **Description:** Deletes a book from the database.
- **Parameters:** `id` - ID of the book to be deleted.
- **Response:** A message confirming the deletion of the book.

## Setup Instructions

1. **Clone the repository:**
