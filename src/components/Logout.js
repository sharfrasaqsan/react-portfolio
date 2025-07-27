import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import { useAuth } from "../contexts/AuthContext";
import { useData } from "../contexts/DataContext";
import { useState } from "react";

const Logout = () => {
  const { navigate } = useData();
  const { setUser } = useAuth();
  const [btnLoading, setBtnLoading] = useState(false);

  const handleLogout = async () => {
    setBtnLoading(true);
    try {
      await signOut(auth);
      toast.success("Logout successful.");
      setUser(null);
      navigate("/login");
    } catch (err) {
      toast.error("Error logging out: " + err.message);
    } finally {
      setBtnLoading(false);
    }
  };

  return (
    <>
      <button
        type="submit"
        className="btn btn-primary mb-3"
        style={{ fontWeight: "600" }}
        disabled={btnLoading}
        onClick={handleLogout}
      >
        {btnLoading ? (
          <>
            <span
              className="spinner-border spinner-border-sm me-2"
              role="status"
              aria-hidden="true"
            ></span>
            Logging out...
          </>
        ) : (
          "Logout"
        )}
      </button>
    </>
  );
};

export default Logout;
