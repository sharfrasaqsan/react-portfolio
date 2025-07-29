import myPhoto from "../assets/image.png";

const About = () => {
  return (
    <section className="container py-5" id="about">
      <h4 className="mb-5 text-center fw-bold text-dark">About Me</h4>

      <div className="row align-items-center">
        <div className="col-md-8">
          <p className="text-muted" style={{ textAlign: "justify" }}>
            <strong>Experienced Front-End Developer</strong> with{" "}
            <strong>3+ years</strong> of hands-on experience building
            responsive, accessible, and high-performance web applications using{" "}
            <code>React.js</code>, <code>JavaScript</code>, <code>HTML5</code>,
            and <code>CSS3</code>. Currently working at{" "}
            <strong>Oscar Wylee</strong>, contributing to scalable front-end
            systems that align with brand and UX goals.
            <br />
            <br />
            Proficient in <code>WordPress</code>, <code>Magento 2</code>, and
            third-party API integration. Focused on <em>clean code</em>,{" "}
            <em>cross-browser compatibility</em>, and collaboration with
            design/dev teams.
            <br />
            <br />
            Actively expanding into <strong>full-stack development</strong> by
            learning <code>Node.js</code>, <code>Express.js</code>, and{" "}
            <code>Next.js</code> to become a complete and adaptable web
            engineer.
          </p>
        </div>

        <div className="col-md-4 mb-4 mb-md-0 text-center">
          <img
            src={myPhoto}
            alt="Mohamed Sharfras"
            className="rounded-circle img-fluid shadow p-1 mb-2 bg-white"
            style={{ width: "220px", height: "220px", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
