// import React, { useState, useEffect } from 'react';
// import '../Style/Dashboard.css';

// export default function Dashboard() {
//     const [stats, setStats] = useState({
//         totalProjects: 0,
//         ongoingProjects: 0,
//         completedProjects: 0,
//         totalBlogs: 0,
//         messages: 0,
//         pageViews: 0
//     });

//     const [recentProjects, setRecentProjects] = useState([]);
//     const [recentMessages, setRecentMessages] = useState([]);

//     // API se data fetch karna (baad mein actual API se connect karna)
//     useEffect(() => {
//         // Temporary demo data
//         setStats({
//             totalProjects: 24,
//             ongoingProjects: 8,
//             completedProjects: 16,
//             totalBlogs: 12,
//             messages: 5,
//             pageViews: 2847
//         });

//         setRecentProjects([
//             { id: 1, name: "Luxury Villa Construction", status: "Ongoing", progress: 65, location: "Mumbai" },
//             { id: 2, name: "Commercial Complex", status: "Completed", progress: 100, location: "Delhi" },
//             { id: 3, name: "Greenfield Township", status: "Ongoing", progress: 45, location: "Bangalore" },
//             { id: 4, name: "Bridge Construction", status: "Planning", progress: 20, location: "Chennai" }
//         ]);

//         setRecentMessages([
//             { id: 1, name: "Rajesh Kumar", email: "rajesh@email.com", message: "Need quote for house construction", date: "2024-01-15" },
//             { id: 2, name: "Priya Singh", email: "priya@email.com", message: "Interested in your commercial projects", date: "2024-01-14" },
//             { id: 3, name: "Amit Sharma", email: "amit@email.com", message: "When will the new project start?", date: "2024-01-13" }
//         ]);
//     }, []);

//     return (
//         <div className="Dashboard_MainClass">
//             {/* Welcome Section */}
//             <div className="Dashboard_WelcomeSection">
//                 <div>
//                     <h1>Dashboard</h1>
//                     <span className="Dashboard_Subtitle">
//                         Overview of your entire website at a glance
//                     </span>
//                 </div>
//                 <div className="Dashboard_DateBox">
//                     {new Date().toLocaleDateString('en-IN', {
//                         weekday: 'long',
//                         year: 'numeric',
//                         month: 'long',
//                         day: 'numeric'
//                     })}
//                 </div>
//             </div>

//             {/* Stats Cards */}
//             <div className="Dashboard_StatsGrid">
//                 <div className="Stat_Card stat_project">
//                     <div className="Stat_Icon">🏗️</div>
//                     <div className="Stat_Info">
//                         <h3>Total Projects</h3>
//                         <p className="Stat_Number">{stats.totalProjects}</p>
//                         <span className="Stat_Trend">+12% from last month</span>
//                     </div>
//                 </div>

//                 <div className="Stat_Card stat_ongoing">
//                     <div className="Stat_Icon">🚧</div>
//                     <div className="Stat_Info">
//                         <h3>Ongoing Projects</h3>
//                         <p className="Stat_Number">{stats.ongoingProjects}</p>
//                         <span className="Stat_Trend">Active construction</span>
//                     </div>
//                 </div>

//                 <div className="Stat_Card stat_completed">
//                     <div className="Stat_Icon">✅</div>
//                     <div className="Stat_Info">
//                         <h3>Completed Projects</h3>
//                         <p className="Stat_Number">{stats.completedProjects}</p>
//                         <span className="Stat_Trend">Successfully delivered</span>
//                     </div>
//                 </div>

//                 <div className="Stat_Card stat_blog">
//                     <div className="Stat_Icon">📝</div>
//                     <div className="Stat_Info">
//                         <h3>Blog Posts</h3>
//                         <p className="Stat_Number">{stats.totalBlogs}</p>
//                         <span className="Stat_Trend">+3 this week</span>
//                     </div>
//                 </div>

//                 <div className="Stat_Card stat_message">
//                     <div className="Stat_Icon">💬</div>
//                     <div className="Stat_Info">
//                         <h3>New Messages</h3>
//                         <p className="Stat_Number">{stats.messages}</p>
//                         <span className="Stat_Trend">Unread inquiries</span>
//                     </div>
//                 </div>

