import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { toast } from "react-toastify";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [admin, setAdmin] = useState([]);
  const [projects, setProjects] = useState([]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [project, setProject] = useState({
    title: "",
    thumbnail: "",
    shortDescription: "",
    description: "",
    liveURL: "",
    githubURL: "",
    techStack: [],
    features: "",
    createdAt: "",
    updatedAt: "",
    isFeatured: true,
  });
  const [editProject, setEditProject] = useState({
    title: "",
    thumbnail: "",
    shortDescription: "",
    description: "",
    liveURL: "",
    githubURL: "",
    techStack: [],
    features: "",
    updatedAt: "",
    isFeatured: true,
  });

  const [loading, setLoading] = useState(true);
  const [btnLoading, setBtnLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const res = await getDocs(collection(db, "admin"));
        const resData = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAdmin(resData);
      } catch (err) {
        toast.error("Error fetching admin data: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAdmin();
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await getDocs(collection(db, "projects"));
        const resData = res.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProjects(resData);
      } catch (err) {
        toast.error("Error fetching projects data: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

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
    <DataContext.Provider
      value={{
        admin,
        projects,
        setProjects,
        email,
        setEmail,
        password,
        setPassword,
        project,
        setProject,
        editProject,
        setEditProject,
        loading,
        navigate,
        btnLoading,
        setBtnLoading,
        handleProjectDelete,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
