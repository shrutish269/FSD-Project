EXPERIMENT 9
Frontend Integration with RBAC
(React + Session-Based UI with Role-Based Access Control)


1. Objective
The objective of this experiment is to build a React-based frontend that integrates with a Role-Based Access Control (RBAC) backend API. The application implements session-based authentication and restricts UI components and API access based on the user's role (USER or ADMIN).
Key Goals:
•	Build a Login Page that authenticates users and redirects based on role
•	Build a User Dashboard accessible only to USER and ADMIN roles
•	Build an Admin Dashboard accessible only to ADMIN role
•	Restrict UI components — hide/show buttons based on role
•	Store role and credentials in sessionStorage for session management
•	Handle unauthorized access with redirect or error message

2. Technology Stack
Frontend Framework	React.js (Create React App)
UI Styling	Bootstrap 5 + Material UI (MUI)
HTTP Client	Axios
Token/Role Storage	sessionStorage (Web Storage API)
Backend (Exp 7)	Spring Boot with Spring Security
Auth Method	HTTP Basic Authentication + RBAC
Frontend Port	http://localhost:3000
Backend Port	http://localhost:8080


3. Project Structure
frontend/
├── src/
│   ├── components/
│   │   ├── Login.js            ← Login form, role detection, redirect
│   │   ├── UserDashboard.js    ← USER role dashboard
│   │   └── AdminDashboard.js   ← ADMIN role dashboard
│   ├── App.js                  ← Client-side route handler
│   └── index.js                ← Entry point with Bootstrap import
└── package.json


4. Installation & Setup
4.1 Backend Setup (Experiment 7 - Spring Boot)
Make sure your Spring Boot backend is running on port 8080 with these endpoints configured:
•	GET /api/user/profile  → accessible by USER and ADMIN
•	GET /api/admin/dashboard  → accessible by ADMIN only
Start the Spring Boot application from your IDE or run:
mvn spring-boot:run

4.2 Frontend Setup
npx create-react-app frontend
cd frontend
npm install axios bootstrap @mui/material @emotion/react @emotion/styled
Add Bootstrap in src/index.js:
import 'bootstrap/dist/css/bootstrap.min.css';
npm start

5. API Endpoints (Backend - Experiment 7)
Method	Endpoint	Role Required	Description
GET	/api/user/profile	USER, ADMIN	Returns user profile data
GET	/api/admin/dashboard	ADMIN only	Returns admin dashboard data


6. Role-Based Access Control Logic
6.1 Login Flow
•	User enters username and password
•	Frontend calls GET /api/user/profile with Basic Auth credentials via Axios
•	On success (status 200), username and role are stored in sessionStorage
•	Role is determined: username containing 'admin' → ADMIN, otherwise → USER
•	Redirect: ADMIN → /admin dashboard, USER → /user dashboard

6.2 Role Detection Logic
sessionStorage.setItem('user', username);
sessionStorage.setItem('role', username.includes('admin') ? 'ADMIN' : 'USER');

6.3 USER Dashboard
•	Checks sessionStorage for role on load
•	If no role found → redirect to login
•	Can call GET /api/user/profile
•	Cannot see or access admin controls

6.4 ADMIN Dashboard
•	Checks if role === 'ADMIN' in sessionStorage
•	If not ADMIN → shows 'Access Denied' alert and redirects to login
•	Can call GET /api/admin/dashboard
•	Full access to all UI components and controls

6.5 Logout
sessionStorage.clear();
•	Clears all session data (user, role)
•	Redirects back to the login page
•	All protected dashboards become inaccessible

7. Key React Components
7.1 Login.js
Renders a login form with username and password fields. On submission, calls the /api/user/profile endpoint with HTTP Basic Auth. Stores the username and detected role in sessionStorage, then redirects to the appropriate dashboard based on role.
7.2 UserDashboard.js
Protected component for USER role. Verifies role exists in sessionStorage on load. Provides a button to fetch profile data from the user API endpoint. Does not expose any admin-level controls or buttons.
7.3 AdminDashboard.js
Strictly protected component for ADMIN role only. If role is not ADMIN, immediately shows an access denied message and redirects to login. Provides full access to admin API endpoint and all UI controls.
7.4 App.js
Client-side router that checks window.location.pathname and renders the correct component: Login for /, UserDashboard for /user, and AdminDashboard for /admin.

8. Test Credentials
USER account	username: user  /  password: user123
ADMIN account	username: admin  /  password: admin123
USER endpoint	GET /api/user/profile
ADMIN endpoint	GET /api/admin/dashboard
Role Storage	sessionStorage key: 'role' (USER or ADMIN)


9. Required Screenshots
Screenshot 1	Login UI in React browser
Screenshot 2	USER dashboard after login with user credentials
Screenshot 3	USER denied access when trying to reach admin endpoint
Screenshot 4	ADMIN dashboard after login with admin credentials
Screenshot 5	sessionStorage showing role value (DevTools → Application)
Screenshot 6	Unauthorized access handling (redirect or alert)


10. Conclusion
This experiment successfully demonstrates frontend implementation of Role-Based Access Control (RBAC) using React integrated with a Spring Boot backend. The session-based approach stores the user's role in sessionStorage, enabling dynamic UI rendering and API access restriction based on the authenticated role.
The experiment covers all key aspects of RBAC in a full-stack environment — login with role detection, session management, role-based routing, protected component rendering, and secure API calls — providing a complete and practical implementation of frontend RBAC integration.