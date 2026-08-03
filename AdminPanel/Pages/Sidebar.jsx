// import React, { useEffect, useState } from 'react'
// import {
//     LayoutDashboard,
//     FolderKanban,
//     FileText,
//     Info,
//     Phone,
//     House,
//     Image,
//     Images,
//     Settings,
//     ShieldUser
// } from "lucide-react";
// import { useNavigate } from 'react-router-dom'
// import { useLocation } from "react-router-dom"
// import axios from 'axios';
// import ApiClient from '../../src/config/ApiClient';
// export default function Sidebar() {
//     const [adminData, setAdminData] = useState([])
//     const [adminName, setAdminName] = useState("")
//     const navigate = useNavigate()
//     const location = useLocation()

//     const handleLogout = async () => {
//         localStorage.clear()
//         navigate("/Admin/login")
//     }
//     // useEffect(() => {
//     //     const admindata = async () => {
//     //         const res = await ApiClient.get("/api/login")
//     //         const data = res.data.data
//     //         console.log(data)
//     //         const dataEmail = data.map((item) => ({
//     //             email: item.email,
//     //             name: item.name
//     //         }))
//     //         setAdminData(dataEmail)
//     //         console.log("djasdhjashdjash", dataEmail)
//     //         console.log("djasdhjashdjash", dataEmail.name)

//     //     }

//     //     admindata()
//     // }, [])
//     useEffect(() => {
//         const storeName = localStorage.getItem("AdminName")
//         if (storeName) {
//             setAdminName(storeName)
//         }
//     }, [])
//     return (
//         <div className="SideBar_MainClass">
//             <div className="Sidebar_Logo">
//                 <h2>Admin Panel</h2>
//                 <span>Welcome {adminName}</span>
//                 {/* {adminData.length > 0 && (
//                     <div className="admin-list">
//                         <p>Total Admins: {adminData.length}</p>
//                         <ul>
//                             {adminData.map((admin, index) => (
//                                 <li key={index}>
//                                     {admin.name} - {admin.email}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 )} */}
//             </div>

//             <ul className="Sidebar_Menu">
//                 <li onClick={() => navigate("dashboard")} className={location.pathname === "/Admin/AdminPage/dashboard" ? "SidebarActive" : "SidebarIn"}>
//                     <LayoutDashboard size={20} />
//                     <span>Dashboard</span>
//                 </li>

//                 <li onClick={() => navigate("project")} className={location.pathname === "/Admin/AdminPage/project" ? "SidebarActive" : "SidebarIn"}>
//                     <FolderKanban size={20} />
//                     <span>Projects</span>
//                 </li>

//                 <li onClick={() => navigate("blogs")}
//                     className={location.pathname === "/Admin/AdminPage/blogs" ? "SidebarActive" : "SidebarIn"}>
//                     <FileText size={20} />
//                     <span>Blog</span>
//                 </li>

//                 <li onClick={() => navigate("about")} className={location.pathname === "/Admin/AdminPage/about" ? "SidebarActive" : "SidebarIn"}>
//                     <Info size={20} />
//                     <span>About</span>
//                 </li>

//                 <li onClick={() => navigate("contact")} className={location.pathname === "/Admin/AdminPage/contact" ? "SidebarActive" : "SidebarIn"}>
//                     <Phone size={20} />
//                     <span>Contact</span>
//                 </li>

//                 <li onClick={() => navigate("adminuser")} className={location.pathname === "/Admin/AdminPage/adminuser" ? "SidebarActive" : "SidebarIn"}>
//                     <ShieldUser size={20} />
//                     <span>Admin User</span>
//                 </li>

//                 <li onClick={() => navigate("media")} className={location.pathname === "/Admin/AdminPage/media" ? "SidebarActive" : "SidebarIn"}>
//                     <Image size={20} />
//                     <span>Media</span>
//                 </li>

//                 <li onClick={() => navigate("gallery")} className={location.pathname === "/Admin/AdminPage/gallery" ? "SidebarActive" : "SidebarIn"}>
//                     <Images size={20} />
//                     <span>Gallery</span>
//                 </li>

//                 <li onClick={() => navigate("setting")} className={location.pathname === "/Admin/AdminPage/setting" ? "SidebarActive" : "SidebarIn"}>
//                     <Settings size={20} />
//                     <span>Settings</span>
//                 </li>
//             </ul>
//             <button
//                 className="Logout_Btn"
//                 onClick={handleLogout}
//             >
//                 Logout
//             </button>
//         </div>
//     )
// }


import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
    LayoutDashboard, FolderKanban, FileText, Info, Phone,
    Image, Images, Settings, ShieldUser, LogOut, ChevronRight
} from "lucide-react";
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import ApiClient from '../../src/config/ApiClient';
import "../Style/NewDashboard.css"
export default function Sidebar() {
    const [adminName, setAdminName] = useState("Admin");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const storeName = localStorage.getItem("AdminName");
        if (storeName) setAdminName(storeName);
    }, []);

    const menuItems = [
        { name: "Dashboard", icon: LayoutDashboard, path: "dashboard" },
        { name: "Projects", icon: FolderKanban, path: "project" },
        { name: "Blog", icon: FileText, path: "blogs" },
        { name: "About", icon: Info, path: "about" },
        { name: "Contact", icon: Phone, path: "contact" },
        { name: "Admin User", icon: ShieldUser, path: "adminuser" },
        { name: "Media", icon: Image, path: "media" },
        // { name: "Gallery", icon: Images, path: "gallery" },
        { name: "Settings", icon: Settings, path: "setting" },
    ];

    const handleLogout = () => {
        localStorage.clear();
        navigate("/Admin/login");
    };

    return (
        <div className="sidebar-container">
            {/* Logo Section */}
            <div className="sidebar-header">
                <div className="logo-box">
                    <span className="logo-icon">️</span>
                    <h2>Construct<span>Pro</span></h2>
                </div>
                <div className="user-welcome">
                    <span className="role-badge">Admin</span>
                    <p>Hello, <strong>{adminName}</strong></p>
                </div>
            </div>

            {/* Menu Items */}
            <ul className="sidebar-menu">
                {menuItems.map((item, index) => {
                    const isActive = location.pathname.includes(item.path);
                    return (
                        <motion.li
                            key={item.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className={`menu-item ${isActive ? 'active' : ''}`}
                            onClick={() => navigate(`${item.path}`)}
                        >
                            <div className="icon-wrapper">
                                <item.icon size={20} />
                                {isActive && <motion.div layoutId="active-pill" className="active-indicator" />}
                            </div>
                            <span>{item.name}</span>
                            {isActive && <ChevronRight size={16} className="chevron" />}
                        </motion.li>
                    );
                })}
            </ul>

            {/* Logout Section */}
            <div className="sidebar-footer">
                <button className="logout-btn" onClick={handleLogout}>
                    <LogOut size={18} />
                    <span>Logout</span>
                </button>
            </div>
        </div>
    );
}