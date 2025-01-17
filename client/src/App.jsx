import React from 'react' // importing react library to build components 
import { // importing react router for routing and navigation 
  Route, // define routes 
  createBrowserRouter, // create router insntance 
  createRoutesFromElements, // generate route elements 
  RouterProvider // provide the router to the app 
} from 'react-router-dom'

// custom components and pages 
import MainLayout from './Layout/MainLayout'
import HomePage from './Pages/HomePage'
import AddTask from './Pages/AddTask'
import EditTask from './Pages/EditTask'
import Task from './components/Task'

import { ToastContainer } from 'react-toastify' // Importing ToastContainer for rendering toast notifications.
import 'react-toastify/dist/ReactToastify.css' // Importing the Toastify CSS styles for toast notifications.

const App = () => {

    // Function to add a new task via POST request to the API.
    const addNewTask = async (newTask) => {
      const res = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(newTask)
      })
      return
    }

    // Function to delete a task by its ID via a DELETE request.  
    const deleteTask = async (id) => {
      const res = await fetch(`/api/tasks/${id}`, {
        method: 'DELETE',
      })
    }

    // Function to edit an existing task via a put request to the API. 
    const editTask = async (task) => {
      const res = await fetch(`/api/tasks/${task.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(task)
      })
    }

    // Loader function to fetch task details for editting. 
    const taskLoader = async ({ params }) => {
      const res = await fetch(`/api/tasks/${params.id}`)
      const data = await res.json()
      return data
    }

  // setting up routes with react router, passing functions as props to appropriate components. 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = '/' element = {<MainLayout />}>
        <Route index element = {<HomePage deleteTask={deleteTask}/>}/>    
        <Route path='/add-task' element = {<AddTask addTaskSubmit={addNewTask}/>}/>
        <Route path='/edit-task/:id' element = {<EditTask editTask={editTask}/>} loader={taskLoader}/>
      </Route>
    )
  )
 
  // this return statement renders the RouterProvider component which makes React Router's routing system available in the app.  
  return (
    <>
      <RouterProvider router={router}/>
      <ToastContainer/>  {/* Render Toast notifications in the container at the bottom */}
    </>
  )
}
export default App