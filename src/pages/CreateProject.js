import { useData } from "../contexts/DataContext";

const AddProject = () => {
  const { loading, project, setProject } = useData();

  if (loading) {
    return (
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="mb-5 text-center fw-bold text-dark">Create Project</h2>
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

  const handleProject = (e) => {
    setProject((prevProject) => ({
      ...prevProject,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="bg-light py-5">
      <div className="container">
        <h2 className="mb-5 text-center fw-bold text-dark">Create Project</h2>

        <form className="row g-4 shadow-sm p-4 bg-white rounded">
          <div className="col-md-6">
            <label className="form-label">Project Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              name="title"
              value={project.title || ""}
              onChange={handleProject}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Thumbnail URL</label>
            <input
              type="text"
              className="form-control"
              placeholder="Thumbnail URL"
              name="thumbnail"
              value={project.thumbnail || ""}
              onChange={handleProject}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Short Description</label>
            <input
              type="text"
              className="form-control"
              placeholder="Short Description"
              name="shortDescription"
              value={project.shortDescription || ""}
              onChange={handleProject}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Full Description</label>
            <input
              type="text"
              className="form-control"
              placeholder="Description"
              name="description"
              value={project.description || ""}
              onChange={handleProject}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Live URL</label>
            <input
              type="text"
              className="form-control"
              placeholder="Live URL"
              name="liveURL"
              value={project.liveURL || ""}
              onChange={handleProject}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">GitHub URL</label>
            <input
              type="text"
              className="form-control"
              placeholder="GitHub URL"
              name="githubURL"
              value={project.githubURL || ""}
              onChange={handleProject}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Tech Stack</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g., React, Firebase"
              name="techStack"
              value={project.techStack || ""}
              onChange={handleProject}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Features</label>
            <input
              type="text"
              className="form-control"
              placeholder="Key features"
              name="features"
              value={project.features || ""}
              onChange={handleProject}
            />
          </div>

          <div className="col-12 text-center mt-4">
            <button type="submit" className="btn btn-primary px-5">
              Create
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddProject;
