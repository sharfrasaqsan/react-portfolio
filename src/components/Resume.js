import { FaDownload } from "react-icons/fa";

const Resume = () => {
  return (
    <a
      href="../assets/Mohamed Sharfiras-CV.pdf"
      className="btn btn-primary"
      Download
    >
      <FaDownload className="me-2" />
      Download CV
    </a>
  );
};

export default Resume;
