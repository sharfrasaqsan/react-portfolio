import { useAuth } from "../contexts/AuthContext";

export const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) return <p>You must to be logged in to access this page</p>;

  return user ? children : null;
};
