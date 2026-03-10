import { SideBar } from "./bars/SideBar";
import { TopBar } from "./bars/TopBar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }
  return (
    <div className="layout">
        <aside className={`sidebar-container ${isSidebarOpen ? 'open' : ''}`}>
          <SideBar />
        </aside>
        <div className="global-container">
            <header>
                <TopBar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
            </header>
            <main className="content">
                <Outlet />
            </main>
        </div>
    </div>
  )
}