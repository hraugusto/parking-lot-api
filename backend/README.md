# 🅿️ Parking Lot API

A RESTful API for managing parking lot spots, built with Node.js and Express.
This project was developed to practice layered architecture (Repository → Service → Controller → Routes).

## 🛠️ Tech Stack

- **Node.js**
- **Express**
- In-memory data storage

## 📁 Project Structure
```
backend/
├── controllers/    # Handles HTTP requests and responses
├── services/       # Business logic and validations
├── repositories/   # Data access layer
├── routes/         # API route definitions
└── server.js       # App entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js installed

### Installation
```bash
# Clone the repository
git clone https://github.com/hraugusto/parking-lot-api.git

# Navigate to the backend folder
cd parking-lot-api/backend

# Install dependencies
npm install

# Start the server
node server.js
```

Server will run at `http://localhost:3000`

## 📌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/vagas` | List all parking spots |
| GET | `/vagas/:id` | Get a specific spot by ID |
| POST | `/vagas/:id` | Park a vehicle (requires `placa` and `modelo`) |
| DELETE | `/vagas/:id` | Release a parking spot |

### Request example (POST /vagas/1)
```json
{
  "placa": "ABC-1234",
  "modelo": "Toyota Corolla"
}
```

## 📝 Notes

- The lot has **20 spots** initialized in memory
- Data resets when the server restarts (no database)