# Product Catalog API

A RESTful API for managing a product catalog, built with Node.js, Express, Drizzle ORM, and MySQL.

## Features

- Product listing with search, pagination, and sorting
- Product details retrieval
- Database seeding and migrations
- Docker support for MySQL

## Technologies Used

- **Node.js** & **Express**: Backend server and routing
- **Drizzle ORM**: Database schema, migrations, and queries
- **MySQL**: Relational database
- **Docker**: Containerized database environment
- **TypeScript**: Type safety
- **drizzle-seed**: Database seeding utility

## Installation

1. **Clone the repository**

   ```sh
   git clone https://github.com/Reifhel/product-catalog-brokkr.git
   cd product-catalog-brokkr/api
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Configure environment**

   - Edit `.env` file with your database connection string:
     ```
     DATABASE_URL="mysql://docker:docker@localhost:3306/ProductCatalogDB"
     ```

4. **Start MySQL with Docker**

   ```sh
   docker-compose up -d
   ```

5. **Generate database**

   ```sh
   npm run db:generate
   ```

6. **Run migrations**

   ```sh
   npm run db:migrate
   ```

7. **Seed the database**

   ```sh
   npm run db:seed
   ```

8. **Start the development server**

   ```sh
   npm run dev
   ```

## API Endpoints

### GET `/products`

Returns a paginated list of products.**Query Parameters:**

- `search`: Filter by product name (optional)
- `page`: Page offset (default: 0)
- `limit`: Items per page (default: 10)
- `sort`: Sorting, e.g. `sort=preco,asc` (default: `nome,asc`)

**Example:**

```
GET /products?search=shirt&sort=preco,desc&page=0&limit=5
```

### GET `/products/:id`

Returns details for a specific product by ID.

**Example:**

```
GET /products/123e4567-e89b-12d3-a456-426614174000
```

## Project Structure

```
src/
  server.ts
  db/
    connection.ts
    seed.ts
    migrations/
    schema/
      index.ts
      products.ts
  http/
    routes/
      get-products.ts
      get-product-details.ts
```

## Scripts

- `npm run dev` — Start development server
- `npm run db:migrate` — Run database migrations
- `npm run db:seed` — Seed the database
- `npm run db:generate` — Generate migration files
