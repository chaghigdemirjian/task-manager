import React from 'react'
import {useState, useEffect} from 'react'
import Task from './Task'
import { toast } from 'react-toastify';

const TaskList = ( {deleteTask} ) => {

    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const res = await fetch('http://localhost:5000/tasks')
                const data = await res.json()
                setTasks(data)
            } catch(error) {
                console.error('Error fetching tasks:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchTasks()
    }, [])

    const handleDelete = async (id) => {
      const confirm = window.confirm('Are you sure you want to delete this task?')
      if (!confirm) return 
      deleteTask(id)
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
      toast.success('Task Deleted Successfully!')
    }

    const priorities = [
        'Urgent & Important',
        'Long-Term Important',
        'Quick Tasks',
        'Nice to Have', 
        'Urgent Unimportant'
    ]

    const groupedTasks = priorities.map(priority => ({
        priority,
        tasks: tasks.filter(task => task.priority === priority),
    })) 

  return (
    <>
        <div className="container mx-auto p-4">
            { loading ? (
                <div> loading... </div>
            ) : (
                groupedTasks.map(({priority, tasks}) => ( // including ({priority, tasks} allows you access to priority and task of each group down below vs saying group.priority / group.tasks
                    <div key={priority} className="mb-8">
                        <h3 className="text-xl font-semibold text-left mb-2">{priority}</h3>
                        {tasks.length === 0 ? (
                            <div className="text-gray-500"> No tasks available </div>
                        ) : ( 
                            <div className="flex flex-col gap-4"> 
                            {tasks.map((task) => (
                                <Task key={task.id} task={task} onDelete={handleDelete} />
                            ))} 
                            </div>
                        )}
                    </div>
                ))
            )}
        </div>
    </>
  )
}
export default TaskList
