// Import the StrictMode component from React. 
// StrictMode is a wrapper that helps with identifying potential problems in the app 
// by running additional checks and warnings in development mode (not affecting production).
import { StrictMode } from 'react'

// Import the createRoot function from 'react-dom/client' to enable the root API for rendering React applications.
import { createRoot } from 'react-dom/client'

// importing the main app component that will be rendered in the DOM. 
import App from './App.jsx'

// importing the global CSS style for the app. 
import './index.css'


// Render the React app to the DOM:
// - The `createRoot` method initializes the app and attaches it to the DOM element with the id of 'root'.
// - The `StrictMode` wrapper helps catch potential issues during development (e.g., deprecated APIs, unsafe lifecycle methods).
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
