import React, { useState } from "react";
import "../Style/AdminContact.css";

export default function AdminContact() {
    const [activeTab, setActiveTab] = useState("messages");

    return (
        <div className="contact-admin-page">
            <div className="contact-admin-card">

                <div className="contact-header">
                    <h2>Manage Contact</h2>
                    <p>View messages & update contact information</p>
                </div>

                {/* Tabs */}
                <div className="contact-tabs">
                    <button
                        className={activeTab === "messages" ? "active" : ""}
                        onClick={() => setActiveTab("messages")}
                    >
                        Messages
                    </button>

                    <button
                        className={activeTab === "info" ? "active" : ""}
                        onClick={() => setActiveTab("info")}
                    >
                        Contact Info
                    </button>
                </div>

                {/* ================= MESSAGES TAB ================= */}
                {activeTab === "messages" && (
                    <div className="tab-section">

                        <div className="messages-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Subject</th>
                                        <th>Message</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td className="name-cell">Rahul Sharma</td>
                                        <td>rahul@gmail.com</td>
                                        <td>+91 98765 43210</td>
                                        <td>Villa Construction</td>
                                        <td className="msg-cell">
                                            I want to build a 3BHK villa in Mumbai...
                                        </td>
                                        <td>
                                            <select className="status-select new">
                                                <option value="New">New</option>
                                                <option value="Read">Read</option>
                                                <option value="Replied">Replied</option>
                                            </select>
                                        </td>
                                        <td>
                                            <button className="view-btn">View</button>
                                            <button className="delete-btn">Delete</button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="name-cell">Amit Verma</td>
                                        <td>amit@gmail.com</td>
                                        <td>+91 91234 56789</td>
                                        <td>Renovation Query</td>
                                        <td className="msg-cell">
                                            Need renovation quote for office space...
                                        </td>
                                        <td>
                                            <select className="status-select replied">
                                                <option value="New">New</option>
                                                <option value="Read">Read</option>
                                                <option value="Replied">Replied</option>
                                            </select>
                                        </td>
                                        <td>
                                            <button className="view-btn">View</button>
                                            <button className="delete-btn">Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                )}

                {/* ================= CONTACT INFO TAB ================= */}
                {activeTab === "info" && (
                    <div className="tab-section">

                        <div className="form-grid">

                            <div className="form-group full">
                                <label>Office Address</label>
                                <textarea rows="2"></textarea>
                            </div>

                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="text" />
                            </div>

                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="text" />
                            </div>

                            <div className="form-group full">
                                <label>Google Map Link</label>
                                <input type="text" />
                            </div>

                            <div className="form-group">
                                <label>Facebook</label>
                                <input type="text" />
                            </div>

                            <div className="form-group">
                                <label>Instagram</label>
                                <input type="text" />
                            </div>

                            <div className="form-group">
                                <label>LinkedIn</label>
                                <input type="text" />
                            </div>

                            <div className="form-group">
                                <label>Twitter</label>
                                <input type="text" />
                            </div>

                        </div>

                        <div className="form-actions">
                            <button>Save Changes</button>
                        </div>

                    </div>
                )}

            </div>
        </div>
    );
}