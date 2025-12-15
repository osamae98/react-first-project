import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg py-4">
      <div className="container d-flex justify-content-between">
        
        <NavLink
          className="navbar-brand text-uppercase text-light fs-2 fw-bolder"
          to="/"
        >
          start Framework
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse fw-bold" id="navbarText">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            <li className="nav-item text-uppercase me-3">
              <NavLink
                to="/about"
                className="nav-link text-light"
              >
                about
              </NavLink>
            </li>

            <li className="nav-item text-uppercase me-3">
              <NavLink
                to="/portfolio"
                className="nav-link text-light"
              >
                portfolio
              </NavLink>
            </li>

            <li className="nav-item text-uppercase me-3">
              <NavLink
                to="/contact"
                className="nav-link text-light"
              >
                contact
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
