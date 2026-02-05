import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Projects.css";

function Projects() {
  return (
    <>
      <Navbar />

      <div className="projects-container">
        <h1 className="projects-title">Projects</h1>
        <p className="projects-subtitle">
          This page is added as an extension of Experiment-2 using React Router.
        </p>

        <div className="projects-list">
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>
              A responsive portfolio built using React components and modern UI
              design.
            </p>
          </div>

          <div className="project-card">
            <h3>React UI Dashboard</h3>
            <p>
              A dashboard interface with reusable components and clean layout.
            </p>
          </div>

          <div className="project-card">
            <h3>Full-Stack Web App</h3>
            <p>
              A complete web application integrating frontend and backend
              technologies.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Projects;