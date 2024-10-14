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

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = '/' element = {<MainLayout />}>
        <Route index element = {<HomePage />}/>    
        <Route path='/add-task' element = {<AddTask />}/>
        <Route path='/completed-tasks' element = {<CompletedTasks />}/>
      </Route>
    )
  )
  return <RouterProvider router={router}/>
}
export default App