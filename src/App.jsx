import Header from "./component/Header";
import Footer from "./component/Footer";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import { Routes, Route, Navigate } from "react-router-dom";
import ProjectsPage from "./Pages/ProjectsPage";
import Project_Details from "./component/Project_component/Project_Details";
import BlogPage from "./Pages/BlogPage";
import ContactPage from "./Pages/ContactPage";
import Blog_Detalis from "./component/Blog_component/Blog_Details";

function App() {
  return (
    <div className="">
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
