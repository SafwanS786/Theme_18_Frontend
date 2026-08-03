import React, { useEffect, useState } from "react"
import ApiClient from "../../src/config/ApiClient";
import { toast } from "react-toastify";

export default function BlogTable({ setFormData,
  setIsEditing, blogs, getBlogs }) {


  const updateStatus = async (_id, newStatus) => {
    try {
      console.log("Sending:", { _id, newStatus });

      const UpdateStatus = await ApiClient.patch(`/api/blog/UpdateStatus/${_id}`, { status: newStatus })
      toast.success("Status Update Successfully")
      getBlogs()
    } catch (error) {
      console.log("Error", error)
      toast.error("Status Failed to Update")
    }

  }

  // const handleUpdate = async (id) => {
  //   try {
  //     console.log("SHSD", id)
  //     const updatedData = {
  //       title: updateBlog.title,
  //       excerpt: updateBlog.excerpt,
  //       content: updateBlog.content,
  //       category: updateBlog.category,
  //       thumbnail: updateBlog.thumbnail,
  //       author: updateBlog.author,
  //       status: updateBlog.status
  //     };

  //     const Blog_update = await ApiClient.patch(`/api/blog/BlogUpdate/${id}`, updatedData)
  //     setUpdateblog(Blog_update)
  //     console.log("Value Blog Update", Blog_update)
  //   }
  //   catch (err) {

  //   }
  // }

  return (
    <>
      <div className="blog-table-page">
        <div className="blog-table-card">

          <div className="table-header">
            <div>
              <h2>All Blogs</h2>
              <p>Manage your published and draft blogs</p>
            </div>
          </div>

          <div className="table-wrapper">
            <table className="blog-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Author</th>
                  <th>Status</th>
                  <th className="center">Action</th>
                </tr>
              </thead>

              <tbody>
                {blogs.map((item) => (
                  <tr key={item._id}>
                    <td className="title-cell">
                      <div className="blog-title">
                        {item.title}
                      </div>
                    </td>

                    <td>
                      <span className="category-badge">
                        {item.category}
                      </span>
                    </td>

                    <td>{item.author}</td>

                    <td>
                      <select
                        className={`status-select ${item.status === "Published" ? "Published" : "Draft"}`}
                        value={item.status}
                        onChange={(e) =>
                          updateStatus(item._id, e.target.value)
                        }
                      >
                        <option value="Draft">Draft</option>
                        <option value="Published">Published</option>
                      </select>
                    </td>

                    <td className="action-buttons">
                      <button className="edit-btn" onClick={() => {
                        setFormData(item);
                        setIsEditing(true);

                        window.scrollTo({
                          top: 0,
                          behavior: "smooth"
                        })
                      }}>Edit</button>
                      <button className="delete-btn">Delete</button>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div >
    </>
  )
}