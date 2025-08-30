import Header from "./component/Header";
import Footer from "./component/Footer";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import { Routes, Route, Navigate } from "react-router-dom";
import ProjectsPage from "./Pages/ProjectsPage";
import Project_Details from "./component/Project_component/Project_Details";
import BlogPage from "./Pages/BlogPage";
import ContactPage from "./Pages/ContactPage";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home/" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<Project_Details />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact_us" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
