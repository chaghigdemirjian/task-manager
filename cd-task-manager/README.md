# Shaghig's To Do List App
#### Video Demo:  <URL https://youtu.be/1oRwGDrj8Mk>
#### Description: 

# To-Do List App

This is a simple, interactive To-Do List application built with **React**, **Vite**, **Tailwind CSS**, and a mock backend powered by **JSON Server**. The app uses **React Router** for navigation between pages and includes notifications using **React-Toastify**. Users can create, edit, delete, and mark tasks as complete, providing a smooth user experience with real-time feedback.

## Features

- **Add New Tasks**: Easily create new tasks with the option to provide a title and description.
- **Edit and Update Tasks**: Modify existing tasks by clicking the "edit" button.
- **Mark Tasks as Completed**: Strike-through styling and real-time updates when tasks are marked as done.
- **Delete Tasks**: Remove tasks from the list with confirmation.
- **Responsive UI**: A clean and responsive design using **Tailwind CSS** for styling.
- **Notifications**: Friendly toast notifications for actions like adding, updating, and deleting tasks using **React-Toastify**.
- **Mock Backend**: **JSON Server** is used as a lightweight backend to persist task data across sessions.
- **Routing**: **React Router** is used to navigate between the main home page, add task page, and edit task page.

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: JSON Server (for simulating a REST API)
- **State Management**: React's built-in state and hooks
- **Routing**: React Router Dom
- **Notifications**: React-Toastify

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/todo-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd todo-app
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Install JSON Server globally (if you don't have it installed yet):

    ```bash
    npm install -g json-server
    ```

### Running the App

1. Start JSON Server to simulate a REST API:

    ```bash
    json-server --watch db.json --port 5000
    ```

2. Start the Vite development server:

    ```bash
    npm run dev
    ```

3. Open your browser and go to `http://localhost:3000`.

### Proxy Configuration

To simplify API requests and avoid CORS issues, the Vite development server is configured to proxy requests made to `/api` to the JSON Server running on port 5000. This allows you to make API calls from your React app using a consistent URL structure.

- **Vite Server Port**: `3000`
- **JSON Server Port**: `5000`

### Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run preview`: Preview the production build locally.

