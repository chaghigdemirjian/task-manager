import React from 'react'
import { Link } from 'react-router-dom'

const Task = ({ task, onDelete, color }) => {
    if (!task) return null // ensure task is defined, tasks won't load without this line idk why 

  return (
    <div className={`${color} rounded-lg shadow-lg p-4 mb-4 transition-transform transform hover:scale-105 min-h-[80px]`}>
            <h1 className="text-sm absolute top-2 right-2 bg-gray-100 text-black px-2 py-1 rounded-md shadow-md">{task.priority}</h1>
            <h3 className="text-lg font-bold">{task.title}</h3>
            <p className="text-sm mb-5">{task.description}</p>
            <button 
            onClick={() => onDelete(task.id)}
            className="text-sm bg-blue-700 text-white px-1 py-1 rounded hover:bg-red-800">
                delete
            </button>
            <button 
            className="text-sm ml-2 bg-green-700 text-white px-1 py-1 rounded hover:bg-red-800">
              <Link to={`/edit-task/${task.id}`}>edit</Link>
            </button>
    </div>  
  )
}


export default Task

  