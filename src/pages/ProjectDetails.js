import { useParams, Link } from "react-router-dom";
import { useData } from "../contexts/DataContext";
import { FaArrowLeft } from "react-icons/fa6";
import { useAuth } from "../contexts/AuthContext";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { toast } from "react-toastify";
import { useState } from "react";

const ProjectDetails = () => {
  const { projects, setProjects, loading, navigate } = useData();
  const { user } = useAuth();
  const { id } = useParams();

  const [btnLoading, setBtnLoading] = useState(false);

  if (loading) return <p className="text-center mt-5">Loading...</p>;
  if (!id || projects.length === 0)
    return <p className="text-center mt-5">Project not found</p>;

  const project = projects.find((p) => String(p.id) === id);
  if (!project) return <p className="text-center mt-5">Project not found</p>;

  const handleProjectDelete = async (projectId) => {
    setBtnLoading(true);
    try {
      await deleteDoc(doc(db, "projects", projectId));
      setProjects(projects.filter((project) => project.id !== projectId));
      toast.success("Project deleted successfully.");
      navigate("/projects");
    } catch (error) {
      toast.error("Error deleting project.");
    } finally {
      setBtnLoading(false);
    }
  };

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
            <ul className="ps-3 ms-3">{project.techStack}</ul>
          </section>
        )}

        <div className="d-flex flex-wrap gap-5">
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

          {user && (
            <>
              <Link
                to={`/project/${project.id}/edit`}
                className="d-flex text-decoration-none flex-fill"
              >
                <button type="button" className="btn btn-warning flex-fill ">
                  Edit
                </button>
              </Link>

              <button
                type="button"
                className="btn btn-danger flex-fill"
                disabled={loading}
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
