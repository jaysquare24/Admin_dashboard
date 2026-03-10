import { NavLink } from "react-router-dom"
import { MdDashboard, MdAnalytics } from "react-icons/md";
import { FaBox, FaUsers, FaShoppingCart } from "react-icons/fa";

export const SideBar = () => {
  return (
    <>
    <h1 className="logo"> <FaBox className="icon" /><span>StoreMetrics</span></h1>
    <nav className="side-bar" role="side-bar">
      <NavLink to="/"><MdDashboard  className="icon"/><span>Dashboard</span></NavLink>
      <NavLink to="/products"><FaBox className="icon" /><span>Products</span></NavLink>
      <NavLink to="/users"><FaUsers className="icon" /><span>Users</span></NavLink>
      <NavLink to="/carts"><FaShoppingCart className="icon" /><span>Carts</span></NavLink>
    </nav>
    </>
  )
}