import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";
import { toast } from "react-toastify";
import { doc, getDoc } from "firebase/firestore";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const fetchCurrentUser = await getDoc(doc(db, "admin", user.uid));
          if (fetchCurrentUser.exists()) {
            setUser({ id: user.uid, ...fetchCurrentUser.data() });
          } else {
            setUser(null);
            toast.error("You are not authorized as admin.");
          }
          setUser(null);
          setLoading(false);
        } catch (error) {
          toast.error("Failed to fetch user", error.message);
        } finally {
          setLoading(false);
        }
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
