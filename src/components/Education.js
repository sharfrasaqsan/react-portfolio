import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      degree:
        "BICT (Hons) – Bachelor of Information and Communication Technology",
      specialization: "Software Systems",
      university: "University of Kelaniya",
      duration: "2018 – 2022",
      gpa: "3.14 (Second Class)",
    },
  ];

  return (
    <section className="py-4">
      <div className="container" id="education">
        <h4 className="text-center fw-bold text-dark mb-5">Education</h4>

        <div
          className="d-grid gap-4"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="p-4 rounded shadow-sm bg-white border-start border-4 border-success"
            >
              <div className="d-flex align-items-center mb-2">
                <FaGraduationCap className="me-2 text-success" />
                <h5 className="fw-bold mb-0">
                  {edu.degree}
                  <span className="fw-normal text-muted">
                    {" "}
                    | {edu.university}
                  </span>
                </h5>
              </div>
              <small className="text-muted d-block mb-1">
                {edu.duration} | GPA: {edu.gpa}
              </small>
              <p className="mb-2 text-muted fst-italic">
                Specialization: {edu.specialization}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
