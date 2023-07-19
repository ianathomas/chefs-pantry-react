import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    // This is the navbar, it contains links to the various different pages of the site

    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#navbar-style">
          Chef's Pantry
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            {/* This part of the navbar has special functionality. 
          This block of code checks to see if someone is logged in.
          If someone is logged in, or once someone logs in, the "Signup" and "Login" buttons will dissappear.
          This helps reassure the user that they are in fact, logged in */}

            {localStorage.jwt === undefined ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <LogoutLink />
              </li>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Ingredients
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/my_pantry_items">
                My Pantry
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Cuisine
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    American
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Italian
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Phillipino
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
