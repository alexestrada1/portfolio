import React from "react";
import "./Footer.css";
import githubLogo from "../../Assets/GitHub-logo.png";
import emailLogo from "../../Assets/email-logo.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div className="footer-link">
          <a href="https://github.com/alexestrada1?tab=repositories">
            <img alt="Github Logo Link" src={githubLogo} />
          </a>
        </div>
        <div className="footer-link">
          <a href="mailto:estradaalex46@gmail.com">
            <img alt="Email Link" src={emailLogo} />
          </a>
        </div>
      </div>
      <p>Designed By alex estrada</p>
    </footer>
  );
};

export default Footer;
