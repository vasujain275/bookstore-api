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

![image](https://github.com/vasujain275/bookstore-api/assets/69643310/03a1e045-078b-42af-a312-ebc5528b9b55)

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
