import React from "react";

const Certifications = () => {
  const certifications = [
    {
      title: "Intro to Front-End Development",
      issuer: "Coursera (Meta)",
      year: 2023,
      link: "https://www.coursera.org/account/accomplishments/certificate/RLQUSVH6U6VU",
    },
    {
      title: "Web Design for Beginners",
      issuer: "University of Morattuwa",
      year: 2023,
      link: "https://open.uom.lk/mod/customcert/view.php?id=697&downloadown=1",
    },
  ];

  return (
    <section className="py-5" id="certifications">
      <div className="container">
        <h4 className="mb-5 text-center fw-bold text-dark">Certifications</h4>
        <ul className="list-group">
          {certifications.map((cert, idx) => (
            <li key={idx} className="list-group-item">
              <strong>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-black"
                >
                  {cert.title}
                </a>
              </strong>{" "}
              — {cert.issuer} ({cert.year})
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
