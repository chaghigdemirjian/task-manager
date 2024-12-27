import React from 'react' // importing react library to build components 
import Task from '../components/Task' // custom component to display a single task 
import TaskList from '../components/TaskList' // custom component to display a list of tasks 


// HomePage component: Displays the main page with organizes list of tasks 
// The deleteTask function is passed as a prop to handle task deletions directly from this page 
const HomePage = ( {deleteTask} ) => {
  return (
    <>
      <Task /> {/* Renders a single task */}
      <TaskList deleteTask={deleteTask} /> {/* Renders a list of tasks with delete functionality */}
    </>
  )
}
export default HomePage