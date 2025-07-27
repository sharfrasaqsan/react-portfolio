import { useAuth } from "../contexts/AuthContext";
import Logout from "./Logout";
import { Link } from "react-router-dom";

const Header = () => {
  const { user } = useAuth();

  return (
    <header className="bg-white shadow-sm border-bottom">
      <div className="container py-3 d-flex justify-content-between align-items-center flex-wrap">
        <div className="d-flex align-items-center gap-3">
          <Link
            to="/"
            className="text-decoration-none"
            style={{ outline: "none" }}
          >
            <h1 className="h4 text-primary fw-bold mb-0">Mohamed Sharfiras</h1>
          </Link>
        </div>

        {user && (
          <div className="d-flex align-items-center gap-3">
            <Logout />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
