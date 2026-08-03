import React, { useState } from "react";
import { toast } from "react-toastify";


import ApiClient from "../../src/config/ApiClient";
import "../Style/Project.css"

export default function AdminProject() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "",
    category: "",
    thumbnail: "",
    startDate: "",
    endData: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await ApiClient.post("/api/project/newproject", formData);

      toast.success(res.data.message);

      setFormData({
        title: "",
        description: "",
        status: "",
        category: "",
        thumbnail: "",
        startDate: "",
        endData: "",
      });
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    // <div className="project-container">
    //   <h2>Create Project</h2>

    //   <form onSubmit={handleSubmit}>
    //     <div className="mb-3">
    //       <label>Title</label>
    //       <input
    //         type="text"
    //         name="title"
    //         className="form-control"
    //         value={formData.title}
    //         onChange={handleChange}
    //       />
    //     </div>

    //     <div className="mb-3">
    //       <label>Description</label>
    //       <textarea
    //         name="description"
    //         className="form-control"
    //         value={formData.description}
    //         onChange={handleChange}
    //       ></textarea>
    //     </div>

    //     <div className="mb-3">
    //       <label>Status</label>
    //       <select
    //         name="status"
    //         className="form-control"
    //         value={formData.status}
    //         onChange={handleChange}
    //       >
    //         <option value="">Select Status</option>
    //         <option value="Pending">Pending</option>
    //         <option value="In Progress">In Progress</option>
    //         <option value="Completed">Completed</option>
    //       </select>
    //     </div>

    //     <div className="mb-3">
    //       <label>Category</label>
    //       <input
    //         type="text"
    //         name="category"
    //         className="form-control"
    //         value={formData.category}
    //         onChange={handleChange}
    //       />
    //     </div>

    //     <div className="mb-3">
    //       <label>Thumbnail URL</label>
    //       <input
    //         type="text"
    //         name="thumbnail"
    //         className="form-control"
    //         value={formData.thumbnail}
    //         onChange={handleChange}
    //       />
    //     </div>

    //     <div className="mb-3">
    //       <label>Start Date</label>
    //       <input
    //         type="date"
    //         name="startDate"
    //         className="form-control"
    //         value={formData.startDate}
    //         onChange={handleChange}
    //       />
    //     </div>

    //     <div className="mb-3">
    //       <label>End Date</label>
    //       <input
    //         type="date"
    //         name="endData"
    //         className="form-control"
    //         value={formData.endData}
    //         onChange={handleChange}
    //       />
    //     </div>

    //     <button
    //       type="submit"
    //       className="btn btn-primary"
    //       disabled={loading}
    //     >
    //       {loading ? "Creating..." : "Create Project"}
    //     </button>
    //   </form>
    // </div>
    <div className="project-page">
      <div className="project-card">

        <div className="project-header">
          <h2>Create New Project</h2>
          <p>Add new construction project details</p>
        </div>

        <form onSubmit={handleSubmit} className="project-form">

          <div className="form-grid">

            <div className="form-group">
              <label>Project Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
              />
            </div>

            <div className="form-group full-width">
              <label>Description</label>
              <textarea
                name="description"
                rows="4"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="form-group">
              <label>Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="">Select Status</option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            <div className="form-group">
              <label>Thumbnail URL</label>
              <input
                type="text"
                name="thumbnail"
                value={formData.thumbnail}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Start Date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>End Date</label>
              <input
                type="date"
                name="endData"
                value={formData.endData}
                onChange={handleChange}
              />
            </div>

          </div>

          <div className="form-actions">
            <button type="submit" disabled={loading}>
              {loading ? "Creating..." : "Create Project"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}