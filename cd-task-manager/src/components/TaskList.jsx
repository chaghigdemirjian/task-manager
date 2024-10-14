import React from 'react'
import {useState, useEffect} from 'react'
import Task from './Task'

const TaskList = () => {

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

  return (
    <>
        <div className="container mx-auto p-4">
            <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-bold text-left mb-2"> To Dos </h2>
                <div className="border-b-2 border-gray-300 mb-4"></div>
                { loading ? (
                    <div> loading... </div>
                )
                : (
                    <div className="flex flex-col gap-4">
                    {tasks.map((task) => (
                        <Task key={task.id} task={task} />)
                    )}
                    </div>
                )
                }
            </div>
        </div>
    </>
  )
}
export default TaskList
