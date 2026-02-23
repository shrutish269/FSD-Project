Frontend Development – Experiment 4
📌 Project Overview
This project is an extension of Experiment 3 (Multi-Page React + React Router).

In Experiment 4, advanced React concepts have been implemented:

✅ useContext (Global State Management)
✅ useReducer (Structured State Updates)
✅ useMemo (Performance Optimization)
✅ One New Page (Analytics Page)
✅ Dark/Light Theme Toggle
✅ Responsive Modern UI
✅ Multi-page Navigation using React Router

🧩 Experiment 4 Requirements Mapping
✅ 1. React Router (Multi-Page Navigation)
Implemented using react-router-dom.

Pages included:

Home

Projects

Analytics (New Page – Experiment 4)

Navigation handled through Navbar component.

✅ 2. useContext (Global State Management)
Implemented in:

Code

src/context/AppContext.jsx
Used in:

Home Page (Theme Toggle)

Projects Page (Project Management)

Analytics Page (Project Summary)

Global State Includes:
Theme (Light / Dark)

Projects List (Items Array)

✅ 3. useReducer (Structured State Management)
Implemented in:

Code

src/reducer/appReducer.js
Actions Implemented:
ADD_ITEM

REMOVE_ITEM

CLEAR_ITEMS

TOGGLE_THEME

Reducer manages:

Project addition

Project removal

Clearing all projects

Theme switching

✅ 4. useMemo (Performance Optimization)
Used in:

📊 Analytics Page

Optimized calculations:

Total Projects Count

Memoization ensures recalculation only when project list changes.

✅ 5. New Page (Experiment 4 Page)
The Analytics Page demonstrates:

useContext

useReducer

useMemo

Derived state calculation (Total Projects)

Dynamic updates based on global state

This page fulfills the Experiment 4 requirement.

🎨 UI & Design Enhancements
✨ Modern clean dashboard layout
🌙 Dark / Light Theme Toggle
📱 Fully Responsive Design
🎨 Styled Navbar with hover effects
🧾 Card-based layout for pages
🔘 Styled buttons with hover animations

📂 Folder Structure
Code

src/
│
├── components/
│   └── Navbar.jsx
│
├── context/
│   └── AppContext.jsx
│
├── reducer/
│   └── appReducer.js
│
├── pages/
│   ├── Home.jsx
│   ├── Projects.jsx
│   └── Analytics.jsx
│
├── App.js
├── index.js
└── index.css
📱 Responsive Design
Mobile-friendly layout

Flexible card width

Responsive navbar

Adaptive spacing

⚙️ Technologies Used
React.js

React Router DOM

Context API

useReducer

useMemo

CSS

Create React App

🧠 Learning Outcomes
By completing this experiment, the following concepts were understood:

Global State Management using Context API

Reducer pattern for complex state handling

Memoization for performance optimization

Multi-page architecture using React Router

Responsive UI design

Clean folder structuring in React projects

✅ Status
✔ Experiment 3 Extended
✔ Experiment 4 Requirements Completed
✔ Context API Implemented
✔ useReducer Implemented
✔ useMemo Implemented
✔ Analytics Page Added
✔ node_modules Excluded

🎯 Conclusion
This project successfully demonstrates advanced React concepts including:

Global state management

Structured reducer-based updates

Performance optimization using memoization

Multi-page navigation with consistent UI

All Experiment 4 requirements have been successfully implemented.

👩‍💻 Submitted By:
Name: Shruti Sharma
UID: 23AML-7
Course: B.Tech CSE (AI & ML)
Subject: Full Stack Development