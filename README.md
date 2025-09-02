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
- User authentication and authorization with **JWT**.
- Passwords hashed with bcrypt.
- Protected routes for Loads (`/api/loads`).

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
JWT_SECRET=your_secret_key
```

---

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

---

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

### Auth

- POST /api/auth/register   # Register new user
- POST /api/auth/login      # Login and receive JWT

---

## 📊 API Documentation (Swagger)

Swagger UI available at:

```bash
http://localhost:5000/api/docs

```

---

## 🧩 Project Structure

```bash

backend/
│── docs/
│   ├── seeds/
│   │   ├── loads.json                  # Database seeding mechanism
│   │   ├── subjects.json
│   │   └── teachers.json
│── src/
│   ├── config/                         # Database configuration
│   │   └── db.ts
│   ├── controllers/                    # Route controllers
│   │   ├── auth.controller.ts          # Auth endpoints
│   │   ├── load.controller.ts
│   │   ├── subject.controller.ts
│   │   └── teacher.controller.ts
│   ├── docs/                           # Swagger & Postman docs
│   │   ├── postman/
│   │   │   ├── TeachingLoad.postman_collection.json
│   │   │   └── TeachingLoad.postman_environment.json
│   │   └── swagger.ts
│   ├── middlewares/                    # Express middlewares
│   │   ├── authMiddleware.ts           # JWT validation
│   │   ├── errorHandler.ts             # Errors
│   │   ├── logger.ts                   # Logging
│   │   └── validateRequest.ts          # Validation
│   ├── models/                         # Mongoose models
│   │   ├── user.model.ts               # User schema
│   │   ├── load.model.ts
│   │   ├── subject.model.ts
│   │   └── teacher.model.ts
│   ├── routes/                         # Express routes
│   │   ├── auth.route.ts               # Auth routes
│   │   ├── health.route.ts
│   │   ├── load.route.ts
│   │   ├── subject.route.ts
│   │   └── teacher.route.ts
│   ├── scripts/                        # Seed
│   │   └── seed.ts
│   ├── types/                          # Custom TypeScript interfaces
│   │   ├── entities.ts
│   │   └── env.d.ts
│   ├── validations/                    # Validation
│   │   ├── load.validation.ts
│   │   ├── subject.validation.ts
│   │   └── teacher.validation.ts
│   │   └── user.validation.ts
│   └── server.ts                       # App entry point
│── .env                                # Environment variables
│── package.json
│── README.md
└── tsconfig.json                       # TypeScript config

```

---

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
5. Run CRUD requests for Teachers, Subjects, Loads, Auth → Register user, Login user.

---

## 🌱 Database Seeding

This project includes a seeding script to quickly populate MongoDB with initial data for testing.

### Run the seed script:

```bash
npm run seed
```

---

## 👩‍💻 Author
Project developed by **Olesia Kubska**

📌 GitHub: [OlesiaKubska](https://github.com/OlesiaKubska)

---
