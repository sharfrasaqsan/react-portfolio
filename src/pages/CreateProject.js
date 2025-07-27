import { toast } from "react-toastify";
import { useData } from "../contexts/DataContext";
import { format } from "date-fns";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";

const AddProject = () => {
  const { loading, project, setProject, projects, setProjects, navigate } =
    useData();

  const [btnLoading, setBtnLoading] = useState(false);

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
    const { name, value } = e.target;

    setProject((prev) => ({
      ...prev,
      [name]:
        name === "techStack"
          ? value.split(",").map((item) => item.trim()) // convert to array
          : name === "isFeatured"
          ? value === "true"
          : value,
    }));
  };

  const handleCreateProject = async (e) => {
    e.preventDefault();

    if (!project) {
      toast.error("Please fill in all fields.");
      return;
    }

    setBtnLoading(true);
    try {
      const newProject = {
        ...project,
        createdAt: format(new Date(), "yyyy-MM-dd"),
      };

      const res = await addDoc(collection(db, "projects"), newProject);

      if (!res) {
        toast.error("Error creating project!");
        return;
      }

      setProjects([...projects, { id: res.id, ...newProject }]);
      toast.success("Project created successfully.");
      setProject({
        title: "",
        thumbnail: "",
        shortDescription: "",
        description: "",
        liveURL: "",
        githubURL: "",
        techStack: [],
        features: "",
        isFeatured: true,
      });
      navigate(`/project/${res.id}`);
    } catch (err) {
      toast.error("Error creating project: " + err.message);
    } finally {
      setBtnLoading(false);
    }
  };

  const cencelCreate = () => {
    navigate("/projects");
    toast.warning("Project creation canceled.");
    return;
  };

  return (
    <section className="bg-light py-5">
      <div className="container">
        <h2 className="mb-5 text-center fw-bold text-dark">Create Project</h2>

        <form
          className="row g-4 shadow-sm p-4 bg-white rounded"
          onSubmit={handleCreateProject}
        >
          <div className="col-md-6">
            <label className="form-label">Project Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              name="title"
              value={project.title || ""}
              onChange={handleProject}
              autoFocus
              required
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
              required
            />
          </div>

          <div className="col-md-12">
            <label className="form-label">Short Description</label>
            <textarea
              name="shortDescription"
              className="form-control"
              placeholder="Short Description"
              value={project.shortDescription || ""}
              onChange={handleProject}
              rows="3"
              style={{ resize: "none" }}
              required
            />
          </div>

          <div className="col-md-12">
            <label className="form-label">Full Description</label>
            <textarea
              name="description"
              className="form-control"
              placeholder="Description"
              value={project.description || ""}
              onChange={handleProject}
              rows="10"
              required
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
              value={project.techStack || []}
              onChange={handleProject}
              required
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
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Is Featured?</label>
            <select
              className="form-select"
              name="isFeatured"
              value={project.isFeatured || false}
              onChange={handleProject}
              required
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>

          <div className="col-12 text-center mt-4">
            <button
              type="submit"
              className="btn btn-primary px-5"
              disabled={btnLoading}
            >
              {btnLoading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Creating...
                </>
              ) : (
                "Create"
              )}
            </button>

            <button
              type="button"
              className="btn btn-danger ms-3 px-5"
              onClick={cencelCreate}
            >
              Cencel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddProject;
