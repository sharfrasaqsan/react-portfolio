import { useParams, Link } from "react-router-dom";
import { useData } from "../contexts/DataContext";
import { FaArrowLeft } from "react-icons/fa6";

const ProjectDetails = () => {
  const { projects, loading } = useData();
  const { id } = useParams();

  if (loading) return <p className="text-center mt-5">Loading...</p>;
  if (!id || projects.length === 0)
    return <p className="text-center mt-5">Project not found</p>;

  const project = projects.find((p) => String(p.id) === id);
  if (!project) return <p className="text-center mt-5">Project not found</p>;

  return (
    <section className="container py-5">
      <Link
        to="/projects"
        className="btn btn-outline-secondary mb-4 d-inline-flex align-items-center gap-2"
      >
        <FaArrowLeft /> Back to Projects
      </Link>

      <article>
        <h3 className="mb-4 fw-bold text-center">{project.title}</h3>

        {project.thumbnail && (
          <img
            src={project.thumbnail}
            alt={`Preview of ${project.title}`}
            className="mb-4 rounded shadow"
            style={{
              width: "100%",
              maxHeight: "450px",
              objectFit: "cover",
            }}
          />
        )}

        {project.description && (
          <section className="mb-4">
            <h5 className="fw-semibold">Description:</h5>
            {project.description.split("\n").map((para, idx) => (
              <p
                key={idx}
                style={{ textAlign: "justify", whiteSpace: "pre-line" }}
              >
                {para}
              </p>
            ))}
          </section>
        )}

        {project.features && (
          <section className="mb-4">
            <h5 className="fw-semibold">Features:</h5>
            <ol className="ps-3 ms-3">
              {project.features.split("\n").map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ol>
          </section>
        )}

        {project.techStack && (
          <section className="mb-4">
            <h5 className="fw-semibold">Tech Stack:</h5>
            <ul className="ps-3 ms-3">
              {project.techStack.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </ul>
          </section>
        )}

        <div className="d-flex flex-wrap gap-3">
          {project.liveURL && (
            <a
              href={project.liveURL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary flex-fill"
              aria-label={`Live demo of ${project.title}`}
            >
              Live Demo
            </a>
          )}

          {project.githubURL && (
            <a
              href={project.githubURL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary flex-fill"
              aria-label={`GitHub repository of ${project.title}`}
            >
              GitHub Repo
            </a>
          )}
        </div>
      </article>
    </section>
  );
};

export default ProjectDetails;
