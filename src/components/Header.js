import { useAuth } from "../contexts/AuthContext";
import Lougout from "./Logout";

const Header = () => {
  const { user } = useAuth();

  return <div>{user ? <Lougout /> : null}</div>;
};

export default Header;
