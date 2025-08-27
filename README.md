# Teaching Load API (Backend)

Backend API for managing teaching load, built with **TypeScript**, **Express**, and **MongoDB (Mongoose)**.  
This project was migrated from JavaScript to TypeScript to ensure type safety and maintainability.

---

## 🚀 Features
- Built with **Express.js** + **TypeScript**.
- **MongoDB** connection via **Mongoose**.
- Environment variables managed with **dotenv**.
- Includes **basic health check endpoint**.
- Ready for extension with more routes & models.

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
MONGO_URI=your_mongodb_connection_string
```

## 🛠️ Scripts

```bash
# Start in development mode (with auto-restart)
npm run dev

# Build TypeScript to JavaScript
npm run build

# Run compiled code
npm start
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

## 🧩 Project Structure

```bash
backend/
│── src/
│   ├── config/        # Database configuration
│   │   └── db.ts
│   ├── routes/        # Express routes
│   │   └── health.route.ts
│   ├── types/         # Custom TypeScript declarations
│   │   └── env.d.ts
│   └── server.ts      # App entry point
│── .env               # Environment variables
│── tsconfig.json      # TypeScript config
│── package.json
```

## ✅ Acceptance Criteria

- Server runs in TypeScript mode.

- Health route available at `/api/health`.

- MongoDB successfully connects.

---

## 📌 Related
This backend is part of the **Teaching Load API** project.
Future improvements: authentication, teaching load models, CRUD endpoints.
