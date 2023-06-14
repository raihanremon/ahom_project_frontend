import { Link } from "react-router-dom";
import logo from "../logo.svg";

const Header = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg border-bottom">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="logo" width={40} height={40} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
              <li className="nav-item">
              <Link to="/" className="nav-link" >Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Meet the team
                </a>
              </li>
              <li className="nav-item">
              <Link to="/search" className="nav-link">Block Search</Link>
              </li>
              <li className="nav-item">
              <Link to="/login" className="nav-link"> Check Our Chain</Link>

              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
