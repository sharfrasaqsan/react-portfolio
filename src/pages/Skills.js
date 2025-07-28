import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaWordpress,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiJquery,
  SiMongodb,
  SiMysql,
  SiAdobephotoshop,
  SiMagento,
  SiShopify,
} from "react-icons/si";

const Skills = () => {
  const techSkills = [
    { icon: <FaHtml5 color="#E34F26" />, name: "HTML5" },
    { icon: <FaCss3Alt color="#1572B6" />, name: "CSS3" },
    { icon: <FaJs color="#F7DF1E" />, name: "JavaScript" },
    { icon: <FaReact color="#61DAFB" />, name: "React.js" },
    { icon: <FaWordpress color="#21759B" />, name: "WordPress" },
    { icon: <SiMagento color="#EE672F" />, name: "Magento 2" },
    { icon: <SiMysql color="#00758F" />, name: "MySQL" },
    { icon: <SiBootstrap color="#7952B3" />, name: "Bootstrap" },
    { icon: <SiShopify color="#96BF48" />, name: "Shopify" },
    { icon: <SiTailwindcss color="#38B2AC" />, name: "Tailwind CSS" },
    { icon: <SiJquery color="#0769AD" />, name: "jQuery" },
    { icon: <SiMongodb color="#47A248" />, name: "MongoDB" },
    { icon: <FaGithub color="#181717" />, name: "GitHub" },
    { icon: <SiAdobephotoshop color="#31A8FF" />, name: "Photoshop" },
    { icon: <FaFigma color="#F24E1E" />, name: "Figma" },
  ];

  const softSkills = [
    "Communication",
    "Teamwork",
    "Problem Solving",
    "Adaptability",
    "Time Management",
    "Attention to Detail",
    "Creativity",
    "Multitasking",
    "Critical Thinking",
    "Client Focus",
  ];

  return (
    <section className="container py-5" id="skills">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Skills</h2>
        <p className="text-muted">My Core Technologies & Strengths</p>
      </div>

      <div className="row">
        {/* Tech Stack */}
        <div className="col-md-12 mb-5">
          <h3 className="fw-semibold text-dark mb-4">Tech Stack</h3>
          <div className="row row-cols-2 row-cols-sm-6 g-3">
            {techSkills.map((tech, i) => (
              <div key={i} className="col text-center">
                <div
                  className="border rounded-4 p-3 bg-white h-100 d-flex flex-column align-items-center justify-content-center shadow-sm hover-shadow"
                  style={{
                    transition: "transform 0.2s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <div className="fs-3 mb-2">{tech.icon}</div>
                  <small className="text-muted">{tech.name}</small>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="col-md-12">
          <h3 className="fw-semibold text-dark mb-4">Soft Skills</h3>
          <ul
            className="list-unstyled d-grid"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "0.75rem",
            }}
          >
            {softSkills.map((skill, i) => (
              <li
                key={i}
                className="d-flex align-items-center gap-2 bg-light rounded-3 px-3 py-2 shadow-sm"
                style={{ fontSize: "0.95rem" }}
              >
                <span
                  className="d-inline-block"
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: "#198754",
                  }}
                ></span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
