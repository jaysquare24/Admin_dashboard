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
      <header>
        <TopBar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      </header>
      {isSidebarOpen && (
        <aside onClick={toggleSidebar}>
          <SideBar />
        </aside>
      )}
      <main className="content">
        <Outlet />
      </main>
    </div>
  )
}