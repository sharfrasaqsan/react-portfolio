import Education from "../components/Education";
import Experience from "../components/Experience";
import Resume from "../components/Resume";
import myPhoto from "../assets/image.png";

const AboutMe = () => {
  return (
    <section className="container py-5" id="about">
      <div className="text-center mb-5">
        <h2 className="fw-bold">About Me</h2>
        <p className="text-muted">
          Professional Web Developer | 3+ Years Experience
        </p>
      </div>

      <div className="row align-items-center pb-4">
        {/* Profile Image */}
        <div className="col-md-4 mb-4 mb-md-0 text-center">
          <img
            src={myPhoto}
            alt="Mohamed Sharfras"
            className="rounded-circle img-fluid shadow"
            style={{ width: "220px", height: "220px", objectFit: "cover" }}
          />
        </div>

        {/* Description */}
        <div className="col-md-8">
          <p className="text-muted" style={{ textAlign: "justify" }}>
            Experienced Web Developer with 3 years of hands-on expertise in both
            front-end and full-stack web development. Proficient in modern
            technologies including React.js, JavaScript, HTML5, CSS3, and
            RESTful APIs, with practical experience in building scalable,
            dynamic, and responsive web applications.
            <br />
            Skilled in creating user-centric interfaces that are optimized for
            performance, SEO, accessibility, and cross-browser compatibility.
            Known for writing clean, maintainable, and well-documented code that
            aligns with industry standards and business goals.
            <br />
            Experienced in integrating third-party services, managing CMS
            platforms like WordPress and Magento 2, and collaborating with
            cross-functional teams to deliver high-quality digital products.
            Passionate about continuous learning, UI/UX best practices, and
            staying updated with the latest web technologies to build solutions
            that are both functional and elegant.
          </p>
          <Resume />
        </div>
      </div>

      <Experience />
      <Education />
    </section>
  );
};

export default AboutMe;
