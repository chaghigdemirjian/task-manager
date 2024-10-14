import React from 'react'

const Task = ({ task }) => {
    if (!task) return null // ensure task is defined 

  return (
    <div className="bg-blue-100 rounded-lg shadow-lg p-4 mb-4 transition-transform transform hover:scale-105 min-h-[80px]">
            <h3 className="text-xl font-bold">{task.title}</h3>
            <p className="mb-5">{task.description}</p>
            <button className="bg-blue-700 text-white px-1 py-1 rounded hover:bg-red-800">
                delete
            </button>
    </div>  
  )
}
export default Task