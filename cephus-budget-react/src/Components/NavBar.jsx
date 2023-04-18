import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/transactions">Transaction List</Link>
        </li>
        <li>
          <Link to="/transactions/new">New Transaction</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;