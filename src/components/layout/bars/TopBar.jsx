import { NavLink, useLocation } from "react-router-dom"
import { FiBell } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
export const TopBar = () => {
  const location = useLocation()
  return (
    <nav className="top-bar">  
        <NavLink to="/notifications"><FiBell className="icon" /></NavLink>
        <NavLink to="/settings"><FaUserCircle className="icon" /></NavLink>   
    </nav>
  )
}