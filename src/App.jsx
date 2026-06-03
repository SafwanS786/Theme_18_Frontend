import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";


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

import AdminHomePage from "../AdminPanel/HomePage/HomePage.jsx";
import "../AdminPanel/Style/AdminPanel.css"

function App() {
  const navigate = useNavigate()
  return (
    <div className="">
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home/" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/details" element={<Project_Details />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/details" element={<Blog_Detalis />} />
        <Route path="/contact_us" element={<ContactPage />} />
        <Route path="/practise" element={<Practise />} />


        {/* Admin Panel */}
        <Route path="/Admin/homepage" element={<AdminHomePage />} />
      </Routes>
      <Footer />

      <div className="AdminPanelBtn"
        onClick={() => navigate("/Admin/homepage")}>
        <span className="AdminPanelBtn_text">
          <Shield size={25} />
        </span>
      </div>

    </div>
  );
}

export default App;
