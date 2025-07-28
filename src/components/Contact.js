import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="py-5 bg-primary text-white text-center" id="contact">
      <div className="container">
        <h4 className="text-center fw-bold">Interested in working together?</h4>
        <p className="mb-4">
          Let's connect and discuss how I can help your team or project succeed.
        </p>
        <Link to="/contact" className="btn btn-light fw-bold">
          Contact Me
        </Link>
      </div>
    </section>
  );
};

export default Contact;
