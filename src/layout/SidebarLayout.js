import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

function SidebarLayout() {
  return (
    <section className="admin_page_sec">
        <div className="row mw-100 min-vh-100 flex-nowrap">
            <div className="sidebar_col bg_color--2 w-auto ">
                <Sidebar />
            </div>
            <div className="admin_content-area py-3 ">
                <Outlet />
            </div>
        </div>
        
    </section>
  )
}

export default SidebarLayout