import { useParams, Link } from "react-router-dom";
import { useData } from "../contexts/DataContext";
import { FaArrowLeft } from "react-icons/fa6";
import { useAuth } from "../contexts/AuthContext";

const ProjectDetails = () => {
  const { projects, loading, btnLoading, handleProjectDelete } = useData();
  const { user } = useAuth();
  const { id } = useParams();

  if (loading) {
    return (
      <section className="bg-light py-5">
        <div className="container">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "50vh" }}
          >
            <div className="spinner-border text-primary" role="status"></div>
          </div>
        </div>
      </section>
    );
  }

  if (!id || projects.length === 0)
    return <p className="text-center mt-5">Project not found</p>;

  const project = projects.find((p) => String(p.id) === id);
  if (!project) return <p className="text-center mt-5">Project not found</p>;

  return (
    <section className="container py-4">
      <Link
        to="/projects"
        className="btn btn-outline-secondary mb-4 d-inline-flex align-items-center gap-2"
      >
        <FaArrowLeft /> Back to Projects
      </Link>

      <article className="bg-white p-4 rounded-4 shadow-sm border">
        <h3 className="mb-4 fw-bold text-center">{project.title}</h3>

        {project.thumbnail && (
          <div className="mb-4 text-center">
            <img
              src={project.thumbnail}
              alt={`Preview of ${project.title}`}
              className="img-fluid rounded shadow"
              style={{
                maxHeight: "450px",
                objectFit: "cover",
              }}
            />
          </div>
        )}

        {project.description && (
          <section className="mb-4">
            <h5 className="fw-semibold text-primary">Description:</h5>
            {project.description.split("\n").map((para, idx) => (
              <p
                key={idx}
                className="text-secondary"
                style={{ textAlign: "justify", whiteSpace: "pre-line" }}
              >
                {para}
              </p>
            ))}
          </section>
        )}

        {project.features && (
          <section className="mb-4">
            <h5 className="fw-semibold text-primary">Features:</h5>
            <ol className="ps-3 text-secondary">
              {project.features.split("\n").map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ol>
          </section>
        )}

        {project.techStack && (
          <section className="mb-4">
            <h5 className="fw-semibold text-primary">Tech Stack:</h5>
            <p className="text-secondary">
              {Array.isArray(project.techStack)
                ? project.techStack.join(", ")
                : project.techStack}
            </p>
          </section>
        )}

        <div className="d-flex flex-wrap gap-3 mt-4">
          {project.liveURL && (
            <a
              href={project.liveURL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary flex-fill"
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
            >
              GitHub Repo
            </a>
          )}

          {user && (
            <>
              <Link
                to={`/project/${project.id}/edit`}
                className="flex-fill text-decoration-none"
              >
                <button type="button" className="btn btn-warning w-100">
                  Edit
                </button>
              </Link>

              <button
                type="button"
                className="btn btn-danger flex-fill"
                disabled={btnLoading}
                onClick={() => handleProjectDelete(project.id)}
              >
                {btnLoading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Deleting...
                  </>
                ) : (
                  "Delete"
                )}
              </button>
            </>
          )}
        </div>
      </article>
    </section>
  );
};

export default ProjectDetails;
