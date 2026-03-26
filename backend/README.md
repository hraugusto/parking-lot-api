# 🅿️ Parking Lot API

A RESTful API for managing parking lot spots with JWT authentication, built with Node.js and Express.
This project was developed to practice layered architecture (Repository → Service → Controller → Routes).

## 🛠️ Tech Stack

- **Node.js**
- **Express**
- **SQLite** (better-sqlite3)
- **JWT** (jsonwebtoken)
- **bcryptjs**

## 📁 Project Structure
```
backend/
├── controllers/        # Handles HTTP requests and responses
│   ├── authController.js
│   └── vagaController.js
├── middlewares/        # JWT authentication middleware
│   └── authMiddleware.js
├── services/           # Business logic and validations
│   └── vagaService.js
├── repositories/       # Data access layer
│   └── vagaRepository.js
├── routes/             # API route definitions
│   ├── authRoutes.js
│   └── vagaRoutes.js
├── database.js         # SQLite connection and setup
└── server.js           # App entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js installed

### Installation
```bash
git clone https://github.com/hraugusto/parking-lot-api.git
cd parking-lot-api/backend
npm install
node server.js
```

Server will run at `http://localhost:3000`

## 🔐 Authentication

All `/vagas` routes require a Bearer Token in the Authorization header.

### Register
**POST** `/auth/register`
```json
{ "email": "user@email.com", "senha": "123456" }
```

### Login
**POST** `/auth/login`
```json
{ "email": "user@email.com", "senha": "123456" }
```
Returns a JWT token valid for 1 hour.

## 📌 API Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/auth/register` | ❌ | Register a new user |
| POST | `/auth/login` | ❌ | Login and get token |
| GET | `/vagas` | ✅ | List all parking spots |
| GET | `/vagas/:id` | ✅ | Get a specific spot |
| POST | `/vagas/:id` | ✅ | Park a vehicle |
| DELETE | `/vagas/:id` | ✅ | Release a spot |

### Park a vehicle (POST /vagas/1)
```json
{ "placa": "ABC-1234", "modelo": "Toyota Corolla" }
```

## 📝 Notes

- The lot has **20 spots** initialized on first run
- Data persists in a local SQLite database
- Passwords are hashed with bcryptjs