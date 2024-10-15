import React from 'react'
import Task from '../components/Task'
import TaskList from '../components/TaskList'

const HomePage = ( {deleteTask} ) => {
  return (
    <>
      <Task />
      <TaskList deleteTask={deleteTask} />
    </>
  )
}
export default HomePage