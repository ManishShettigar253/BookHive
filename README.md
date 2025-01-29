# BookHive

BookHive is a **Book Management System** designed to help you manage and organize your book collection. Built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js), this project is a practical learning experience while developing the core features of a book management app, with secure user authentication.

## Features

- **User Authentication**: Secure login and signup system with JWT tokens.
- **Book Management**: Add, update, delete, and view books.
- **Categorization**: Organize books into categories for better management.
- **Search & Filter**: Find books by title, author, or category.
- **Responsive UI**: Fully responsive front-end design using React.js.

## Tech Stack

- **Frontend**: React.js, CSS (styled-components or custom styles), React Router
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (NoSQL)
- **Authentication**: JWT (JSON Web Tokens) for secure login and user management
- **Hosting**: The backend can be hosted on platforms like Heroku, and the frontend on services like Netlify or Vercel.






## Installation

### 1. Clone the Repository

First, clone the repository to your local machine:

git clone https://github.com/ManishShettigar253/BookHive.git
cd BookHive

### 2. Install Dependencies

Backend (BookHive/backend)
Navigate to the backend/ directory and install the necessary dependencies:

cd backend
npm install

Frontend (BookHive/frontend)
Navigate to the frontend/ directory and install the necessary dependencies:

cd frontend
npm install


### 3. Setup Environment Variables
In both frontend and backend directories, you will need to create an .env file to store sensitive information like your MongoDB URL and other configuration details.

Backend .env:
PORT=5555
MONGODB_URI='your-mongodb-connection-string'
JWT_SECRET='your-jwt-secret'

Frontend .env example (for API calls):
env
REACT_APP_API_URL='http://localhost:5555/api'

### 4. Running the Application
Run the Backend Server
In the backend directory, run:

npm run dev

The backend server should be up and running on http://localhost:5555.

Run the Frontend Server
In the frontend directory, run:

npm run dev
The frontend should be accessible at http://localhost:3000.





# Project Structure:
BookHive/
├── backend/               # Backend (Node.js + Express)
│   ├── config/            # Configuration files (MongoDB, JWT secret, etc.)
│   ├── controllers/       # Business logic for routes
│   ├── models/            # Mongoose models
│   ├── routes/            # API routes
│   └── server.js          # Main backend server file
├── frontend/              # Frontend (React.js)
│   ├── public/            # Public assets (index.html, images)
│   ├── src/               # React app source code
│   ├── components/        # Reusable React components
│   ├── pages/             # React components for each page (Home, Login, etc.)
│   └── App.js             # Main React app component
├── .gitignore             # Git ignore file (to avoid pushing sensitive data)
├── README.md              # Project README
└── package.json           # Node.js package manager 



# Contributing
We welcome contributions to this project. To contribute, please follow these steps:

Fork the repository.
Clone your forked repository.
Create a new branch (git checkout -b feature-name).
Make your changes and commit them (git commit -am 'Add feature').
Push to your forked repository (git push origin feature-name).
Open a pull request.
