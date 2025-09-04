# NestJS Todo Backend API

A RESTful Todo API built with NestJS, MongoDB, and Mongoose. This application provides a complete backend solution for managing todo items with full CRUD operations.

## Features

- ✅ Create, Read, Update, Delete (CRUD) operations for todos
- ✅ MongoDB integration with Mongoose ODM
- ✅ Input validation using class-validator
- ✅ Proper error handling and HTTP status codes
- ✅ Filter todos by completion status
- ✅ TypeScript support
- ✅ Auto-generated timestamps (createdAt, updatedAt)

## Tech Stack

- **Framework**: NestJS
- **Database**: MongoDB
- **ODM**: Mongoose
- **Validation**: class-validator, class-transformer
- **Language**: TypeScript

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nestjs-todo
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory:
```env
MONGODB_URI=mongodb://localhost:27017/nestjs-todo
PORT=3000
```

4. Start MongoDB (if using local installation):
```bash
mongod
```

## Running the Application

```bash
# Development mode with hot reload
npm run start:dev

# Production mode
npm run start:prod

# Standard development mode
npm run start
```

The API will be available at `http://localhost:3000`

## API Endpoints

### Base URL: `http://localhost:3000`

### Todos

| Method | Endpoint | Description | Body |
|--------|----------|-------------|------|
| GET | `/todos` | Get all todos | - |
| GET | `/todos?completed=true` | Get completed todos | - |
| GET | `/todos?completed=false` | Get incomplete todos | - |
| GET | `/todos/:id` | Get todo by ID | - |
| POST | `/todos` | Create new todo | `CreateTodoDto` |
| PATCH | `/todos/:id` | Update todo | `UpdateTodoDto` |
| DELETE | `/todos/:id` | Delete todo | - |

### Data Transfer Objects (DTOs)

#### CreateTodoDto
```json
{
  "title": "string (required)",
  "description": "string (optional)",
  "completed": "boolean (optional, default: false)"
}
```

#### UpdateTodoDto
```json
{
  "title": "string (optional)",
  "description": "string (optional)",
  "completed": "boolean (optional)"
}
```

### Response Format

#### Todo Object
```json
{
  "_id": "string",
  "title": "string",
  "description": "string",
  "completed": "boolean",
  "createdAt": "ISO 8601 date string",
  "updatedAt": "ISO 8601 date string",
  "__v": "number"
}
```

## Example API Usage

### Create a Todo
```bash
curl -X POST http://localhost:3000/todos \
  -H "Content-Type: application/json" \
  -d '{"title": "Learn NestJS", "description": "Complete the NestJS tutorial"}'
```

### Get All Todos
```bash
curl -X GET http://localhost:3000/todos
```

### Update a Todo
```bash
curl -X PATCH http://localhost:3000/todos/[TODO_ID] \
  -H "Content-Type: application/json" \
  -d '{"completed": true}'
```

### Delete a Todo
```bash
curl -X DELETE http://localhost:3000/todos/[TODO_ID]
```

## Error Handling

The API returns appropriate HTTP status codes:

- `200 OK` - Successful GET, PATCH requests
- `201 Created` - Successful POST requests
- `204 No Content` - Successful DELETE requests
- `400 Bad Request` - Invalid input data or malformed request
- `404 Not Found` - Resource not found
- `500 Internal Server Error` - Server errors

### Error Response Format
```json
{
  "message": "Error description",
  "error": "Error type",
  "statusCode": 400
}
```

## Project Structure

```
src/
├── common/
│   └── pipes/
│       └── mongo-id-validation.pipe.ts
├── schemas/
│   └── todo.schema.ts
├── todos/
│   ├── dto/
│   │   ├── create-todo.dto.ts
│   │   └── update-todo.dto.ts
│   ├── todos.controller.ts
│   ├── todos.module.ts
│   └── todos.service.ts
├── app.controller.ts
├── app.module.ts
├── app.service.ts
└── main.ts
```

## Testing

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```

## License

This project is [MIT licensed](LICENSE).
