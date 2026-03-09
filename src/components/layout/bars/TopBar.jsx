import { NavLink, useLocation } from "react-router-dom"
import { FiBell } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
export const TopBar = ({ toggleSidebar, isSidebarOpen }) => {
  const location = useLocation()
  return (
    <nav className="top-bar">  
        {isSidebarOpen ? <FaTimes className="icon" onClick={toggleSidebar} /> : <FaBars className="icon" onClick={toggleSidebar} />}
        <h1>{location.pathname === '/' ? 'Dashboard' : location.pathname.replace('/', '').charAt(0).toUpperCase() + location.pathname.replace('/', '').slice(1)}</h1>
        <NavLink to="/notifications"><FiBell className="icon" /></NavLink>
        <NavLink to="/settings"><FaUserCircle className="icon" /></NavLink>   
    </nav>
  )
}