import React, { useState } from "react";
import "../Style/AdminSettings.css";

export default function AdminSettings() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="settings-page">
      <div className="settings-card">

        <div className="settings-header">
          <h2>Settings</h2>
          <p>Manage your website configuration</p>
        </div>

        {/* Tabs */}
        <div className="settings-tabs">
          <button
            className={activeTab === "general" ? "active" : ""}
            onClick={() => setActiveTab("general")}
          >
            General
          </button>

          <button
            className={activeTab === "seo" ? "active" : ""}
            onClick={() => setActiveTab("seo")}
          >
            SEO
          </button>

          <button
            className={activeTab === "password" ? "active" : ""}
            onClick={() => setActiveTab("password")}
          >
            Change Password
          </button>

          <button
            className={activeTab === "security" ? "active" : ""}
            onClick={() => setActiveTab("security")}
          >
            Security
          </button>
        </div>

        {/* ================= GENERAL ================= */}
        {activeTab === "general" && (
          <div className="tab-section">
            <div className="form-grid">

              <div className="form-group">
                <label>Website Name</label>
                <input type="text" />
              </div>

              <div className="form-group">
                <label>Admin Email</label>
                <input type="email" />
              </div>

              <div className="form-group full">
                <label>Website Logo URL</label>
                <input type="text" />
              </div>

              <div className="form-group full">
                <label>Favicon URL</label>
                <input type="text" />
              </div>

            </div>

            <div className="form-actions">
              <button>Save Changes</button>
            </div>
          </div>
        )}

        {/* ================= SEO ================= */}
        {activeTab === "seo" && (
          <div className="tab-section">
            <div className="form-grid">

              <div className="form-group full">
                <label>Meta Title</label>
                <input type="text" />
              </div>

              <div className="form-group full">
                <label>Meta Description</label>
                <textarea rows="3"></textarea>
              </div>

              <div className="form-group full">
                <label>Meta Keywords</label>
                <input type="text" placeholder="construction, building, villa..." />
              </div>

            </div>

            <div className="form-actions">
              <button>Update SEO</button>
            </div>
          </div>
        )}

        {/* ================= CHANGE PASSWORD ================= */}
        {activeTab === "password" && (
          <div className="tab-section">
            <div className="form-grid">

              <div className="form-group full">
                <label>Current Password</label>
                <input type="password" />
              </div>

              <div className="form-group">
                <label>New Password</label>
                <input type="password" />
              </div>

              <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" />
              </div>

            </div>

            <div className="form-actions">
              <button>Change Password</button>
            </div>
          </div>
        )}

        {/* ================= SECURITY ================= */}
        {activeTab === "security" && (
          <div className="tab-section">

            <div className="security-box">
              <div>
                <h4>Two-Factor Authentication</h4>
                <p>Enable extra login protection</p>
              </div>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>

            <div className="security-box">
              <div>
                <h4>Login Alerts</h4>
                <p>Get email notifications for new logins</p>
              </div>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}