//                 <div className="Stat_Card stat_views">
//                     <div className="Stat_Icon">👁️</div>
//                     <div className="Stat_Info">
//                         <h3>Page Views</h3>
//                         <p className="Stat_Number">{stats.pageViews.toLocaleString()}</p>
//                         <span className="Stat_Trend">Last 30 days</span>
//                     </div>
//                 </div>
//             </div>

//             {/* Charts Section */}
//             <div className="Dashboard_ChartsGrid">
//                 <div className="Chart_Card">
//                     <h3>Project Progress Overview</h3>
//                     <div className="Progress_Bars">
//                         {recentProjects.map(project => (
//                             <div key={project.id} className="Progress_Item">
//                                 <div className="Progress_Label">
//                                     <span>{project.name}</span>
//                                     <span>{project.progress}%</span>
//                                 </div>
//                                 <div className="Progress_Bar_Bg">
//                                     <div
//                                         className="Progress_Bar_Fill"
//                                         style={{ width: `${project.progress}%` }}
//                                     ></div>
//                                 </div>
//                                 <div className="Progress_Status">
//                                     <span className={`Status_Badge status_${project.status.toLowerCase()}`}>
//                                         {project.status}
//                                     </span>
//                                     <span className="Project_Location">{project.location}</span>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 <div className="Chart_Card">
//                     <h3>Recent Messages</h3>
//                     <div className="Messages_List">
//                         {recentMessages.map(msg => (
//                             <div key={msg.id} className="Message_Item">
//                                 <div className="Message_Header">
//                                     <strong>{msg.name}</strong>
//                                     <span className="Message_Date">{msg.date}</span>
//                                 </div>
//                                 <div className="Message_Email">{msg.email}</div>
//                                 <div className="Message_Text">{msg.message}</div>
//                                 <button className="Message_ReplyBtn">Reply</button>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             {/* Quick Actions */}
//             <div className="Dashboard_QuickActions">
//                 <h3>Quick Actions</h3>
//                 <div className="Actions_Grid">
//                     <button className="Action_Btn">
//                         <span className="Action_Icon">➕</span>
//                         Add New Project
//                     </button>
//                     <button className="Action_Btn">
//                         <span className="Action_Icon">📄</span>
//                         Create Blog Post
//                     </button>
//                     <button className="Action_Btn">
//                         <span className="Action_Icon">🖼️</span>
//                         Upload Media
//                     </button>
//                     <button className="Action_Btn">
//                         <span className="Action_Icon">📊</span>
//                         Generate Report
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    TrendingUp, Users, HardHat, CheckCircle, MessageSquare,
    Eye, Plus, FileText as FileIcon, Image as ImageIcon, BarChart3
} from 'lucide-react';
import '../Style/NewDashboard.css'; // Make sure to create this CSS file below

