import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react"


import "../Style/AdminSettings.css";
import ApiClient from "../../src/config/ApiClient";
import { toast } from "react-toastify";

export default function AdminSettings() {
  const [activeTab, setActiveTab] = useState("general");
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  })
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false
  })


  const handlePasswordChange = (e) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value
    })
  }

  const handleChangePassword = async () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error("New Password and Confirm Password do not match");
      return;
    }

    try {
      const token = localStorage.getItem("Token")

      const res = await ApiClient.post("/api/change-password", {
        currentPassword: passwordData.currentPassword,
        newPassword: passwordData.newPassword
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      toast.success("Password Changed Successfully 🥳🎉");
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
      })
      setShowPassword({
        current: false,
        new: false,
        confirm: false
      })
    } catch (err) {
      console.error("Erro", err)
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  }
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

                <div className="password-box">
                  <input
                    type={showPassword.current ? "text" : "password"}
                    // type="password"
                    name="currentPassword"
                    value={passwordData.currentPassword}
                    onChange={handlePasswordChange} />

                  <button type="button"
                    className="eye-btn"
                    onClick={() => {
                      setShowPassword({
                        ...showPassword,
                        current: !showPassword.current
                      })
                    }}>
                    {showPassword.current ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>

                </div>
              </div>

              <div className="form-group">
                <label>New Password</label>

                <div className="password-box">
                  <input
                    type={showPassword.new ? "text" : "password"}
                    // type="password"
                    name="newPassword"
                    value={passwordData.newPassword}
                    onChange={handlePasswordChange} />


                  <button
                    type="button"
                    className="eye-btn"
                    onClick={() =>
                      setShowPassword({
                        ...showPassword,
                        new: !showPassword.new,
                      })
                    }
                  >
                    {showPassword.new ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label>Confirm Password</label>

                <div className="password-box">
                  <input
                    type={showPassword.confirm ? "text" : "password"}
                    // type="password"
                    name="confirmPassword"
                    value={passwordData.confirmPassword}
                    onChange={handlePasswordChange} />


                  <button
                    type="button"
                    className="eye-btn"
                    onClick={() =>
                      setShowPassword({
                        ...showPassword,
                        confirm: !showPassword.confirm,
                      })
                    }
                  >
                    {showPassword.confirm ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

              </div>

            </div>

            <div className="form-actions">
              <button onClick={handleChangePassword}>Change Password</button>
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