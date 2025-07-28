import React from "react";
import { FaArrowDown, FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="d-flex align-items-center bg-light py-5"
      id="hero"
      style={{ minHeight: "80vh" }}
    >
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 className="display-4 fw-bold mb-3 text-dark">
              Hi, I'm <span className="text-primary">Mohamed Sharfiras</span>
            </h1>
            <p className="lead text-muted mb-4">
              Web Developer with 3 years of experience in front-end and
              full-stack development using <strong>React.js</strong>,{" "}
              <strong>JavaScript</strong>, <strong>HTML5</strong>,{" "}
              <strong>CSS3</strong>, <strong>WordPress</strong>,{" "}
              <strong>RESTful APIs</strong>, and <strong>Firebase</strong>.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <a href="/your-resume.pdf" className="btn btn-primary" download>
                <FaDownload className="me-2" />
                Download CV
              </a>
              <Link to="/projects" className="btn btn-outline-secondary">
                View Projects
              </Link>
            </div>

            {/* Optional scroll icon */}
            <div className="mt-5">
              <FaArrowDown className="text-primary fs-3 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
