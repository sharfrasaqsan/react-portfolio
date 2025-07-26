import { useData } from "../contexts/DataContext";

const AddProject = () => {
  const { loading, project, setProject } = useData();

  if (project?.length === 0)
    return <p className="text-center mt-5">No projects to show!</p>;

  if (loading) {
    return (
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="mb-5 text-center fw-bold text-dark">Create Project</h2>
          <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="spinner-border text-primary" role="status"></div>
          </div>
        </div>
      </section>
    );
  }

  const handleProject = (e) => {
    setProject({
      ...project,
      [e.target.name]: [e.target.value],
    });
  };

  return (
    <section className="bg-light py-5">
      <div className="container">
        <h2 className="mb-5 text-center fw-bold text-dark">Create Project</h2>

        <form>
          <label htmlFor="project-title">Project Title</label>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={project.title}
            onChange={handleProject}
            onFocus
          />

          <label htmlFor="project-title">Project Thumbnail</label>
          <input
            type="text"
            placeholder="Thumbnail URL"
            name="thumbnail"
            value={project.thumbnail}
            onChange={handleProject}
          />

          <input
            type="text"
            placeholder="Short Description"
            name="shortDescription"
            value={project.shortDescription}
            onChange={handleProject}
          />
          <input type="text" placeholder="Description" />
          <input type="text" placeholder="Live URL" />
          <input type="text" placeholder="GitHub URL" />
          <input type="text" placeholder="Tech Stack" />
          <input type="text" placeholder="Features" />
        </form>
      </div>
    </section>
  );
};

export default AddProject;
