import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/projects`)
      .then((res) => {
        console.log("Projects received from backend:", res.data);
        setProjects(res.data);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
      });
  }, []);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project._id}>
              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              {project.techStack && (
                <div className="tech-stack">
                  {project.techStack.map((tech, index) => (
                    <span className="tech-badge" key={index}>
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              <div className="project-links">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub /> GitHub
                </a>

                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiExternalLink /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;