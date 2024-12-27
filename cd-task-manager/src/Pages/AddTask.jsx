import React from 'react' // importing react library to build components.
import { useState } from 'react' // importing useState hook for managing component state.
import { useNavigate } from 'react-router-dom' // importing hooks for routing and navigation.
import { toast } from 'react-toastify' // importing toast for notifications. 

const AddTask = ( {addTaskSubmit} ) => { // addTaskSubmit is passed as a prop from the main App.

  // setting up state hooks for form inputs based on task data.
  const [title, setTitle] = useState('') 
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('Near-Term Important')

  const navigate = useNavigate() // hook to programatically navigate to different routes. 

  const submitForm = async (e) => {
    e.preventDefault() // Prevents the default behavior of the form submission, which would otherwise reload the page.

    const newTask = { // Create an object with the current state values for the new task.
      title, 
      description, 
      priority,
    }

    try {
      // Call the addTaskSubmit function passed via props to add the new task.
      await addTaskSubmit(newTask) 
    
      toast.success('Task added Successfully!')
      navigate('/')

    } catch (error) {
      console.error('error adding task', error) // Log an error if task submission fails.
    }
  }

  return (
    <section className="bg-indigo-50 min-h-screen flex items-center justify-center">
        <form className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md" onSubmit={submitForm}> {/* triggered when submit button is clicked */}
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Add Task</h2>
          
          {/* Task title input */}
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
              onChange={(e) => setTitle(e.target.value)} // updates the title state on input change.
            />
          </div>

          {/* Task priority dropdown */}
          <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="priority">
                Task priority  
              </label>
              <select
                id="priority"
                name="priority"
                className="border rounded w-full py-2 px-3"
                required
                value={priority}
                onChange={(e) => setPriority(e.target.value)} // updates the priority state on selection change.
              >
                <option value="Near-Term Important">Near-Term Important</option>
                <option value="Long-Term Important">Long-Term Important</option>
                <option value="Quick Ones">Quick Ones</option>
                <option value="Nice to Have">Nice to Have</option>
              </select>
          </div>

          {/* Task description input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
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
              onChange={(e) => setDescription(e.target.value)} // updates the description state on input change
            />
          </div>

          {/* Submit button */}
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
export default AddTask
