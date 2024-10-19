import React from 'react'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-toastify'

const EditTask = ( {editTask} ) => {

  const task = useLoaderData()
  if (!task) return null // ensure task is defined, tasks won't load without this line idk why

  const [title, setTitle] = useState(task.title)
  const [description, setDescription] = useState(task.description)
  const [priority, setPriority] = useState(task.priority)

  const { id } = useParams()
  const navigate = useNavigate()

  const submitForm = (e) => {
    e.preventDefault()

    const updatedTask = {
      id, 
      title, 
      description,
      priority
    }

    editTask(updatedTask)
    toast.success('Job editted successfully!')
    return  navigate('/')

  }

  return (
    <section className="bg-indigo-50 min-h-screen flex items-center justify-center">
        <form className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md" onSubmit={submitForm}>
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Edit Task</h2>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
              Task Title
            </label>

            <input
              type="text"
              id="title"
              name="title"
              className="border rounded w-full py-2 px-3 mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="eg. Home Errands" 
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="priority">
                Task priority  
              </label>
              <select
                id="priority"
                name="priority  "
                className="border rounded w-full py-2 px-3"
                required
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="Near-Term Important">Near-Term Important</option>
                <option value="Long-Term Important">Long-Term Important</option>
                <option value="Quick Ones">Quick Ones</option>
                <option value="Nice to Have">Nice to Have</option>
              </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
              Task Description
            </label>

            <input
              type="text"
              id="description"
              name="description"
              className="border rounded w-full py-2 px-3 mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="eg. Grocery run: buy tomatoes and cucumbers" 
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button 
          type="submit" 
          className="w-full bg-slate-600 text-white font-bold py-2 rounded hover:bg-green-500 transition duration-200"
          >
            Submit
          </button>
        </form>
    </section>
  )
}

export default EditTask