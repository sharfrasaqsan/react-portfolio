import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  if (!project) return <p className="text-center mt-5">Project not found!</p>;

  return (
    <>
      <section className="card bg-white shadow h-100 rounded-4 overflow-hidden border-0 d-flex flex-column">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="card-img-top"
          style={{ objectFit: "cover", height: "200px" }}
        />
        <div className="card-body d-flex flex-column">
          <Link
            to={`/project/${project.id}`}
            className="text-decoration-none text-dark"
          >
            <h5 className="card-title fw-semibold mb-2">{project.title}</h5>
            <p className="card-text text-secondary flex-grow-1">
              {project.shortDescription}
            </p>
            <p className="fst-italic text-muted small mb-4">
              {project.techStack}
            </p>
          </Link>

          <div className="d-flex gap-2 mt-auto">
            <a
              href={project.liveURL}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary w-100"
            >
              Live Demo
            </a>
            <a
              href={project.githubURL}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-primary w-100"
            >
              Github Repo
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectCard;
