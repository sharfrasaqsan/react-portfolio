import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import { useAuth } from "../contexts/AuthContext";
import { useData } from "../contexts/DataContext";

const Logout = () => {
  const { navigate } = useData();
  const { setUser } = useAuth();

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    window.location.reload();
    toast.success("Logout successful.");
    navigate("/");
  };

  return (
    <>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};

export default Logout;
