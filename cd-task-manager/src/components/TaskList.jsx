import React, { useState, useEffect } from 'react';
import Task from './Task';
import { toast } from 'react-toastify';

const TaskList = ({ deleteTask }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch('http://localhost:5000/tasks');
        const data = await res.json();
        // Set tasks directly without sorting
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm('Are you sure you want to delete this task?');
    if (!confirm) return;
    deleteTask(id);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    toast.success('Task Deleted Successfully!');
  };

  const priorities = ['Near-Term', 'Long-Term', 'Quick Ones', 'Nice to Have'];

  const priorityColors = {
    'Near-Term': 'bg-cyan-100',
    'Long-Term': 'bg-teal-100',
    'Quick Ones': 'bg-purple-100',
    'Nice to Have': 'bg-pink-100',
  };

  const groupedTasks = priorities.map((priority) => ({
    priority,
    tasks: tasks.filter((task) => task.priority === priority),
  }));

  return (
    <div className="container mx-auto p-4">
      <div className="flex">
        {/* Left Column */}
        <div className="w-1/2 pr-4">
          <h2 className="text-lg font-bold text-left mb-2">High-Priority</h2>
          <div className="border-b-2 border-gray-300 mb-4"></div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            groupedTasks.slice(0, 2).map(({ priority, tasks }) => (
              <div key={priority} className="mb-8">
                <h3 className="text-lg font-semibold text-left mb-2 text-gray-800">
                  {priority}
                </h3>
                {tasks.length === 0 ? (
                  <div className="text-gray-500">No tasks available</div>
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

        {/* Right Column */}
        <div className="w-1/2 pr-4">
          <h2 className="text-lg font-bold text-left mb-2">Reminders</h2>
          <div className="border-b-2 border-gray-300 mb-4"></div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            groupedTasks.slice(2).map(({ priority, tasks }) => (
              <div key={priority} className="mb-8">
                <h3 className="text-lg font-semibold text-left mb-2 text-gray-800">
                  {priority}
                </h3>
                {tasks.length === 0 ? (
                  <div className="text-gray-500">No tasks available</div>
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
      </div>
    </div>
  );
};

export default TaskList;
