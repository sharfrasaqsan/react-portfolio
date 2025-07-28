import Education from "../components/Education";
import Experience from "../components/Experience";
import Resume from "../components/Resume";

const AboutMe = () => {
  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">About Me</h2>
        <p className="text-muted">
          Professional Web Developer | 3+ Years Experience
        </p>
      </div>

      <section className="mb-5">
        <p className="text-muted" style={{ textAlign: "justify" }}>
          Experienced Web Developer with 3 years of expertise in front-end and
          full-stack web development, specializing in React.js, JavaScript,
          HTML5, CSS3, and RESTful APIs. Proven ability to build responsive,
          high-performance, and user-friendly web applications while ensuring
          SEO best practices, accessibility, and cross-browser compatibility.
          Passionate about clean, maintainable code.
        </p>
      </section>

      <section className="mb-5 text-center">
        <Resume />
      </section>

      <Experience />
      <Education />
    </section>
  );
};

export default AboutMe;
