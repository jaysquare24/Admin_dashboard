import { SideBar } from "./bars/SideBar";
import { TopBar } from "./bars/TopBar";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { AppProvider } from "../../context/AppProvider";

export const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    useEffect(() => {
        if (isSidebarOpen) {
            document.body.classList.add("sidebar-open");
        } else {
            document.body.classList.remove("sidebar-open");
        }
    }, [isSidebarOpen]);

  return (
    <div className="layout">
        <aside className={`sidebar-container ${isSidebarOpen ? 'open' : ''}`} onClick={()=>setIsSidebarOpen(false)}>
          <SideBar />
        </aside>

        {/* overlay */}
        {isSidebarOpen && (
            <div className="sidebar-overlay" onClick={toggleSidebar}></div>
        )}
        <div className="global-container">
            <AppProvider>
                <TopBar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
                <main className="content">
                    <Outlet /> 
                </main>
            </AppProvider>
        </div>
    </div>
  )
}