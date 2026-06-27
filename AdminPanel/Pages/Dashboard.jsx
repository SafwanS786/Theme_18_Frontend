import React, { useState, useEffect } from 'react';
import '../Style/Dashboard.css';

export default function Dashboard() {
    const [stats, setStats] = useState({
        totalProjects: 0,
        ongoingProjects: 0,
        completedProjects: 0,
        totalBlogs: 0,
        messages: 0,
        pageViews: 0
    });

    const [recentProjects, setRecentProjects] = useState([]);
    const [recentMessages, setRecentMessages] = useState([]);

    // API se data fetch karna (baad mein actual API se connect karna)
    useEffect(() => {
        // Temporary demo data
        setStats({
            totalProjects: 24,
            ongoingProjects: 8,
            completedProjects: 16,
            totalBlogs: 12,
            messages: 5,
            pageViews: 2847
        });

        setRecentProjects([
            { id: 1, name: "Luxury Villa Construction", status: "Ongoing", progress: 65, location: "Mumbai" },
            { id: 2, name: "Commercial Complex", status: "Completed", progress: 100, location: "Delhi" },
            { id: 3, name: "Greenfield Township", status: "Ongoing", progress: 45, location: "Bangalore" },
            { id: 4, name: "Bridge Construction", status: "Planning", progress: 20, location: "Chennai" }
        ]);

        setRecentMessages([
            { id: 1, name: "Rajesh Kumar", email: "rajesh@email.com", message: "Need quote for house construction", date: "2024-01-15" },
            { id: 2, name: "Priya Singh", email: "priya@email.com", message: "Interested in your commercial projects", date: "2024-01-14" },
            { id: 3, name: "Amit Sharma", email: "amit@email.com", message: "When will the new project start?", date: "2024-01-13" }
        ]);
    }, []);

    return (
        <div className="Dashboard_MainClass">
            {/* Welcome Section */}
            <div className="Dashboard_WelcomeSection">
                <div>
                    <h1>Dashboard</h1>
                    <span className="Dashboard_Subtitle">
                        Overview of your entire website at a glance
                    </span>
                </div>
                <div className="Dashboard_DateBox">
                    {new Date().toLocaleDateString('en-IN', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </div>
            </div>

            {/* Stats Cards */}
            <div className="Dashboard_StatsGrid">
                <div className="Stat_Card stat_project">
                    <div className="Stat_Icon">🏗️</div>
                    <div className="Stat_Info">
                        <h3>Total Projects</h3>
                        <p className="Stat_Number">{stats.totalProjects}</p>
                        <span className="Stat_Trend">+12% from last month</span>
                    </div>
                </div>

                <div className="Stat_Card stat_ongoing">
                    <div className="Stat_Icon">🚧</div>
                    <div className="Stat_Info">
                        <h3>Ongoing Projects</h3>
                        <p className="Stat_Number">{stats.ongoingProjects}</p>
                        <span className="Stat_Trend">Active construction</span>
                    </div>
                </div>

                <div className="Stat_Card stat_completed">
                    <div className="Stat_Icon">✅</div>
                    <div className="Stat_Info">
                        <h3>Completed Projects</h3>
                        <p className="Stat_Number">{stats.completedProjects}</p>
                        <span className="Stat_Trend">Successfully delivered</span>
                    </div>
                </div>

                <div className="Stat_Card stat_blog">
                    <div className="Stat_Icon">📝</div>
                    <div className="Stat_Info">
                        <h3>Blog Posts</h3>
                        <p className="Stat_Number">{stats.totalBlogs}</p>
                        <span className="Stat_Trend">+3 this week</span>
                    </div>
                </div>

                <div className="Stat_Card stat_message">
                    <div className="Stat_Icon">💬</div>
                    <div className="Stat_Info">
                        <h3>New Messages</h3>
                        <p className="Stat_Number">{stats.messages}</p>
                        <span className="Stat_Trend">Unread inquiries</span>
                    </div>
                </div>

                <div className="Stat_Card stat_views">
                    <div className="Stat_Icon">👁️</div>
                    <div className="Stat_Info">
                        <h3>Page Views</h3>
                        <p className="Stat_Number">{stats.pageViews.toLocaleString()}</p>
                        <span className="Stat_Trend">Last 30 days</span>
                    </div>
                </div>
            </div>

            {/* Charts Section */}
            <div className="Dashboard_ChartsGrid">
                <div className="Chart_Card">
                    <h3>Project Progress Overview</h3>
                    <div className="Progress_Bars">
                        {recentProjects.map(project => (
                            <div key={project.id} className="Progress_Item">
                                <div className="Progress_Label">
                                    <span>{project.name}</span>
                                    <span>{project.progress}%</span>
                                </div>
                                <div className="Progress_Bar_Bg">
                                    <div
                                        className="Progress_Bar_Fill"
                                        style={{ width: `${project.progress}%` }}
                                    ></div>
                                </div>
                                <div className="Progress_Status">
                                    <span className={`Status_Badge status_${project.status.toLowerCase()}`}>
                                        {project.status}
                                    </span>
                                    <span className="Project_Location">{project.location}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="Chart_Card">
                    <h3>Recent Messages</h3>
                    <div className="Messages_List">
                        {recentMessages.map(msg => (
                            <div key={msg.id} className="Message_Item">
                                <div className="Message_Header">
                                    <strong>{msg.name}</strong>
                                    <span className="Message_Date">{msg.date}</span>
                                </div>
                                <div className="Message_Email">{msg.email}</div>
                                <div className="Message_Text">{msg.message}</div>
                                <button className="Message_ReplyBtn">Reply</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="Dashboard_QuickActions">
                <h3>Quick Actions</h3>
                <div className="Actions_Grid">
                    <button className="Action_Btn">
                        <span className="Action_Icon">➕</span>
                        Add New Project
                    </button>
                    <button className="Action_Btn">
                        <span className="Action_Icon">📄</span>
                        Create Blog Post
                    </button>
                    <button className="Action_Btn">
                        <span className="Action_Icon">🖼️</span>
                        Upload Media
                    </button>
                    <button className="Action_Btn">
                        <span className="Action_Icon">📊</span>
                        Generate Report
                    </button>
                </div>
            </div>
        </div>
    );
}