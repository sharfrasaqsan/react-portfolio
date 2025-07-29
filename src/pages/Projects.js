import ProjectCard from "../components/ProjectCard";
import { useData } from "../contexts/DataContext";

const Projects = () => {
  const { projects, loading } = useData();

  if (loading) {
    return (
      <section className="bg-light py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">My Projects</h2>
          <p className="text-muted">
            Bringing Ideas to Life with Clean, Scalable Code
          </p>
        </div>

        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "50vh" }}
        >
          <div className="spinner-border text-primary" role="status"></div>
        </div>
      </section>
    );
  }

  if (projects.length === 0)
    return <p className="text-center mt-5">No projects to show!</p>;

  return (
    <section className="bg-light py-5 mb-3">
      <div className="text-center mb-5">
        <h2 className="fw-bold">My Projects</h2>
        <p className="text-muted">
          Bringing Ideas to Life with Clean, Scalable Code
        </p>
      </div>

      <div className="container">
        <div className="row g-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="col-sm-12 col-md-6 col-lg-4 d-flex"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
