import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__links">
          <a href="#audio">Audio and Subtitles</a>
          <a href="#help">Help Center</a>
          <a href="#cards">Gift Cards</a>
          <a href="#media">Media Center</a>
        </div>
        <div className="footer__links">
          <a href="#relations">Investor Relations</a>
          <a href="#jobs">Jobs</a>
          <a href="#terms">Terms of Use</a>
          <a href="#privacy">Privacy</a>
        </div>
        <div className="footer__links">
          <a href="#legal">Legal Notices</a>
          <a href="#cookie">Cookie Preferences</a>
          <a href="#corporate">Corporate Information</a>
          <a href="#contact">Contact Us</a>
        </div>
      </div>
      <p className="footer__copyright">© 2024 Netflix Clone</p>
    </footer>
  );
}

export default Footer;

