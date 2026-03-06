🚀 Experiment 5 – Advanced React Task Dashboard
(Extension of Experiment 4)

👨‍💻 Student Details
Name: Shruti Sharma
UID: 23BAI70539
Course: B.E CSE (AI & ML) – Chandigarh University
Subject: Full Stack Development
Experiment: Experiment 5 (Extension of Experiment 4)

📌 Project Overview
This project is an extension of Experiment 4 where advanced React concepts were implemented to build a scalable multi-page React application.

The application demonstrates modern React development practices including:

Centralized state management using Redux Toolkit

Global state handling using React Context API

Performance optimization using useMemo

Multi-page navigation using React Router

Modular component-based architecture

Responsive dashboard-style UI

The project is implemented using React + Vite and demonstrates how large React applications manage global state efficiently.

🎯 Experiment 5 Objectives
The main objectives of this experiment are:

Implement Redux Toolkit for centralized state management

Use React Context API for global application settings

Optimize computations using useMemo

Extend an existing React application with additional pages

Maintain consistent UI/UX across the application

Build a structured React project using modular components

🧩 Implemented Features
✅ React Router
The application includes multiple working routes:

Home

Tasks

Analytics

Reports ⭐ (New page added in Experiment 5)

Navigation between pages works using React Router and a Navbar component.

✅ Context API (Global State)
A global context provider is implemented using React Context API.

The context manages global application data such as:

Theme state (Light / Dark Mode)

Theme Toggle functionality

The context is used in multiple components including:

Navbar

Theme Toggle Component

Global Application Wrapper

This allows application-wide theme management without prop drilling.

✅ Redux Toolkit (State Management)
Redux Toolkit is used to manage application state in a structured and scalable way.

Redux Store
The Redux store is configured using:

configureStore

Redux Slice
A Task Slice is implemented using:

createSlice

Redux Actions
The slice includes the following actions:

addTask – Adds a new task

toggleTask – Toggles task completion status

deleteTask – Removes a task

Redux state is accessed using:

useSelector

useDispatch

Redux is used across multiple components including:

Tasks Page

Task Card Component

Reports Page

✅ useMemo Optimization
The useMemo hook is used for performance optimization.

It is used in the Analytics page to calculate task statistics efficiently.

The following derived values are calculated using useMemo:

Total Tasks

Completed Tasks

Pending Tasks

These values are recomputed only when task data changes, improving application performance.

✅ Reports Page (New Page – Experiment 5)
A new Reports page is added to fulfill the Experiment 5 requirement.

This page demonstrates:

Redux state usage

Task data visualization

Global state integration

The page displays all tasks along with their completion status.

🎨 UI & Design
The application uses a clean dashboard-style UI.

Design features include:

Modern navigation bar

Clean task cards

Analytics statistics cards

Proper spacing and typography

Simple color theme

Responsive layout

The interface is designed to work on:

Desktop devices ✅

Mobile devices ✅

📁 Folder Structure

src/
│
├── components/
│   ├── Navbar.jsx
│   ├── ThemeToggle.jsx
│   └── TaskCard.jsx
│
├── context/
│   └── AppContext.jsx
│
├── redux/
│   ├── store.js
│   └── slices/
│       └── taskSlice.js
│
├── pages/
│   ├── Home.jsx
│   ├── Tasks.jsx
│   ├── Analytics.jsx
│   └── Reports.jsx
│
├── App.jsx
├── main.jsx
└── index.css
🖼 Screenshots
Screenshots of the application are included in the /screenshots folder.

Examples:

Home Page

Analytics Dashboard

Reports Page


screenshots/
├── home.png
├── analytics.png
└── reports.png
⚙️ Installation & Setup
Clone the repository and install dependencies.

Bash

git clone <repository-link>
cd Experiment-5
npm install
npm run dev
Open the application in the browser:


http://localhost:5173
🚀 Deployment
The project is deployed using Vercel.

Deployment format:


{uid}-5-{name}.vercel.app
Example:


23BAI70539-5-shruti-sharma.vercel.app
✅ Experiment 5 Checklist
✔ Application runs without errors
✔ React Router implemented (3+ pages)
✔ New page added for Experiment 5
✔ Context API implemented
✔ Redux Toolkit store and slice created
✔ Minimum 3 Redux actions implemented
✔ Redux used across multiple components
✔ useMemo optimization applied
✔ Clean and responsive UI maintained
✔ README updated
✔ Screenshots included
✔ Project deployed on Vercel
✔ node_modules excluded from submission

🏁 Conclusion
This experiment demonstrates how modern React applications manage complex state using Redux Toolkit and Context API while maintaining performance using useMemo.

The project showcases scalable React architecture with modular components, efficient state management, and responsive UI design suitable for real-world web applications.