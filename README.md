# MongoDB + Mongoose CRUD API

A simple CRUD API built with **Node.js**, **Express**, and **MongoDB** (via **Mongoose**).  
This project demonstrates the basic operations: **Create, Read, Update, Delete**.

## 🚀 Technologies Used
- Node.js
- Express
- MongoDB
- Mongoose

## 📦 Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/username/project-name.git
   cd project-name
Install dependencies:

bash

npm install
Create a .env file in the project root and add the following:

ini

MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/mydb
PORT=5000
Start the server:


npm start
🔑 API Endpoints
➕ Create User

POST /users
Content-Type: application/json

{
  "name": "Ihor",
  "email": "ihor@example.com",
  "password": "1234"
}
📖 Get All Users

GET /users
📖 Get User by ID

GET /users/:id
✏️ Update User

PUT /users
Content-Type: application/json

{
  "name": "Updated Name"
}
❌ Delete User

DELETE /users
⚡ Run Locally
Run MongoDB locally or use MongoDB Atlas.

Use Postman / cURL to test the CRUD API.
