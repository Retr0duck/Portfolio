import React from "react";
import htmlLogo from '../assets/html-5-svgrepo-com.svg';
import cssLogo from '../assets/css-3-svgrepo-com.svg';
import javascriptLogo from '../assets/javascript-svgrepo-com.svg';
import reactLogo from '../assets/react-logo-svgrepo-com.svg';
import bootstrapLogo from '../assets/bootstrap-4-logo-svgrepo-com.svg';
import reactRouterLogo from '../assets/react-router-svgrepo-com.svg';
import reduxLogo from '../assets/redux-logo-svgrepo-com.svg';
import webpackLogo from '../assets/webpack-svgrepo-com.svg';
import gitLogo from '../assets/git-icon-svgrepo-com.svg';
import githubLogo from '../assets/github-142-svgrepo-com.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Skills.css'; // Import your CSS file

function Skills() {
  return (
    <div className="skills-container-center p-5">
      <div className="skills-section">
        <div className="skills-title">
          <h2 className="p-4 fw-bold">Technologies and Skills</h2>
        </div>
        <div className="skills-list">
          <div className="skill-item">
            <img src={htmlLogo} alt="HTML Logo" />
            <p className="fw-semibold">HTML</p>
          </div>
          <div className="skill-item">
            <img src={cssLogo} alt="CSS Logo" />
            <p className="fw-semibold">CSS</p>
          </div>
          <div className="skill-item">
            <img src={javascriptLogo} alt="JavaScript Logo" />
            <p className="fw-semibold">JavaScript</p>
          </div>
          <div className="skill-item">
            <img src={reactLogo} alt="React Logo" />
            <p className="fw-semibold">React</p>
          </div>
          <div className="skill-item">
            <img src={bootstrapLogo} alt="Bootstrap Logo" />
            <p className="fw-semibold">Bootstrap</p>
          </div>
          <div className="skill-item">
            <img src={reactRouterLogo} alt="React Router Logo" />
            <p className="fw-semibold">React Router</p>
          </div>
          <div className="skill-item">
            <img src={reduxLogo} alt="Redux Logo" />
            <p className="fw-semibold">Redux</p>
          </div>
          <div className="skill-item">
            <img src={webpackLogo} alt="Webpack Logo" />
            <p className="fw-semibold">Webpack</p>
          </div>
          <div className="skill-item">
            <img src={gitLogo} alt="Git Logo" />
            <p className="fw-semibold">Git</p>
          </div>
          <div className="skill-item">
            <img src={githubLogo} alt="GitHub Logo" />
            <p className="fw-semibold">GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
