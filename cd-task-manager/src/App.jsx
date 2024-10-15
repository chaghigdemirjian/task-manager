import React from 'react'
import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import HomePage from './Pages/HomePage'
import AddTask from './Pages/AddTask'
import CompletedTasks from './Pages/CompletedTasks'
import { toast } from 'react-toastify';

const App = () => {

    // Add new task 
    const addNewTask = async (newTask) => {
      const res = await fetch('http://localhost:5000/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(newTask)
      })
      return
    }

    // Delete an existing task 
    const deleteTask = async (id) => {
      const res = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'DELETE',
      })
    }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = '/' element = {<MainLayout />}>
        <Route index element = {<HomePage deleteTask={deleteTask}/>}/>    
        <Route path='/add-task' element = {<AddTask addTaskSubmit={addNewTask}/>}/>
        <Route path='/completed-tasks' element = {<CompletedTasks />}/>
      </Route>
    )
  )
  return <RouterProvider router={router}/>
}
export default App