import { useAuth } from "../contexts/AuthContext";

export const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div
        style={{
          display: "flex",
          height: "80vh",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "20px",
          fontFamily: "Arial, sans-serif",
          color: "#b22222",
          backgroundColor: "#ffe6e6",
          borderRadius: "8px",
          margin: "40px auto",
          maxWidth: "400px",
          boxShadow: "0 0 10px rgba(178, 34, 34, 0.3)",
        }}
      >
        <p style={{ fontSize: "1.25rem", lineHeight: "1.5" }}>
          You must be <strong>logged in</strong> to access this page.
        </p>
      </div>
    );
    // Or replace with: return <Navigate to="/login" replace />;
  }

  return children;
};
