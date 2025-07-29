import { useData } from "../contexts/DataContext";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const AdminPanel = () => {
  const { projects, loading, handleProjectDelete } = useData();

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

  if (projects.length === 0) {
    return <p className="text-center mt-5">No projects to show!</p>;
  }

  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Admin Panel</h2>
        <p className="text-muted">Dashboard Interface for Managing Content</p>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Projects</h3>
        <Link to="/admin/create-project" className="btn btn-success">
          + Add Project
        </Link>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered align-middle">
          <thead className="table-light">
            <tr>
              <th>Title</th>
              <th>Featured</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {[...projects].reverse().map((project) => (
              <tr key={project.id}>
                <td>
                  <Link
                    to={`/project/${project.id}`}
                    className="text-decoration-none"
                  >
                    {project.title}
                  </Link>
                </td>
                <td>{project.techStack}</td>
                <td className="text-center">
                  <div className="d-flex justify-content-center gap-2">
                    <Link
                      to={`/admin/project/edit/${project.id}`}
                      className="btn btn-sm btn-outline-warning d-flex align-items-center justify-content-center"
                      title="Edit Project"
                      aria-label="Edit Project"
                    >
                      <FaRegEdit />
                    </Link>

                    <button
                      type="button"
                      className="btn btn-sm btn-outline-danger d-flex align-items-center justify-content-center"
                      title="Delete Project"
                      aria-label="Delete Project"
                      onClick={() => handleProjectDelete(project.id)}
                    >
                      <MdDeleteOutline />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdminPanel;
