Experiment-2:- Fetch Users from API using React
(LABMST)
Experiment Title
Fetch Data from an API using useEffect Hook in React

Objective
The objective of this experiment is to understand how to fetch data from an external API in a React application using the useEffect hook and display it dynamically on the webpage.

Technologies Used
React.js

JavaScript (ES6)

CSS

Vite

REST API

API Used
User data is fetched from the following API:


https://jsonplaceholder.typicode.com/users
This API returns sample user information such as name and email.

Folder Structure

labmst
│
├── src
│   ├── components
│   │      └── Users.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── public
├── index.html
├── package.json
└── vite.config.js
Implementation Logic
The React application starts from main.jsx.

The App component loads the Users component.

The Users component fetches data from the API using the fetch() method.

The useEffect hook ensures the API call runs when the component loads.

The fetched data is stored using useState.

The user list is displayed dynamically using the map() function.

React Hooks Used
useState
Used to store the user data fetched from the API.

useEffect
Used to perform side effects such as fetching data when the component loads.

Features
Fetch data from an external API

Display users dynamically

Responsive card-based layout

Styled user interface using CSS

Hover effects on user cards

Output
The application displays a centered grid of user cards containing:

User Name

User Email

Users are displayed in a horizontal responsive layout.

Possible Improvements
Add loading indicator while fetching data

Add error handling for API failures

Use Axios instead of fetch

Separate API logic into a service file

Add search functionality

Conclusion
This experiment demonstrates how React can interact with external APIs using the useEffect hook and dynamically render data in the user interface.