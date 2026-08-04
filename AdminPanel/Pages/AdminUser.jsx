import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../Style/AdminUser.css"
import Register from '../Authorization/register'
import ApiClient from '../../src/config/ApiClient'
import { toast } from 'react-toastify'
export default function AdminUser() {

    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedUsers, setSelectedUsers] = useState([])
    const [viewMode, setViewMode] = useState('grid')
    const [newadmin, setNewAdmin] = useState(false)
    const [usersData, setUsersData] = useState([])
    const [email, setEmail] = useState([])
    // Edit
    const [OpenEdit, setOpenEdit] = useState(false)
    const [editUser, setEditUser] = useState(null)

    //Delete
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    const stats = {
        total: usersData.length,
        active: usersData.filter(u => u.status === 'active').length,
        admins: usersData.filter(u => u.role === 'Admin').length
    }

    const filteredUsers = usersData.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const handleSelectUser = (userId) => {
        setSelectedUsers(prev =>
            prev.includes(userId)
                ? prev.filter(id => id !== userId)
                : [...prev, userId]
        )
    }

    const handleSelectAll = () => {
        if (selectedUsers.length === filteredUsers.length) {
            setSelectedUsers([])
        } else {
            setSelectedUsers(filteredUsers.map(u => u.id))
        }
    }

    const getStatusColor = (status) => {
        return status === 'active' ? 'status-badge status-active' : 'status-badge status-inactive'
    }

    const getRoleBadgeClass = (role) => {
        switch (role) {
            case 'Admin': return 'role-badge role-admin'
            case 'Editor': return 'role-badge role-editor'
            default: return 'role-badge role-viewer'
        }
    }

    const handleOpen = () => {
        console.log("Open")
        setNewAdmin(true)
    }
    const GetAdmin = async () => {
        try {

            const AdminRes = await ApiClient.get("/api/login")
            const AdminData = AdminRes.data.data
            console.log("ADMIN", AdminData)
            console.log("ADMIN get Reday", AdminData[0])
            // const GetEmail = AdminData.map((item) => ({
            //     item: item.email
            // }))
            const GetEmail = AdminData.map(item => item.email)
            setUsersData(AdminData)
            console.log("GetEmail", GetEmail)
            setEmail(GetEmail)
        } catch (err) {
            console.error("Error", err)
            toast.error("Failed to Fetch Admin data")
        }
    }
    useEffect(() => {
        GetAdmin()
    }, [])

    const handleEditOpen = (user) => {
        console.log("EDIT", user)
        setEditUser(user)
        setOpenEdit(true)
        setNewAdmin(true)
    }
    const handleAdminDelete = async (deleteId) => {
        try {
            console.log("S", deleteId)
            const AdminDlt = await ApiClient.delete(`/api/login/delete/${deleteId}`)
            console.log("DELETE", AdminDlt)
            toast.success("Admin Delete Successfully")
            setShowDeleteModal(false)
            // await GetAdmin()
            const AdminRes = await ApiClient.get("/api/login");
            const AdminData = AdminRes.data.data;

            setUsersData(AdminData);
            const loggedEmail = localStorage.getItem("AdminEmail");

            // Check whether logged in user still exists
            const exists = AdminData.some(
                user => user.email === loggedEmail
            );

            if (!exists) {
                localStorage.removeItem("Token");
                localStorage.removeItem("AdminName");
                localStorage.removeItem("AdminEmail");

                toast.info("Your account has been deleted.");

                navigate("/Admin/login");
            }
        } catch (err) {
            console.error("Error", err)
            toast.error("Failed to Delete Admin aaaaaa cheeeeee")
        }
    }

    // const loggedUser = localStorage.getItem("AdminEmail")
    // if (loggedUser?.id === email) {
    //     console.log("ASGAJHAS", email)
    //     localStorage.removeItem("token");
    //     localStorage.removeItem("admin");

    //     navigate("/login");

    //     return;
    // }
    // console.log("LOOOOOOO", loggedUser, usersData)
    return (
        <div className="admin-user-container">


            <div className="admin-user-content">
                {/* Header */}
                <div className="page-header">
                    <h1 className="page-title">User Management</h1>
                    <p className="page-subtitle">Manage and oversee all system users</p>
                </div>

                {/* Stats Cards */}
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-header">
                            <span className="stat-label">Total Users</span>
                            <div className="stat-icon">👥</div>
                        </div>
                        <div className="stat-value">{stats.total}</div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-header">
                            <span className="stat-label">Active Users</span>
                            <div className="stat-icon">✅</div>
                        </div>
                        <div className="stat-value">{stats.active}</div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-header">
                            <span className="stat-label">Administrators</span>
                            <div className="stat-icon">🛡️</div>
                        </div>
                        <div className="stat-value">{stats.admins}</div>
                    </div>
                </div>

                {/* Actions Bar */}
                <div className="actions-bar">
                    <div className="actions-header">
                        <div className="actions-wrapper">
                            <div className="search-wrapper">
                                <span className="search-icon">🔍</span>
                                <input
                                    type="text"
                                    placeholder="Search users by name or email..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="search-input"
                                />
                            </div>

                            <div className="button-group">
                                <div className="view-toggle">
                                    <button
                                        className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                                        onClick={() => setViewMode('grid')}
                                    >
                                        ▦
                                    </button>
                                    <button
                                        className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
                                        onClick={() => setViewMode('list')}
                                    >
                                        ☰
                                    </button>
                                </div>
                                <button className="btn-secondary">⚙️ Filter</button>
                                <button className="btn-primary" onClick={() => handleOpen()}>➕ Add User</button>
                            </div>
                        </div>
                    </div>
                    {newadmin && (
                        <Register
                            editUser={editUser}
                            OpenEdit={OpenEdit}
                            GetAdmin={GetAdmin}
                            onCancel={() => {
                                setNewAdmin(false)
                                setOpenEdit(false);
                                setEditUser(null);
                            }}
                            onClose={() => {
                                setNewAdmin(false);
                                setOpenEdit(false);
                                setEditUser(null);
                            }}
                        />)}

                    {/* Bulk Actions */}
                    {selectedUsers.length > 0 && (
                        <div className="bulk-actions">
                            <span className="bulk-count">{selectedUsers.length} users selected</span>
                            <div className="bulk-buttons">
                                <button className="bulk-delete">Delete Selected</button>
                                <button className="bulk-edit">Bulk Edit</button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Users Grid View */}
                {viewMode === 'grid' && (
                    <div className="users-grid">
                        {filteredUsers.map((user) => (
                            <div key={user._id} className="user-card">
                                <div className="card-header">
                                    <div className="user-info">
                                        <input
                                            type="checkbox"
                                            checked={selectedUsers.includes(user.id)}
                                            onChange={() => handleSelectUser(user.id)}
                                            className="user-checkbox"
                                        />
                                        {/* <img src={user.avatar} alt={user.name} className="user-avatar" /> */}
                                        <div className="user-details">
                                            <div className="user-name">{user.name}</div>
                                            <div className="user-email">{user.email}</div>
                                        </div>
                                    </div>
                                    <button className="more-btn">⋯</button>
                                </div>

                                <div className="user-meta">
                                    <div className="meta-row">
                                        <span className="meta-label">Role</span>
                                        <span className={getRoleBadgeClass(user.role)}>{user.role}</span>
                                    </div>
                                    {/* <div className="meta-row">
                                        <span className="meta-label">Status</span>
                                        <span className={getStatusColor(user.status)}>{user.status}</span>
                                    </div> */}
                                    <div className="join-date">
                                        📅 Joined {new Date(user.joinDate).toLocaleDateString()}
                                    </div>
                                </div>

                                <div className="card-actions">
                                    <button className="btn-edit" onClick={() => handleEditOpen(user)}>✏️ Edit</button>
                                    {/* <button className="btn-delete" onClick={() => handleAdminDelete(user._id)}>🗑️ Delete</button> */}
                                    <button
                                        className="btn-delete"
                                        onClick={() => {
                                            setDeleteId(user._id);
                                            setShowDeleteModal(true);
                                        }}
                                    >
                                        🗑️ Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Users List View */}
                {viewMode === 'list' && (
                    <div className="users-table-container">
                        <table className="users-table">
                            <thead>
                                <tr>
                                    <th>
                                        <input
                                            type="checkbox"
                                            checked={selectedUsers.length === filteredUsers.length && filteredUsers.length > 0}
                                            onChange={handleSelectAll}
                                        />
                                    </th>
                                    <th>User</th>
                                    <th>Role</th>
                                    <th>Status</th>
                                    <th>Join Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredUsers.map((user) => (
                                    <tr key={user.id}>
                                        <td>
                                            <input
                                                type="checkbox"
                                                checked={selectedUsers.includes(user.id)}
                                                onChange={() => handleSelectUser(user.id)}
                                            />
                                        </td>
                                        <td>
                                            <div className="table-user">
                                                {/* <img src={user.avatar} alt={user.name} className="table-avatar" /> */}
                                                <div className="table-user-info">
                                                    <span className="table-user-name">{user.name}</span>
                                                    <span className="table-user-email">{user.email}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className={getRoleBadgeClass(user.role)}>{user.role}</span>
                                        </td>
                                        <td>
                                            <span className={getStatusColor(user.status)}>{user.status}</span>
                                        </td>
                                        <td>{new Date(user.joinDate).toLocaleDateString()}</td>
                                        <td>
                                            <div className="action-buttons">
                                                {/* <button className="action-icon">✏️</button>
                                                <button className="action-icon">🗑️</button> */}
                                                <button className="btn-edit" onClick={() => handleEditOpen(user)}>✏️</button>
                                                {/* <button className="btn-delete" onClick={() => handleAdminDelete(user._id)}>🗑️ Delete</button> */}
                                                <button
                                                    className="btn-delete"
                                                    onClick={() => {
                                                        setDeleteId(user._id);
                                                        setShowDeleteModal(true);
                                                    }}
                                                >
                                                    🗑️
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
                {showDeleteModal && (
                    <div className="delete-modal-overlay">
                        {console.log("deleteId", deleteId)}
                        <div className="delete-modal">
                            <div className="delete-icon">
                                🗑️
                            </div>
                            <h2>Delete Admin?</h2>
                            <p>
                                Are you sure you want to delete this administrator?
                                <br />
                                This action cannot be undone.
                            </p>
                            <div className="delete-buttons">

                                <button
                                    className="cancel-btn"
                                    onClick={() => {
                                        setShowDeleteModal(false);
                                        setDeleteId(null);
                                    }}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="delete-btn"
                                    onClick={() => handleAdminDelete(deleteId)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                )
                }
                {/* Empty State */}
                {filteredUsers.length === 0 && (
                    <div className="empty-state">
                        <div className="empty-icon">👤</div>
                        <h3 className="empty-title">No users found</h3>
                        <p className="empty-text">Try adjusting your search or filter criteria</p>
                    </div>
                )}
            </div>
        </div>
    )
}