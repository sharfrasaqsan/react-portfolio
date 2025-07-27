import { useParams } from "react-router-dom";
import { useData } from "../contexts/DataContext";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { format } from "date-fns";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const EdifProject = () => {
  const {
    projects,
    setProjects,
    editProject,
    setEditProject,
    loading,
    navigate,
  } = useData();

  const { id } = useParams();

  const [btnLoading, setBtnLoading] = useState(false);

  const project = projects.find((p) => String(p.id) === id);

  useEffect(() => {
    if (project) {
      setEditProject({
        title: project.title,
        thumbnail: project.thumbnail,
        shortDescription: project.shortDescription,
        description: project.description,
        liveURL: project.liveURL,
        githubURL: project.githubURL,
        techStack: project.techStack,
        features: project.features,
        isFeatured: project.isFeatured,
      });
    }
  }, [project, setEditProject]);

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

    setEditProject((prev) => ({
      ...prev,
      [name]:
        name === "techStack"
          ? value.split(",").map((item) => item.trim())
          : name === "isFeatured"
          ? value === "true"
          : value,
    }));
  };

  const handleEditProject = async (id) => {
    setBtnLoading(true);
    try {
      const updatedProject = {
        ...editProject,
        updatedAt: format(new Date(), "yyyy-MM-dd"),
      };

      await updateDoc(doc(db, "projects", id), updatedProject);
      setProjects(
        projects.map((p) => (p.id === id ? { ...p, ...updatedProject } : p))
      );

      toast.success("Project updated successfully.");
      setEditProject({
        title: "",
        thumbnail: "",
        shortDescription: "",
        description: "",
        liveURL: "",
        githubURL: "",
        techStack: "",
        features: "",
        isFeatured: true,
      });
      navigate(`/project/${id}`);
    } catch (err) {
      toast.error("Error updating project: " + err.message);
    } finally {
      setBtnLoading(false);
    }
  };

  const cencelUpdate = () => {
    navigate(`/project/${id}`);
    toast.warning("Project update canceled.");
    return;
  };

  return (
    <section className="bg-light py-5">
      <div className="container">
        <h2 className="mb-5 text-center fw-bold text-dark">Edit Project</h2>

        <form className="row g-4 shadow-sm p-4 bg-white rounded">
          <div className="col-md-6">
            <label className="form-label">Project Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              name="title"
              value={editProject.title || ""}
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
              value={editProject.thumbnail || ""}
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
              value={editProject.shortDescription || ""}
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
              value={editProject.description || ""}
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
              value={editProject.liveURL || ""}
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
              value={editProject.githubURL || ""}
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
              value={editProject.techStack || []}
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
              value={editProject.features || ""}
              onChange={handleProject}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Is Featured?</label>
            <select
              className="form-select"
              name="isFeatured"
              value={editProject.isFeatured || false}
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
              onClick={() => handleEditProject(project.id)}
            >
              {btnLoading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Updating...
                </>
              ) : (
                "Update"
              )}
            </button>

            <button
              type="button"
              className="btn btn-danger ms-3 px-5"
              onClick={cencelUpdate}
            >
              Cencel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EdifProject;
