import React from 'react' // importing the react library to build components. 
import Header from '../components/Header' // Importing the Header component for displaying the page header.
import { Outlet } from 'react-router-dom' // Importing Outlet for rendering nested routes in the layout.

const MainLayout = () => {
  return (
    <>
         {/* Render the Header component at the top of the layout */}
        <Header />

         {/* Render nested routes at the Outlet, which will change based on the route */}
        <Outlet />
        
    </>
  )
}

export default MainLayout