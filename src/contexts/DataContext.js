import { collection, getDocs } from "firebase/firestore";
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

  const [loading, setLoading] = useState(true);

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

  return (
    <DataContext.Provider
      value={{
        admin,
        projects,
        email,
        setEmail,
        password,
        setPassword,
        loading,
        navigate,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
