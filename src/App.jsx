import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Header from "./component/Header";
import Footer from "./component/Footer";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ProjectsPage from "./Pages/ProjectsPage";
import Project_Details from "./component/Project_component/Project_Details";
import BlogPage from "./Pages/BlogPage";
import ContactPage from "./Pages/ContactPage";
import Blog_Detalis from "./component/Blog_component/Blog_Details";
import Practise from "./Pages/Practise";

import AdminHomePage from "../AdminPanel/Authorization/Login.jsx";
import "../AdminPanel/Style/AdminPanel.css"
import Sidebar from "../AdminPanel/Pages/Sidebar.jsx";
import AdminPage from "../AdminPanel/AdminPage.jsx";
import Dashboard from "../AdminPanel/Pages/Dashboard.jsx";
import Project from "../AdminPanel/Pages/Project.jsx";
import Blogs from "../AdminPanel/Pages/Blogs.jsx";
import About from "../AdminPanel/Pages/About.jsx";
import Contact from "../AdminPanel/Pages/Contact.jsx";
import AdminUser from "../AdminPanel/Pages/AdminUser.jsx";
import Media from "../AdminPanel/Pages/Media.jsx";
import Setting from "../AdminPanel/Pages/Setting.jsx";
import Register from "../AdminPanel/Authorization/Register.jsx";

function App() {
  const navigate = useNavigate()
  const location = useLocation();



  const isAdminPage = location.pathname.startsWith("/Admin");

  console.log("isAdminPage", isAdminPage)
  return (
    <div className="">
      <ToastContainer />
      {!isAdminPage && <Header />}
      <Routes>
        <Route path="/" element={<Navigate to="/home/" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/details" element={<Project_Details />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/details/:id" element={<Blog_Detalis />} />
        <Route path="/contact_us" element={<ContactPage />} />
        <Route path="/Register" element={<Register />} />

        {/* <Route path="/practise" element={<Practise />} /> */}


        {/* Admin Panel */}
        <Route path="/Admin/login" element={<AdminHomePage />} />
        {/* <Route path="/Admin/Sidebar" element={<Sidebar />} /> */}

        {/* <Route path="/Admin/AdminPage" element={<AdminPage />} />
        <Route path="/Admin/Dashboard" element={<Dashboard />} /> */}

        <Route path="/Admin/AdminPage" element={<AdminPage />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="project" element={<Project />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="adminuser" element={<AdminUser />} />
          <Route path="media" element={<Media />} />
          <Route path="setting" element={<Setting />} />
        </Route>


      </Routes>
      {!isAdminPage && <Footer />}
      {!isAdminPage &&

        < div className="AdminPanelBtn"
          onClick={() => navigate("/Admin/login")}>
          <span className="AdminPanelBtn_text">
            <Shield size={25} />
          </span>
        </div>
      }

    </div >
  );
}

export default App;
