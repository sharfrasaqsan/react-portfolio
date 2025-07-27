import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaWordpress,
  FaGithub,
  FaFigma,
  FaCheckCircle,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiJquery,
  SiMongodb,
  SiMysql,
  SiAdobephotoshop,
  SiPostgresql,
  SiMagento,
  SiShopify,
} from "react-icons/si";

const AboutMe = () => {
  const techSkills = [
    { icon: <FaHtml5 color="#E34F26" />, name: "HTML5" },
    { icon: <FaCss3Alt color="#1572B6" />, name: "CSS3" },
    { icon: <SiTailwindcss color="#38B2AC" />, name: "Tailwind CSS" },
    { icon: <SiBootstrap color="#7952B3" />, name: "Bootstrap" },
    { icon: <FaJs color="#F7DF1E" />, name: "JavaScript" },
    { icon: <SiJquery color="#0769AD" />, name: "jQuery" },
    { icon: <FaReact color="#61DAFB" />, name: "React.js" },
    { icon: <FaPhp color="#777BB4" />, name: "PHP" },
    { icon: <FaWordpress color="#21759B" />, name: "WordPress" },
    { icon: <SiMagento color="#EE672F" />, name: "Magento 2" },
    { icon: <SiShopify color="#96BF48" />, name: "Shopify" },
    { icon: <SiMysql color="#00758F" />, name: "MySQL" },
    { icon: <SiPostgresql color="#336791" />, name: "PostgreSQL" },
    { icon: <SiMongodb color="#47A248" />, name: "MongoDB" },
    { icon: <FaGithub color="#181717" />, name: "GitHub" },
    { icon: <SiAdobephotoshop color="#31A8FF" />, name: "Photoshop" },
    { icon: <FaFigma color="#F24E1E" />, name: "Figma" },
  ];

  const softSkills = [
    "Effective Communication",
    "Team Collaboration",
    "Problem-Solving",
    "Adaptability",
    "Time Management",
    "Attention to Detail",
    "Creativity",
    "Multitasking",
    "Critical Thinking",
    "Client-Focused Mindset",
  ];

  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">About Me</h2>
        <p className="text-muted">
          Professional Web Developer | 3+ Years Experience
        </p>
      </div>

      <section className="mb-5">
        <h4 className="fw-semibold mb-3">Professional Summary</h4>
        <p className="text-muted" style={{ textAlign: "justify" }}>
          Experienced Web Developer with 3 years of expertise in front-end and
          full-stack web development, specializing in React.js, JavaScript,
          HTML5, CSS3, and RESTful APIs. Proven ability to build responsive,
          high-performance, and user-friendly web applications while ensuring
          SEO best practices, accessibility, and cross-browser compatibility.
          Passionate about clean, maintainable code.
        </p>
      </section>

      <section className="mb-5">
        <h4 className="fw-semibold mb-3">Professional Experience</h4>
        <div className="mb-3">
          <h6 className="fw-bold mb-1">Web Developer | Oscar Wylee (Remote)</h6>
          <small className="text-muted">Sep 2022 – Present</small>
          <ul className="mt-2">
            <li>Built and maintained Magento 2 and WordPress websites.</li>
            <li>Integrated React.js with RESTful APIs for dynamic features.</li>
            <li>Optimized performance and applied SEO best practices.</li>
            <li>
              Collaborated with cross-functional teams for brand consistency.
            </li>
          </ul>
        </div>
        <div>
          <h6 className="fw-bold mb-1">Intern | KINIT Pvt Ltd</h6>
          <small className="text-muted">Dec 2021 – Jun 2022</small>
          <ul className="mt-2">
            <li>Built reusable components with React.js.</li>
            <li>Assisted with performance improvements and UX enhancement.</li>
          </ul>
        </div>
      </section>

      <section className="mb-5">
        <h4 className="fw-semibold mb-3">Education</h4>
        <p>
          <strong>BICT (Hons) – Software Systems</strong>
          <br />
          University of Kelaniya, 2018 – 2022
          <br />
          GPA: <strong>3.14</strong> (Second Class Upper)
        </p>
      </section>

      <section className="mb-5">
        <h4 className="fw-semibold mb-3">Tech Stack</h4>
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {techSkills.map((tech, i) => (
            <div key={i} className="text-center">
              <div className="fs-3">{tech.icon}</div>
              <small
                className="d-block text-muted"
                style={{ fontSize: "0.8rem" }}
              >
                {tech.name}
              </small>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-5">
        <h4 className="fw-semibold mb-3">Soft Skills</h4>
        <div className="row row-cols-1 row-cols-sm-2 g-3">
          {softSkills.map((skill, i) => (
            <div key={i} className="d-flex align-items-start">
              <FaCheckCircle className="text-success me-2 mt-1" />{" "}
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-5">
        <h4 className="fw-semibold mb-3">Certifications</h4>
        <ul className="text-muted ps-3">
          <li>Intro to Front-End Development – Coursera (Meta)</li>
          <li>Web Design for Beginners – UOM</li>
        </ul>
      </section>

      <section>
        <h4 className="fw-semibold mb-3">Additional Information</h4>
        <ul className="text-muted ps-3">
          <li>
            Languages: English (Fluent), Tamil (Native), Sinhala (Beginner)
          </li>
          <li>Availability: 6-Week Notice Period</li>
        </ul>
      </section>
    </section>
  );
};

export default AboutMe;
