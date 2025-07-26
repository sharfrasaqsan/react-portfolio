import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import { useAuth } from "../contexts/AuthContext";
import { useData } from "../contexts/DataContext";
import { useState } from "react";

const Logout = () => {
  const { navigate } = useData();
  const { setUser } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logout successful.");
      setUser(null);
      navigate("/login");
    } catch (err) {
      toast.error("Error logging out: " + err.message);
    }
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
