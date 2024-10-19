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
import EditTask from './Pages/EditTask'
import Task from './components/Task'

const App = () => {

    // Add new task 
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

    // Delete an existing task 
    const deleteTask = async (id) => {
      const res = await fetch(`/api/tasks/${id}`, {
        method: 'DELETE',
      })
    }

    // Edit existing task
    const editTask = async (task) => {
      const res = await fetch(`/api/tasks/${task.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(task)
      })
    }

    // Fetch details of a specific task
    const taskLoader = async ({ params }) => {
      const res = await fetch(`/api/tasks/${params.id}`)
      const data = await res.json()
      return data
    }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = '/' element = {<MainLayout />}>
        <Route index element = {<HomePage deleteTask={deleteTask}/>}/>    
        <Route path='/add-task' element = {<AddTask addTaskSubmit={addNewTask}/>}/>
        <Route path='/edit-task/:id' element = {<EditTask editTask={editTask}/>} loader={taskLoader}/>
      </Route>
    )
  )
  return <RouterProvider router={router}/>
}
export default App