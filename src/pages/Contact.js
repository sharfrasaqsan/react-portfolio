import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
import { toast } from "react-toastify";

const Contact = () => {
  const [contacName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);

  const handleContact = (e) => {
    e.preventDefault();

    setBtnLoading(true);
    try {
      toast.success("Message sent successfully!");
    } catch (err) {
      toast.error("Error sending message: " + err.message);
    } finally {
      setBtnLoading(false);
    }
  };

  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Contact Me</h2>
        <p className="text-muted">
          Let's connect — I'm open to collaboration and opportunities!
        </p>
      </div>

      <div className="row gy-4">
        {/* Contact Info */}
        <div className="col-md-5">
          <h5 className="fw-semibold mb-4">Contact Information</h5>
          <div className="mb-3 d-flex align-items-start">
            <FaEnvelope className="me-3 mt-1 text-primary" />
            <span>
              <a
                href="mailto:sharfrasaqsan@gmail.com"
                className="text-decoration-none"
              >
                sharfrasaqsan@gmail.com
              </a>
            </span>
          </div>
          <div className="mb-3 d-flex align-items-start">
            <FaPhone className="me-3 mt-1 text-primary" />
            <span>
              <a href="tel:+94751230001" className="text-decoration-none">
                +94 751 230 001
              </a>
            </span>
          </div>
          <div className="mb-3 d-flex align-items-start">
            <FaMapMarkerAlt className="me-3 mt-1 text-primary" />
            <span>Kinniya, Sri Lanka</span>
          </div>

          <div className="mt-4">
            <h6 className="fw-semibold mb-2">Follow Me</h6>
            <div className="d-flex gap-3">
              <a
                href="https://github.com/sharfrasaqsan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="fs-4 text-primary" />
              </a>
              <a
                href="https://www.linkedin.com/in/sharfiras/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="fs-4 text-dark" />
              </a>
              <a
                href="https://facebook.com/sharfras.aqsan97/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="fs-4 text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-md-7">
          <h5 className="fw-semibold mb-4">Send a Message</h5>
          <form onSubmit={handleContact}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Your name"
                value={contacName}
                onChange={(e) => setContactName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Your email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                rows="5"
                placeholder="Your message"
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary px-4"
              disabled={btnLoading}
            >
              <>
                {btnLoading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Sending...
                  </>
                ) : (
                  "Send"
                )}
              </>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
