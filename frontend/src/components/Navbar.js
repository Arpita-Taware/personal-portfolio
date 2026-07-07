const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-name">PORTFOLIO</span>
        <span className="logo-dot">.</span>
      </div>

      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;