import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFacebook,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row gy-4 justify-content-between">
          {/* About */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">About</h5>
            <p className="small">
              Passionate web developer creating modern, responsive websites and
              apps using React, JavaScript, and Firebase.
            </p>
          </div>

          {/* Links */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled small">
              <li className="mb-1">
                <Link to="/" className="text-light text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="mb-1">
                <Link to="/about" className="text-light text-decoration-none">
                  About
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/projects"
                  className="text-light text-decoration-none"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-light text-decoration-none">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">Contact</h5>
            <p className="small mb-1">
              <FaEnvelope className="me-2" />
              <a
                href="mailto:sharfrasaqsan@gmail.com"
                className="text-decoration-none text-light"
              >
                sharfrasaqsan@gmail.com
              </a>
            </p>
            <p className=" small mb-2">
              <FaPhoneAlt className="me-2" />
              <a
                href="tel:+94751230001"
                className="text-decoration-none text-light"
              >
                +94 751 230 001
              </a>
            </p>

            <div className="d-flex gap-3 mt-2">
              <a
                href="https://github.com/sharfrasaqsan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-5"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/sharfiras/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-5"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://facebook.com/sharfras.aqsan97/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-5"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center border-top pt-3 mt-4 small">
          &copy; {new Date().getFullYear()} Mohamed Sharfras. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
