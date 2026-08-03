import React, { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";
import "../Style/AdminBlog.css";
import ApiClient from "../../src/config/ApiClient";
import { toast } from "react-toastify";
import BlogTable from "./BlogTable";
import "../AdminPanelCSS/blog.css"

export default function AdminBlog() {
  const [isEditing, setIsEditing] = useState(false)
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    thumbnail: "",
    author: "",
    status: ""
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {

        await ApiClient.patch(
          `/api/blog/BlogUpdate/${formData._id}`,
          formData
        );

        toast.success("Blog Updated Successfully");
        setFormData({
          title: "",
          excerpt: "",
          content: "",
          category: "",
          thumbnail: "",
          author: "",
          status: ""
        })
        setIsEditing(false);
        await getBlogs()

      }
      else {
        const Res = await ApiClient.post("/api/blog/newblogs", formData)
        console.log("What the Blog Res", Res)
        // setFormData(Res)
        toast.success("Blog Create Successfully")

        setFormData({
          title: "",
          excerpt: "",
          content: "",
          category: "",
          thumbnail: "",
          author: "",
          status: ""
        })
        setIsEditing(false);
      }
    } catch (err) {
      console.error("Error", err)
      toast.error("Error Blog Not Created")
    }
    console.log(formData);
  };




  const getBlogs = async () => {
    try {
      const res = await ApiClient.get("/api/blog/GetAllBlogs");
      setBlogs(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  const formRef = useRef(null)


  const handleCreateBlog = () => {
    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }
  return (
    <>
      <div className="blog-header-top">
        <button className="create-blog-btn"
          // onClick={() => {
          //   document.getElementById("create-blog")
          //     .scrollIntoView({
          //       behavior: "smooth"
          //     })
          // }}
          onClick={handleCreateBlog}
        >
          <Plus size={18} />
          Create Blog
        </button>
      </div>
      <BlogTable
        blogs={blogs}
        getBlogs={getBlogs}
        setFormData={setFormData}
        setIsEditing={setIsEditing} />

      <div className="blog-page" id="create-blog" ref={formRef}>
        <div className="blog-card">

          <div className="blog-header">
            <h2>Create New Blog</h2>
            <p>Publish construction insights & updates</p>
          </div>

          <form onSubmit={handleSubmit} className="blog-form">

            <div className="blog-grid">

              <div className="form-group full">
                <label>Blog Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group full">
                <label>Short Description (Excerpt)</label>
                <textarea
                  rows="2"
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="form-group full">
                <label>Full Content</label>
                <textarea
                  rows="6"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                ></textarea>
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

              <div className="form-group">
                <label>Author</label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                />
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
                <label>Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="">Select Status</option>
                  <option value="Draft">Draft</option>
                  <option value="Published">Published</option>
                </select>
              </div>

            </div>

            <div className="blog-actions">
              {/* <button type="submit">Create Blog</button> */}
              <button type="submit">
                {isEditing ? "Update Blog" : "Create Blog"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}