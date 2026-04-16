EXPERIMENT 8
Frontend Integration with JWT APIs
(Session-Based UI Authentication)


1. Objective
The objective of this experiment is to build a React-based frontend application that integrates with JWT (JSON Web Token) APIs. The application implements session-based authentication where the token is stored in sessionStorage, and restricts access to protected pages based on login state.
Key Goals:
•	Build a Login Page that calls POST /login and stores the JWT token
•	Build a Protected Dashboard Page accessible only when a valid token exists
•	Implement Logout functionality that clears the session and redirects to login
•	Restrict access to protected routes based on token availability in sessionStorage

2. Technology Stack
Frontend Framework	React.js (Create React App)
Styling	Bootstrap 5 + Material UI (MUI)
HTTP Client	Axios
Token Storage	sessionStorage (Web Storage API)
Backend (Exp 6)	Node.js + Express.js
Auth Method	JWT (JSON Web Token)
Port - Frontend	http://localhost:3000
Port - Backend	http://localhost:5000


3. Project Structure
Frontend
frontend/
├── src/
│   ├── components/
│   │   ├── Login.js       ← Login form UI
│   │   └── Dashboard.js   ← Protected dashboard UI
│   ├── App.js             ← Route handler
│   └── index.js           ← Entry point with Bootstrap import
├── package.json
└── .env

Backend (Experiment 6)
Experiment-6/
├── src/
│   ├── controllers/authController.js  ← Login logic + JWT signing
│   ├── middleware/authMiddleware.js    ← Token verification
│   ├── models/userModel.js             ← Hardcoded user data
│   ├── routes/authRoutes.js            ← POST /login, GET /protected
│   └── server.js                       ← Express server entry
├── .env                                ← PORT & JWT_SECRET
└── package.json

4. Installation & Setup
4.1 Backend Setup (Experiment 6)
Navigate to your Experiment-6 folder and install dependencies:
cd Experiment-6
npm install
node src/server.js
The backend runs on: http://localhost:5000

4.2 Frontend Setup
npx create-react-app frontend
cd frontend
npm install axios bootstrap @mui/material @emotion/react @emotion/styled
npm start
The frontend runs on: http://localhost:3000

5. API Endpoints
Method	Endpoint	Description	Auth Required
POST	/login	Authenticate user, return JWT token	No
GET	/protected	Return protected data if valid token	Yes (Bearer)
POST	/logout	Logout (handled on frontend via sessionStorage)	No


6. Session-Based Authentication Logic
6.1 Login Flow
•	User enters username and password on Login page
•	Frontend calls POST /login with credentials via Axios
•	On success, JWT token received and stored: sessionStorage.setItem('token', res.data.token)
•	User is redirected to /dashboard

6.2 Protected Route Guard
•	Dashboard checks for token on component mount using useEffect
•	If no token found in sessionStorage → redirect to Login page
•	If token exists → allow access and fetch protected data

6.3 Fetching Protected Data
•	Dashboard calls GET /protected with Authorization header
Authorization: Bearer <token>
•	Backend middleware verifies the token using jwt.verify()
•	If valid → returns protected data; If invalid → returns 403 Forbidden

6.4 Logout
•	Logout button clears token: sessionStorage.removeItem('token')
•	User is redirected back to the Login page
•	Dashboard is no longer accessible until login again

7. Key React Components
7.1 Login.js
Handles user authentication. Accepts username and password input, calls the /login API endpoint, and stores the received JWT token in sessionStorage before redirecting to the dashboard.
7.2 Dashboard.js
Protected component that verifies token existence on load. Displays the JWT token (truncated), provides a button to fetch data from the protected API endpoint, and includes a logout button.
7.3 App.js
Acts as a simple client-side router. Checks window.location.pathname — renders Dashboard if path is /dashboard, otherwise renders Login.

8. Test Credentials
Username	admin
Password	password
Token Expiry	1 hour (configurable in .env)
JWT Secret	Stored in .env as JWT_SECRET


9. Required Screenshots
Screenshot 1	Login page UI in React browser
Screenshot 2	Token stored in sessionStorage (DevTools → Application tab)
Screenshot 3	Protected data visible on Dashboard after fetching
Screenshot 4	Redirect to login when accessing /dashboard without token
Screenshot 5	Logout clears session and redirects to login page


10. Conclusion
This experiment successfully demonstrates the integration of a React frontend with JWT-based authentication APIs. The session-based approach using sessionStorage ensures the token is automatically cleared when the browser tab is closed, providing a more secure experience compared to localStorage.
The experiment covers all essential aspects of token-based authentication in modern web applications — login, token storage, protected route access, bearer token headers, and logout — making it a complete implementation of session-based JWT authentication in a full-stack environment.