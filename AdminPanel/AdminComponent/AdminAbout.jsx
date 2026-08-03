import React, { useState } from "react";
import "../AdminPanelCSS/about.css";

export default function AdminAbout() {
  const [activeTab, setActiveTab] = useState("content");

  return (
    <div className="about-admin-page">

      <div className="about-admin-card">

        <div className="about-header">
          <h2>Manage About Page</h2>
          <p>Update website About page content</p>
        </div>

        {/* Tabs */}
        <div className="about-tabs">
          <button
            className={activeTab === "content" ? "active" : ""}
            onClick={() => setActiveTab("content")}
          >
            About Content
          </button>

          <button
            className={activeTab === "stats" ? "active" : ""}
            onClick={() => setActiveTab("stats")}
          >
            Stats
          </button>

          <button
            className={activeTab === "team" ? "active" : ""}
            onClick={() => setActiveTab("team")}
          >
            Team
          </button>

          <button
            className={activeTab === "partners" ? "active" : ""}
            onClick={() => setActiveTab("partners")}
          >
            Partners
          </button>
        </div>

        {/* CONTENT TAB */}
        {activeTab === "content" && (
          <div className="tab-section">
            <div className="form-grid">

              <div className="form-group full">
                <label>Hero Title</label>
                <input type="text" />
              </div>

              <div className="form-group full">
                <label>Hero Subtitle</label>
                <input type="text" />
              </div>

              <div className="form-group full">
                <label>Hero Image URL</label>
                <input type="text" />
              </div>

              <div className="form-group full">
                <label>About Title</label>
                <input type="text" />
              </div>

              <div className="form-group full">
                <label>About Description</label>
                <textarea rows="4"></textarea>
              </div>

              <div className="form-group full">
                <label>About Image URL</label>
                <input type="text" />
              </div>

              <div className="form-group full">
                <label>Mission Description</label>
                <textarea rows="3"></textarea>
              </div>

              <div className="form-group full">
                <label>Vision Description</label>
                <textarea rows="3"></textarea>
              </div>

              <div className="form-group full">
                <label>Approach Description</label>
                <textarea rows="3"></textarea>
              </div>

            </div>

            <div className="form-actions">
              <button>Save Changes</button>
            </div>
          </div>
        )}

        {/* STATS TAB */}
        {activeTab === "stats" && (
          <div className="tab-section">
            <div className="simple-table">
              <table>
                <thead>
                  <tr>
                    <th>Value</th>
                    <th>Label</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>110</td>
                    <td>Completed Projects</td>
                    <td>
                      <button className="edit-btn">Edit</button>
                      <button className="delete-btn">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="form-actions">
              <button>Add New Stat</button>
            </div>
          </div>
        )}

        {/* TEAM TAB */}
        {activeTab === "team" && (
          <div className="tab-section">
            <div className="simple-table">
              <table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><div className="img-placeholder"></div></td>
                    <td>John Doe</td>
                    <td>Site Engineer</td>
                    <td>
                      <button className="edit-btn">Edit</button>
                      <button className="delete-btn">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="form-actions">
              <button>Add Team Member</button>
            </div>
          </div>
        )}

        {/* PARTNERS TAB */}
        {activeTab === "partners" && (
          <div className="tab-section">
            <div className="simple-table">
              <table>
                <thead>
                  <tr>
                    <th>Logo</th>
                    <th>Name</th>
                    <th>Website</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><div className="img-placeholder"></div></td>
                    <td>Simple House</td>
                    <td>www.simple.com</td>
                    <td>
                      <button className="delete-btn">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="form-actions">
              <button>Add Partner</button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}