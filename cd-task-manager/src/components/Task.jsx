import React from 'react'
import { Link } from 'react-router-dom'

const Task = ({ task, onDelete }) => {
    if (!task) return null // ensure task is defined, tasks won't load without this line idk why 

  return (
    <div className="bg-blue-100 rounded-lg shadow-lg p-4 mb-4 transition-transform transform hover:scale-105 min-h-[80px]">
            <h3 className="text-xl font-bold">{task.title}</h3>
            <p className="mb-5">{task.description}</p>
            <button 
            onClick={() => onDelete(task.id)}
            className="bg-blue-700 text-white px-1 py-1 rounded hover:bg-red-800">
                delete
            </button>
            <button 
            // onClick={() => onDelete(task.id)}
            className="ml-2 bg-green-700 text-white px-1 py-1 rounded hover:bg-red-800">
              <Link to={`/edit-task/${task.id}`}>edit</Link>
            </button>
    </div>  
  )
}


export default Task

  