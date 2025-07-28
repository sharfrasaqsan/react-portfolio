import React from "react";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  const experienceData = [
    {
      role: "Web Developer",
      company: "Oscar Wylee (Remote)",
      duration: "Sep 2022 – Present",
      points: [
        "Built and maintained Magento 2 and WordPress websites.",
        "Integrated React.js with RESTful APIs for dynamic features.",
        "Optimized performance and applied SEO best practices.",
        "Collaborated with cross-functional teams for brand consistency.",
      ],
    },
    {
      role: "Intern",
      company: "KINIT Pvt Ltd",
      duration: "Dec 2021 – Jun 2022",
      points: [
        "Built reusable components with React.js.",
        "Assisted with performance improvements and UX enhancement.",
      ],
    },
  ];

  return (
    <section className="container py-3" id="experience">
      <h4 className="text-center fw-bold text-dark mb-5">
        Professional Experience
      </h4>

      <div
        className="d-grid gap-4"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}
      >
        {experienceData.map((exp, index) => (
          <div
            key={index}
            className="p-4 rounded shadow-sm bg-white border-start border-4 border-primary"
          >
            <div className="d-flex align-items-center mb-2">
              <FaBriefcase className="me-2 text-primary" />
              <h5 className="fw-bold mb-0">
                {exp.role}
                <span className="fw-normal text-muted"> | {exp.company}</span>
              </h5>
            </div>
            <small className="text-muted d-block mb-2">{exp.duration}</small>
            <ul className="mb-0 ps-3">
              {exp.points.map((point, i) => (
                <li key={i} className="mb-1">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
