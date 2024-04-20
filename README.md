# Bookstore API

This project is a simple Express API that serves as a backend for managing a collection of books stored in a PostgreSQL database. It provides endpoints to perform CRUD operations (Create, Read, Update, Delete) on books, authors, and categories.

<!-- ## Project Functionality -->
<!---->
<!-- - **Create a new book**: Allows users to add a new book to the database. -->
<!-- - **Retrieve all books**: Fetches a list of all books stored in the database. -->
<!-- - **Retrieve a specific book**: Retrieves details of a specific book identified by its ID. -->
<!-- - **Update a book**: Allows users to update information of an existing book. -->
<!-- - **Delete a book**: Deletes a book from the database. -->
<!-- - **Create a new author**: Allows users to add a new author to the database. -->
<!-- - **Retrieve all authors**: Fetches a list of all authors stored in the database. -->
<!-- - **Retrieve a specific author**: Retrieves details of a specific author identified by their ID. -->
<!-- - **Update an author**: Allows users to update information of an existing author. -->
<!-- - **Delete an author**: Deletes an author from the database. -->
<!-- - **Create a new category**: Allows users to add a new category to the database. -->
<!-- - **Retrieve all categories**: Fetches a list of all categories stored in the database. -->
<!-- - **Retrieve a specific category**: Retrieves details of a specific category identified by its ID. -->
<!-- - **Update a category**: Allows users to update information of an existing category. -->
<!-- - **Delete a category**: Deletes a category from the database. -->

## Models

![image](https://github.com/vasujain275/bookstore-api/assets/69643310/edff67df-b576-4e8f-a4f3-9fbf672a2c0c)

## Standard API Response

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
## Standard API Error

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
  "errors": [
    "The requested resource could not be found"
  ]
}
```

## API Routes

### Books

#### Get all books

- **Endpoint:** `/api/books`
- **Method:** `GET`
- **Description:** Retrieves a list of all books.
- **Response:** An array of book objects with details like `id`, `title`, `authorId`, `categoryId`, and `publishedYear`.

#### Get a specific book

- **Endpoint:** `/api/books/:id`
- **Method:** `GET`
- **Description:** Retrieves details of a specific book identified by its ID.
- **Parameters:** `id` - ID of the book.
- **Response:** Details of the book including `id`, `title`, `authorId`, `categoryId`, and `publishedYear`.

#### Add a new book

- **Endpoint:** `/api/books`
- **Method:** `POST`
- **Description:** Adds a new book to the database.
- **Request Body:** JSON object with `title`, `authorId`, `categoryId`, and `publishedYear` fields.
- **Response:** Details of the newly added book including `id`, `title`, `authorId`, `categoryId`, and `publishedYear`.

#### Update a book

- **Endpoint:** `/api/books/:id`
- **Method:** `PUT`
- **Description:** Updates information of an existing book identified by its ID.
- **Parameters:** `id` - ID of the book to be updated.
- **Request Body:** JSON object with updated `title`, `authorId`, `categoryId`, and `publishedYear` fields.
- **Response:** Details of the updated book including `id`, `title`, `authorId`, `categoryId`, and `publishedYear`.

#### Delete a book

- **Endpoint:** `/api/books/:id`
- **Method:** `DELETE`
- **Description:** Deletes a book from the database.
- **Parameters:** `id` - ID of the book to be deleted.
- **Response:** A message confirming the deletion of the book.

### Authors

#### Get all authors

- **Endpoint:** `/api/authors`
- **Method:** `GET`
- **Description:** Retrieves a list of all authors.
- **Response:** An array of author objects with details like `id`, `name`, and `email`.

#### Get a specific author

- **Endpoint:** `/api/authors/:id`
- **Method:** `GET`
- **Description:** Retrieves details of a specific author identified by their ID.
- **Parameters:** `id` - ID of the author.
- **Response:** Details of the author including `id`, `name`, and `email`.

#### Add a new author

- **Endpoint:** `/api/authors`
- **Method:** `POST`
- **Description:** Adds a new author to the database.
- **Request Body:** JSON object with `name` and `email` fields.
- **Response:** Details of the newly added author including `id`, `name`, and `email`.

#### Update an author

- **Endpoint:** `/api/authors/:id`
- **Method:** `PUT`
- **Description:** Updates information of an existing author identified by their ID.
- **Parameters:** `id` - ID of the author to be updated.
- **Request Body:** JSON object with updated `name` and `email` fields.
- **Response:** Details of the updated author including `id`, `name`, and `email`.

#### Delete an author

- **Endpoint:** `/api/authors/:id`
- **Method:** `DELETE`
- **Description:** Deletes an author from the database.
- **Parameters:** `id` - ID of the author to be deleted.
- **Response:** A message confirming the deletion of the author.

### Categories

#### Get all categories

- **Endpoint:** `/api/categories`
- **Method:** `GET`
- **Description:** Retrieves a list of all categories.
- **Response:** An array of category objects with details like `id` and `name`.

#### Get a specific category

- **Endpoint:** `/api/categories/:id`
- **Method:** `GET`
- **Description:** Retrieves details of a specific category identified by its ID.
- **Parameters:** `id` - ID of the category.
- **Response:** Details of the category including `id` and `name`.

#### Add a new category

- **Endpoint:** `/api/categories`
- **Method:** `POST`
- **Description:** Adds a new category to the database.
- **Request Body:** JSON object with `name` field.
- **Response:** Details of the newly added category including `id` and `name`.

#### Update a category

- **Endpoint:** `/api/categories/:id`
- **Method:** `PUT`
- **Description:** Updates information of an existing category identified by its ID.
- **Parameters:** `id` - ID of the category to be updated.
- **Request Body:** JSON object with updated `name` field.
- **Response:** Details of the updated category including `id` and `name`.

#### Delete a category

- **Endpoint:** `/api/categories/:id`
- **Method:** `DELETE`
- **Description:** Deletes a category from the database.
- **Parameters:** `id` - ID of the category to be deleted.
- **Response:** A message confirming the deletion of the category.
