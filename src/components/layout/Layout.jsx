import { SideBar } from "./bars/SideBar";
import { TopBar } from "./bars/TopBar";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { AppProvider } from "../../context/AppProvider";
import { useLocation } from "react-router-dom";


export const Layout = () => {
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [searchTerm, setSearchTerm] = useState({users: "", products: ""});

    const pageKey = location.pathname.includes("/users") ? "users" : location.pathname.includes("/products") ? "products" : null;
    
    const handleSearchChange = (e) => {
        setSearchTerm(prev => ({...prev, [pageKey]: e.target.value}))
    }

    const handleClearSearchTerm = () => {
        setSearchTerm(prev => ({...prev, [pageKey]: ""}))
    }

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
                <TopBar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} searchTerm={searchTerm[pageKey] || ""} onChangeSearchTerm={handleSearchChange} />
                <main className="content">
                    <Outlet context={{searchTerm: searchTerm[pageKey] || "", clearSearchTerm: handleClearSearchTerm} } /> 
                </main>
            </AppProvider>
        </div>
    </div>
  )
}