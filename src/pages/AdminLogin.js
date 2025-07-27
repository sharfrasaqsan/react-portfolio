import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { useData } from "../contexts/DataContext";
import { toast } from "react-toastify";
import { useAuth } from "../contexts/AuthContext";
import { doc, getDoc } from "firebase/firestore";

const AdminLogin = () => {
  const { email, setEmail, password, setPassword, navigate, loading } =
    useData();
  const { setUser } = useAuth();

  const [btnLoading, setBtnLoading] = useState(false);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status"></div>
      </div>
    );
  }

  const handleAdminLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long.");
      return;
    }

    setBtnLoading(true);
    try {
      // Authenticate user
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email.toLowerCase(),
        password
      );
      const user = userCredential.user;

      // get User from Firestore
      const fetchCurrentUser = await getDoc(doc(db, "admin", user.uid));

      if (!fetchCurrentUser.exists()) {
        toast.error("User not found form firestore");
        return;
      }

      setUser(fetchCurrentUser.data());
      setEmail("");
      setPassword("");
      toast.success("Login successful");
      navigate("/admin");
    } catch (err) {
      toast.error("Login failed: " + err.message);
    } finally {
      setBtnLoading(false);
    }
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center min-vh-100"
      style={{
        background: "linear-gradient(135deg, #6b73ff 0%, #000dff 100%)",
        color: "white",
        padding: "1rem",
      }}
    >
      {/* Optional logo */}
      <div className="mb-4 text-center">
        {/* Replace with your logo image if you want */}
        <svg
          width="64"
          height="64"
          fill="white"
          className="mb-2"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0zM6.93 11.412l4.95-4.95-1.414-1.414-3.536 3.536L4.535 7.535 3.12 8.95z" />
        </svg>
        <h1 className="h3 fw-bold">Sharfras' Portfolio</h1>
        <p className="text-light">Admin Access</p>
      </div>

      <form
        onSubmit={handleAdminLogin}
        className="bg-white p-5 rounded shadow"
        style={{ width: "100%", maxWidth: "400px", color: "#333" }}
      >
        <h3 className="mb-4 text-center">Admin Login</h3>

        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-semibold">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label fw-semibold">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100 mb-3"
          style={{ fontWeight: "600" }}
          disabled={btnLoading}
        >
          {btnLoading ? (
            <>
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              ></span>
              Login...
            </>
          ) : (
            "Login"
          )}
        </button>

        <div className="text-center">
          <a
            href="/forgot-password"
            style={{ fontWeight: "600" }}
            className="small text-decoration-none text-primary"
          >
            Forgot password?
          </a>
        </div>
      </form>

      <footer
        className="mt-4 text-center text-white-50 small"
        style={{ maxWidth: "400px" }}
      >
        © 2025 Sharfras —{" "}
        <a
          href="mailto:your-email@example.com"
          className="text-white text-decoration-none"
        >
          Contact Me
        </a>
      </footer>
    </div>
  );
};

export default AdminLogin;
