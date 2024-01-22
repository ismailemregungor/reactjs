import { Link, useNavigate } from "react-router-dom";
import Button from "../Button";
import Logo from "../Logo";

import "./index.scss";

const Navbar = () => {
  const navigate = useNavigate();

  const onClickLogo = () => {
    navigate("/");
  };

  return (
    <nav className="navbar">
      <Logo className="navbar-logo" onClick={onClickLogo} />
      <ul>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>
      </ul>
      <Button>Login</Button>
    </nav>
  );
};

export default Navbar;
