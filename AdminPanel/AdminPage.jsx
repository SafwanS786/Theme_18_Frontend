import React from 'react'
import { Outlet } from "react-router-dom";


import Sidebar from './Pages/Sidebar'

export default function AdminPage() {
    return (
        <div className='AdminPage_MainClass'>
            <div className='AdminPage_SubClass'>
                <Sidebar />
            </div>
            <div className="Admin_Content">
                <Outlet />
            </div>
        </div>
    )
}
