import React from 'react' // import react to build components. 
import { Link } from 'react-router-dom' // importing the Link component from react-router-dom to enable navigation to other routes without a full page reload.

// The Task component represents a single task in the task list.
// It takes in the task object, a delete handler (onDelete), and a color for styling.
const Task = ({ task, onDelete, color }) => {
    if (!task) return null // ensure task is defined; prevents rendering issues if tasks are not fully loaded. 

  return (
    // Wrapper div styled with dynamic color and hover effects.
    <div className={`${color} rounded-lg shadow-lg p-4 mb-4 transition-transform transform hover:scale-105 min-h-[80px]`}>
            <h1 className="text-sm absolute top-2 right-2 bg-gray-100 text-black px-2 py-1 rounded-md shadow-md">{task.priority}</h1>
            <h3 className="text-lg font-bold">{task.title}</h3>
            <p className="text-sm mb-5">{task.description}</p>  
             {/* Button to delete the task, invokes the onDelete handler with the task's id */}
            <button 
            onClick={() => onDelete(task._id)}
            className="text-sm bg-blue-700 text-white px-1 py-1 rounded hover:bg-red-800">
                delete
            </button>
             {/* Button to edit the task, links to an edit page using React Router */}
            <button 
            className="text-sm ml-2 bg-green-700 text-white px-1 py-1 rounded hover:bg-red-800">
              <Link to={`/edit-task/${task._id}`}>edit</Link>
            </button>
    </div>  
  )
}


export default Task

  