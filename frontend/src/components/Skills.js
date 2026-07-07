const Skills = () => {

  return (
    <section className="skills" /*class="skils-section"*/ id="skills">
      <h2 className="section-title">My Skills</h2>
      <div id="skill-list" className="skills-grid">
        <div>
          <p className="skill-header">FRONTEND</p>
          <ul className="skill-frontend">
            <li className="skill-list">Html</li>
            <li className="skill-list">Css</li>
            <li className="skill-list">Javascript</li>
            <li className="skill-list">React.js</li>
          </ul>
        </div>
        <div>
          <p className="skill-header">BACKEND</p>
          <ul className="skill-backend">
            <li className="skill-list">Node.js</li>
            <li className="skill-list">Express.js</li>
            <li className="skill-list">MongoDB</li>
          </ul>
        </div>
        <div>
          <p className="skill-header">OTHER</p>
          <ul className="skill-tools">
            <li className="skill-list">Python</li>
            <li className="skill-list">Power BI</li>
            <li className="skill-list">C++</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;