export default function Dashboard() {
    const [stats, setStats] = useState({
        totalProjects: 0, ongoingProjects: 0, completedProjects: 0,
        totalBlogs: 0, messages: 0, pageViews: 0
    });

    const [recentProjects, setRecentProjects] = useState([]);
    const [recentMessages, setRecentMessages] = useState([]);

    useEffect(() => {
        // Simulating API Fetch
        setTimeout(() => {
            setStats({
                totalProjects: 24, ongoingProjects: 8, completedProjects: 16,
                totalBlogs: 12, messages: 5, pageViews: 2847
            });
            setRecentProjects([
                { id: 1, name: "Luxury Villa Construction", status: "Ongoing", progress: 65, location: "Mumbai", color: "#3b82f6" },
                { id: 2, name: "Commercial Complex", status: "Completed", progress: 100, location: "Delhi", color: "#10b981" },
                { id: 3, name: "Greenfield Township", status: "Ongoing", progress: 45, location: "Bangalore", color: "#f59e0b" },
                { id: 4, name: "Bridge Construction", status: "Planning", progress: 20, location: "Chennai", color: "#6366f1" }
            ]);
            setRecentMessages([
                { id: 1, name: "Rajesh Kumar", message: "Need quote for house construction", time: "2 hrs ago", unread: true },
                { id: 2, name: "Priya Singh", message: "Interested in commercial projects", time: "5 hrs ago", unread: true },
                { id: 3, name: "Amit Sharma", message: "When will the new project start?", time: "1 day ago", unread: false }
            ]);
        }, 500);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const cardVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <div className="dashboard-container">
            {/* Header */}
            <header className="dashboard-header">
                <div>
                    <h1>Dashboard Overview</h1>
                    <p>Welcome back! Here's what's happening today.</p>
                </div>
                <div className="date-badge">
                    {new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
            </header>

            {/* Stats Grid */}
            <motion.div
                className="stats-grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <StatCard
                    title="Total Projects"
                    value={stats.totalProjects}
                    icon={<HardHat size={24} />}
                    trend="+12%"
                    color="blue"
                    variants={cardVariants}
                />
                <StatCard
                    title="Ongoing"
                    value={stats.ongoingProjects}
                    icon={<TrendingUp size={24} />}
                    trend="Active"
                    color="orange"
                    variants={cardVariants}
                />
                <StatCard
                    title="Completed"
                    value={stats.completedProjects}
                    icon={<CheckCircle size={24} />}
                    trend="Success"
                    color="green"
                    variants={cardVariants}
                />
                <StatCard
                    title="Page Views"
                    value={stats.pageViews.toLocaleString()}
                    icon={<Eye size={24} />}
                    trend="+5.4%"
                    color="purple"
                    variants={cardVariants}
                />
            </motion.div>

            {/* Main Content Grid */}
            <div className="content-grid">

                {/* Project Progress Chart */}
                <motion.div
                    className="card main-card"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="card-header">
                        <h3>Project Progress</h3>
                        <button className="view-all">View All</button>
                    </div>
                    <div className="project-list">
                        {recentProjects.map((project) => (
                            <div key={project.id} className="project-row">
                                <div className="project-info">
                                    <div className="project-name">{project.name}</div>
                                    <div className="project-meta">{project.location} • <span style={{ color: project.color }}>{project.status}</span></div>
                                </div>
                                <div className="progress-container">
                                    <div className="progress-bar-bg">
                                        <motion.div
                                            className="progress-bar-fill"
                                            style={{ backgroundColor: project.color }}
                                            initial={{ width: 0 }}
                                            animate={{ width: `${project.progress}%` }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                        />
                                    </div>
                                    <span className="progress-text">{project.progress}%</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Side: Messages & Actions */}
                <div className="side-panel">

                    {/* Quick Actions */}
                    <motion.div
                        className="card actions-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <h3>Quick Actions</h3>
                        <div className="action-buttons">
                            <ActionButton icon={<Plus size={18} />} label="New Project" color="#3b82f6" />
                            <ActionButton icon={<FileIcon size={18} />} label="Write Blog" color="#10b981" />
                            <ActionButton icon={<ImageIcon size={18} />} label="Upload" color="#f59e0b" />
                            <ActionButton icon={<BarChart3 size={18} />} label="Reports" color="#8b5cf6" />
                        </div>
                    </motion.div>

                    {/* Recent Messages */}
                    <motion.div
                        className="card messages-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <div className="card-header">
                            <h3>Recent Messages</h3>
                            <span className="badge">{stats.messages}</span>
                        </div>
                        <div className="message-list">
                            {recentMessages.map((msg) => (
                                <div key={msg.id} className={`message-item ${msg.unread ? 'unread' : ''}`}>
                                    <div className="avatar">{msg.name.charAt(0)}</div>
                                    <div className="msg-content">
                                        <div className="msg-header">
                                            <span className="msg-name">{msg.name}</span>
                                            <span className="msg-time">{msg.time}</span>
                                        </div>
                                        <p className="msg-preview">{msg.message}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}

// Sub-components for cleaner code
function StatCard({ title, value, icon, trend, color, variants }) {
    const colorMap = {
        blue: "bg-blue-50 text-blue-600",
        orange: "bg-orange-50 text-orange-600",
        green: "bg-green-50 text-green-600",
        purple: "bg-purple-50 text-purple-600"
    };

    return (
        <motion.div className={`stat-card ${color}`} variants={variants} whileHover={{ y: -5 }}>
            <div className={`stat-icon-box ${colorMap[color]}`}>
                {icon}
            </div>
            <div className="stat-details">
                <h4>{title}</h4>
                <div className="stat-value-row">
                    <span className="stat-value">{value}</span>
                    <span className="stat-trend">{trend}</span>
                </div>
            </div>
        </motion.div>
    );
}

function ActionButton({ icon, label, color }) {
    return (
        <button className="action-btn" style={{ borderColor: color, color: color }}>
            {icon}
            <span>{label}</span>
        </button>
    );
}