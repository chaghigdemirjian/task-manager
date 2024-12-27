import React from 'react' // import react to build components. 
import { Link } from 'react-router-dom' // importing the Link component from react-router-dom to enable navigation to other routes without a full page reload.

const Header = () => {
  return (
    <header className="bg-slate-700 text-white p-4 shadow-md"> 
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2x1 font-normal tracking-wide hover: text-white-400 cursor-pointer"> 
              {/* Header title with a link to the homepage */}
              <Link to="/">Shaghig's To Do List App</Link>
            </h1>
            <nav>
                <ul className="flex space-x-4">
                    <li className="hover: text-white-400 cursor-pointer">
                      {/* Link to the 'Add New Task' page */}
                      <Link to='/add-task'>Add New Task</Link>
                    </li>
                </ul>
            </nav>
        </div>        
    </header>
  )
}
export default Header


        