# Teaching Load API (Backend)

Backend API for managing teaching load, built with **TypeScript**, **Express**, and **MongoDB (Mongoose)**.  
This project was migrated from JavaScript to TypeScript to ensure type safety and maintainability.

---

## 🚀 Features

- Built with **Express.js** + **TypeScript**.
- **MongoDB** connection via **Mongoose**.
- Environment variables managed with **dotenv**.
- Includes **Swagger** documentation (`/api/docs`).
- Postman collection and environment available in `docs/postman/`.
- CRUD operations for **Teachers**, **Subjects**, and **Loads**.

---

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/OlesiaKubska/teaching-load-api.git
cd teaching-load-api/backend
npm install
```

---

## ⚙️ Configuration

Create a `.env` file in the `backend/` directory:

```bash
PORT=5000
DB_URI=your_mongodb_connection_string
DB_NAME=teaching_load
```

## 🛠️ Scripts

```bash
# Start in development mode (with auto-restart)
npm run dev

# Build TypeScript to JavaScript
npm run build

# Run compiled code
npm start

# Seed database with sample data
npm run seed

```

## 🌐 API Endpoints

### Health Check

```bash
GET /api/health
```

### Response:

```bash
{
  "message": "Backend is running!"
}
```

---

### Teachers:

- GET /api/teachers # Get all teachers
- GET /api/teachers/{id} # Get teacher by ID
- POST /api/teachers # Create new teacher
- PUT /api/teachers/{id} # Update teacher
- DELETE /api/teachers/{id} # Delete teacher

### Subjects

- GET /api/subjects # Get all subjects
- GET /api/subjects/{id} # Get subject by ID
- POST /api/subjects # Create new subject
- PUT /api/subjects/{id} # Update subject
- DELETE /api/subjects/{id} # Delete subject

### Loads

- GET /api/loads # Get all loads
- GET /api/loads/{id} # Get load by ID
- POST /api/loads # Create new load
- PUT /api/loads/{id} # Update load
- DELETE /api/loads/{id} # Delete load

---

## 📊 API Documentation (Swagger)

Swagger UI available at:

```bash
http://localhost:5000/api/docs

```

## 🧩 Project Structure

```bash

backend/
│── src/
│   ├── config/                         # Database configuration
│   │   └── db.ts
│   ├── controllers/                    # Route controllers
│   │   ├── teacher.controller.ts
│   │   ├── subject.controller.ts
│   │   └── load.controller.ts
│   ├── models/                         # Mongoose models
│   │   ├── teacher.model.ts
│   │   ├── subject.model.ts
│   │   └── load.model.ts
│   ├── routes/                         # Express routes
│   │   ├── health.route.ts
│   │   ├── teacher.route.ts
│   │   ├── subject.route.ts
│   │   └── load.route.ts
│   ├── middlewares/                    # Express middlewares (errors, validation, logging)
│   ├── docs/                           # Swagger & Postman docs
│   │   ├── swagger.ts
│   │   └── postman/
│   │       ├── TeachingLoad.postman_collection.json
│   │       └── TeachingLoad.postman_environment.json
│   ├── types/                          # Custom TypeScript interfaces
│   │   ├── entities.ts
│   │   └── env.d.ts
│   └── server.ts                       # App entry point
│── .env                                # Environment variables
│── tsconfig.json                       #  TypeScript config
│── package.json

```

## ✅ Acceptance Criteria

- Server runs in TypeScript mode.

- MongoDB successfully connects.

- CRUD operations for Teacher, Subject, and Load are available.

- Swagger docs available at `/api/docs`.

- Postman collection available in `/docs/postman`.

---

## Postman collection

To test the API with Postman:

1. Open Postman.
2. Import collection: `docs/postman/TeachingLoad.postman_collection.json`
3. Import environment: `docs/postman/TeachingLoad.postman_environment.json`
4. Set the environment to **TeachingLoad Local**.
5. Run CRUD requests for Teachers, Subjects, and Loads.

## 📌 Related

This backend is part of the **Teaching Load API** project.

#### Future improvements:

- Authentication & Authorization (JWT).

- Middleware for validation and error handling.

- Database seeders for test data.
