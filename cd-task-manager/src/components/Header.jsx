import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-slate-700 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-4x1 font-normal tracking-wide hover: text-white-400 cursor-pointer"> 
              <Link to="/">Home Page</Link>
            </h1>
            <nav>
                <ul className="flex space-x-4">
                    <li className="hover: text-white-400 cursor-pointer">
                      <Link to='/add-task'>Add Task</Link>
                    </li>
                    <li className="hover: text-white-400 cursor-pointer">
                      <Link to='/completed-tasks'>Completed Tasks</Link>
                    </li>
                </ul>
            </nav>
        </div>        
    </header>
  )
}
export default Header


        