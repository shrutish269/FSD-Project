Experiment – 6

JWT Authentication Backend using Node.js & Express

Name: Shruti Sharma
Course: B.Tech CSE (AI & ML)
Subject: Full Stack Development Lab

📌 Project Overview
This experiment demonstrates the implementation of JWT (JSON Web Token) authentication in a Node.js backend application using Express.js.

The system allows users to:

Register with username and password

Login and receive a JWT token

Access protected routes

Authenticate requests using JWT middleware

JWT authentication helps secure APIs by verifying the identity of users without storing session data on the server.

🎯 Objectives
The objectives of this experiment are:

To implement JWT-based authentication using Node.js.

To build a secure backend using Express.js.

To generate JWT tokens for authenticated users.

To protect API routes using authentication middleware.

To understand backend authentication flow.

🛠 Technologies Used
Technology	Purpose
Node.js	Backend runtime environment
Express.js	Web framework
JSON Web Token (JWT)	Authentication
Body Parser	Parsing request body
dotenv	Environment variables
JavaScript	Programming language
Postman	API testing

📁 Project Structure

Experiment-6
│
├── node_modules
│
├── src
│   │
│   ├── controllers
│   │   └── authController.js
│   │
│   ├── middleware
│   │   └── authMiddleware.js
│   │
│   ├── models
│   │   └── userModel.js
│   │
│   ├── routes
│   │   └── authRoutes.js
│   │
│   └── server.js
│
├── .env
├── package.json
├── package-lock.json
└── README.md

🔐 Authentication Flow
The authentication system works through the following steps.

1️⃣ User Registration
A new user registers using a username and password.

API Endpoint

POST /register
Example Request
JSON

{
  "username": "shruti",
  "password": "1234"
}
Response

User registered successfully
The user credentials are stored in the application.

2️⃣ User Login
The user logs in using the registered credentials.

API Endpoint

POST /login
Request
JSON

{
  "username": "shruti",
  "password": "1234"
}
Response
JSON

{
  "token": "jwt_token_here"
}
If the credentials are valid, the system generates a JWT token.

3️⃣ Access Protected Route
To access protected APIs, the client must send the JWT token in the Authorization header.

API Endpoint

GET /protected
Header

Authorization: Bearer <jwt_token>
Response

Access granted. JWT token verified.
The authMiddleware verifies the token before allowing access.

⚙️ Server Configuration
The application server is created using Express.js in server.js.

Main steps:

Import Express

Load environment variables using dotenv

Use body-parser to parse JSON requests

Define authentication routes

Start server on port 5000

Example:

JavaScript

const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(bodyParser.json());
app.use("/", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
🧪 API Testing using Postman
The APIs were tested using Postman.

Test cases include:

Login Test
Send username and password

Receive JWT token

Protected Route Test
Add token in Authorization header

Access protected route

Invalid Token Test
Use wrong token

Access denied

▶️ How to Run the Project
Step 1: Open project directory

cd Experiment-6
Step 2: Install dependencies

npm install
Step 3: Start the server

node src/server.js
Step 4: Server Output

Server running on port 5000
📊 Expected Output
Feature	Result
User Registration	Successful
User Login	JWT Token Generated
Protected Route	Accessible with valid token
Invalid Token	Access denied

🔑 Key Concepts Learned
Through this experiment, the following concepts were learned:

JWT Authentication

Express.js API Development

Middleware for Route Protection

Token-based Authentication

Environment Variables using dotenv

Backend API Testing

📌 Conclusion
This experiment successfully demonstrates the implementation of JWT authentication using Node.js and Express.js.

JWT authentication provides a secure and scalable method for verifying users and protecting APIs. By using authentication middleware, only authorized users can access protected resources.

This approach is widely used in modern RESTful API development and full-stack applications.