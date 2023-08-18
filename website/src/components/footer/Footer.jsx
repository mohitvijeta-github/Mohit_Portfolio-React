import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Mohit Vijeta</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link" rel="noopener">
              about
            </a>
          </li>

          <li>
            <a href="#certificates" className="footer__link" rel="noopener">
              certificates
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link" rel="noopener">
              contact
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://www.linkedin.com/in/mohit-vijeta/"  
             className="footer__social-link"  target="_blank" rel="noopener">
            <i class="bx bxl-linkedin"></i>
            </a>
            <a href="https://github.com/mohitvijeta-github" rel="noopener"
               className="footer__social-link" target="_blank" >
            <i class="bx bxl-github"></i>
            </a>
            <a
            href="https://www.facebook.com/anurag.vijeta.12/"
            className="footer__social-link"
            target="_blank" rel="noopener">
            <i className="bx bxl-facebook"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Mohit Vijeta. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
