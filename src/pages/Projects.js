import ProjectCard from "../components/ProjectCard";
import { useData } from "../contexts/DataContext";

const Projects = () => {
  const { projects, loading } = useData();

  if (loading) {
    return (
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="mb-5 text-center fw-bold text-dark">My Projects</h2>
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

  if (projects.length === 0)
    return <p className="text-center mt-5">No projects to show!</p>;

  return (
    <section className="bg-light py-5">
      <div className="container">
        <h2 className="mb-5 text-center fw-bold text-dark">My Projects</h2>
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
