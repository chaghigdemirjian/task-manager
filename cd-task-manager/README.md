# Chaghig's Task Manager App

A simple, interactive, full-stack Task Manager application built using the **MERN** stack (MongoDB, Express, React Vite and Node.js) using **Tailwind CSS** for styling. The app uses **React Router** for navigation between pages and includes notifications using **React-Toastify**. Users can create, edit, and delete tasks, providing a smooth user experience with real-time feedback.

## Features

- **Task Management**: Create, read, update and delete (CRUD) operations for tasks. 
- **Categorization**: Prioritize tasks into pre-defined categories. 
- **Styling**: Responsive design using Tailwind CSS. 
- **Notification**: Real-time feedback using notifications.  
- **Routing**: **React Router** is used to navigate between the main home page, add task page, and edit task page.

## Tech Stack

- **Frontend**: React, Vite and Tailwind CSS
- **Backend**: Node.js and Express.js
- **Database**: MongoDB (Atlas) 
- **Routing**: React Router Dom
- **Notifications**: React-Toastify

### Pre-Requisites 
- **Node.js**: (v16 or later)
- **MongoDB Atlas**: Requires  Atlas Account for database setup

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/chaghigdemirjian/task-manager.git
    ```

2. Navigate to the project directory (if not already there):

    ```bash
    cd task-manager
    ```

3. Install dependencies:

    - Install dependencies for the frontend:

    ```bash
    cd client && npm install  
    ```

    - Install dependencies for the backend:

    ```bash
    cd ../server && npm install
    npm install dotenv
    ```
4. Set up Tailwind CSS:

    ```bash
    cd ../client
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```

    - In your `tailwind.config.js`, configure the `content` array to ensure Tailwind CSS scans the right files:

    ```js
    module.exports = {
      content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
      theme: {
        extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      gridTemplateColumns: {
        '70/30' : '70% 28%',
      },
     },
    },
      plugins: [],
    }
    ```
5. Create a .env file in the server folder with the following:

    ```bash
    MONGODB_URI=<Your MongoDB Atlas URI>  
    PORT=5000  
    ```

### Running the App

1. Backend:

    ```bash
    cd server
    node --env-file=config.env server 
    ```

2. Frontend:

    ```bash
    cd ../client
    npm run dev 
    ```

3. Open your browser and go to `http://localhost:3000` (Frontend Development).
4. Open your browser and go to `http://localhost:5000` (Backend Development).


### Proxy Configuration

To simplify API requests and avoid CORS issues during development, the Vite server proxies `/api` requests to the backend Server running on port 5000. 

- **Vite Server Port**: `3000`
- **Backend Server Port**: `5000`
- **MongoDB Connection**: MongoDB Atlas URI specified in .env. 

### Available Scripts

- **Backend**: `node --env-file=config.env server`. Starts the backend server with environment variables loaded from .env.
- **Frontend**: `npm run dev`. Starts the development server for the react app.  
