import React from 'react' // import react to build components. 
import { useState, useEffect } from 'react';  // import useState to hold task data, and useEffect to fetch task data from the API when component mounts. 
import Task from './Task'; // importing task component to display individual tasks. 
import { toast } from 'react-toastify'; // importing toast for notifications. 

const TaskList = ({ deleteTask }) => { // deleteTask is passed down as a prop.   
  
  const [tasks, setTasks] = useState([]); // state to hold the list of tasks.  
  const [loading, setLoading] = useState(true); // state to handle loading state. 

  // useEffect hook to fetch tasks from the API when the component mounts. 
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch('/api/tasks'); // fetching tasks from the API.
        const data = await res.json(); // parsing the response data into json. 
      
        setTasks(data); // setting the fetched tasks into the component's state. 
      } catch (error) {
        console.error('Error fetching tasks:', error); // Handling any errors during the fetch.
      } finally {
        setLoading(false); // Ensuring that loading state is set to false after data is fetched or failed. 
      }
    };
    fetchTasks(); // calling the fetchTasks function to actually fetch the tasks. 
  }, [tasks]); // The empty dependency array ensures this runs only once when the component mounts. 

  // function to handle deleting a task. 
  const handleDelete = async (id) => {
    const confirm = window.confirm('Are you sure you want to delete this task?'); // asking for confirmation before deletion. 
    if (!confirm) return; // if user cancels, exit the function. 
    deleteTask(id); // calling the deleteTask function passed as a prop to delete the task.
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id)); // update the state by removing the task with the specified id.
    toast.success('Task Deleted Successfully!'); // showing a success toast message. 
  };

   // defining the priority categories for the tasks. 
  const priorities = ['Near-Term Important', 'Long-Term Important', 'Quick Ones', 'Nice to Have'];

  // mapping priorities to corresponding background colors. 
  const priorityColors = {
    'Near-Term Important': 'bg-cyan-100',
    'Long-Term Important': 'bg-teal-100',
    'Quick Ones': 'bg-purple-100',
    'Nice to Have': 'bg-pink-100',
  };

  // Grouping tasks by their priority
  const groupedTasks = priorities.map((priority) => ({
    priority,
    tasks: tasks.filter((task) => task.priority === priority), // Filtering tasks based on priority
  }));

  return (
    <div className="container mx-auto p-4">
      <div className="flex">
        {/* left Column */}
        <div className="w-1/2 pr-4">
          <h2 className="text-lg font-bold text-left mb-2">High-Priority</h2>
          <div className="border-b-2 border-gray-300 mb-4"></div>

          {/* if data is loading, show a loading message */}
          {loading ? (
            <div>Loading...</div>
          ) : (

            // rendering the first two priority groups. 
            groupedTasks.slice(0, 2).map(({ priority, tasks }) => (
              <div key={priority} className="mb-8">
                <h3 className="text-lg font-semibold text-left mb-2 text-gray-800">
                  {priority}
                </h3>
                {tasks.length === 0 ? (
                  <div className="text-gray-500">No tasks available</div> // show a message if no tasks are available.
                ) : (
                  <div className="flex flex-col gap-4">
                    {tasks.map((task) => (
                      <Task
                        key={task.id}
                        task={task}
                        onDelete={handleDelete}
                        color={priorityColors[task.priority]}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* right column */}
        <div className="w-1/2 pr-4">
          <h2 className="text-lg font-bold text-left mb-2">Reminders</h2>
          <div className="border-b-2 border-gray-300 mb-4"></div>
          {/* if data is loading, show a loading message */}
          {loading ? (
            <div>Loading...</div>
          ) : (
            // rendering the remaining priority groups.
            groupedTasks.slice(2).map(({ priority, tasks }) => (
              <div key={priority} className="mb-8">
                <h3 className="text-lg font-semibold text-left mb-2 text-gray-800">
                  {priority}
                </h3>
                {tasks.length === 0 ? (
                  <div className="text-gray-500">No tasks available</div> // show a message if no tasks are available. 
                ) : (
                  <div className="flex flex-col gap-4">
                    {/* rendering individual tasks */}
                    {tasks.map((task) => (
                      <Task
                        key={task.id}
                        task={task}
                        onDelete={handleDelete}
                        color={priorityColors[task.priority]}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
