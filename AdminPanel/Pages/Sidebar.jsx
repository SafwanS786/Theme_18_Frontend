import React from 'react'
import {
    LayoutDashboard,
    FolderKanban,
    FileText,
    Info,
    Phone,
    House,
    Image,
    Images,
    Settings,
    ShieldUser
} from "lucide-react";
import { useNavigate } from 'react-router-dom'
import { useLocation } from "react-router-dom"
export default function Sidebar() {
    const navigate = useNavigate()
    const location = useLocation()

    const handleLogout = async () => {
        localStorage.clear()
        navigate("/Admin/login")
    }
    return (
        <div className="SideBar_MainClass">
            <div className="Sidebar_Logo">
                <h2>Admin Panel</h2>
            </div>

            <ul className="Sidebar_Menu">
                <li onClick={() => navigate("dashboard")} className={location.pathname === "/Admin/AdminPage/dashboard" ? "SidebarActive" : "SidebarIn"}>
                    <LayoutDashboard size={20} />
                    <span>Dashboard</span>
                </li>

                <li onClick={() => navigate("project")} className={location.pathname === "/Admin/AdminPage/project" ? "SidebarActive" : "SidebarIn"}>
                    <FolderKanban size={20} />
                    <span>Projects</span>
                </li>

                <li onClick={() => navigate("blogs")}
                    className={location.pathname === "/Admin/AdminPage/blogs" ? "SidebarActive" : "SidebarIn"}>
                    <FileText size={20} />
                    <span>Blog</span>
                </li>

                <li onClick={() => navigate("about")} className={location.pathname === "/Admin/AdminPage/about" ? "SidebarActive" : "SidebarIn"}>
                    <Info size={20} />
                    <span>About</span>
                </li>

                <li onClick={() => navigate("contact")} className={location.pathname === "/Admin/AdminPage/contact" ? "SidebarActive" : "SidebarIn"}>
                    <Phone size={20} />
                    <span>Contact</span>
                </li>

                <li onClick={() => navigate("adminuser")} className={location.pathname === "/Admin/AdminPage/adminuser" ? "SidebarActive" : "SidebarIn"}>
                    <ShieldUser size={20} />
                    <span>Admin User</span>
                </li>

                <li onClick={() => navigate("media")} className={location.pathname === "/Admin/AdminPage/media" ? "SidebarActive" : "SidebarIn"}>
                    <Image size={20} />
                    <span>Media</span>
                </li>

                <li onClick={() => navigate("gallery")} className={location.pathname === "/Admin/AdminPage/gallery" ? "SidebarActive" : "SidebarIn"}>
                    <Images size={20} />
                    <span>Gallery</span>
                </li>

                <li onClick={() => navigate("setting")} className={location.pathname === "/Admin/AdminPage/setting" ? "SidebarActive" : "SidebarIn"}>
                    <Settings size={20} />
                    <span>Settings</span>
                </li>
            </ul>
            <button
                className="Logout_Btn"
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    )
}
