import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <section className="about" /*class="about-section"*/ id="about">
      <h2 className="section-title">About Me</h2>
      <div className="aboutmeinfo">
        <p>
          I’m a Computer Engineering student focused on building modern and efficient web applications. I enjoy developing scalable systems and understanding how real-world applications are structured from frontend to backend. As a Full Stack Developer, I have built end-to-end projects that combine responsive user interfaces with strong backend logic and database management. I am passionate about writing clean, maintainable code and continuously improving my problem-solving skills. I’m always eager to learn new technologies, explore     better developmen practices, and grow as a developer by working on practical, real-world projects.
        </p><br></br>
        <div className="btn-container">
          <a href="https://github.com/Arpita-Taware" className="btn abt-btn"><FaGithub /> Github</a>
          <a href="https://www.linkedin.com/in/arpitataware/" className="btn abt-btn"> <FaLinkedin />LinkedIn</a>
        </div>
        <br></br><br></br>
      </div>
    </section>
  );
};

export default About;