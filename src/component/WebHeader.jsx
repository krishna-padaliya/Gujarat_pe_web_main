import { Link, useLocation } from "react-router-dom";
import "../assets/css/Header.css";
import logo from "../assets/logo/Gujarat_pe_Logo.png";

function Navbar() {
  const location = useLocation(); // Get current location

  const scrollToSection = (sectionId) => {
    if (location.pathname === "/") {
      // If on the home page, scroll to the section
      document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    } else {
      // If on a different page, navigate to the home page and scroll to the section
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <div>
      <div className="container-fluid shadow-sm rounded">
        <nav className="navbar navbar-expand-lg m-0 p-2">
          {/* Logo link to scroll back to the top */}
          <Link className="navbar-brand ps-3" to="/">
            <img src={logo} alt="Gujarat Pe Logo" width="120px" />
          </Link>

          {/* Navbar toggler for mobile */}
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

          {/* Collapsible navbar content */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 pe-3">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link"
                  onClick={() => scrollToSection("about")}
                  style={{ cursor: "pointer" }}
                >
                  About
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link"
                  onClick={() => scrollToSection("services")}
                  style={{ cursor: "pointer" }}
                >
                  Services
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link"
                  onClick={() => scrollToSection("service_provider")}
                  style={{ cursor: "pointer" }}
                >
                  Service Provider
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link"
                  onClick={() => scrollToSection("contact")}
                  style={{ cursor: "pointer" }}
                >
                  Contact Us
                </span>
              </li>
            </ul>
            <form>
              <Link class="btn" to="/login" id="nav-login">
                Login
              </Link>
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
