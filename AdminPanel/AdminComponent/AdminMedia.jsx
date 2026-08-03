import React from "react";
import "../Style/AdminMedia.css";

export default function AdminMedia() {
  return (
    <div className="media-admin-page">
      <div className="media-admin-card">

        <div className="media-header">
          <div>
            <h2>Media Library</h2>
            <p>Upload and manage your images & files</p>
          </div>

          <button className="upload-btn">
            + Upload Media
          </button>
        </div>

        {/* Upload Box */}
        <div className="upload-box">
          <p>Drag & Drop files here</p>
          <span>or click to browse</span>
          <input type="file" />
        </div>

        {/* Media Grid */}
        <div className="media-grid">

          <div className="media-item">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
              alt=""
            />
            <div className="media-overlay">
              <button className="delete-btn">Delete</button>
            </div>
          </div>

          <div className="media-item">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
              alt=""
            />
            <div className="media-overlay">
              <button className="delete-btn">Delete</button>
            </div>
          </div>

          <div className="media-item">
            <img
              src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
              alt=""
            />
            <div className="media-overlay">
              <button className="delete-btn">Delete</button>
            </div>
          </div>

          <div className="media-item">
            <img
              src="https://images.unsplash.com/photo-1505843513577-22bb7d21e455"
              alt=""
            />
            <div className="media-overlay">
              <button className="delete-btn">Delete</button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}